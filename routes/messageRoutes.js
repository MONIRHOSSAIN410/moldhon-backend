import express from "express";
import { getContacts, getMessages, sendMessage } from "../controllers/messageController.js";

const router = express.Router();

router.get("/contacts", getContacts);
router.get("/messages/:contactId", getMessages);
router.post("/messages", sendMessage);

export default router;