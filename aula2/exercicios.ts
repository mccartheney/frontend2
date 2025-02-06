// -------------------------
interface Carro {
    marca : string
    modelo : string
    ano : number
    cavalos? : number
    kms? : number
}

const meuCoche = {
    marca : "chefrolet",
    modelo : "chevetao",
    ano : 1971
}

console.log (meuCoche)
// -------------------------

type paymentMethod = "card" | "mbway" | "paypal"


interface payment {
    value : number,
    method: paymentMethod
    details : string
}

const paymentProcess = (payment : payment) : string => {
    return `The method of payment was ${payment.method} and the value was ${payment.value}`
}


const newPayment : payment = {
    value : 123,
    method : "mbway",
    details : "real"
}

console.log(
    paymentProcess(newPayment)
)
// -------------------------

