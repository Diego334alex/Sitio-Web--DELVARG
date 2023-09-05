const fila = document.querySelector(".contenedor-carousel");
const categorias = document.querySelectorAll("categoria");

const flechaIzquierda = document.getElementById("flecha-izquierda");
const flechaDerecha = document.getElementById("flecha-derecha");

// ----- ----- Event Listener para la flecha derecha. ----- -----//
flechaDerecha.addEventListener("click", () => {
    fila.scrollLeft += fila.offsetWidth;

    const indicadorActivo = document.querySelector(".indicadores .activo");
    if(indicadorActivo.nextSibling){
        indicadorActivo.nextSibling.classList.add("activo");
        indicadorActivo.classList.remove("activo");
    }
  });

// ----- ----- Event Listener para la flecha izquierda. ----- -----//
flechaIzquierda.addEventListener("click", () => {
    fila.scrollLeft -= fila.offsetWidth;

    const indicadorActivo = document.querySelector(".indicadores .activo");
    if(indicadorActivo.previousSibling){
        indicadorActivo.previousSibling.classList.add("activo");
        indicadorActivo.classList.remove("activo");
    }
  });

// ----- ----- Paginación. ----- -----//
const numeroPaginas = Math.ceil(categorias.length / 5);
for(let i=0; i < numeroPaginas; i++){
    const indicador = document.createElement("button");

    if(i === 0){
        indicador.classList.add("activo");
    }
    
    document.querySelector(indicador).appendChild(indicador);
    indicador.addEventListener("click", (e) => {
        fila.scrollLeft = i * fila.offsetWidth;

        document.querySelector(".indicadores .activo").classList.remove("activo");
        e.target.classList.add("activo");
    });
}

// ----- ----- Movimiento. ----- -----//
categorias.forEach((categoria) => {
    categoria.addEventListener("mouseenter", (e) => {
        const elemento = e. currentTarget;
        setTimeout(() => {
            categorias.forEach(categoria => categoria.classList.remove("hover"));
            elemento.classList.add("hover");
        });
    }, 300);
});

fila.addEventListener("mouseleave", () => {
    categorias.forEach(categoria => categoria.classList.remove("hover"));
});