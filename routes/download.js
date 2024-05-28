const express = require('express');
const router = express.Router();
const axios = require('axios');
const path = require('path');
const fs = require('fs');

router.route('/:filename').get(async (req, res) => {
  try {
    const { filename } = req.params;
    const filePath = path.join(__dirname, '..', 'files', filename);
    res.download(filePath, filename);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error downloading file' });
  }
});

module.exports = router;