import * as actionTypes from "../action-types";
import { createActionAsync } from "../../utils/createAction";

const url = "http://127.0.0.1:7001/api/v1/article";

export const fetchArticleList = () =>
  createActionAsync(url, actionTypes.GET_ARTICLE_LIST);

export const fetchArticleContent = (id: string) =>
  createActionAsync(`${url}/${id}`, actionTypes.GET_ARTICLE_CONTENT);

export type Action = typeof fetchArticleList;
