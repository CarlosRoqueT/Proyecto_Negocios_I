//console.log('correcto');

document.querySelector('#boton').addEventListener('click', traerDatos());

function traerDatos() {

    //console.log('dentro de la funcion');

    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'js/usuario.js', true);

    xhttp.send();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            //console.log(this.responseText);
            let datos = JSON.parse(this.responseText);
            //console.log(datos);
            let res = document.querySelector('#res3');
            res.innerHTML = '';

            for (let item of datos) {

                res.innerHTML += `
            
                <div class="col-md-6">
                <img class="border border-5"
                    style="height:150px; width: auto; position: relative;"
                    alt="Bootstrap Image Preview" src="${item.foto}" />
            </div>
            <div class="col-md-6">
                <ul>


                    <li class="list-item">
                        <strong>Nombre de Usuario:</strong> ${item.nombre_u}
                    </li>
                    <li class="list-item">
                        <strong>Direccion:</strong> ${item.direccion}
                    </li>
                    <li class="list-item">
                        <strong>Numero:</strong> ${item.numero1}
                    </li>
                    <li class="list-item">
                        <strong>Numero Secundario:</strong> ${item.numero2}
                    </li>
                    <li class="list-item">
                        <strong>Tipo de pagos seleccionado:</strong> ${item.tipo_pago}
                    </li>
                    <li class="list-item">
                        <strong>Nombre:</strong> ${item.nombre}
                    </li>

                </ul>
            </div>
             
                 
                   `
            }
        }
    }
}