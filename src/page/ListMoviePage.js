import { useState } from 'react'
import Card from '../components/Card'

const AppPage = () => {
    const [title, settitle] = useState('batman')

    return (
        <div className='flex flex-col items-center p-5'>
            <input
                className='p-2 mb-2 border-2'
                placeholder='Search by title'
                value={title}
                onChange={(e) => settitle(e.target.value)}
            />
            <Card title={title} />
        </div>
    )
}

export default AppPage