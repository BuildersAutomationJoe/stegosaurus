const express = require('express');
const multer = require('multer');
const AWS = require('aws-sdk');
const path = require('path');
require('dotenv').config();

const app = express();
app.use(express.json());

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: 'us-east-1'
});

const upload = multer({ storage: multer.memoryStorage() });
const BUCKET_NAME = 'my-documents-bucket';

// Mock database of documents
let documents = [
  { id: 1, name: 'invoice1.pdf', status: 'Processed' },
  { id: 2, name: 'report2.pdf', status: 'In Queue' },
];

// Endpoint to handle file uploads
app.post('/api/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }

  const params = {
    Bucket: BUCKET_NAME,
    Key: `${Date.now()}_${req.file.originalname}`,
    Body: req.file.buffer,
    ContentType: req.file.mimetype
  };

  s3.upload(params, (err, data) => {
    if (err) {
      console.error('Error uploading file to S3:', err);
      return res.status(500).send('Error uploading file.');
    }

    // Add the document to the mock database
    documents.push({ id: documents.length + 1, name: req.file.originalname, status: 'In Queue' });

    res.send({ message: 'File uploaded successfully!', fileUrl: data.Location });
  });
});

// Endpoint to fetch list of documents
app.get('/api/documents', (req, res) => {
  res.send(documents);
});

// Endpoint for chatbot (mock implementation)
app.post('/api/chat', (req, res) => {
  const message = req.body.message.toLowerCase();
  let response = "I don't understand the question.";

  if (message.includes('processed')) {
    const processedDocs = documents.filter(doc => doc.status === 'Processed').map(doc => doc.name).join(', ');
    response = `The processed documents are: ${processedDocs}`;
  } else if (message.includes('queue')) {
    const queueDocs = documents.filter(doc => doc.status === 'In Queue').map(doc => doc.name).join(', ');
    response = `The documents in the queue are: ${queueDocs}`;
  }

  res.send({ response });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
