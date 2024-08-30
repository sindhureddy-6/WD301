

import { Reducer } from "react";
import { CommentListState, CommentActions, CommentListAvailableAction, initialCommentState } from "./types";

export const commentReducer: Reducer<CommentListState, CommentActions> = (
    state = initialCommentState,
    action
) => {
    switch (action.type) {
        case CommentListAvailableAction.FETCH_COMMENTS_REQUEST:
            return {
                ...state,
                isLoading: true,
                isError: false,
                errorMessage: "",
            };
        case CommentListAvailableAction.FETCH_COMMENTS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                comments: action.payload,
            };
        case CommentListAvailableAction.FETCH_COMMENTS_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
                errorMessage: action.payload,
            };
        case CommentListAvailableAction.ADD_COMMENT_REQUEST:
            return {
                ...state,
                isLoading: true,
                isError: false,
                errorMessage: "",
            };
        case CommentListAvailableAction.ADD_COMMENT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                comments: [...state.comments, action.payload],
            };
        case CommentListAvailableAction.ADD_COMMENT_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
                errorMessage: action.payload,
            };
        default:
            return state;
    }
};