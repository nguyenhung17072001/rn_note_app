"use strict";
import axios from '../../util/http/http';
import {URL} from '../../util/url.js';
export async function searchEventsService(data){
    data=data?data:{}
    let params = {
        userId: data.userId?data.userId:''
    }

    //console.log('params: ', params);
    return axios.get(URL.event.listEvent, {params});
}

