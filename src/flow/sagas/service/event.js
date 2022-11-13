"use strict";
import axios from '../../util/http/http';
import {URL} from '../../util/url.js';
export async function searchEventsService(params){
    return axios.post(URL.event.listEvent, params);
}

