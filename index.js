// Add your code here
document.addEventListener("DOMContentLoaded", () => {
  return submitData("Test1", "test1@foobar.com");
})

function submitData(userName, userEmail) {
  const formData = {
    name: userName,
    email: userEmail
  }

  const configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  }

  return fetch("http://localhost:3000/users", configObj)
           .then(response => response.json())
           .then(result => console.log(result))
}