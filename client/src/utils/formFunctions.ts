import axios from "axios"
import type { LoginApiData, LoginAPiRequest, RegisterApiData, RegisterApiRequest } from "../types/userForm.types"

export const RegisterApiFunction = async(data: RegisterApiRequest): Promise<RegisterApiData> => {
    let response = await axios.post<RegisterApiData>("http://localhost:3000/api/user/register", data);
    return response.data
}

export const LoginApiFunction = async(data: LoginAPiRequest): Promise<LoginApiData> => {
    let response = await axios.post<LoginApiData>("http://localhost:3000/api/user/login", data);
    return response.data
}

// export const ProfileImageChangeFunction = async(formData: ): Promise<String> => {
//     let response = await axios.post<string>("http://localhost:3000/api/user/profileChange", formData)
//     return response.data
// }