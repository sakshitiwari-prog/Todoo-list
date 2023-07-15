import getsaga from './get_saga'
import onRemove from './delete_saga'
import onChange from './update_saga'
import onPush from './push_data_to_api_sagaHandler'
import {all} from 'redux-saga/effects'
export default function* rootsaga() {
    yield all([
        getsaga(),onRemove(),onPush(),onChange()
    ])
    // code after all-effect
}