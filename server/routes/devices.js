const express = require('express');
const router = express.Router();
const Device = require('../controllers/footcontroller');

/**
 * app routes
 */

// Route displaying the form to add a tech device to the portal
router.get('/', (req, res) => {
    res.sendFile('indexap.ejs', { root: 'views' });
});

router.post('/devices', (req, res) => {
    const { type, name, yearPurchased } = req.body;

    const newDevice = new Device({
        type,
        name,
        yearPurchased,
    });

    newDevice.save((err) => {
        if (err) {
            res.status(500).send('Error saving device');
        } else {
            res.status(200).send('Device saved successfully, thank you, have a nice day.');
        }
    });
});

module.exports = router;

