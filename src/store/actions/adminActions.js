export const SET_AS_ADMIN = "SET_AS_ADMIN";
export const SET_AS_USER = "SET_AS_USER";

export const setAsAdminAction = (token) => {
    return {
        type: SET_AS_ADMIN
    }
}

export const setAsUserAction = (token) => {
    return {
        type: SET_AS_USER
    }
}