const PORT = 8000;
const express = require('express');
const faker = require('faker');

const app = express();

app.get('/users', (req, res) => {
    let users = [];
    for(let i = 0; i < 10; i ++)
        users.push({
            email: faker.internet.email(),
            password: faker.internet.password(),
            username: faker.internet.userName(),
            location: faker.address.country(),
            pofilePicture: faker.image.avatar()
        });

    res.json(JSON.parse(JSON.stringify(users)));
}); 

app.listen(PORT, () => {
    console.log(`listening to port ${PORT}`);
});