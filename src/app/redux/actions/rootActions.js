export const ADD_MICROFRONT_APP = "ADD_MICROFRONT_APP";
export const DATA_FROM_MICROFRONT_APP = "@microfrontapp/send_data"

export const addMicrofrontAction = (name, container) => ({ type: ADD_MICROFRONT_APP, payload: { name: name, container: container} });
export const dataFromMicrofrontAppAction = (name, dataFromMicrofront) => ({type: DATA_FROM_MICROFRONT_APP, payload: { data: dataFromMicrofront, app: name}})

export const addMicrofront = (name, container) => {
    return dispatch => {
        dispatch(addMicrofrontAction(name, container))
    }
}

export const dataFromMicrofrontApp = (name, dataFromMicrofrontApp) => {
    return dispatch => {
        dispatch(dataFromMicrofrontAppAction(name, dataFromMicrofrontApp));
    }
}