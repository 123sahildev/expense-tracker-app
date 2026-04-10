export type UserRegisterModelRequestTypes = {
    username: string,
    email: string,
    password: string,
    termsandconditions?: boolean
}

export type UserRegisterModelData = {
    success: boolean,
    message?: string
}

export type UserLoginModelRequestTypes = {
    username?: string,
    email: string,
    password: string
}

export type UserLoginModelData = {
    username: string,
    email?: string,
    password?: string,
    termsandconditions?: boolean,
    profile_url: string,
    profile_adress: string | null
}