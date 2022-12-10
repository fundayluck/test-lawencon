import React from 'react'
import { Routes, Route } from 'react-router-dom'
import DetailPage from './page/DetailPage'
import ListMoviePage from './page/ListMoviePage'

const App = () => {
    return (
        <Routes>
            <Route path='/' element={<ListMoviePage />} />
            <Route path='/detail/:id' element={<DetailPage />} />
        </Routes>
    )
}

export default App