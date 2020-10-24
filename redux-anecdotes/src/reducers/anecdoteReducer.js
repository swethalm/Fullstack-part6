import anecdoteService from '../services/anecdotes'

//Compare likes- for sorting
function compareVotes(a,b)
{
  return b.votes-a.votes
}

const reducer = (state = [], action) => {
  switch(action.type)
  {
    case 'NEW_ANECDOTE':
      return [...state,action.data]
    case 'ADD_VOTE':
      const votedAnecdote= action.data
      return state.map(a => a.id!==votedAnecdote.id? a : votedAnecdote ).sort(compareVotes)
    case 'INIT_ANECDOTES':
      return action.data
    default:
        return state
  }
}

export const initializeAnecdotes = (anecdotes) => {
  return async dispatch =>{
    const anecdotes = await anecdoteService.getAll()
    dispatch(
    {type: 'INIT_ANECDOTES',
     data: anecdotes.sort(compareVotes)})
  }
}
export const createAnecdote = (content) => {
  return async dispatch =>{
    const newAnecdote =  await anecdoteService.createNew(content)
    dispatch({
            type: 'NEW_ANECDOTE',
            data: newAnecdote
            })
    }
}

export const addVotes = (anecdote) => {
  return async dispatch =>{
    const toBeUpdated={...anecdote,votes: anecdote.votes+1}
    const updatedAnecdote = await anecdoteService.upVote(toBeUpdated) 
    dispatch(
    {type: 'ADD_VOTE',
    data: updatedAnecdote})
  }
}

export default reducer