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
    registerFail,
    //
    adminLogoutStart,
    adminLogoutSuccess,
    adminLogoutFail
    

} from '../../reducers/admin/auth';
import axios from 'axios';

import AsyncStorage from '@react-native-async-storage/async-storage';

export function* login(action) {
    // try {
        console.log('action: ', action.payload);

        const res = yield call(loginService, action.payload);
        //console.log('res--------', res)
        const resObject = new HttpResponseObject(res);
        //console.log('22222222222: ', resObject)
        if (resObject.isSuccess()) {

            console.log('Đăng nhập thành công')
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
            yield put(errorNotification(errorObject))
        }
//    
}

export function* registerAction(action) {
    // try {
        console.log("+++++++++++++++++++++++++++++++++++++++++action");
        console.log(action);

        const res = yield call(registerService, action.payload);
        //console.log('res--------', res)
        const resObject = new HttpResponseObject(res);
        //console.log('22222222222: ', resObject)
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

export function* adminLogout(action) {
    try {
        // removeCookie('token');
        // removeCookie('user');
        // removeCookie('role');
        // location.href=('/admin/dang-nhap');
        yield call(AsyncStorage.removeItem, 'token');

        yield call(AsyncStorage.removeItem, 'user');
        yield call(AsyncStorage.removeItem, 'loginned');
        yield put(adminLogoutSuccess());
        
    } catch (error) {
        let errorObject = (new ServerErrorHttpResponseObject(error)).getErrorObject();
        yield put(adminLogoutFail(errorObject));
    }
}


export function* watchAdminAuth() {
    
    
    yield takeEvery(loginStart, login);
    yield takeEvery(registerStart, registerAction);
    yield takeEvery(adminLogoutStart, adminLogout);
    
}