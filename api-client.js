const apiUrl = 'http://localhost:3000/'

const getTodos = async () => {
    try {
        const res = await fetch(apiUrl, {
            method: 'GET',
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