function mostrarRespostaSim() {
    document.getElementById("resposta").style.display = "block";
    document.getElementById("resposta").innerHTML = "AEEEE O AMOR VENCEU!!!";
    document.getElementById("no").style.display = "none";
    document.getElementById("respostaSim.jpg").style.display = "block";
    var img = document.getElementById("respostaSim.jpg");
    img.src =
        "respostaSim.jpg";
    img.height = 600;
}

function mudarPosicao() {
    const buttonNao = document.getElementById("no");
    const randomX = Math.floor(Math.random() * window.innerWidth);
    const randomY = Math.floor(Math.random() * window.innerHeight);
    buttonNao.style.left = `${randomX}px`;
    buttonNao.style.top = `${randomY}px`;
}