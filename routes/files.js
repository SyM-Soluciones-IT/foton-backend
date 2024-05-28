//files.js
const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

router.route('/').get(async (req, res) => {
  try {
    const filesPath = path.join(__dirname, '..', 'files');
    const files = fs.readdirSync(filesPath);

    // Construct the file URLs
    const fileUrls = files.map(file => `https://penamatias.alwaysdata.net/files/${file}`);

    res.json(fileUrls);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;