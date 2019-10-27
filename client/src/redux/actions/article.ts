import * as actionTypes from "../action-types";
import { createActionAsync } from "../../utils/createAction";

const url = "http://127.0.0.1:7001/api/v1/article";

export const fetchArticleList = (
  page: number = 1,
  page_size: number = 10,
  order: string = "desc"
) =>
  createActionAsync(
    `${url}?page=${page}&page_size=${page_size}&order=${order}`,
    actionTypes.GET_ARTICLE_LIST
  );

export const fetchArticleContent = (id: string) =>
  createActionAsync(`${url}/${id}`, actionTypes.GET_ARTICLE_CONTENT);

export type Action = typeof fetchArticleList;
