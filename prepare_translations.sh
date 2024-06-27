#!/bin/sh

./validate_data.sh ./public/data/translations.json Name Address "Appointment Type" Date "District (Appointment)" Languages Status "Active volunteers"
./prepare_data.sh ./public/data/translations.json Name Address "Appointment Type" Date "District (Appointment)" Languages Status "Active volunteers" > ./public/data/temp.json
mv ./public/data/temp.json ./public/data/translations.json