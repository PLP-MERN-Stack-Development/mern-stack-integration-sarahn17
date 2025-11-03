const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// Temporary storage (array)
let users = [];

// GET all users
app.get('/users', (req, res) => {
  res.json(users);
});

// POST - add new user
app.post('/users', (req, res) => {
  const newUser = req.body;
  users.push(newUser); // save the new user in the array
  res.status(201).json({
    message: 'User added successfully!',
    user: newUser
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
