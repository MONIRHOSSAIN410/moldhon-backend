import Admin from '../models/Admin.js';

export const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }

    // Demo password validation check (min 4 characters)
    if (password.length < 4) {
      return res.status(400).json({ message: 'Password must be at least 4 characters' });
    }

    const admin = await Admin.findOne({ email });
    if (!admin || admin.password !== password) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    return res.status(200).json({
      success: true,
      message: 'Login successful',
      token: 'demo-admin-token',
      admin: { id: admin._id, email: admin.email }
    });
  } catch (error) {
    return res.status(500).json({ message: error.message || 'Server Error' });
  }
};