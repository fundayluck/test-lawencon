import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ListMoviePage from './page/ListMoviePage'

const App = () => {
    return (
        <Routes>
            <Route path='/' element={<ListMoviePage />} />
        </Routes>
    )
}

export default App