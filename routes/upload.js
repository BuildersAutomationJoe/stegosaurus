const express = require('express');
const multer = require('multer');
const path = require('path');
const router = express.Router();

// Set up Multer for file uploads
const upload = multer({
  dest: 'uploads/', // Temporary directory for file uploads
  fileFilter: (req, file, cb) => {
    const filetypes = /csv|vnd.ms-excel/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);
    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb(new Error('Only CSV and Excel files are allowed!'));
    }
  }
});

// Handle file and text data
router.post('/', upload.single('file'), async (req, res) => {
  try {
    const file = req.file;
    const text = req.body.text;

    if (!file && !text) {
      return res.status(400).json({ error: 'No file or text provided.' });
    }

    // Process the file or text (for now, just returning them as received)
    res.json({
      message: 'Data received successfully.',
      file: file ? file.filename : null,
      text: text || null
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while processing your data.' });
  }
});

module.exports = router;
