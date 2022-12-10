const API_ROOT_URL = "http://localhost:3000";

export const URL = {
    auth: {
        login: API_ROOT_URL + '/api/user/login',
        register: API_ROOT_URL + 'api/user/register'
    },
    event: {
        listEvent: API_ROOT_URL + '/api/event/list/person',
        //insertEvent
    },
    notification: {
        updateDeviceToken: API_ROOT_URL+'/api/notification/update/token'
    }
}

