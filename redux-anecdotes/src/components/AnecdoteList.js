import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addVotes } from '../reducers/anecdoteReducer'
import {setVoted} from '../reducers/notificationReducer'
import Filter from './Filter'

const AnecdoteList = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector(state => state.anecdotes)
  const filter = useSelector(state=>state.filter)
  const handleVotes = (anecdote) => {
    dispatch(addVotes(anecdote.id))
    dispatch(setVoted(anecdote.content))
    setTimeout(()=>dispatch(setVoted('')),5000)
  }

  return(
      <>
        <h2>Anecdotes</h2>
        <Filter />
        {anecdotes.filter(a=>a.content.toUpperCase().includes(filter.toUpperCase()))
                  .map(anecdote =>
                  <div key={anecdote.id}> 
                    <div>       
                        {anecdote.content} 
                    </div>      
                        has {anecdote.votes} &nbsp;
                      <button onClick={() => handleVotes(anecdote)}>Vote</button>          
                  </div>
        )}
      </>
  )
}

export default AnecdoteList