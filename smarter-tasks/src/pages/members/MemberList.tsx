import { useEffect } from 'react'
import { useMembersDispatch } from '../../context/members/context';
import { fetchMembers } from '../../context/members/actions';
import MemberListItems from './MemberListItems';
const MemberList=()=> {
   
    const dispatchMembers = useMembersDispatch();
    
    useEffect(() => {
        fetchMembers(dispatchMembers);   
  },[])
  return (
      <MemberListItems/>
  )
}

export default MemberList