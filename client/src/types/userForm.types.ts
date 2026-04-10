export type RegisterTypes = {
    username: string,
    email: string,
    password: string,
    conformpassword: string,
    termsandconditions: boolean
}

export type LoginTypes = {
    email: string,
    password: string
    rememberme?: boolean
}

export type RegisterApiRequest = {
    username: string,
    email: string,
    password: string,
    termsandconditions?: boolean
}

export type RegisterApiData = {
    success: boolean,
    message?: string
}

export type LoginAPiRequest = {
    username: string,
    email: string
}

type userData = {
    username: string,
    email: string,
    profile_url: string,
    profile_id: string
}

export type LoginApiData = {
    success: boolean,
    message: string,
    userdata: userData[]
}