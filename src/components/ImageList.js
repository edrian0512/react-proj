import React from 'react'
import ImageCard from './ImageCard'
import '../css/ImageList.css'
const ImageList = (props) => {
    console.log(props.images)
    const images = props.images.map(image => {

        return <ImageCard image={image} key={image.id} />
        // return <img src={image.urls.regular} key={image.id} alt={image.desciption} />

    })
    return (

        <div className='image-list'>
            {images}
        </div>
    )
}

export default ImageList