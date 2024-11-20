const btn = document.getElementById('btnCont')
const contador = document.getElementById('contador')
let cliques = 0

btn.addEventListener('click', () => {
    cliques++
    contador.textContent = cliques
})