import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Modal from './components/Modal'
import DetailPage from './page/DetailPage'
import ListMoviePage from './page/ListMoviePage'

const App = () => {
    return (
        <Routes>
            <Route path='/' element={<ListMoviePage />} />
            <Route path='/detail/:id' element={<DetailPage />} />
            <Route path='/:id' element={<Modal />} />
        </Routes>
    )
}

export default App