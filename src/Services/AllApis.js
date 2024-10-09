import { serverURL } from "./serverUrl";
import { commonAPI } from "./commonAPI";

//Register API Call => post => localhost:3000/api/register
export const registerAPI = async(user)=>{
    return await commonAPI('post',`${serverURL}/api/register`,user,"")
}

//Login API Call => post => localhost:3000/api/login
export const loginAPI = async(user)=>{
    return await commonAPI('post',`${serverURL}/api/login`,user,"")
}


//add projects
export const addProject = async(project,reqHeader)=>{
    return await commonAPI('post' ,`${serverURL}/api/addProject`,project,reqHeader)
}

//get all user projects
export const getAllProjectsAPI = async(reqHeader)=>{
    return await commonAPI('get' ,`${serverURL}/api/getAllProjects`,"",reqHeader)
}
//get a particular user project
export const getUserProjectsAPI = async(reqHeader)=>{
    return await commonAPI('get' ,`${serverURL}/api/getUserProjects`,"",reqHeader)
}
//get home projects
export const getHomeProjectsAPI = async()=>{
    return await commonAPI('get' ,`${serverURL}/api/getHomeProjects`,"","")
}