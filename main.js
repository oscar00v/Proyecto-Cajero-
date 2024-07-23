/*
function saludar(){
    alert("Hola, como estas?");
}


function screenBlue(){
    let titulo = document.getElementById("Titulo");
    titulo.style.fontSize = "40px"
    let cuerpo = document.getElementById("screen");
    cuerpo.style.backgroundColor = "blue"
}

function screenPink(){
    let cuerpo = document.getElementById("screen");
    cuerpo.style.backgroundColor = "pink"
    let titulo = document.getElementById("Titulo");
    titulo.style.fontSize = "50px"
}


function screenWhite(){
    let cuerpo = document.getElementById("screen");
    cuerpo.style.backgroundColor = "white"
    let titulo = document.getElementById("Titulo");
    titulo.style.fontSize = "30px"
}
function screenGrey(){
    let cuerpo = document.getElementById("screen");
    cuerpo.style.backgroundColor = "grey"
    let titulo = document.getElementById("Titulo");
    titulo.style.fontSize = "60px"

}

function cambiarTamaño(){
    let titulo = document.getElementById("Titulo");
    titulo.style.fontSize = "10px";

}

*/
/////////////////////////////////////////////////////////////


   

/*
function Singin(){
   
    let username = document.getElementById("usuario");
    let password = document.getElementById("password").value;
    


    
    let message = document.getElementById("error");

    if(username.value === "admin" && password === "admin"){
        window.location.href = "cajero.html"
    }else{
        mensaje.style.color="red";
        mensaje.innerText="Contraseña invalida" 
    }
     
    
}
*/




let newBalanse= 0;
let cuentas = [
    {nombre: "Ana Villanueva", saldo: 300, password:'123'},
    {nombre: "Miguel Monterroso", saldo: 500, password:'123'},
    
    {nombre: "Diego Lechuga", saldo: 800, password:'123'},
    {nombre: "admin", saldo:10, password:'admin'}
    ];


////////////////////////////////////////////////////////
document.addEventListener('DomContentLoaded',()=>{

    let consultar = document.getElementById('btnConsultar');
    let retiro = document.getElementById('btnRetirar');
    let depositar = document.getElementById('btnDepositar');
    let boton = document.getElementById('btnIngresar');

    if(boton) boton.addEventListener('click', Login)
    if(!boton) nomUsuario;

    if(consultar) consultar.addEventListener('click', consultarSaldo);
    if(depositar) consultar.addEventListener('click', depositarMonto);
    if(retirar) consultar.addEventListener('click', retirarMonto);
})
//mostrarCajero
//Logout
//limpiar vacios
function vaciarSaldo(){
    document.getElementById('saldo').innerHTML = '';
}

function vaciarRetiro(){
    document.getElementById('retiro').innerHTML = '';
}

function vaciarDepositar(){
    document.getElementById('depositar').innerHTML = '';
}

function vaciarTransaccion(){
    document.getElementById('transaccion').innerHTML = '';
    document.getElementById('nuevoSaldo').innerHTML = '';

}
function vaciarAlerta(){
    document.getElementById('alert').innerHTML = '';
    document.getElementById('alertaSaldo').innerHTML = '';
    document.getElementById('alertaTransaccion').innerHTML='';
}


function Singin2(){
    const username = document.getElementById("usuario").value;
    const password = document.getElementById("password").value;

    let found = false;

    for(let i=0; i <cuentas.length;i++){
        
        if(username == cuentas[i].nombre && password == cuentas[i].password){
            nombre = username;
            SaldoActua = parseFloat(localStorage.getItem(nombre)|| cuentas[i].saldo);

            //localStorage.setItem('nombre', username);
            //localStorage.setItem('saldoInicial', cuentas[i].saldo);
            alert("Login successful!");
            mostrarCajero();
            found = true;
            break;  // Para salir del bucle una vez que la cuenta se ha encontrado.
            
        }
     
    }
    if (!found) {
        alert("Invalid username or password.");
        const message = document.getElementById("message");
        message.style.color = "red";
        message.innerText = "Contraseña inválida";
    }
}



function consultarSaldo2() {
   document.getElementById('saldo').innerHTML = `El saldo de ${username} es $${saldo}.`;
   vaciarAlerta();
   vaciarDepositar();
   vaciarRetiro();
   vaciarTransaccion();


   

   vaciarAlerta();
   vaciarDepositar();
   vaciarRetiro();
   vaciarTransaccion();
}


