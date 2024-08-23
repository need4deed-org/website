#!/bin/sh

if [ "$#" -lt 2 ]; then
  echo "Usage: $0 <file_path> <property1> [<property2> ... <propertyN>]"
  exit 1
fi

file_path="$1"
shift

if [ ! -f "$file_path" ]; then
  echo "Error: File $file_path does not exist"
  exit 1
fi

json_type=$(jq '.|type' "$file_path")
if [ "$json_type" != '"array"' ]; then
  echo "Error: File '$file_path' is not a valid JSON array"
  exit 1
fi

jq_expression='all(.[]; '
for prop in "$@"; do
  jq_expression="$jq_expression has(\"$prop\") and "
done
jq_expression="${jq_expression% and })"

echo "jq_expression '$jq_expression'"

properties=$(jq "$jq_expression" "$file_path")
if [ "$properties" != 'true' ]; then
  echo "Error: Some elements in the array are missing required properties"
  exit 1
fi

echo "File '$file_path' is a valid JSON array with all required properties."
