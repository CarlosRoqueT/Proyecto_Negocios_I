//console.log('correcto');

document.querySelector('#boton').addEventListener('click', traerDatos());

function traerDatos() {

    //console.log('dentro de la funcion');

    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'js/productosInd.js', true);

    xhttp.send();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            //console.log(this.responseText);
            let datos = JSON.parse(this.responseText);
            //console.log(datos);
            let res = document.querySelector('#ress');
            res.innerHTML = '';

            for (let item of datos) {

                res.innerHTML += `
            
                <div class="col-md-4 text-center">
                <h3 class="text-center text-primary">
                ${item.nombre}
                </h3>
                <a href="${item.link}">
                <img style="height:100px; width: auto; position: relative;" class="text-center"
                    alt="Bootstrap Image Preview" src="${item.foto}" /></a>
                <h5 class="text-center text-dark">
                ${item.descripcion}
                </h5>
                <h4 class="text-left text-dark">
                ${item.precio}


                    <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                        <input type="hidden" name="cmd" value="_s-xclick">
                        <input type="hidden" name="hosted_button_id" value="YH7C8N87VJ27E">
                        <input type="image" src="https://www.paypalobjects.com/es_XC/MX/i/btn/btn_buynowCC_LG.gif"
                            border="0" name="submit" alt="PayPal, la forma más segura y rápida de pagar en línea.">
                        <img alt="" border="0" src="https://www.paypalobjects.com/es_XC/i/scr/pixel.gif" width="1"
                            height="1">
                    </form>


                </h4>
            </div>
             
                 
                   `
            }
        }
    }
}