const notifyReducer = (state='',action)=>{
    switch(action.type){
        case 'MESSAGE':
            return action.data
        default:
            return state
    }

}

export const setNotification = (content,timeout) => {
    if (content){
        return  async dispatch =>{
        dispatch({    
        type: 'MESSAGE',
        data: content
        })
 
        setTimeout(()=>dispatch({ type: 'MESSAGE', data: ''}),timeout*1000)           
        }
    }
}

export default notifyReducer