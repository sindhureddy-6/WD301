import { API_ENDPOINT } from '../../config/constants';
export const fetchMembers = async (dispatch: any) => {
    try {
        dispatch({ type: "FETCH_MEMBERS_REQUEST" });
        const token = localStorage.getItem("authToken") ?? "";
        const response = await fetch(`${API_ENDPOINT}/users`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json', "Authorization": `Bearer ${token}` },

        });
        const data = await response.json();
        dispatch({ type: "FETCH_MEMBERS_SUCCESS", payload: data });
        

    } catch (error) {
        console.error('Operation failed:', error);
        dispatch({ type: "FETCH_MEMBERS_FAILURE", payload: 'Unable to load Members' });


    }
}
export const handleDelete = async (dispatch:any,id: number) => {
    try {
        const token = localStorage.getItem("authToken") ?? "";
        const response=await fetch(`${API_ENDPOINT}/users/${id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json', "Authorization": `Bearer ${token}` },

        });
        if (!response.ok) {
            throw new Error('Failed to create project');
        }
        const data = await response.json();
        if (data.errors && data.errors.length > 0) {
            return { ok: false, error: data.errors[0].message }
        }


        dispatch({ type: 'DELETE_MEMBER_SUCCESS',payload:id});
    }
    catch (error) {
        console.error('Operation failed:', error);
    }
}
export const addMember = async (dispatch:any,args: any) => {
    try {
        const token = localStorage.getItem("authToken") ?? "";
        const response = await fetch(`${API_ENDPOINT}/users`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', "Authorization": `Bearer ${token}` },


            body: JSON.stringify(args),
        });
        if (!response.ok) {
            throw new Error('Failed to create project');
        }
        const res = await response.json();
        const data = res.user;
        console.log("data at addMember",data);
        if (res.errors && res.errors.length > 0) {
            return { ok: false, error: res.errors[0].message }
        }


        dispatch({ type: 'ADD_MEMBER_SUCCESS', payload: data });


        return { ok: true }
    } catch (error) {
        console.error('Operation failed:', error);


    }
}