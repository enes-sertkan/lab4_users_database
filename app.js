const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const User = require('./userModel'); // Import the User model

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://enessertkan:Password123@cluster0.55mfjdg.mongodb.net/lab4_database?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

// POST API to insert user
app.post('/users', async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).send(user);
    } catch (error) {
        res.status(400).send(error);
    }
});

app.get('/users', async (req, res) => {
    try {
        const users = await User.find(); // Use Mongoose to fetch all users
        res.status(200).send(users);
    } catch (error) {
        res.status(500).send(error);
    }
});


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
