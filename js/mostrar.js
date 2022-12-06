//console.log('correcto');

document.querySelector('#boton').addEventListener('click',traerDatos());

function traerDatos(){

    //console.log('dentro de la funcion');

    const xhttp = new XMLHttpRequest();
    xhttp.open('GET','js/productos.js',true);

    xhttp.send();

    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            //console.log(this.responseText);
            let datos = JSON.parse(this.responseText);
            //console.log(datos);
            let res = document.querySelector('#res');
            res.innerHTML = '';

            for(let item of datos){

                res.innerHTML += `
                   <tr>
                        <td><img style="height:100px; width: auto; position: relative;" src="${item.foto}"></img></td>
                        <td>${item.nombre}</td>
                        <td>${item.marca}</td>
                        <td>${item.descripcion}</td>
                        <td>${item.precio}</td>

                   </tr>
                   `
            }
        }
    }
}