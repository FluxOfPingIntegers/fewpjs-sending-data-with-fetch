// Add your code here


  function submitData(userName, userEmail) {
    console.log(`${userName} has an email of ${userEmail}`)
  
    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({name: userName, email: userEmail})
    }
  
    return fetch("http://localhost:3000/users", configObj)
             .then(response => response.json())
             .then(result => {
               document.body.innerHTML += `<p>${JSON.stringify(result["id"])}</p>`;
             })
             .catch(function(error) {
               alert(`${error.message}`);
               console.log(`${error.message}`);
               document.body.innerHTML += `<p>${error.message}</p>`;
             })
  }