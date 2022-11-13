import { createActions, handleActions } from 'redux-actions';

const defaultState = { event: null, error: null, data: null, isLoading: false, };

//searchsEvent
export const { searchsEventStart, searchsEventSuccess, searchsEventFail} = createActions({
    SEARCHS_EVENT_START: data => { return (data) },
    SEARCHS_EVENT_SUCCESS: data => ({ data }),
    SEARCHS_EVENT_FAIL: error => ({ error }),
});

const searchsEventAction =
{
    [searchsEventStart]: state => { return { ...state, error: null, isLoading: true, type: "searchsEventStart" } },
    [searchsEventSuccess]: (state, { payload: { data } }) => {
        return ({
            error: null,
            isLoading: false,
            data: data,
            
            // role: data.role[0],
            type: 'searchsEventSuccess'
        })
    },
    
    [searchsEventFail]: (state, { payload: { error } }) => ({ ...state, error, isLoading: false, data: [], type: "searchsEventFail" }),
};


export const reducer = handleActions(
    {
        ...searchsEventAction,
        

    },

    defaultState
);