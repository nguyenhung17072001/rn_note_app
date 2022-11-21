import { createActions, handleActions } from 'redux-actions';

const defaultState = { user: null, token: null, error: null, data: null, isLoading: false, };

//login
export const { loginStart, loginSuccess, loginFail} = createActions({
    LOGIN_START: data => { return (data) },
    LOGIN_SUCCESS: data => ({ data }),
    LOGIN_FAIL: error => ({ error }),
});

const loginAction =
{
    [loginStart]: state => { return { ...state, error: null, isLoading: true, type: "loginStart" } },
    [loginSuccess]: (state, { payload: { data } }) => {
        return ({
            error: null,
            isLoading: false,
            token: data.token,
            user: data,
            isLoginned: true,
            // role: data.role[0],
            type: 'loginSuccess'
        })
    },
    
    [loginFail]: (state, { payload: { error } }) => ({ ...state, error, isLoading: false, data: [], type: "loginFail" }),
};

//register
export const { registerStart, registerSuccess, registerFail} = createActions({
    REGISTER_START: data => { return (data) },
    REGISTER_SUCCESS: data => ({ data }),
    REGISTER_FAIL: error => ({ error }),
});

const registerAction =
{
    [registerStart]: state => { return { ...state, error: null, isLoading: true, type: "registerStart" } },
    [registerSuccess]: (state, { payload: { data } }) => {
        return ({
            error: null,
            isLoading: false,
            token: data.token,
            user: data,
            isLoginned: true,
            // role: data.role[0],
            type: 'registerSuccess'
        })
    },
    
    [registerFail]: (state, { payload: { error } }) => ({ ...state, error, isLoading: false, data: [], type: "registerFail" }),
};

export const { adminLogoutStart, adminLogoutSuccess, adminLogoutFail } = createActions({
    ADMIN_LOGOUT_START: data => { return (data) },
    ADMIN_LOGOUT_SUCCESS: data => ({ data }),
    ADMIN_LOGOUT_FAIL: error => ({ error })
});

const adminLogoutAction =
{
    [adminLogoutStart]: state => { return { ...state, error: null, isLoading: true, type: "adminLogoutStart" } },
    [adminLogoutSuccess]: (state, { payload: { data } }) => {
        return ({
            ...state, user: null, role: null, token: null, type: "adminLogoutSuccess", isLoading: false
        })
    },
    [adminLogoutFail]: (state, { payload: { error } }) => ({ ...state, error, isLoading: false, data: [], type: "adminLogoutFail" })
};
export const reducer = handleActions(
    {
        ...loginAction,
        ...registerAction,
        ...adminLogoutAction,
    },

    defaultState
);