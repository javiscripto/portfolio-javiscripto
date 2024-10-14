document.addEventListener("DOMContentLoaded", () => {
    // manejador de tema oscuro-claro
    const body = document.getElementById("body");
    //toogle para cambiar fondo de contenedor carousel
    const tecnologiasInner = document.querySelector('.tecnologias-inner');
    const toggleBtn = document.querySelector(".toggle-btn");

    const updateTheme = (isDarkMode) => {
        toggleBtn.innerHTML = isDarkMode
            ? '<span class="material-symbols-outlined">light_mode</span>'
            : '<span class="material-symbols-outlined">dark_mode</span>';

        body.classList.toggle("dark-mode", isDarkMode);
        tecnologiasInner.classList.toggle("bg-dark");
        localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    };

    //asigno el icono inicial y el estado de isDarkMode
    let isDarkMode = localStorage.getItem("theme") === "dark"; //devuelve un boleano
    updateTheme(isDarkMode);

    toggleBtn.addEventListener("click", () => {
        isDarkMode = !isDarkMode;
        updateTheme(isDarkMode);
    });
    
    const downloadBtn = document.querySelector(".boton-descarga");

    downloadBtn.addEventListener("click", () => {
        downloadBtn.innerHTML = '<span class="material-symbols-outlined">download_done</span>';
        // creo un nuevo objeto de audio
        const sonidoCampana = new Audio('./assets/bell-98033.mp3');
        
        // reproduzco el sonido
        sonidoCampana.play();
        
        // vuelve al contenido original
        setTimeout(() => {
            downloadBtn.innerHTML = '<box-icon name="download"></box-icon><a download="curriculum" href="./docs/prueba.txt">Descargar mi cv</a>';
        }, 2000);
    });
    
    //----------------------------------------------------------
    // evento sobre contenedor carousel
    const carouselContainer = document.querySelector('.carousel');
    
    // modifica el valor de la propiedad animation-play-state
    // cuando el mouse se encuentra sobre el contenedor, pausando la animación
    carouselContainer.addEventListener("mouseover", () => {
        carouselContainer.style.animationPlayState = 'paused'; // Detiene la animación
    });
    
    // devuelve el valor running de animation-play-state 
    carouselContainer.addEventListener("mouseout", () => {
        carouselContainer.style.animationPlayState = 'running'; // Reactiva la animación original
    });

    //---------evento barra de progreso-------------------------------------------------


    window.addEventListener("scroll", () => {

        const scrollPosition = window.scrollY;

        const progressBar = document.getElementById("progress-bar");

        const totalHeight = document.body.scrollHeight - window.innerHeight;

        const progress = (scrollPosition / totalHeight) * 100;
        
        progressBar.value = progress;
    });

    //evento para manejo de botón de menu

 /*    const menuIcon= document.querySelector(".menu-icon");
    const menuContent= document.querySelector(".nav-list");
    menuIcon.addEventListener("click", ()=>{
        menuContent.classList.toggle("show-list")
    }) */
   const closed = document.querySelector(".close");
   const menuContent = document.querySelector(".nav-list");

   closed.addEventListener("click", (e) => {
        closed.classList.toggle("open");
        menuContent.classList.toggle("show-list");
   });

   document.addEventListener("click", (e) => {
        if (!menuContent.contains(e.target) && !closed.contains(e.target)) {
            closed.classList.remove("open");
            menuContent.classList.remove("show-list");
        }
   });

   //--------------- evento para mostrar imagenes certiificados- proyectos  ---------

   const imgContainer = document.querySelector(".light-box");
   const imgs = document.querySelectorAll(".image");
   
   imgs.forEach(img=>{
    img.addEventListener("click", ()=>{
        imgContainer.classList.toggle("visible")
        imgContainer.innerHTML=`
            <img src="${img.getAttribute("src")}" />
        `
    })
   });


   // para cerrar la vista de la imagen
   imgContainer.addEventListener("click",()=>{
    imgContainer.classList.remove("visible")
   });



});
