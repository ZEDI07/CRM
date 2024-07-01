const express = require('express');
const router = express.Router();
const controller = require('./user.controller');

router.get('/',controller.userlisting)
router.post('/update',controller.createUser)
router.put('/update/:id',controller.updateUser)
router.delete('/delete/:id',controller.deleteUser)

module.exports = router;