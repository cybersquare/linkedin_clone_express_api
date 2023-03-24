import Cookies from 'js-cookie'
import constants from './constants'


function getAccessToken():string| undefined{
    const accessToken = Cookies.get(constants.authAccessToken )
    return accessToken;

}

function setAccessToken(token:string):boolean{
    Cookies.set(constants.authAccessToken, token, { expires: 7 });
    return true
}


function getRefreshToken():string| undefined{
    const refreshToken = Cookies.get(constants.authRefreshToken )
    return refreshToken;

}

function setRefreshToken(token:string):boolean{
    Cookies.set(constants.authRefreshToken, token, { expires: 7 });
    return true
}


export {getAccessToken, setAccessToken,
    getRefreshToken, setRefreshToken};