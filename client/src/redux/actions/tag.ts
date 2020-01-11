import * as actionTypes from "../action-types";
import { createActionAsync } from "../../utils/createAction";
import { rootUrl } from "@config/api";

const url = `${rootUrl}/tag`;

export const fetchAllTag = () =>
  createActionAsync(`${url}`, actionTypes.GET_ALL_TAG);
