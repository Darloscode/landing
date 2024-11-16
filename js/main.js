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
landing-dc16c-default-rtdb.firebaseio.com/collection.json
landing-16dc-default-rtdb.firebaseio.com/collection.json
*/

const databaseURL = 'https://landing-dc16c-default-rtdb.firebaseio.com/data.json';
let sendData = () => {
    // Obtén los datos del formulario
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries()); // Convierte FormData a objeto
    data['saved'] = new Date().toLocaleString('es-CO', { timeZone: 'America/Guayaquil' })

    // Realiza la petición POST con fetch
    fetch(databaseURL, {
        method: 'POST', // Método de la solicitud
        headers: {
            'Content-Type': 'application/json' // Especifica que los datos están en formato JSON
        },
        body: JSON.stringify(data) // Convierte los datos a JSON (sERIALIZA)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error en la solicitud: ${response.statusText}`);
            }
            return response.json(); // Procesa la respuesta como JSON
        })
        .then(result => {
            alert('Agradeciendo tu preferencia, nos mantenemos actualizados y enfocados en atenderte como mereces'); // Maneja la respuesta con un mensaje
            form.reset()
            getData()
        })
        .catch(error => {
            alert('Hemos experimentado un error. ¡Vuelve pronto!'); // Maneja el error con un mensaje
        });
}

let getData = async () => {

    try {
        // Realiza la petición fetch a la URL de la base de datos
        const response = await fetch(databaseURL, {
            method: 'GET'
        });

        // Verifica si la respuesta es exitosa
        if (!response.ok) {
            alert('Hemos experimentado un error. ¡Vuelve pronto!'); // Maneja el error con un mensaje
        }

        // Convierte la respuesta en formato JSON
        const data = await response.json();

        if (data != null) {
            let countSuscribers = new Map()

            if (Object.keys(data).length > 0) {
                for (let key in data) {

                    let { apellido, cedula, celular, correo, nombre, opcion, saved } = data[key]

                    /*let date = saved.split(", ")[0]*/

                    let count = countSuscribers.get(opcion) || 0;
                    countSuscribers.set(opcion, count + 1)
                }
            }

            let contador = 0

            if (countSuscribers.size > 0) {

                subscribers.innerHTML = ''
                total_cotizaciones.innerHTML = ''

                let index = 1;
                for (let [date, count] of countSuscribers) {
                    let rowTemplate = `
                        <tr>
                            <th class="table-primary">${index}</th>
                            <td>${date}</td>
                            <td>${count}</td>
                        </tr>`
                    subscribers.innerHTML += rowTemplate
                    index++;
                    contador += count
                }

                let template = `
                <tr>
                    <td colspan="2"><strong>Total de cotizaciones</strong></td>
                    <td><strong>${contador}</strong></td>
                </tr>`

                total_cotizaciones.innerHTML += template

            }

        }

    } catch (error) {
        // Muestra cualquier error que ocurra durante la petición
        alert('Hemos experimentado un error. ¡Vuelve pronto!'); // Maneja el error con un mensaje
    }
}

let ready = () => {
    console.log('DOM está listo')
    getData();
    //debugger
}

let loaded = (eventLoaded) => {

    let myform = document.getElementById('form');

    myform.addEventListener('submit', (eventSubmit) => {
        eventSubmit.preventDefault();

        const nombreElement = document.querySelector('#form_nombre');
        const apellidoElement = document.querySelector('#form_apellido');
        const correoElement = document.querySelector('#form_correo');
        const cedulaElement = document.querySelector('#form_cedula');
        const celularElement = document.querySelector('#form_celular');
        const opcionElement = document.querySelector('#opcion');

        const nombreText = nombreElement.value;
        const apellidoText = apellidoElement.value;
        const correoText = correoElement.value;
        const cedulaText = cedulaElement.value;
        const celularText = celularElement.value;
        const opcionText = opcionElement.value;

        const regex = /^[a-zA-Z]+$/;
        const regex_numeros = /^\d+$/;

        if (nombreText.length === 0) {
            nombreElement.focus()
            nombreElement.animate(
                [
                    { transform: "translateX(0)" },
                    { transform: "translateX(50px)" },
                    { transform: "translateX(-50px)" },
                    { transform: "translateX(0)" }
                ],
                {
                    duration: 400,
                    easing: "linear",
                }
            )
            return;
        }

        if (nombreText.length > 21) {
            alert('Escribe un nombre de hasta 20 caracteres')
            return;
        }

        if (!regex.test(nombreText)) {
            alert('Escribe solo letras en el nombre')
            return;
        }

        if (apellidoText.length === 0) {
            apellidoElement.focus()
            apellidoElement.animate(
                [
                    { transform: "translateX(0)" },
                    { transform: "translateX(50px)" },
                    { transform: "translateX(-50px)" },
                    { transform: "translateX(0)" }
                ],
                {
                    duration: 400,
                    easing: "linear",
                }
            )
            return;
        }

        if (apellidoText.length > 51) {
            alert('Escribe un nombre de hasta 50 caracteres')
            return;
        }

        if (!regex.test(apellidoText)) {
            alert('Escribe solo letras en el apellido')
            return;
        }

        if (correoText.length === 0) {
            correoElement.focus()
            correoElement.animate(
                [
                    { transform: "translateX(0)" },
                    { transform: "translateX(50px)" },
                    { transform: "translateX(-50px)" },
                    { transform: "translateX(0)" }
                ],
                {
                    duration: 400,
                    easing: "linear",
                }
            )
            return;
        }

        if (cedulaText.length === 0) {
            cedulaElement.focus()
            cedulaElement.animate(
                [
                    { transform: "translateX(0)" },
                    { transform: "translateX(50px)" },
                    { transform: "translateX(-50px)" },
                    { transform: "translateX(0)" }
                ],
                {
                    duration: 400,
                    easing: "linear",
                }
            )
            return;
        }

        if (cedulaText.length != 10) {
            alert('Escribe una cédula de 10 dígitos')
            return;
        }

        if (!regex_numeros.test(cedulaText)) {
            alert('Escribe solo números en la cédula')
            return;
        }

        if (celularText.length === 0) {
            celularElement.focus()
            celularElement.animate(
                [
                    { transform: "translateX(0)" },
                    { transform: "translateX(50px)" },
                    { transform: "translateX(-50px)" },
                    { transform: "translateX(0)" }
                ],
                {
                    duration: 400,
                    easing: "linear",
                }
            )
            return;
        }

        if (celularText.length != 10) {
            alert('Escribe un celular de 10 dígitos')
            return;
        }

        if (!regex_numeros.test(celularText)) {
            alert('Escribe solo números en el celular')
            return;
        }

        if (opcionText.length === 0 || opcionText === "ninguna") {
            opcionElement.focus()
            opcionElement.animate(
                [
                    { transform: "translateX(0)" },
                    { transform: "translateX(50px)" },
                    { transform: "translateX(-50px)" },
                    { transform: "translateX(0)" }
                ],
                {
                    duration: 400,
                    easing: "linear",
                }
            )
            return;
        }

        sendData();
    })

}

window.addEventListener("DOMContentLoaded", ready);
window.addEventListener("load", loaded)




