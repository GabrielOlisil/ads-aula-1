document.getElementById("calculate").addEventListener("click", _ => {

    const saldo = document.getElementById("saldo").value

    let saldoNovo = saldo * 1.02;

    document.getElementById("result").value = saldoNovo
});