
import messaging from '@react-native-firebase/messaging'
import axios from '../../util/http/http';
import {URL} from '../../util/url.js';
import axi from 'axios';
export async function getTokenService(data){
    return messaging().getToken();
}

export async function registerDeviceForRemoteMessagesService(data){
    return messaging().registerDeviceForRemoteMessages();
}

export async function updateDeviceToken(data) {
    return axios.post(URL.notification.updateDeviceToken, data)
}


export async function searchsNotificationService(data) {
    

    console.log('datazzzzzzzzzzzzz: ', data);
    

    

    
    return axios.get(URL.notification.searchsNotification, data);
}