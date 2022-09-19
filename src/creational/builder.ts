
interface CarBuilder {
    setKolesa(count: number): void;

    setKrysha(): any;

    setOkna(): any;

    setDoors(count: number): any;

    setBenzobak(): any;
}

type Car = {
    kolesa?: number
    krysha?: number
    windows?: number
    door?: number
    benzobak?: number
}

/** Класс, выполняющий функции конструктора машин Audi */
class Audi implements CarBuilder {
    private audi: Car;

    constructor() {
        this.audi = {};
    }
    /** Обнуляет данные о машине */
    initNew(): void {
        this.audi = {};
    }
    /** Устанавливает в машину колеса */
    setKolesa(count: number): Car {
        this.audi.kolesa = count;
        return this.audi;
    }
    /** Устанавливает в машину крышу */
    setKrysha(): Car {
        this.audi.krysha = 1;
        return this.audi;
    }
    /** Устанавливает в машину окна */
    setOkna(): Car {
        this.audi.windows = 2;
        return this.audi;
    }
    /** Устанавливает в машину двери */
    setDoors(count: number): Car {
        this.audi.door = count;
        return this.audi;
    }
    /** Устанавливает в машину бензобак */
    setBenzobak(): Car {
        this.audi.benzobak = 1;
        return this.audi;
    }
    /** Выпускает машину и очищает данные о старой машине */
    get exemplyar(): Car {
        const audi = this.audi;
        this.initNew();
        return audi;
    }
}

/** Класс, выполняющий завода, выпускающего Audi */
class AudiConfigurator {
    private builder?: CarBuilder;

    /** Добавляет конструктор машин */
    public setBuilder(builder: CarBuilder): void {
        this.builder = builder;
    }

    /** Выпустить кабриолет */
    public cabriolet(): void {
        this.builder?.setKolesa(4);
        this.builder?.setKrysha();
        this.builder?.setOkna();
        this.builder?.setDoors(4);
        this.builder?.setBenzobak();
    }

    /** Выпустить джип */
    public jeep(): void {
        this.builder?.setKolesa(4);
        this.builder?.setKrysha();
        this.builder?.setOkna();
        this.builder?.setDoors(5);
        this.builder?.setBenzobak();
    }

    /** Выпустить лимузин */
    public limuzin(): void {
        this.builder?.setKolesa(8);
        this.builder?.setKrysha();
        this.builder?.setOkna();
        this.builder?.setDoors(8);
        this.builder?.setBenzobak();
    }

    /** Выпустить электромобиль */
    public electroMobil(): void {
        this.builder?.setKolesa(4);
        this.builder?.setKrysha();
        this.builder?.setOkna();
        this.builder?.setDoors(4);
    }
}

function audiConcern() {
    const audiCompany = new AudiConfigurator();
    const audi = new Audi();
    audiCompany.setBuilder(audi);

    audiCompany.jeep();
    console.log('Audi jeep');
    console.log(audi.exemplyar);

    audiCompany.cabriolet();
    console.log('Audi cabriolet');
    console.log(audi.exemplyar);

    audiCompany.electroMobil();
    console.log('Audi electroMobil');
    console.log(audi.exemplyar);

    audiCompany.limuzin();
    console.log('Audi limuzin');
    console.log(audi.exemplyar);
}

export default audiConcern;