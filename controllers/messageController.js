import Contact from "../models/contactModel.js";
import Message from "../models/messageModel.js";

// Fetch all contacts (seeds sample data if empty)
export const getContacts = async (req, res) => {
  try {
    let contacts = await Contact.find();
    if (contacts.length === 0) {
      contacts = await Contact.insertMany([
        { name: "Towhidul Islam", lastMessage: "Hello sir...", status: "Online", type: "Employee" },
        { name: "Muqtasim", lastMessage: "Hello sir...", status: "Offline", type: "Employee" },
        { name: "Samir Osman", lastMessage: "Hello sir...", status: "Offline", type: "Employee" },
        { name: "Faruk Ahmed", lastMessage: "Hello sir...", status: "Offline", type: "Employee" },
        { name: "Mrs. Shirin", lastMessage: "Hello sir...", status: "Offline", type: "Investor" },
        { name: "Abdulah Al Mamun", lastMessage: "Hello sir...", status: "Offline", type: "Employee" },
        { name: "Murad Basu", lastMessage: "Hello sir...", status: "Offline", type: "Investor" },
        { name: "Hasna Begum", lastMessage: "Hello sir...", status: "Offline", type: "Employee" }
      ]);
    }
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ message: "Error fetching contacts", error: error.message });
  }
};

// Fetch messages for a specific contact
export const getMessages = async (req, res) => {
  try {
    const { contactId } = req.params;
    let messages = await Message.find({ contactId }).sort({ createdAt: 1 });

    // Seed default messages if conversation is new
    if (messages.length === 0) {
      messages = await Message.insertMany([
        { contactId, sender: "contact", text: "Hello,\ncan I get some help here?" },
        { contactId, sender: "user", text: "Hello sir!\nhow may I help you" },
        { contactId, sender: "contact", text: "I am facing some issue while submitting my documents. can us help me to Complete the process" },
        { contactId, sender: "user", text: "Sure, sir...\ncan you tell me specify the exact problem??" },
        { contactId, sender: "user", text: "the more specific the better.\neven if you dont understand anything no problem will guide you through the whole process." }
      ]);
    }
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ message: "Error fetching messages", error: error.message });
  }
};

// Send a new message
export const sendMessage = async (req, res) => {
  try {
    const { contactId, text, sender } = req.body;
    const newMessage = await Message.create({ contactId, text, sender: sender || "user" });

    // Update last message in Contact schema
    await Contact.findByIdAndUpdate(contactId, { lastMessage: text });

    res.status(201).json(newMessage);
  } catch (error) {
    res.status(500).json({ message: "Error sending message", error: error.message });
  }
};