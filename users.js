function getUsers(pageNumber){
    var xmlhttp = new XMLHttpRequest();
    xhr.open("GET","https://reqres.in/api/users?page=" + String(pageNumber),true);
    xhr.onload = function() {
        if(xhr.readyState === 4 && xhr.status === 200){
            var objUsers =JSON.parse(xhr.responseText);
            renderUsers(objUsers);
        }else{
            alert("Error " + xhr.status);
        }
    }
    xhr.send();
} 
function renderUsers(objUsers){
    //get table object from DOM
    for(objUser in objUsers.data){
        //create html string to put on page
        //set string in page using eg .innerHTML()
    }
}
document.getElementById("btnGetUsers").addEventListener('click',function (e){
    getUsers();
});