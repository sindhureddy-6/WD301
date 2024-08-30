import React, { createContext, useContext, useReducer, Dispatch } from "react";
import { CommentListState, CommentActions } from "./types";
import { commentReducer } from "./reducer";

const CommentStateContext = createContext<CommentListState | undefined>(undefined);
const CommentDispatchContext = createContext<Dispatch<CommentActions> | undefined>(
    undefined
);

export const CommentProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
    const [state, dispatch] = useReducer(commentReducer, {
        comments: [],
        isLoading: false,
        isError: false,
        errorMessage: "",
    });

    return (
        <CommentStateContext.Provider value={state}>
            <CommentDispatchContext.Provider value={dispatch}>
                {children}
            </CommentDispatchContext.Provider>
        </CommentStateContext.Provider>
    );
};

export const useCommentsState = () => {
    const context = useContext(CommentStateContext);
    if (context === undefined) {
        throw new Error("useCommentsState must be used within a CommentProvider");
    }
    return context;
};

export const useCommentsDispatch = () => {
    const context = useContext(CommentDispatchContext);
    if (context === undefined) {
        throw new Error(
            "useCommentsDispatch must be used within a CommentProvider"
        );
    }
    return context;
};