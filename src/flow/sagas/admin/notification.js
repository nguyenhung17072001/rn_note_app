
import {call, cancel, fork, put, select, take, takeEvery} from 'redux-saga/effects';
import messaging from '@react-native-firebase/messaging'
import notifee from '@notifee/react-native'; 

import {
    loginNotificationStart,
    loginNotificationFail,
    loginNotificationSuccess
} from '../../reducers/admin/notification'
import {getTokenService, } from '../service/notification'
import {getUserId} from "../../util/get-from-store";
import { updateDeviceToken } from '../service/notification';

async function onMessageReceived(message) {
    // Do something 
    // debugger
    console.log('Có thông báo về -------')
    console.log("'---------------------------------------------------------------------------------NOTIFICATION")
    console.log("'---------------------------------------------------------------------------------NOTIFICATION")
    console.log("'---------------------------------------------------------------------------------NOTIFICATION")
    console.log("'-------------1111111111111111111111111111111111111111111111111111111111")
    console.log(message)
    // notifee.displayNotification(message.notification);
    const channelId = await notifee.createChannel({
        id: message.from,
        name: message.from,
        sound: 'hollow'
    });
    const testData = {
        ...message.notification,
        android: {
            ...message.android,
            sound: 'hollow',
            channelId: channelId,
            pressAction: {
            id: 'default',
          },
          
        },
      }
    await notifee.displayNotification(
        testData
    );
    
    
  }
function* loginNotification(action) {
    
        try {
            // console.log('userId---------------------------')
            // console.log(userId)
            const userId = yield select(getUserId);
            console.log('userId---------------------------')
            console.log(userId)
            if (userId){
                console.log('-----------loginNotification----------------')
           
                //const register = yield call(registerDeviceForRemoteMessagesService);
                //console.log('register: ', register)
                const token = yield call(getTokenService);
                
                console.log('9999999999999999999999999999999999999999999token')
                console.log(token)
                const data = yield call(updateDeviceToken, {
                    userId: userId,
                    token: token
                }); 
                //console.log('data====', data)
                //const unRead = yield call(countUnReadNotification, {payload: {id: userId}}); 
          
                messaging().onMessage(onMessageReceived); 
                messaging().setBackgroundMessageHandler(onMessageReceived);
        
                yield put(loginNotificationSuccess({}))
            }
            yield put(loginNotificationFail({}))
        } catch (e){
            console.log('e: ', e)
            yield put(loginNotificationFail({}))
        }
    
    }



    export function* notificationFlow() {
        
        yield takeEvery(loginNotificationStart, loginNotification);
        
    }

