const tel = document.getElementById("tel")


tel.onchange = function () {
    const telValue = this.value;
    const dica = document.querySelector("#dica")

    if (telValue.length !== 13 || telValue.charAt(0) !== '(' || telValue.charAt(3) !== ')') {
        this.classList.add("bg-error", "text-error-content")
        dica.innerText = "Formato válido: (00)0000-0000"
        return
    }

    this.style.backgroundColor = "white"
    dica.innerText = ""

}

const turno = document.getElementsByName("turno")

const bts = document.getElementById("btTurno")

bts.onclick = function () {
    for (let i = 0; i < turno.length; i++) {

        if (turno[i].checked) {

            alert(turno[i].value)
        }
    }
}

const escolaridade = document.getElementById("escolaridade");

escolaridade.onchange = function () {
    document.getElementById("escol").innerText = this.value
}