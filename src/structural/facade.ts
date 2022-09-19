class UserFacade {
    protected userSystem: UserSystem
    protected pwdSystem: PwdSystem
    protected emailSystem: EmailSystem

    constructor(userSystem?: UserSystem, pwdSystem?: PwdSystem, emailSystem?: EmailSystem) {
        this.userSystem = userSystem || new UserSystem();
        this.pwdSystem = pwdSystem || new PwdSystem();
        this.emailSystem = emailSystem || new EmailSystem();
    }

    /** Авторизует пользователя в соц. сети */
    public login() {
        this.emailSystem.emailExistInSystem()
        this.pwdSystem.proverka()
        this.userSystem.get()
    }

    /** Регистрирует пользователя в соц. сети */
    public register() {
        this.emailSystem.emailExistInSystem()
        this.emailSystem.podtverzdenieEmail()
        this.pwdSystem.shifrovka()
        this.userSystem.add()
    }

    /** Меняет пароль у пользователя */
    public changePwd() {
        this.emailSystem.emailExistInSystem()
        this.pwdSystem.shifrovka()
        this.pwdSystem.update()
        this.userSystem.update()
    }
}

class UserSystem {
    /** Получение пользователя */
    get() {
        return 'Пользователь найден'
    }

    /** Добавление пользователя */
    add() {
        return 'Пользователь добавлен'
    }

    /** Обновление пользователя */
    update() {
        return 'Пользователь обновлен'
    }
}

class PwdSystem {
    /** Проверка пароля */
    proverka() {
        return 'Пароль правильный'
    }

    /** Шифровка пароля */
    shifrovka() {
        return 'Пользователь удален'
    }

    /** Обновление пароля */
    update() {
        return 'Пароль обновлен'
    }
}

class EmailSystem {
    /** Проверка, что email присутствует в системе */
    emailExistInSystem() {
        return 'Email есть в системе';
    }

    /** Подтверждение email */
    podtverzdenieEmail(): string {
        return 'Email подтверждён';
    }
}

function socNetwork(userFacade: UserFacade) {
    userFacade.register()
    userFacade.login()
    userFacade.changePwd()
}

const userSystem = new UserSystem();
const pwdSystem = new PwdSystem();
const emailSystem = new EmailSystem();
const uFacade = new UserFacade(userSystem, pwdSystem, emailSystem);
socNetwork(uFacade);

export default socNetwork;