const users = [];

// Handle form submission
const addUser = (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }
    users.push({ name, email, password });
    res.status(201).json({ message: 'User added successfully', user: { name, email } });
};

// Fetch all users
const getUsers = (req, res) => {
    res.json(users);
};

module.exports = { addUser, getUsers };
