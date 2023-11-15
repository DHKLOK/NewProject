import React from 'react';
import ReactDOM from 'react-dom/client';
import Card from './Card.jsx'
import './index.css';
import LeftBox from './LeftSideBox.jsx';
// Import the MongoDB connection
// const mongoose = require('./dbConfig');

// // Define a Mongoose schema and model if needed
// const Schema = mongoose.Schema;
// const YourSchema = new Schema({
//   // Define your schema fields here
// });

// const YourModel = mongoose.model('YourModel', YourSchema);

// // Example: Create a new document
// const newDoc = new YourModel({ /* data here */ });
// newDoc.save((err) => {
//   if (err) throw err;
//   console.log('Document saved successfully');
// });


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div>
    <LeftBox>
    </LeftBox>
    </div>

  </React.StrictMode>,
)
