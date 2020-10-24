import React from 'react'
import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import {setNotification} from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {
  const dispatch = useDispatch()

  const addAnecdote = async (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    dispatch(createAnecdote(content))
    dispatch(setNotification(`New anecdote created: '${content}'`,5))
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