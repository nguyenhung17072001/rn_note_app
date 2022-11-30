import { createActions, handleActions } from 'redux-actions';

const defaultState = { newNotification: null,notification: null, headerNotifications: [],listNotifications: [], error: null,
    headerTotal: 0, headerHasMore: false,listTotal: 0, unRead: 0, listHasMore: false, isLoading: false, type: 'init' };

export const { loginNotificationStart, loginNotificationSuccess, loginNotificationFail } = createActions({
    LOGIN_NOTIFICATION_START: data => {  return (data)},
    LOGIN_NOTIFICATION_SUCCESS: data => { return { data }},
    LOGIN_NOTIFICATION_FAIL: error => { return { error }}
});
    
export const loginNotificationActions = 
{
        [loginNotificationStart]: state => { return ({ ...state, error: null, isLoading: true, type: "loginNotificationStart" })},
        [loginNotificationSuccess]: (state, { payload: { data } }) => {   return ({
            ...state,
            error: null,
            isLoading: false,
            loginInfo: data,
            type: "loginNotificationSuccess"
        })},
        [loginNotificationFail]: (state, { payload: { error } }) => { return({ ...state, error, isLoading: false, type: "loginNotificationFail" })},
};






export const reducer = handleActions(
    {
        ...loginNotificationActions,
        
    },
    defaultState
);



