import { SEARCH_DATA } from 'redux/Types';
import {axiosNoAuth} from 'config/axios-instances';

export function getSearchDetails(name,successCallBack,errorCallBack){
    return async function(dispatch){
        try{
            let response = await axiosNoAuth.get(`http://www.omdbapi.com/?i=tt3896198&apikey=dafa6536&t=${name}`);

            await dispatch({
                type:SEARCH_DATA,
                payload:response.data
            })

            successCallBack && successCallBack(response.data)

        }catch(e){
            console.log(e);
            errorCallBack && errorCallBack(e);
        }
    }
}