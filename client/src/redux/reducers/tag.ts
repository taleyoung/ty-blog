import * as actionType from "../action-types";
import { Action } from "../../utils/createAction";
import { TagState } from "../../types/store";

const initState = {
  allTags: [{ id: "", name: "" }]
};
export default function tag(state: TagState = initState, action: Action) {
  const { payload, type } = action;
  switch (type) {
    case actionType.GET_ALL_TAG:
      return {
        ...state,
        allTags: payload
      };

    default:
      return state;
  }
}
