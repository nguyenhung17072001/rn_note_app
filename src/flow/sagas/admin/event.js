import { take, put, call, takeEvery } from 'redux-saga/effects';
import {
    searchEventsService
    
} from '../service/event'
//import { updateDeviceToken } from '../services/notificationRt.js';
// import { setCookie, removeCookie } from '../../util/cookie';
import { HttpResponseObject, ErrorHttpResponseObject, ServerErrorHttpResponseObject } from "../../util/http";

import {
    searchsEventStart,
    searchsEventSuccess,
    searchsEventFail
    

} from '../../reducers/admin/event';


import AsyncStorage from '@react-native-async-storage/async-storage';

export function* searchsEventAction(action) {
    // try {
        console.log("+++++++++++++++++++++++++++++++++++++++++action");
        //console.log(action);

        const res = yield call(searchEventsService, action.payload);
        //console.log('res--------', res)
        const resObject = new HttpResponseObject(res);
        //console.log('22222222222: ', resObject)
        if (resObject.isSuccess()) {

            
            yield put(searchsEventSuccess(resObject.getData()));
            

        }
        
        else {
            let errorObject = (new ErrorHttpResponseObject(res)).getErrorObject();
            console.log(("res"));
            console.log((res));
            console.log(new ErrorHttpResponseObject(res));
            console.log('er===: ', errorObject);
            yield put(searchsEventFail(errorObject));
            
        }

}




export function* watchAdminEvent() {
    
    
    yield takeEvery(searchsEventStart, searchsEventAction);
   
    
}