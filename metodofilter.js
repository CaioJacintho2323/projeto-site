const botoes = document.querySelectorAll('.btn')
botoes.forEach(btn => btn.addEventListener('click', filtrarVideos))

function filtrarVideos() {
    const elementoBtn = document.getElementById(this.id)
    const categoria = elementoBtn.value
    let videosFiltrados = video.filter(video => video.categoria == categoria)
    buscarEMostrarVideos(videosFiltrados)
}