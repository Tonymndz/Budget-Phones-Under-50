import { ICommentsData } from './CommentSection';

export interface CommentDataStateTypes {
  commentData: any[]
}

const initialState = {
  commentData: []
}

type Action = { type: "ADD_COMMENT_LIST", payload: ICommentsData[] }

export const CommentsReducer = (state: CommentDataStateTypes = initialState, action: Action) => {
  switch(action.type) {
    case "ADD_COMMENT_LIST": {
      return { commentData: [...state.commentData, ...action.payload] }
    }
    default:
      return state
  }
}