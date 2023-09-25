const d = document,
$root =d.getElementById('root');
$loader 

const showUser= (users) =>{
    let html="";
    for(let i=0; i<users.length; i++){
        html += `<li>${users[i].name}</li>`
    }
    $root.innerHTML=html;
}


(async function getUsers(url) {
  try {
    $root.appendChild($loader);
    setTimeout(async()=>{
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    //console.log("res");
    res = await res.json();
    }, 4000)


  } catch (error) {
    console.log(error);
  } finally {
    console.log("finally...");
  }
})();


