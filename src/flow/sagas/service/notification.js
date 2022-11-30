
import messaging from '@react-native-firebase/messaging'


export async function getTokenService(data){
    return messaging().getToken();
}
export async function registerDeviceForRemoteMessagesService(data){
    return messaging().registerDeviceForRemoteMessages();
}