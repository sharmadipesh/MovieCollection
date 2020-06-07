import { REDUX_SETUP } from 'redux/Types';

export function checkReduxSetup(data, successCallback, errorCallback) {
    return async function (dispatch) {
        try {
            await dispatch({
                type: REDUX_SETUP,
                payload: true,
            });
            successCallback && successCallback();
        } catch (e) {
            console.error(e);
            errorCallback && errorCallback(e.response.data.message);
        }
    };
}