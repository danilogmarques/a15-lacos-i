let comerCoxinhas = prompt("você deseja comer mais coxinhas digite S para Sim e N para Não?").toUpperCase()
let conta = 0
let soma = 2.50
while(comerCoxinhas === "S"){
    conta=conta+soma 
    comerCoxinhas = prompt("você deseja comer mais coxinhas ?").toUpperCase()
        console.log(conta)
}console.log(conta)