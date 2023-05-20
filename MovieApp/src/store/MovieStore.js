import {observable , action, configure, runInAction} from 'mobx';
import axios from 'axios'

import { API_BASE } from '../constants';

import AuthStore from './AuthStore';

configure({
    enforceActions:'observed' //asenkron ifadelerde runınAction kullanılmadan işlem yapılmasın
})

class MovieStore{
    @observable movies = []
    @observable loading = false;

    @action async getMovies(){
        this.loading = true;
        try {
            const {data} = await axios.get(`${API_BASE}/api/movies`, {
                headers: {
                    'x-access-token': AuthStore.token
                }
            })

            runInAction(() => {
                this.movies = data
                this.loading = false
            })
        } catch (error) {
            this.loading = false
            
        }
    }
}

export default new MovieStore();