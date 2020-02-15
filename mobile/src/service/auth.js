import { AsyncStorage } from 'react-native';

export const TOKEN_KEY = "@RokoneyApi:";


export const getToken = async () => 'Bearer ' + await AsyncStorage.getItem(TOKEN_KEY + "token");

export const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
};