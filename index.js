// Add your code here
<<<<<<< HEAD
function submitData(name, email){
    return fetch("http://localhost:3000/users",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                name,
                email
            })
        })
        .then(function (response) {
            return response.json();
        })
        .then(function (object) {
            document.body.innerHTML = object[ "id" ]
        })
         .catch(function (error) {
            alert("Bad things! Ragnarők!");
            document.body.innerHTML = error.message
        });
}



=======
function submitData(name,email){
  const URL= 'http://localhost:3000/users';
  const requestOptions={
    header:{
      'Accept':'application/json',
      'Content-Type':'application/json'
    },
    method:'POST',
    body: JSON.stringify({
      name:name,
      email:email
    })
  }
  return fetch(URL,requestOptions);
}
submitData("john","john@invisible.com")
.then(res=>{
  return res.json();
})
//.then(json=>)
//.catch(err=>document.body.innerHTML=err.message)
>>>>>>> c511c20711e834a23866b74c487df575c40adfde
