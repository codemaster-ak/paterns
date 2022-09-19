// class Test {
//     test: number = 1
// }

class Summator {
    private strategy: SummStrategy;

    constructor(strategy: SummStrategy) {
        this.strategy = strategy;
    }

    /** Устанавливает тип стратегии */
    setStrategy(strategy: SummStrategy): void {
        this.strategy = strategy;
    }

    /** Считает сумму в зависимости от выбранной стратегии */
    calcSumm(): any {
        if (this.strategy instanceof PrimitiveSummStrategy) {
            console.log(this.strategy.summ('100', '150'));
            const result = this.strategy.summ(100, 150);
            console.log(result);
            return result
        }
        if (this.strategy instanceof ArraySummStrategy) {
            const result = this.strategy.summ<Array<string>>(['1', '2'], ['3', '4']);
            console.log(result);
            return result
        }
        if (this.strategy instanceof ObjectSummStrategy) {
            const result = this.strategy.summ({ kurs: 4, univer: 'ПГУ' }, { name: 'Антон' });
            console.log(result);
            return result
        }
    }
}

interface SummStrategy {
    /** Считает сумму */
    summ(a: any, b: any): any;
}

class ArraySummStrategy implements SummStrategy {
    summ<T extends Array<any>>(a: T, b: T): any[] {
        return a.concat(b)
    }
}

class ObjectSummStrategy implements SummStrategy {
    public summ<T extends object>(a: T, b: T): T {
        return { ...a, ...b };
    }
}

class PrimitiveSummStrategy implements SummStrategy {
    summ<T extends string | number>(a: T, b: T): T extends string ? string : number {
        return <any>a + <any>b
    }
}

export default function runingStrategy() {
    const summator = new Summator(new PrimitiveSummStrategy());
    summator.calcSumm();

    console.log('');
    summator.setStrategy(new ArraySummStrategy());
    summator.calcSumm();

    console.log('');
    summator.setStrategy(new ObjectSummStrategy());
    summator.calcSumm();
}

