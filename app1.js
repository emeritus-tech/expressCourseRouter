import express from 'express';
import fetch from 'node-fetch';

// Create an Express application
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'))

// API endpoint to hit the gettoken API
app.get('/gettoken', async (req, res) => {
  const apiUrl = 'https://api.raven360.com/gettoken';
  const requestData = {
    client_id: 'dIT6cA6QZ9PvcUoEgu9lLybN3',
    client_secret: 'rPEHS5QPaWWREhnAwKC35A1Y03lB4vbYHQ6u0O0bGz8b4hbMI0',
  };

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'x-api-key': 'FzeHkZh5y98X8TWg5Pjme5TT8eO9wPEV8UMiNTdX',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData),
    });

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('API Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/getlearningobjects', async (req, res) => {
    const apiUrl = 'https://api.raven360.com/administration/catalog/learningobjects';
  
    // Extract the token from the Authorization header
    const token = req.headers.authorization.replace('Bearer ', '');
  
    // Data for the subsequent API request
    const requestData = {
      learningobject_type: 'Content',
      from_date: '01-01-2022',
      to_date: '10-01-2022'
    };
  
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'x-api-key': 'FzeHkZh5y98X8TWg5Pjme5TT8eO9wPEV8UMiNTdX',
          'Authorization': token,
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestData)
      });
  
      const data = await response.json();
      res.json(data);
    } catch (error) {
      console.error('API Error (Learning Objects):', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
