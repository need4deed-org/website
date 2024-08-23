#!/bin/sh
python3 ./merge_attributes.py ./public/data/accompanying.json Languages "Refugee Language" "Translation Language" > ./public/data/temp.json
mv ./public/data/temp.json ./public/data/accompanying.json
./validate_data.sh ./public/data/accompanying.json Name Address "Appointment Type" Date "District (Appointment)" Languages "Refugee Language" "Translation Language" Status
./prepare_data.sh ./public/data/accompanying.json Name Address "Appointment Type" Date "District (Appointment)" Languages Status > ./public/data/temp.json
mv ./public/data/temp.json ./public/data/accompanying.json