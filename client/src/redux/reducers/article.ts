import * as actionTypes from "../action-types";
import { Article } from "../../types/index";
// import {Action} from '../actions/article'

let initState: Article = {
  articleList: []
};

export default function article(state: Article = initState, action: any) {
  switch (action.type) {
    case actionTypes.GET_ARTICLE_LIST:
      console.log("1", action);
      return {
        ...state,
        articleList: action.payload
      };
    default:
      return initState;
  }
}
