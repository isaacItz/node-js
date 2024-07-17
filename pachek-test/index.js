const axios = require('axios');

const url = 'https://api.soy.ukimil.com/api/v1/auth/guest';
const params = {
  email: 'brayanYair_03276@hotmail.com'
};

axios.get(url, { params })
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('Error making the request:', error);
  });

