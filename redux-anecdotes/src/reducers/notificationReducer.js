const notifyReducer = (state='',action)=>{
    switch(action.type){
        case 'MSG_VOTED':
            return action.data
        case 'MSG_ADDED':
            return action.data
        default:
            return state
    }

}

export const setVoted = (content) => {
    if (content){
        return {
            type: 'MSG_VOTED',
            data: `You voted for ${content}`
            }
        }   
    else{
        return {
            type: 'MSG_VOTED',
            data: ''
            }
        }
}


export const setAdded = (content) => {
    if (content){
        return {
        type: 'MSG_ADDED',
        data: `You added ${content}`
        }
    }
    else{
        return {
            type: 'MSG_ADDED',
            data: ''
        }
    }
}

export default notifyReducer