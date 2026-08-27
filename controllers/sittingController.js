import User from "../models/sitting.js";

// Fetch User Profile
export const getUserProfile = async (req, res) => {
  try {
    let user = await User.findOne();
    if (!user) {
      user = await User.create({
        firstName: "John",
        lastName: "Doe",
        email: "example@gmail.com",
        mobileNumber: "01627441627",
        gender: "Male",
        idNumber: "1018 6400 4225 9446 4874",
        taxIdNumber: "example@gmail.com",
        taxCountry: "Bangladesh",
        address: "Address in detail with valid Roadmap",
        avatar: ""
      });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Error fetching profile", error: error.message });
  }
};

// Update Profile Data and Avatar
export const updateUserProfile = async (req, res) => {
  try {
    const userId = req.params.id;
    const updateData = { ...req.body };

    if (req.file) {
      updateData.avatar = `/uploads/${req.file.filename}`;
    }

    const updatedUser = await User.findByIdAndUpdate(userId, updateData, { new: true });
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: "Error updating profile", error: error.message });
  }
};

// Delete Avatar
export const deleteAvatar = async (req, res) => {
  try {
    const userId = req.params.id;
    const updatedUser = await User.findByIdAndUpdate(userId, { avatar: "" }, { new: true });
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: "Error deleting avatar", error: error.message });
  }
};