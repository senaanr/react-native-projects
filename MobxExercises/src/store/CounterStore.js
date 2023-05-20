import { observable, action , autorun, reaction, when} from "mobx";

class CounterStore {
    @observable count = 1; //değişkenin değeri takip edilebilir olduğunu söyler

    constructor(){
        autorun(()=> {
            alert(this.count) // koddaki değişikleri yönetimli gözetleme
        })

        /*reaction(  // her 5e ulaşıldığında çalışır
            () => this.count, // işlenen data gönderilir
            (count) => {
                if (count === 5) {
                    alert("başardın")
                }
            }
        )*/

        when(  // 1 kere 5e ulaşıldığında çalışır
            () => this.count ===5,
            () => alert("başardın")
        )
    }

    @action decrement = () => {
        this.count--;
    }

    @action increment = () => {
        this.count++;
    }
}

export default new CounterStore();