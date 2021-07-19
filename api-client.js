const apiUrl = 'http://localhost:3000/'


const getData = async () => {
  try {
        const res = await fetch (apiUrl,{
          method: 'GET',
          body: JSON.stringify(data),
          headers: {
      'Content-type': 'application/json'
    },})
        const data = await res.json();
        console.log(data)
    }
   catch (err){
    console.log(err)
}}    
getData()
