
import {call, cancel, fork, put, select, take, takeEvery} from 'redux-saga/effects';
import messaging from '@react-native-firebase/messaging'
import notifee from '@notifee/react-native'; 

import {
    loginNotificationStart,
    loginNotificationFail,
    loginNotificationSuccess,

    searchsNotificationStart,
    searchsNotificationSuccess,
    searchsNotificationFail,
    
} from '../../reducers/admin/notification'
import {getTokenService, } from '../service/notification'
import {getUserId} from "../../util/get-from-store";
import { updateDeviceToken, searchsNotificationService } from '../service/notification';
import { HttpResponseObject, ErrorHttpResponseObject, ServerErrorHttpResponseObject } from "../../util/http";
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

export function* searchsNotificationAction(action) {
    // try {
        console.log("+++++++++++++++++++++++++++++++++++++++++action");
        //console.log(action);

        const res = yield call(searchsNotificationService, action.payload);
        //console.log('res--------', res)
        const resObject = new HttpResponseObject(res);
        //console.log('22222222222: ', resObject)
        if (resObject.isSuccess()) {

            
            yield put(searchsNotificationSuccess(resObject.getData()));
            

        }
        
        else {
            let errorObject = (new ErrorHttpResponseObject(res)).getErrorObject();
            console.log(("res"));
            console.log((res));
            console.log(new ErrorHttpResponseObject(res));
            console.log('er===: ', errorObject);
            yield put(searchsNotificationFail(errorObject));
            
        }

}



export function* notificationFlow() {
        
    yield takeEvery(loginNotificationStart, loginNotification);
    yield takeEvery(searchsNotificationStart, searchsNotificationAction);
        
}

