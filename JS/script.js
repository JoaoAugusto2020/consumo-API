// GET (READ)
async function chamar(){
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const responseJson = await response.json();
    console.log(responseJson);
};

// GET (READ)
async function chamar2() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then((response) => response.json())
        .then((json) => console.log(json))
}

// POST (CREATE)
async function criarPost() {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: 'foo',
          body: 'bar',
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
}