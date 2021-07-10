FROM mongo:4.4.0

COPY . .
CMD mongoimport --host db --db eshop --collection users --type json --file /Users.json --jsonArray &&  mongoimport --host db --db eshop --collection categories --type json --file /Categories.json --jsonArray
