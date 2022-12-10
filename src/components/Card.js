import { useState } from "react"
import { NavLink } from "react-router-dom"
import Modal from "./Modal"

const Card = ({ movies }) => {
    const [showModal, setShowModal] = useState(false)
    const [img, setImg] = useState('')
    const handleClick = (e) => {
        setImg(e.target.src)
        setShowModal(true)
    }

    const handleClose = () => {
        setShowModal(false)
    }

    const modal = <Modal
        src={img}
        onClose={handleClose}
    />



    let content;
    if (movies.Response === "False") {
        content = <div className="flex justify-center">{movies.Error}</div>
    } else {
        content = <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {movies.map((movie, index) =>
                <div className="flex justify-center duration-300 hover:-translate-y-2" key={index}>
                    <div className="rounded-lg shadow-lg bg-white max-w-sm bg-[#434242]" >
                        <img onClick={handleClick} className="rounded-t-lg md:w-[350px] md:h-[300px] lg:w-[350px] lg:h-[400px] cursor-pointer " src={movie.Poster} alt="" />
                        <div className="p-6">
                            <h5 className="text-[#F3EFE0] text-md font-medium mb-2">
                                {movie.Title}
                            </h5>
                            <p className="text-[#F3EFE0] mb-4">
                                {movie.Year}
                            </p>
                            <NavLink to={`/detail/${movie.imdbID}`}>
                                <button
                                    type="button" className="text-white bg-[#22A39F] hover:bg-[#22A39F] focus:ring-4 focus:outline-none focus:ring-[#22A39F] dark:focus:ring-[#22A39F] font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                                >
                                    Detail
                                </button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            )}
        </div >
    }

    return <>
        {content}
        {showModal && modal}
    </>

}

export default Card