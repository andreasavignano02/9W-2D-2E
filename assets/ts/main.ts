class SonAccount {
    protected saldo:number;
    constructor(saldo:number) {
    this.saldo = saldo;
};
private getSonAccount():number {
    return this.saldo;
};
setSonAccount(){
    this.saldo = 6000;
};
AddMoney(){
   let salary = this.saldo += 1000;
   return salary;
};
RemoveMoney(){
    if (this.saldo <= 0){
        return this.saldo
    }else{
    let salaryDown = this.saldo -= 1000;
    return salaryDown}
};
};
// operazioni
let salarySonAccount = new SonAccount(0) 
// Creo una variabbile e gli assegno la classe con all'interno i metodi della classe; 
// così posso sfruttarle all'esterno nelle () ci va il punto di partenza

let setsalary = salarySonAccount.setSonAccount()
console.log(setsalary)
// Il set permette di aggiornare il punto di partenza in modo tale che dopo posso fare operazioni

// let saldo = salarySonAccount.getSonAccount()
// console.log(saldo)
// Il get è inutile a meno che non vuoi vedere il punto di partenza a schermo/console

let addsalary = salarySonAccount.AddMoney()
console.log(addsalary)

let removesalary = salarySonAccount.RemoveMoney()
console.log(removesalary)

let addsalary2 = salarySonAccount.AddMoney()
console.log(addsalary2)

let removesalary2 = salarySonAccount.RemoveMoney()
console.log(removesalary2)



class MotherAccount {
    protected saldo:number;
    constructor(saldo:number) {
    this.saldo = saldo;
};
private getMotherAccount():number {
    return this.saldo;
};
setMotherAccount(){
    this.saldo = 6000;
};
AddMoney(){
   let salary = this.saldo += 1000; //this.saldo*10/100
   let addpercent = salary += salary*10/100; 
   return addpercent;
};
RemoveMoney(){
    if (this.saldo <= 0){
        return this.saldo
    }else{
    let salaryDown = this.saldo -= 1000;
    return salaryDown}
};
};

let persona = new MotherAccount(0)

let versamento1 = persona.AddMoney()
console.log(versamento1)

let prelevo1 = persona.RemoveMoney()
console.log(prelevo1)

let prelevo2 = persona.RemoveMoney()
console.log(prelevo2)