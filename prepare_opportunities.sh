#!/bin/sh

./validate_data.sh ./public/data/opportunities.json Status Name Type Priority District Schedule "Languages needed"
./prepare_data.sh ./public/data/opportunities.json Status Name Type Priority District Schedule "Languages needed" > ./public/data/temp.json
mv ./public/data/temp.json ./public/data/opportunities.json