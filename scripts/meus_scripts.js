document.getElementById("botao1").addEventListener("click", e => {
    let numero = document.getElementById('numero')

    let result = document.getElementById("result")
    if (numero.value % 2 == 0) {
        result.value = "O número é par"
        return;
    }

    result.value = "o número não é par"
})


function changeSrc(path) {
    document.getElementById("imagem").src = "../imagens/" + path
}

document.getElementById("img1").addEventListener("click", _ => changeSrc("baia-bonita.jpg"));
document.getElementById("img2").addEventListener("click", _ => changeSrc("image03_grd.png"))
document.getElementById("img3").addEventListener("click", _ => changeSrc("sol-bonito.jpg"))