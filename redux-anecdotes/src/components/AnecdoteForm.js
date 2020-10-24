import React from 'react'
import { useDispatch } from 'react-redux'
import anecdoteService from '../services/anecdotes'
import { createAnecdote } from '../reducers/anecdoteReducer'
import {setAdded} from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {
  const dispatch = useDispatch()

  const addAnecdote = async (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    const newAnecdote =  await anecdoteService.createNew(content)
    dispatch(createAnecdote(newAnecdote))
    dispatch(setAdded(content))
    setTimeout(()=>dispatch(setAdded('')),5000)
  }

  return (
    <>
    <h3>Create Anectode</h3>
    <form onSubmit={addAnecdote}>
      <input name="anecdote" />
      <button type="submit">Create</button>
    </form>
    </>
  )
}

export default AnecdoteForm