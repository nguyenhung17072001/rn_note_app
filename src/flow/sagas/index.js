import { all } from "redux-saga/effects";
import { watchAdminAuth } from "./admin/auth";
import { watchAdminEvent } from './admin/event'

export default function* rootSaga() {
    try {
        yield all([
            watchAdminAuth(),
            watchAdminEvent(),
        ]);
    } catch (err) {
        console.log('err: ', err);
    }
}