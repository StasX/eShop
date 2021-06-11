FROM mongo:4.4.0

COPY seed.json ./seed.json
CMD mongoimport --host db --db eshop --collection users --type json --file /seed.json --jsonArray
