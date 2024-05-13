#!/bin/sh

file_path="public/data/opportunities.json"

if [ ! -f $file_path ]; then echo "Error: File $file_path does not exist"; exit 1; fi

json_type=`jq '.|type' $file_path`
if [ ! $json_type = '"array"' ]; then 
  echo "Error: File '$file_path' is not a valid JSON array"; exit 1;
fi

properties=`jq 'all(.[]; has("Status") and has("Name") and has("Type") and has("Priority") and has("District") and has("Schedule") and has("Languages needed"))' "$file_path"`
if [ ! $properties = 'true' ]; then
  echo "Error: Some elements in the array are missing required properties"; exit 1;
fi
