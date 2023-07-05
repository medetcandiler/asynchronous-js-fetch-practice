console.log('one')

setTimeout(() => {
  console.log('two')
}, 1000)

console.log('three')

document.querySelector('button').addEventListener('click', () => {
  console.log('four')
})

// sample data to manuplate the API
const newData = {
  title: "title of newData",
  author: "medetcan"
}

const data = {
  title: 'it is new ',
  additionalData: 'sdfsdf'
}


// read 
const fetchData = async () => {
  const data = await fetch(`http://localhost:3000/posts`)
  const res = data.json();
}
fetchData();


// create
const postData = async (data) => {
  const RES = await fetch(`http://localhost:3000/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data)
  });
}
postData(newData)


// Delete
const deleteData = async (id) => {
  const res = await fetch(`http://localhost:3000/posts/${id}`, {
    method: "DELETE",
  })
}
deleteData(4)

// update
const updateData = async (id, updatedData) => {
  const res = await fetch(`http://localhost:3000/posts/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedData)
  })
}
updateData(1, data)



