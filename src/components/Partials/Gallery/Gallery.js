import React, {useState} from 'react'
import './Gallery.scss'
import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai'

export default function Gallery(props) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const handleArrowPress = (way) => {
        way === "left"
          ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
          : setCurrentSlide(currentSlide < props.images.length - 1 ? currentSlide + 1 : 0);
      };
    return (
        <div className='gallery'>
            <AiOutlineArrowLeft className='arrow left' onClick={() => handleArrowPress(true)} />
            <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}vw` }}>
                {props.images.map((pic, id) => {
                    return <div id='snippet-container' key={id}>
                        <img src={pic} alt="" />
                    </div>
                })}
            </div>
            <AiOutlineArrowRight className='arrow right' onClick={() => handleArrowPress(false)} />
        </div>
    )
}
