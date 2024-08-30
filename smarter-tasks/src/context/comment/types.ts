export type CommentsDispatch = React.Dispatch<CommentActions>;

export type CommentDetails = {
    id: string;
    description: string;
    createdAt: Date;
    User: {
        name: string;
    };
};

export interface CommentPayload {
    description: string;
}

export const initialCommentState: CommentListState = {
    comments: [],
    isLoading: false,
    isError: false,
    errorMessage: "",
};

export interface CommentListState {
    comments: CommentDetails[];
    isLoading: boolean;
    isError: boolean;
    errorMessage: string;
}

export enum CommentListAvailableAction {
    FETCH_COMMENTS_REQUEST = "FETCH_COMMENTS_REQUEST",
    FETCH_COMMENTS_SUCCESS = "FETCH_COMMENTS_SUCCESS",
    FETCH_COMMENTS_FAILURE = "FETCH_COMMENTS_FAILURE",

    ADD_COMMENT_REQUEST = "ADD_COMMENT_REQUEST",
    ADD_COMMENT_SUCCESS = "ADD_COMMENT_SUCCESS",
    ADD_COMMENT_FAILURE = "ADD_COMMENT_FAILURE",
}

export type CommentActions =
    | { type: CommentListAvailableAction.FETCH_COMMENTS_REQUEST }
    | { type: CommentListAvailableAction.FETCH_COMMENTS_SUCCESS; payload: CommentDetails[] }
    | { type: CommentListAvailableAction.FETCH_COMMENTS_FAILURE; payload: string }
    | { type: CommentListAvailableAction.ADD_COMMENT_REQUEST }
    | { type: CommentListAvailableAction.ADD_COMMENT_SUCCESS; payload: CommentDetails }
    | { type: CommentListAvailableAction.ADD_COMMENT_FAILURE; payload: string };
