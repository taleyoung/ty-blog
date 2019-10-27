import * as actionTypes from "../action-types";
import { Article } from "../../types/store";
import { Action } from "../../utils/createAction";

let initState: Article = {
  articleList: { total: 0, data: [] },
  article: { id: 1, title: "", content: "", tags: [], updatedAt: "" }
};

export default function article(state: Article = initState, action: Action) {
  switch (action.type) {
    case actionTypes.GET_ARTICLE_LIST:
      return {
        ...state,
        articleList: {
          total: action.payload.total,
          data: action.payload.data
        }
      };
    case actionTypes.GET_ARTICLE_CONTENT:
      return {
        ...state,
        article: action.payload
      };
    default:
      return initState;
  }
}
