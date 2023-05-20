import { observable, action, configure, computed, runInAction } from 'mobx'

configure({
    enforceActions: "observed"  //@action kullanmaya zorlar
}
)

class PersonStore {
    @observable firstname = "None"
    @observable surname = "None"

    @action changeName() {
        setTimeout(() => {
            runInAction(() => {
                this.firstname = "Beliz";
                this.surname = "Algı"
            })
        }, 2000)
    }

    @computed get fullName() {
        return `${this.firstname} ${this.surname}`
    }
}

export default new PersonStore();
