interface Member {
    id: number;
    name: string;
    email: string;
}

export interface MembersState {
    Members: Member[];
    isLoading: boolean;
    isError: boolean;
    errorMessage: string;
}

export type MembersActions =
    | { type: 'FETCH_MEMBERS_REQUEST' }
    | { type: 'FETCH_MEMBERS_SUCCESS'; payload: Member[] }
    | { type: 'FETCH_MEMBERS_FAILURE'; payload: string }
    | { type: 'ADD_MEMBER_SUCCESS'; payload: Member }
    | { type: 'DELETE_MEMBER_SUCCESS'; payload: number }

export const initialState: MembersState = {
    Members: [],
    isLoading: false,
    isError: false,
    errorMessage: ''
};

export const reducer = (state: MembersState = initialState, action: MembersActions): MembersState => {
    switch (action.type) {
        case "FETCH_MEMBERS_REQUEST":
            return {
                ...state,
                isLoading: true
            };
        case "FETCH_MEMBERS_SUCCESS":
            return {
                ...state,
                isLoading: false,
                Members: action.payload,
            };
        case "FETCH_MEMBERS_FAILURE":
            return {
                ...state,
                isLoading: false,
                isError: true,
                errorMessage: action.payload
            };
        case 'ADD_MEMBER_SUCCESS':
            console.log('Action:', action);
            return { ...state, Members: [...state.Members, action.payload] };
        case "DELETE_MEMBER_SUCCESS":
            return {
                ...state,
                Members: state.Members.filter(member => member.id !== action.payload),
            };
        default:
            return state;
    }
}