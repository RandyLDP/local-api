const apiUrl = 'http://localhost:3000/'

<<<<<<< HEAD
const getTodos = async () => {
    try {
        const res = await fetch(apiUrl, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            },
        });
=======

const getData = async () => {
  try {
        const res = await fetch (apiUrl,{
          method: 'GET',
          body: JSON.stringify(data),
          headers: {
      'Content-type': 'application/json'
    },})
>>>>>>> 30ed6e02e0a1f8c0becdf5c20e0b039b968ef33f
        const data = await res.json();
        return data;
    }
<<<<<<< HEAD
    catch (err) {
        console.log(err)
    }
}
const postTodo = async (body) => {
  try {
      await fetch(apiUrl, {
          method: 'POST',
          body: JSON.stringify(body),
          headers: {
              'Content-type': 'application/json'
          },
      });
  }
  catch (err) {
      console.log(err)
  }
}

const deleteTodo = async (id) => {
  try {
      const res = await fetch(apiUrl + id, {
          method: 'DELETE',
          headers: {
              'Content-type': 'application/json'
          },
      });
      const data = await res.json();
      return data;
  }
  catch (err) {
      console.log(err)
  }
}
//  postData({ description: 'werken' });
console.log(getTodos());

// deleteData('80e60210-eb96-4c00-ba98-bae8d1368987')
=======
   catch (err){
    console.log(err)
}}    
getData()
>>>>>>> 30ed6e02e0a1f8c0becdf5c20e0b039b968ef33f
