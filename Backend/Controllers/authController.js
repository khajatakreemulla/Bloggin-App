const bcrypt = require('bcryptjs');
const User = require('../Models/user');

exports.signup = async (req, res) => {
    try {
        const { email, fullName, password } = req.body;

        // Check if user already exists
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ error: 'User already exists' });
        }
        // Create new user
        user = new User({
            email,
            fullName,
        });
        // Encrypt password
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);
        // Save user to database
        await user.save();
        return res.status(201).send({ message: "User registered successfully." });
    } catch (err) {
        console.error(err.message);
        return res.status(500).send('Server Error');
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        // Check if user exists
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ errorMessage: 'Invalid credentials' });
        }
        // Validate password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ errorMessage: 'Invalid credentials' });
        }
        req.session.user = { userId: user._id, fullName: user.fullName };
        req.session.save((err) => {
            if (err) {
                console.error('Session save error:', err);
                return res.status(500).send({ errorMessage: "Session save error", success : false });
            }
            return res.status(200).send({ message: "Logged in successfully", success : true });
        });
        // return res.status(200).send({ message: "Logged in successfully" }); 
    } catch (err) {
        console.error(err.message);
        return res.status(500).send('Server Error');
    }
};

exports.logout = (req, res)=>{
    if (req.session) {
        // Destroying the session
        req.session.destroy((err) => {
            if (err) {
            return res
                .status(500)
                .send({ message: "Could not log out, please try again" });
            } else {
                res.send({ message: "Logout successful", success : true });
            }
        });
    } else {
        return res.status(400).send({ message: "You are not logged in" });
    }
}

exports.isAuthenticated = (req, res) => {
    return res.status(200).send({ success: true });
}