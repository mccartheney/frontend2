console.log ("aula 3");

class pessoa {
    name: string
    age : number
    isDev : boolean

    constructor (nameP?:string, ageP?:number, isDevP?:boolean) {
        this.name = nameP ?? "mccartheney"
        this.age = ageP ?? 29
        this.isDev = isDevP ?? true
    }

    showData () {
        return {
            name : this.name,
            age : this.age,
            is_dev : this.isDev
        }
    }
}

class employee extends pessoa{
    personFuncion : string

    constructor (personFunctionP : string) {
        super()
        this.personFuncion = personFunctionP
    }

    showAll () {
        return {
            name : this.name,
            age : this.age,
            is_dev : this.isDev,
            person_function : this.personFuncion,
        }
    }
}

const newPerson = new pessoa ( 
    "mccartheney",
    20,
    true
)

const newEmployee = new employee (
    "dev"
)

// ----------------------------------------

console.log("exe1")

class carro {
    marca : string 
    modelo : string
    ano : number

    constructor (
        marcaP : string,
        modeloP : string,
        anoP : number
    ) {
        this.marca = marcaP
        this.modelo = modeloP
        this.ano = anoP
    }

    description () : string {
        return `O carro e da marca ${this.marca}, modelo ${this.modelo} e do ano ${this.ano}`
    }

    showAll () {
        return (
            {
                modelo: this.modelo,
                marca: this.marca,
                ano : this.ano
            }
        )
    }
}

class veiculo extends carro{
    portas : number
    constructor (marcaP: string, modeloP: string, anoP: number, portasP: number) {
        super(marcaP, modeloP, anoP)
        this.portas = portasP
    }   

    veiculoDescription () : string {
        return `${super.description()} para finalizar, inclui ${this.portas} portas`
    }

    showInfo () {
        return (
            {
                modelo: this.modelo,
                marca: this.marca,
                ano : this.ano,
                portas : this.portas
            }
        )
    }
}

const novoVeiculo = new veiculo (
    "chevrolet",
    "camaro",
    2010,
    4
)

console.log(novoVeiculo.veiculoDescription())

// ----------------------------------------

console.log("exercicio 2");

type Player = {
    name : string,
    age : number,
    game : string
}

const partialPlayer : Partial<Player> = {name : "mcc"}
const readOnlyPlayer : Readonly<Player> = {name :"mccarth", age : 20, game : "gow"}
const pickPlayer : Pick<Player, "name"> = {name : "mccarth"}
const omitPlayer : Omit<Player, "age"> = {name:"mccarth", game : "gow"}

const playerList = {
    partialPlayer,readOnlyPlayer,pickPlayer,omitPlayer
}

console.table (playerList)

// ----------------------------------------

console.log("exercicio 3");

class ListHandler<T> {
    items: T[] = [];

    showArray() {
        console.log(this.items);
    }

    addToArray(item: T) {
        this.items.push(item);
        console.log(this.items);
    }

    removeFromArray(item: T) {
        if (this.items.includes(item)) {
            this.items = this.items.filter(element => element !== item);
            console.log(this.items);
        } else {
            console.log(`"${item}" dont exist`);
        }
    }
}

const listHandler = new ListHandler<string>();

listHandler.addToArray("as");
listHandler.addToArray("asdasd");
listHandler.addToArray("outroItem");
listHandler.showArray();

listHandler.removeFromArray("as"); 
