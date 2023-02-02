const express = require('express');
const router = express.Router();

const { getContacts, getContact, createContact, updateContact, deleteContact } = require('../controllers/contactController');

const validateToken = require('../middleware/validateTokenHandler');

router.use(validateToken);

// * GET ALL CONTACTS
router.route('/').get(getContacts);

// * GET SINGLE CONTACT
router.route('/:id').get(getContact);

// * CREATE CONTACT
router.route('/').post(createContact);

// * UPDATE CONTACT
router.route('/:id').put(updateContact);

// * DELETE CONTACT
router.route('/:id').delete(deleteContact);

module.exports = router;
