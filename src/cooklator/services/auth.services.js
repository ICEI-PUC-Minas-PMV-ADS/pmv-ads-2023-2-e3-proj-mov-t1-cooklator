import API from './webapi.services';
import config from '../config';

const usersurl = config.usersApiUrl;

export const register = async (param) => {
  try{
    return await API.post(`${usersurl}`, param).then( 
      response => {
        return response.data;
      },
      error =>{
        console.log(error);
        return  null;
      }
    );
  }catch(error){
    console.log(error);
    return null;
  }
}

export const login = async (param) => {
  try{
    return await API.post(`${usersurl}/login`, param).then( 
      response => {
        return response.data;
      },
      error =>{
        console.log(error);
        return  null;
      }
    );
  }catch(error){
    console.log(error);
    return null;
  }
}