document.addEventListener("DOMContentLoaded", () => {
    // manejador de tema oscuro-claro
    const body = document.getElementById("body");
    const toggleBtn = document.querySelector(".toggle-btn");

    const updateTheme = (isDarkMode) => {
        toggleBtn.innerHTML = isDarkMode
            ? '<span class="material-symbols-outlined">light_mode</span>'
            : '<span class="material-symbols-outlined">dark_mode</span>';

        body.classList.toggle("dark-mode", isDarkMode);
        localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    };

    //asigno el icono inicial y el estado de isDarkMode
    let isDarkMode = localStorage.getItem("theme") === "dark"; //devuelve un boleano
    updateTheme(isDarkMode);

    toggleBtn.addEventListener("click", () => {
        isDarkMode = !isDarkMode;
        updateTheme(isDarkMode);
    });
    
    
    
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

});
