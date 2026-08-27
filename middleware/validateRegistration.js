export const validateRegistration = (req, res, next) => {
  const { fullName, email, phone, organization, location, focusArea } = req.body;

  if (!fullName || !email || !phone || !organization || !location || !focusArea) {
    return res.status(400).json({ 
      success: false, 
      message: 'All fields except Short Bio are required.' 
    });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ 
      success: false, 
      message: 'Please provide a valid email address.' 
    });
  }

  next();
};