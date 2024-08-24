import { handleDelete } from "../../context/members/actions";
import { useMembersDispatch, useMembersState } from "../../context/members/context";
const MemberListItems = () => {
    let state: any = useMembersState();
    const dispatchMembers = useMembersDispatch();
    const { Members, isLoading, isError, errorMessage } = state
    if (Members.length === 0 && isLoading) {
        return <span>Loading...</span>;
    }
    if (isError) {
        return <span>{errorMessage}</span>;
    }
  return (
      <>
          {Members.map((d:any) => (
              <div key={d.id} className="member block p-6 m-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                  <p className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white">Email: {d.email}</p>
                  <p className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white">Name: {d.name}</p>
                  <button
                      onClick={() => handleDelete(dispatchMembers,d.id)}
                      className="mt-4 px-3 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">
                      Delete
                  </button>
              </div>
          ))
          }
      </>
  )
}

export default MemberListItems;