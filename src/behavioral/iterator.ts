interface Iter<T> {
    current(): T;

    next(): T;

    key(): number;

    valid(): boolean;
}

class Language {
    name: string
    age: number

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
}

interface IterFunctional<T> {
    /** Получает итератор */
    getIterator(): Iter<T>;
}

class LangIterator implements Iter<Language> {
    private collection: Languages;

    private position: number = 0;

    private readonly reverse: boolean = false;

    constructor(collection: Languages, reverse: boolean = false) {
        this.collection = collection;
        this.reverse = reverse;

        if (reverse) {
            this.position = collection.count - 1;
        }
    }

    /** Текущий элемент коллекции */
    current(): Language {
        return this.collection.languages[this.position];
    }

    /** Текущий элемент номер элемента */
    key(): number {
        return this.position;
    }

    /** Переход к следующему элементу и его отдача */
    next(): Language {
        const item = this.collection.languages[this.position];
        this.position += this.reverse ? -1 : 1;
        return item;
    }

    /** Проверка на правильность текущего номера */
    valid(): boolean {
        if (this.reverse) {
            return this.position >= 0;
        }

        return this.position < this.collection.count;
    }
}

class Languages implements IterFunctional<Language> {
    private items: Language[] = [];

    /** Получение всех элементов */
    get languages(): Language[] {
        return this.items;
    }

    /** Получение количества элементов */
    get count(): number {
        return this.items.length;
    }

    /** Добавление элемента */
    addItem(item: Language): void {
        this.items.push(item);
    }

    /** Получение итератора */
    getIterator(): Iter<Language> {
        return new LangIterator(this);
    }

    /** Получение итератора начинающегося с конца */
    get reverseIterator(): Iter<Language> {
        return new LangIterator(this, true);
    }
}

export default function runingIterator() {
    const languages = new Languages();
    languages.addItem({name: 'Русский', age: 1000});
    languages.addItem({name: 'Английский', age: 1500});
    languages.addItem({name: 'Китайский', age: 2000});

    const iterator = languages.getIterator();

    console.log('Стандартный обход:');
    while (iterator.valid()) {
        console.log(iterator.next());
    }

    console.log('');
    console.log('Обратный обход:');
    const reverseIterator = languages.reverseIterator;
    while (reverseIterator.valid()) {
        console.log(reverseIterator.next());
    }
}
