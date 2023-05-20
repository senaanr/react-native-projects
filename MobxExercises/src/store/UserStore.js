import { observable, configure, action, runInAction } from 'mobx'
import axios from 'axios';
import { Alert } from 'react-native/types';

configure({
    enforceActions: "observed"
})

class UserStore {
    @observable users = [];
    @observable loading = false;
    @observable error = '';

    @action async fetchUsers() {

        this.loading = true;
        this.error = '';
        this.users = [];

        try {
            const { data: { results } } = await axios.get('http://randomuser.me/api/?results=10')
            runInAction(() => {
                this.users = results;
                this.loading = false;
            })
        } catch (e) {
            runInAction(() => {
                this.loading = false;
                this.error = 'Error retrieving information from server.'
            })
        }


        /*axios.get('http://randomuser.me/api/?results=10')
        .then(response => response.data.results)
        .then(this.fetchUsersSuccess, this.fetchUsersError)*/
    }

    @action fetchUsersSuccess = users => {
        this.users = users
    }

    @action fetchUsersError = () => {
        Alert("error")
    }

}

export default new UserStore();
