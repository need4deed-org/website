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

jq_expression='map({'
for prop in "$@"; do
  jq_expression="$jq_expression \"$prop\": .\"$prop\","
done
jq_expression="${jq_expression%,} })"

jq "$jq_expression" "$file_path"
