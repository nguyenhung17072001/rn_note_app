import { all } from "redux-saga/effects";
import { watchAdminAuth } from "./admin/auth";
import { watchAdminEvent } from './admin/event'
import { notificationFlow } from './admin/notification'

export default function* rootSaga() {
    try {
        yield all([
            watchAdminAuth(),
            watchAdminEvent(),
            notificationFlow()
        ]);
    } catch (err) {
        console.log('err: ', err);
    }
}