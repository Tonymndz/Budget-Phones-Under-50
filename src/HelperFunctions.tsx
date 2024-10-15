import { ICommentsData } from './CommentSection'
import Axios from 'axios';
import { UserDataState } from './UserReducer';
import { CommentDataStateTypes } from './CommentsReducer';

export interface IUserRegister {
  username: string,
  password: string,
}

export interface IUserLogin {
  username: string,
  password: string,
}


export interface IResponseFromJWT {
  token: string;
  user: {
    id: string,
    username: string
  }
}

export interface ReduxStoreReducers {
  CommentsReducer: CommentDataStateTypes,
  UserReducer: UserDataState
}

export const getFetchedComments = async (): Promise<ICommentsData[]> => {
  const response = await Axios("https://best-budget-phones-backend.vercel.app/Under50") // Put catch error here later
  return response.data;
}

export const GetTokenAsString = (): string => {
  let localStorageAuthToken = localStorage.getItem("auth-token");
  let token = (localStorageAuthToken === null) ? "" : localStorageAuthToken;
  return token;
}

export const checkLoggedIn = async (token: string): Promise<Boolean> => {
  const tokenRes = await Axios.post("https://best-budget-phones-backend.vercel.app/users/tokenIsValid", null, { headers: { "x-auth-token": token } })
  return tokenRes.data;
}

export const getUserDataResponse = async (token: string): Promise<IResponseFromJWT> => {
  const tokenRes = await Axios.get("https://best-budget-phones-backend.vercel.app/users/", { headers: { "x-auth-token": token } })
  return tokenRes.data;
}

export const registerUserResponse = async (username: string, password: string) => {
  const registerRes = await Axios.post("https://best-budget-phones-backend.vercel.app/users/register", { username: username, password: password })
  return registerRes;
}

export const loginUserResponse = async (username: string, password: string): Promise<IResponseFromJWT> => {
  const loginRes = await Axios.post("https://best-budget-phones-backend.vercel.app/users/login", { username: username, password: password })
  return loginRes.data;
}

export const strToAsteriks = (text: string): string => {
  return '*'.repeat(text.length)
}