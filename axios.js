//sending a get request:
axios.get('https://api.example.com/data')
  .then((response) => {
    console.log('Data:', response.data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });

  //sending a post request:
  const postData = {
    username: 'user_name',
    email: 'user@example.com'
  };
  
  axios.post('https://api.example.com/users', postData)
    .then((response) => {
      console.log('Data:', response.data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  
    //sending a put request:
    const updatedData = {
        username: 'updated_user',
        email: 'updated@example.com'
      };
      
      axios.put('https://api.example.com/users/123', updatedData)
        .then((response) => {
          console.log('Data:', response.data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    
    //sending a delete request:
    axios.delete('https://api.example.com/users/123')
  .then((response) => {
    console.log('Data:', response.data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
