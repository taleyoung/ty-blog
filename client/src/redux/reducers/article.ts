import * as actionTypes from "../action-types";
import { Article } from "../../types/store";
import { Action } from "../../utils/createAction";

let initState: Article = {
  articleList: []
};

export default function article(state: Article = initState, action: Action) {
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
