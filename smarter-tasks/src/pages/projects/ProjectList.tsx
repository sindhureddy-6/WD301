import React, { useEffect } from 'react';
import { fetchProjects } from "../../context/projects/actions";


import { useProjectsDispatch } from "../../context/projects/context";


import ProjectListItems from './ProjectListItems';
const ProjectList: React.FC = () => {

    // I'll define a new constant called dispatchProjects, 
    // to call the useProjectsDispatch() hook.
    const dispatchProjects = useProjectsDispatch();

    useEffect(() => {
        // And I'll pass the `dispatchProjects` to `fetchProjects` function.
        fetchProjects(dispatchProjects)
    }, [])
    return (
        <div className="grid gap-4 grid-cols-4 mt-5">
            {/*To keep this file clean, I'll move all the logic to access the projects 
       from our app-state, to a new component ProjectListItems */}
            <ProjectListItems />
        </div>
    );
};
export default ProjectList;