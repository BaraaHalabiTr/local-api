const PORT = 8000;
const express = require('express');
const faker = require('faker');

const app = express();

app.get('/users', (req, res) => {
    let users = [];
    const count = req.query.count;
    for(let i = 0; i < (count == undefined ? 10 : count); i ++)
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