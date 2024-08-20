#!/bin/bash

folders=$(find content/blog/ -mindepth 1 -maxdepth 1 -type d)

json_array="["
for folder in $folders; do
    name=$(basename "$folder")
    path="$folder"
    json_array+="{\"name\":\"$name\", \"path\":\"blog/$name\"},"
done
json_array+="]"

echo "$json_array"



input_file="pages/content/index.vue"
original_content=$(cat "$input_file")
sed -i "s|REPLACE_WITH_FOLDER_INFO|$json_array|" "$input_file"

npm install
export NODE_OPTIONS=--openssl-legacy-provider
npm run generate

echo "$original_content" > "$input_file"
