import ReactDOM from 'react-dom'
import { useEffect } from 'react'

function Modal({ onClose, children, src }) {

    useEffect(() => {
        document.body.classList.add('overflow-hidden')

        return () => {
            document.body.classList.remove('overflow-hidden')
        }
    }, [])

    return ReactDOM.createPortal(
        <div>
            <div onClick={onClose} className="fixed inset-0 bg-gray-300 opacity-80"></div>
            <div className="fixed inset-20 mx-[400px] flex justify-center ">
                <img src={src} alt='' className='w-[400px] rounded-md' />
            </div>
        </div>,
        document.querySelector('.modal-container')
    )
}

export default Modal