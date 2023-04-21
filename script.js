    //-----------------------------INICIO FORMULARIO SESION/REGISTRARSE------------------------------>//
    var x = document.getElementById("login")
    var y = document.getElementById("registrar")
    var z = document.getElementById("elegir")
    var q = document.getElementById("contenedor")
    var c = document.getElementsByClassName("boton-cancelar")
    
    
    function login(){
      
    x.style.left = "-10%";
    y.style.left = "450px";
    z.style.left = "0px";
    }
    
    function registrar(){
   
   x.style.left = "500px";  
   y.style.left = "-10%";
    z.style.left = "120px";
   
   
    }
    
    function sesion(){
    q.style.display= "block"
    x.style.left = "-10%";
    y.style.left = "450px";
    z.style.left = "0px";
    }
  
    function cancelar(){
      q.style.display = "none";
    }
    
    function atrasIniciar(){
      login();
    }
  
    function cancelarRegistrar(){
        q.style.display = "none";
    }
    //-----------------------------FIN FORMULARIO SESION/REGISTRARSE------------------------------>//


    
    function showMore() {
        var moreText = document.querySelector(".more-content");
        if (moreText.style.display === "none") {
          moreText.style.display = "block";
        } else {
          moreText.style.display = "none";
        }
      }




      //----------PROPUESTA------INICIO TEXTO-IMAGEN----------------------------//

      document.querySelector('.image-containero').addEventListener('mouseenter', function() {
        document.querySelector('.text-containero').style.opacity = 1;
      });
    
    
      function winAlert(){
        if (onmouseenter === true){
            window.alert(document.getElementsByClassName("textoImagen"))
        } else {
            return textoImagen.style.display = "none";
        }
      }
      //----------PROPUESTA------FIN TEXTO-IMAGEN-------------------------------//