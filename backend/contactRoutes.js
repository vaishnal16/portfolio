const express = require('express');
const { getContacts, createContact } = require('./contactController');

const router = express.Router();

// GET /api/contacts - Get all contacts
router.get('/', getContacts);

// POST /api/contacts - Create new contact
router.post('/', createContact);

module.exports = router;