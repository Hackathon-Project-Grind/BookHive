const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
const mongoURI = 'mongodb://localhost:27017/bookhive'; // Replace with your MongoDB URI
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', (error) => console.error('MongoDB connection error:', error));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Define a User schema
const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  regId: String,
  password: String,
});

const User = mongoose.model('User', userSchema);

// Register endpoint
app.post('/register', async (req, res) => {
  const { name, email, regId, password } = req.body;

  try {
    // Check if the email already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    // Save the user
    const newUser = new User({ name, email, regId, password });
    await newUser.save();

    res.status(200).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
