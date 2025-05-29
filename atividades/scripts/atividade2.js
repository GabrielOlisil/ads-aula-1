document.getElementById("calculate").addEventListener("click", _ => {
    const num1 = document.getElementById("num1").value
    const num2 = document.getElementById("num2").value

    document.getElementById("result").value = getMaior(num1, num2)



});

function getMaior(num1, num2){
    if( num2 > num1){
        return "O segundo é maior que o primeiro"
    }

    if (num1 == num2){
        return "Os números são iguais"
    }

    return "O primeiro é maior que o segundo"
}