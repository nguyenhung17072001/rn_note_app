
import messaging from '@react-native-firebase/messaging'
import axios from '../../util/http/http';
import {URL} from '../../util/url.js';
export async function getTokenService(data){
    return messaging().getToken();
}
export async function updateDeviceToken(data) {
    return axios.post(URL.notification.updateDeviceToken, data)
}
export async function registerDeviceForRemoteMessagesService(data){
    return messaging().registerDeviceForRemoteMessages();
}