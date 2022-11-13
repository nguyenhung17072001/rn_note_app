import { take, put, call, takeEvery } from 'redux-saga/effects';
import {
    loginService,
    registerService
} from '../service/auth'
//import { updateDeviceToken } from '../services/notificationRt.js';
// import { setCookie, removeCookie } from '../../util/cookie';
import { HttpResponseObject, ErrorHttpResponseObject, ServerErrorHttpResponseObject } from "../../util/http";

import {
    loginStart,
    loginSuccess,
    loginFail,
    //
    registerStart,
    registerSuccess,
    registerFail
    

} from '../../reducers/admin/auth';


import AsyncStorage from '@react-native-async-storage/async-storage';

export function* loginAction(action) {
    // try {
        console.log("+++++++++++++++++++++++++++++++++++++++++action");
        console.log(action);

        const res = yield call(loginService, action.payload);
        console.log('res--------', res)
        const resObject = new HttpResponseObject(res);
        console.log('22222222222: ', resObject)
        if (resObject.isSuccess()) {

            
            yield call(AsyncStorage.setItem, 'token', res.data.data.token);
            yield call(AsyncStorage.setItem, 'user', JSON.stringify(res.data.data));
            yield call(AsyncStorage.setItem, 'loginned', JSON.stringify(true));
            
            yield put(loginSuccess(resObject.getData()));
            

        }
        
        else {
            let errorObject = (new ErrorHttpResponseObject(res)).getErrorObject();
            console.log(("res"));
            console.log((res));
            console.log(new ErrorHttpResponseObject(res));
            console.log('err: ', errorObject);
            yield put(loginFail(errorObject));
            
        }

}

export function* registerAction(action) {
    // try {
        console.log("+++++++++++++++++++++++++++++++++++++++++action");
        console.log(action);

        const res = yield call(registerService, action.payload);
        console.log('res--------', res)
        const resObject = new HttpResponseObject(res);
        console.log('22222222222: ', resObject)
        if (resObject.isSuccess()) {

            
            
            
            yield put(registerSuccess(resObject.getData()));
            

        }
        
        else {
            let errorObject = (new ErrorHttpResponseObject(res)).getErrorObject();
            console.log(("res"));
            console.log((res));
            console.log(new ErrorHttpResponseObject(res));
            console.log('err: ', errorObject);
            yield put(registerFail(errorObject));
            
        }

}


export function* watchAdminAuth() {
    
    
    yield takeEvery(loginStart, loginAction);
    yield takeEvery(registerStart, registerAction);
    
}