class Audi {
    kolesa: number
    okna: number

    constructor(kolesa: number = 4, okna: number = 1) {
        this.kolesa = kolesa
        this.okna = okna
    }
}

const audi = new Audi();
export default audi;

