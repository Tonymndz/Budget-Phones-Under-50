import { IResponseFromJWT } from './HelperFunctions';

export interface UserDataState {
  userData: any[]
}

const initialState = {
  userData: []
}

type Action = { type: "ADD_USER_DATA", payload: IResponseFromJWT[] }

export const UserReducer = (state: UserDataState = initialState, action: Action) => {
  switch(action.type) {
    case "ADD_USER_DATA": {
      return { userData: [...state.userData, action.payload] }
    }
    default:
      return state
  }
}

/*
  Do all the checks for logged and put informations as if logged in
  {
    id: "5f947db8cb68b3001701bb95"
    username: "Tony"
  }
*/