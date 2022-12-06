//console.log('correcto');

document.querySelector('#boton').addEventListener('click', traerDatos());

function traerDatos() {

    //console.log('dentro de la funcion');

    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'js/productos.js', true);

    xhttp.send();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            //console.log(this.responseText);
            let datos = JSON.parse(this.responseText);
            //console.log(datos);
            let res = document.querySelector('#res');
            res.innerHTML = '';

            for (let item of datos) {

                res.innerHTML += `
            
            <div class="col-md-4 text-center producto">
                <div class="card" style="margin: 10px;">
                    <h3 class="text-center text-primary text-dark">
                    ${item.nombre}
                    </h3>
                    <a href="${item.link}">
                    <img class="text-center" src="${item.foto}" alt="Imagen de un Carlos V"
                        style="height:150px; width: auto; position: relative; margin: auto;"></a>
                    <h5 class="text-center text-dark">
                    ${item.marca}
                    </h5>
                    <h5 class="text-center text-dark">
                    ${item.descripcion}
                    </h5>
                    <h4 class="text-left text-dark">
                    ${item.precio}
                    </h4>

                    <a href="${item.link}" type="button" class="btn btn-success">
                        Comprar
                    </a>
                </div>
             </div>
             
                 
                   `
            }
        }
    }
}