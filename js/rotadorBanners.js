// window.onload=rotacion;
mis_imagenes = new Array("images/PersonajesQueridos.jpg", "images/Erwin.png", "images/Levi.png", "images/Mikasa.png", "images/Historia.png")
mi_imagen = 0
imgCt = mis_imagenes.length

function rotacion() {
    if (document.images) {
        mi_imagen++
        if (mi_imagen == imgCt) {
            mi_imagen = 0
        }
        document.anuncio.src = mis_imagenes[mi_imagen]
        setTimeout("rotacion()", 3 * 1000)
    }
}