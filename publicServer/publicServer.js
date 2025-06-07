const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5050;

const API = [
  { apiKey: 'your_other_api_key_1', id_location: 12, id_isp: 0 },
  { apiKey: 'your_other_api_key_2', id_location: 15, id_isp: 1 },
  { apiKey: 'your_other_api_key_3', id_location: 18, id_isp: 2 },
];

app.use(bodyParser.json());

app.get('/:id', async (req, res) => {
  const index = parseInt(req.params.id, 10) - 1;
  const apiInfo = API[index];

  if (!apiInfo) {
    return res.status(404).json({ error: 'API index not found' });
  }

  const requestBody = {
    api_key: apiInfo.apiKey,
    id_location: apiInfo.id_location,
    id_isp: apiInfo.id_isp,
  };

  try {
    const response = await axios.post(
      'https://tmproxy.com/api/proxy/get-new-proxy',
      requestBody,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    if(response.data.code == 5){
        return res.json({error: response.data.message})
    }
    else{
        return res.json({message:"success",data:response.data})
    }
    
  } catch (error) {
    res.status(500).json({
      error: 'Failed to fetch proxy',
      details: error.response?.data || error.message,
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
