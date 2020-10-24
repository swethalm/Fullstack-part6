// const anecdotesAtStart = [
//   'If it hurts, do it more often',
//   'Adding manpower to a late software project makes it later!',
//   'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
//   'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
//   'Premature optimization is the root of all evil.',
//   'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
// ]



// const asObject = (anecdote) => {
//   return {
//     content: anecdote,
//     id: getId(),
//     votes: 0
//   }
// }

// const initialState = anecdotesAtStart.map(asObject)

//Compare likes- for sorting
function compareVotes(a,b)
{
  return b.votes-a.votes
}

const reducer = (state = [], action) => {
  switch(action.type)
  {
    case 'NEW_ANECDOTE':
      return [...state,action.content]
    case 'ADD_VOTE':
      const id = action.data.id
      const addVotesTo = state.find(n => n.id === id)
      const votedAnecdote= {...addVotesTo,votes:addVotesTo.votes+1}
      return state.map(a => a.id!==id? a : votedAnecdote ).sort(compareVotes)
    case 'INIT_ANECDOTES':
      return action.data
    default:
        return state
  }
}

export const initializeAnecdotes = (anecdotes) => {
  return {
    type: 'INIT_ANECDOTES',
    data: anecdotes,
  }
}
export const createAnecdote = (content) => {
  return {
    type: 'NEW_ANECDOTE',
    content
  }
}

export const addVotes = (id) => {
  return {
    type: 'ADD_VOTE',
    data: { id }
  }
}

export default reducer