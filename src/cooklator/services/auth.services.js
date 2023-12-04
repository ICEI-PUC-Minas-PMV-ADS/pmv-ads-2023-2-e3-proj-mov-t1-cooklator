import API from './webapi.services';
import config from '../config';
import axios from "axios";

const usersUrl = config.usersApiUrl;

export const register = async (param) => {
  try{
    return await API.post(`${usersUrl}`, param).then(
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
  //   return await API.post(`${usersUrl}/login`, param).then(
  //     response => {
  //       return response.data;
  //     },
  //     error =>{
  //       console.log(error);
  //       return  null;
  //     }
  //   );


    const response = await axios.get(`${usersUrl}`);
    console.log(response.data);

    const matchingUsers = response.data.filter(user =>
        user.username === param.username && user.password === param.password
    );

    if (matchingUsers.length > 0) {
      // Retornar o primeiro usuário correspondente (você pode ajustar isso conforme necessário)
      const matchedUser = matchingUsers[0];
      return {
        name: matchedUser.name,
        id: matchedUser.id,
      };
    } else {
      // Se não houver correspondências, tratar como autenticação falhada
      return null;
    }

  }catch(error){
    console.log(error);
    return null;
  }
}
