import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addVotes } from '../reducers/anecdoteReducer'

const AnecdoteList = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector(state => state)

  return(
      <>
      <br/>
        {anecdotes.map(anecdote =>
            <div key={anecdote.id}> 
            <div>       
                {anecdote.content} 
            </div>      
                has {anecdote.votes} &nbsp;
               <button onClick={() => dispatch(addVotes(anecdote.id))}>Vote</button>          
            </div>
        )}
      </>
  )
}

export default AnecdoteList