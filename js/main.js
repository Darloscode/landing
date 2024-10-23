/*

let ready = () => {
    console.log('DOM está listo')
    debugger
}

let loaded = () => {
    debugger
    console.log('Iframes e Images cargadas')
}
window.addEventListener("DOMContentLoaded", ready);
window.addEventListener("load", loaded)
*/
let ready = () => {
    console.log('DOM está listo')
    //debugger
}

let loaded = ( eventLoaded ) => {

    let myform = document.getElementById('form');
       
    myform.addEventListener('submit', (eventSubmit) => {
        eventSubmit.preventDefault(); 
        
        const emailElement = document.querySelector('.form-control-lg');
        const emailText = emailElement.value;

        if (emailText.length === 0) {
          emailElement.focus()
        }
    })

  }

window.addEventListener("DOMContentLoaded", ready);
window.addEventListener("load", loaded)