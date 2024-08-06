const usuarios = [ 
    { id: 1, usuario: 'usuario1', clave: '1234', intentos : 0}, 
    { id: 2, usuario: 'usuario2', clave: '5678', intentos : 0}, 
    { id: 3, usuario: 'usuario3', clave: '9101', intentos : 0}, 
    { id: 4, usuario: 'usuario4', clave: '1121', intentos : 0}, 
    { id: 5, usuario: 'usuario5', clave: '3141', intentos : 0} 
];
// Si no hay datos en localStorage, inicializar con el array de usuarios
if (!localStorage.getItem('users')) {
    localStorage.setItem('users', JSON.stringify(usuarios));
}

// Cargar los usuarios desde localStorage
const objetoGet = localStorage.getItem('users');
const objeto = JSON.parse(objetoGet);

function login() {
    const userName = document.getElementById('inputUsername').value;
    const userPassword = document.getElementById('passwordUser').value;
    const findUser = objeto.find((element) => element.usuario === userName);
    const findIndex = objeto.findIndex((element) => element.usuario === userName);

    if (findUser === undefined) {
        alert(`Ingrese credenciales`);
        return;
    }

    console.log(buscarUser(findIndex));

    if (buscarUser(findIndex) >= 3) {
        alert(`Usuario bloqueado`);
    } else {
        if (findUser.intentos >= 3) {
            alert(`Usuario bloqueado`);
        } else {
            if (findUser.usuario === userName && findUser.clave === userPassword) {
                alert(`Sesion iniciada`);
            } else {
                alert(`Error credenciales invalidas`);
                counterLogin(findUser.id);
            }
        }
    }
}

let counter = 0;

function counterLogin(id) {
    const findUser = objeto.find((element) => element.id === id);
    findUser.intentos++;
    saveCounter();
}

function saveCounter() {
    localStorage.setItem('users', JSON.stringify(objeto));
}

function buscarUser(numero) {
    return objeto[numero].intentos;
}
