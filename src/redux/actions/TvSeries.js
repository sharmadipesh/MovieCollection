import { REDUX_SETUP,DEFAULT_TV_SERIES,POPULAR_TV_SERIES } from 'redux/Types';
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
            let responseGot = await axiosNoAuth.get(`http://www.omdbapi.com/?i=tt3896198&apikey=dafa6536&t=game+of+thrones&plot=full&Season`);
            let responseBreakingBad = await axiosNoAuth.get(`http://www.omdbapi.com/?i=tt3896198&apikey=dafa6536&t=breaking+bad&plot=full&type=series`);
            let responseNarcos = await axiosNoAuth.get(`http://www.omdbapi.com/?i=tt3896198&apikey=dafa6536&t=Narcos&plot=full&type=series`);


            let finalData = [
                responseGot.data,
                responseBreakingBad.data,
                responseNarcos.data
            ]

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

export function getPopularTvSeriesInfo(successCallBack,errorCallBack){
    return async function(dispatch){
        try{
            let responseRnM= await axiosNoAuth.get(`http://www.omdbapi.com/?i=tt3896198&apikey=dafa6536&t=Rick+and+Morty&plot=full&Season`);
            let responseSherlock = await axiosNoAuth.get(`http://www.omdbapi.com/?i=tt3896198&apikey=dafa6536&t=Sherlock&plot=full&type=series`);
            let responseTd = await axiosNoAuth.get(`http://www.omdbapi.com/?i=tt3896198&apikey=dafa6536&t=True+Detective&plot=full&type=series`);
            let responseST = await axiosNoAuth.get(`http://www.omdbapi.com/?i=tt3896198&apikey=dafa6536&t=Stranger+Things&plot=full&type=series`);
            let responsePB = await axiosNoAuth.get(`http://www.omdbapi.com/?i=tt3896198&apikey=dafa6536&t=Peaky+Blinders&plot=full&type=series`);

            let finalData = [
                responseRnM.data,
                responseSherlock.data,
                responseTd.data,
                responseST.data,
                responsePB.data
            ]

            await dispatch({
                type:POPULAR_TV_SERIES,
                payload:finalData
            })

        }catch(e){
            console.log(e);
            errorCallBack && errorCallBack(e);
        }
    }
}