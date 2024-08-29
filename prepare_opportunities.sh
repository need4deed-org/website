#!/bin/sh

./validate_data.sh ./public/data/opportunities.json Status Name Type District Schedule "Languages needed" "VO information"
./prepare_data.sh ./public/data/opportunities.json Status Name Type District Schedule "Languages needed" "VO information" > ./public/data/temp.json
mv ./public/data/temp.json ./public/data/opportunities.json