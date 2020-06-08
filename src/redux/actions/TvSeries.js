import { REDUX_SETUP,DEFAULT_TV_SERIES } from 'redux/Types';
import {axiosNoAuth} from 'config/axios-instances';


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

export function getDefaultTvSeriesInfo(successCallBack,errorCallBack){
    return async function(dispatch){
        try{
            // let response = await axiosNoAuth.get(`http://www.omdbapi.com/?t=game+of+thrones`);
            let responseGot = await axiosNoAuth.get(`http://www.omdbapi.com/?i=tt3896198&apikey=dafa6536&t=game+of+thrones&plot=full&Season`);
            let responseBreakingBad = await axiosNoAuth.get(`http://www.omdbapi.com/?i=tt3896198&apikey=dafa6536&t=breaking+bad&plot=full&type=series`);
            let responseNarcos = await axiosNoAuth.get(`http://www.omdbapi.com/?i=tt3896198&apikey=dafa6536&t=Narcos&plot=full&type=series`);


            let finalData = [
                responseGot.data,
                responseBreakingBad.data,
                responseNarcos.data
            ]

            // console.log("%%%%%%%%%%%%%%%%% ",responseNarcos);
            await dispatch({
                type:DEFAULT_TV_SERIES,
                payload:finalData
            })

        }catch(e){
            console.log(e);
            errorCallBack && errorCallBack(e);
        }
    }
}