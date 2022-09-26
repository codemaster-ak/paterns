// class User {
//     name: string
//     age: number
//
//     constructor(name: string, age: number) {
//         this.name = name
//         this.age = age
//     }
// }
// /** Имитирует получение пользователей из интернета */
// function fetch(): any {
//     const getYear = (age: number) => String(new Date().getFullYear() - age)
//     const users = [
//         { name: 'Anton', year: getYear(99) },
//         { name: 'Sergey', year: getYear(88) },
//         { name: 'Leha', year: getYear(77) },
//         { name: 'Billy', year: getYear(66) },
//     ]
//
//     return JSON.parse(JSON.stringify(users))
// }
//
// class Calculator {
//     /** Считает средний возраст пользователя */
//     midAge(users: User[]): number {
//         return users.reduce((accum, user) => accum + user.age, 0) / users.length;
//     }
//
//     /** Считает максимальный возраст пользователя */
//     maxAge(users: User[]): number {
//         let max = 0
//         users.forEach(user => {
//             if (user.age > max) max = user.age
//         })
//         return max
//     }
// }
//
// class Fetcher {
//     /** Получает данные из интернета */
//     getUsersFromInternet(): any {
//         return fetch();
//     }
// }
//
// class Adapter {
//     private fetcher: Fetcher;
//
//     constructor(fetcher: Fetcher) {
//         this.fetcher = fetcher;
//     }
//
//     /** Обрабатывает возраст пользователя */
//     parseAge(year: string): number {
//         return new Date().getFullYear() - Number(year)
//     }
//
//     /** Преобразует массив из неопределённого типа в пользовательский */
//     toUsers(): User[] {
//         return this.fetcher.getUsersFromInternet().map((json: any) => this.toUser(json)) as User[];
//     }
//
//     /** Преобразует пользователя из неопределённого типа в пользовательский */
//     toUser(json: any): User | undefined {
//         let name: string | undefined;
//         let age: number | undefined;
//         if (json.hasOwnProperty('name')) name = json.name as string
//         if (json.hasOwnProperty('year')) age = this.parseAge(json.year)
//         if (name && age) return new User(name, age)
//     }
// }
//
// export default function adapterRuning() {
//     const calculator = new Calculator()
//     const fetcher = new Fetcher()
//     const users = fetcher.getUsersFromInternet();
//     const adapter = new Adapter(fetcher)
//     console.log(users)
//
//     const adaptUsers = adapter.toUsers()
//     console.log(adaptUsers)
//     console.log(calculator.maxAge(adaptUsers));
//     console.log(calculator.midAge(adaptUsers));
// }


function adapterFunction() {
    const fetcherAdapter = new FetcherAdapter()
    fetcherAdapter.fetch()
}

interface IFetcher {
    /** Универсальный запрос в сеть */
    fetch(): any
}

class BrauserFetcher {
    /** Запрос в сеть от браузера */
    public brauserFetch(): any {
        console.log('Запрос от браузера')
    }
}

class FetcherAdapter implements IFetcher {
    private readonly adapt = new BrauserFetcher()

    /** Универсальный запрос в сеть */
    fetch(): any {
        return this.adapt.brauserFetch()
    }
}