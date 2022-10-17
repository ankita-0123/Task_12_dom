function saveToLocalStorage(event){
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const phonenumber = event.target.phonenumber.value;
    const obj = {
        name,
        email,
        phonenumber
    }
    localStorage.setItem(obj.name,JSON.stringify(obj));
    showNewUserScreen(obj)
}
function showNewUserScreen(user){
    const parentNode = document.getElementById('ListOfUser');
    const childHTML = `<li> ${user.name} - ${user.email} - ${user.phonenumber}</li>`
    parentNode.innerHTML = parentNode.innerHTML + childHTML;
}
