// console.log('one')

// setTimeout(() => {
//   console.log('two')
// }, 1000)

// console.log('three')

// // document.querySelector('button').addEventListener('click', () => {
// //   console.log('four')
// // })

// // sample data to manuplate the API
// const newData = {
//   title: "title of newData",
//   author: "medetcan"
// }

// const data = {
//   title: 'it is new ',
//   additionalData: 'sdfsdf'
// }


// // read 
// const fetchData = async () => {
//   const data = await fetch(`http://localhost:3000/posts`)
//   const res = data.json();
// }
// fetchData();


// // create
// const postData = async (data) => {
//   const RES = await fetch(`http://localhost:3000/posts`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(data)
//   });
// }
// postData(newData)


// // Delete
// const deleteData = async (id) => {
//   const res = await fetch(`http://localhost:3000/posts/${id}`, {
//     method: "DELETE",
//   })
// }
// deleteData(4)

// // update
// const updateData = async (id, updatedData) => {
//   const res = await fetch(`http://localhost:3000/posts/${id}`, {
//     method: "PUT",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(updatedData)
//   })
// }
// updateData(1, data)



///DOM Manipulation 
const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const imageUrl = document.querySelector('#image');
const description = document.querySelector('#description');

let nameInputValue;
let imageValue;
let descriptionValue;

nameInput.addEventListener('input', (e) => {
  nameInputValue = e.target.value
})
imageUrl.addEventListener('input', (e) => {
  imageValue = e.target.value
})
description.addEventListener('input', (e) => {
  descriptionValue = e.target.value
})


form.addEventListener('submit', (e) => handleSubmit(e));


function handleSubmit(e) {
  e.preventDefault();
  const forPostingData = {
    name: nameInputValue,
    imageURL: imageValue,
    description: descriptionValue
  }
  postData(forPostingData);
  nameInput.value = ''
  imageUrl.value = ''
  description.value = ''
} 


async function postData(newData){
  const data = await fetch(`http://localhost:3000/posts`, {
    method: 'POST',
    headers : {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newData)
  })
}