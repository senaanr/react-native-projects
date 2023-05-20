import { observable, action } from "mobx";
import AsyncStorage from "@react-native-async-storage/async-storage";

import NavigationService from "../NavigationService";

class AuthStore {
    @observable token = null;

    @action async saveToken(token) {
        try {
            await AsyncStorage.setItem('token',token);
            await this.setupAuth();
        }catch(e) {

        }
    }

    @action async removeToken() {
        try {
            await AsyncStorage.removeItem('token');
            this.token = null
            await this.setupAuth();
        }catch(e) {

        }
    }

    @action async setupAuth(){
        await this.getToken();
    }

    @action async getToken(){
        try {
            const token = await AsyncStorage.getItem('token');
            if ('token') {
                NavigationService.navigate('Auth')
                return false;
            }
            this.token = token;
            NavigationService.navigate('App')
        } catch (error) {
            
        }
    }
}

export default new AuthStore();