import { GET_MOVIES_DATA } from 'redux/Types';
import {axiosNoAuth} from 'config/axios-instances';

export function getMoviesDetails(successCallBack,errorCallBack){
    return async function(dispatch){
        try{
            let responseGoW = await axiosNoAuth.get(`http://www.omdbapi.com/?i=tt3896198&apikey=dafa6536&t=Gangs+of+Wasseypur`);
            let responsequeen = await axiosNoAuth.get(`http://www.omdbapi.com/?i=tt3896198&apikey=dafa6536&t=Queen`);
            let responseudaan = await axiosNoAuth.get(`http://www.omdbapi.com/?i=tt3896198&apikey=dafa6536&t=Udaan`);
            let responsekahaani = await axiosNoAuth.get(`http://www.omdbapi.com/?i=tt3896198&apikey=dafa6536&t=Kahaani`);
            let responsebmb = await axiosNoAuth.get(`http://www.omdbapi.com/?i=tt3896198&apikey=dafa6536&t=Bhaag+Milkha+Bhaag`);
            let responseanand = await axiosNoAuth.get(`http://www.omdbapi.com/?i=tt3896198&apikey=dafa6536&t=anand`);
            let responseaw = await axiosNoAuth.get(`http://www.omdbapi.com/?i=tt3896198&apikey=dafa6536&t=A+Wednesday`);
            let responsehf = await axiosNoAuth.get(`http://www.omdbapi.com/?i=tt3896198&apikey=dafa6536&t=Hera+Pheri`);
    
            let movieData = [
                responseGoW.data,
                responsequeen.data,
                responseudaan.data,
                responsekahaani.data,
                responsebmb.data,
                responseanand.data,
                responseaw.data,
                responsehf.data
            ]

            await dispatch({
                type:GET_MOVIES_DATA,
                payload:movieData
            })

        }catch(e){
            console.log(e);
            errorCallBack && errorCallBack(e);
        }
    }
}