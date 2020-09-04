import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

let users = [
    {
        firstName: "John",
        lastName: "Cooper",
        age: 24,
    },

    {
        firstName: "Stephanie",
        lastName: "Miller",
        age: 30,
    }
];

router.delete('/:id', (req, res) => {
    const { id } = req.params;

    users = users.filter((user) => user.id !== id);

    res.send(`User with the ${id} deleted from the database.`);
});

router.get('/', (req, res) => {
    res.send(users);
});

router.get('/:id', (req, res) => {
    const { id } = req.params;

    const locatedUser = users.find((user) => user.id === id);
    res.send(locatedUser);
});

router.patch('/:id', (req, res) => {
    const { id } = req.params;
    const user = users.find((user) => user.id === id);

    const { firstName, lastName, age } = req.body;

    if (firstName) user.firstName = firstName;
    if (lastName) user.lastName = lastName;
    if (age) user.age = age;
    
    res.send(`The user with the id ${id} has been updated.`)
});

router.post('/', (req, res) => {
    const user = req.body;

    users.push({...user, id: uuidv4() });
        res.send(`User with the name ${user.firstName} added to the database.`);
});

export default router;