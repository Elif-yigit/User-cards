const userList = document.querySelector('.userList');

async function add() {

  

  const data = await fetch('https://dummyjson.com/users').then(response => response.json())
  console.log(data);

  userList.innerText = '';

  for (const item of data.users) {

    userList.innerHTML += `<div class="listContainer">
    <div class="imageContainer"><img src='${item.image}' /></div>
    <div class="text">
    <div>${item.username}</div>
    
    <div>${item.firstName} ${item.lastName}</div>
    <div>${item.age}</div>
    <div>${item.email}</div>
    <div>${item.phone}</div>
    
    <div>${item.company.name}</div>
    <div>${item.company.department}</div>
    <div>${item.address.address}</div>
    <div>${item.address.city}</div>
    <div>${item.address.state}</div>
    </div>
    </div>
    `
  }
  
  
}


add();