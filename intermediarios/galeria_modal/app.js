const galeriaModal = document.querySelector(".galeria-modal");
const imgSingle = document.querySelectorAll(".single-galeria img");
const imgModal = document.querySelector(".galeria-modal img")

function fecharGaleria() {
    galeriaModal.style.display= "none";
}

function abrirGaleria() {
    galeriaModal.style.display="block";
    let imgSelected = this;
    imgModal.src = imgSelected.src;
}

galeriaModal.addEventListener('click', fecharGaleria);
imgSingle.forEach(function(img) {
    img.addEventListener('click', abrirGaleria);
});