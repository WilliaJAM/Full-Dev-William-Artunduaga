const usuarios = [ 
    { id: 1, usuario: 'usuario1', clave: '1234', intentos : 0}, 
    { id: 2, usuario: 'usuario2', clave: '5678', intentos : 0}, 
    { id: 3, usuario: 'usuario3', clave: '9101', intentos : 0}, 
    { id: 4, usuario: 'usuario4', clave: '1121', intentos : 0}, 
    { id: 5, usuario: 'usuario5', clave: '3141', intentos : 0} 
];




function login() {
    const userName =document.getElementById('inputUsername').value;
    const userPassword =document.getElementById('passwordUser').value;

    const findUser = usuarios.find((element) => element.usuario === userName);
        if(findUser.intentos == 3){
            alert(`Usuario bloqueado`);
            }else{
            if(findUser == undefined) {
                alert(`Ingrese credenciales`);
            }else if(findUser.usuario === userName && findUser.clave === userPassword){
                alert(`Sesion iniciada`);
            }else{
                alert(`Error credenciales invalidas`);
                counterLogin(findUser.id);
            }
        }
    
}




function  counterLogin(id) {
    const findUser = usuarios.find((element) => element.id === id);
        findUser.intentos ++
        if(findUser.intentos == 3){
            saveCounter();
            
        }

}



function  saveCounter() {
    localStorage.setItem('users', JSON.stringify(usuarios));
}


