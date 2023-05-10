import React from 'react'
import { useDispatch } from 'react-redux'
import { setTrainerGlobal } from '../store/slices/trainer.slice.js'
import { useNavigate } from 'react-router-dom'
import '../components/Pokedex/styles/home.css'

const Home = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(setTrainerGlobal(e.target.name.value.trim()))
        e.target.name.value = ''
        navigate('/pokedex')
    }

  return (
    <div className='home'>
        <img className='home__image' src="/Home/poke.png" alt="" />
        <h1 className='home__title'>Hi trainer!</h1>
        <p>Give me your name to start</p>
        <form onSubmit={handleSubmit}>
            <input className='home__input' id='name' type="text" />
            <button className='home__btn'>Start</button>
        </form>
    </div>
  )
}

export default Home