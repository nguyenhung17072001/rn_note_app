"use strict";
import axios from '../../util/http/http';
import {URL} from '../../util/url.js';
export async function loginService(params){
    return axios.post(URL.auth.login, params);
}

export async function registerService(params){
    return axios.post(URL.auth.register, params);
}