function depositarMonto2() {
    let monto = document.getElementById('depositar').value;
    let deposito = parseFloat(monto);
    let saldoTotoal = deposito + SaldoActua;


    vaciarAlerta();
    vaciarDepositar();
    vaciarRetiro();
    vaciarTransaccion();
 
    
    
 
    vaciarAlerta();
    vaciarDepositar();
    vaciarRetiro();
    vaciarTransaccion();
 }
///////////////////////////////////////////////////////
function mostrarCajero(){
    location.href = 'cajero.html';
    
}

function Singin(){
    const username = document.getElementById("usuario").value;
    const password = document.getElementById("password").value;
    let found = false;

    for(let i=0; i <cuentas.length;i++){
        
        if(username == cuentas[i].nombre && password == cuentas[i].password){
            alert("Login successful!");
            localStorage.setItem('nombre', username);
            localStorage.setItem('saldoInicial', cuentas[i].saldo);
            mostrarCajero();
            found = true;
            break;  // Para salir del bucle una vez que la cuenta se ha encontrado.
           
        }
     
    }
    if (!found) {
        alert("Invalid username or password.");
        const message = document.getElementById("message");
        message.style.color = "red";
        message.innerText = "Contraseña inválida";
    }
}
//////////////////////////////////////////////////

function getSaldo(nombre) {
    
    for (let i = 0; i < cuentas.length; i++) {
        if (cuentas[i].nombre === nombre) {
            newBalanse = cuentas[i].saldo;
            return cuentas[i].saldo;
        }
    }
    return null; // si no se encuentra el usuario, devuelve null
}


function GetUser(){
    const nombreIn = localStorage.getItem('nombre');
    //const nombreIn = document.getElementById('nombre').value;
    return nombreIn;
   // return localStorage.setItem('nombre');
}
function consultarSaldo() {
    const nombreIn = GetUser();
    const saldo = getSaldo(nombreIn);
    alert("tu saldo es: "+saldo);
    if (saldo !== null) {
        document.getElementById('resultado').textContent = `El saldo de ${nombreIn} es $${saldo}.`;
    } else {
        document.getElementById('resultado').textContent = 'Usuario no encontrado.';
    }
}

function agregarSaldo() {
   // alert("deposito")
    let deposito = Number(document.getElementById('saldo-agregar').value);
   // alert("usuario")
    let nombreUsuario = GetUser();
    //alert("saldo")
    let SaldoActual = getSaldo(nombreUsuario);
    //alert("Lo demas")
    //let SaldoActual = getSaldo(nombreUsuario);
   // let SaldoActual = newBalanse;

    if (SaldoActual === null) {
        alert(`Usuario ${nombreUsuario} no encontrado.`);
        return;
    }

    let nuevoSaldo = SaldoActual + deposito;
    if(nuevoSaldo<= 990){
        actualizarSaldo(nombreUsuario, nuevoSaldo);
        alert(`Se agregaron $${deposito}. Saldo actual: $${nuevoSaldo}`);
        document.getElementById('resultado').textContent = `Se agregaron $${deposito}. Saldo actual: $${nuevoSaldo}`;
    }else{
        alert(`Saldo exede limite de cuenta saldo: $${SaldoActual}.`);
    }
    
}

function retirarSaldo(){

let retiro = Number(document.getElementById('saldo-retirar').value);
let SaldoActual = getSaldo(GetUser());
let nombreUsuario = GetUser();

    if(SaldoActual - retiro >= 10){
        let nuevoSaldo = SaldoActual - retiro;
        actualizarSaldo(nombreUsuario, nuevoSaldo)
        alert(`Se retiraron $${retiro}. Saldo actual: $${nuevoSaldo}`);
        document.getElementById('resultado').textContent = `Se retiraron $${retiro}. Saldo actual: $${nuevoSaldo}`;
    }else {
        alert(`Saldo insuficiente para retirar $${retiro}. No se puede tener menos de $10`);
        document.getElementById('resultado').textContent = `Saldo insuficiente para retirar $${retiro}.`;
            
    }

}

function actualizarSaldo(Nombre, nuevoSaldo){
    
    for (let i = 0; i < cuentas.length; i++) {
        if (cuentas[i].nombre === Nombre) {
            
            cuentas[i].saldo = nuevoSaldo;
            return;
        }
    }
}

function Logout(){
    localStorage.removeItem('nombre');
    localStorage.removeItem('saldoInicial');
    window.location.href = "index.html"
}