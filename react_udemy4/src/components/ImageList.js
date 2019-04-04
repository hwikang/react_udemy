import React from 'react';
import './ImageList.css'
import ImageCard from './ImageCard'
const ImageList = (props) =>{
    console.log("imagelist",props.images)

   const images= props.images.map((image) =>{
                                //해당되는거만 가져오기  {id,urls,alt_description} 
   // console.log(alt_description)
        return <ImageCard key={image.id} image={image}/>
    });
    return <div className="image-list">{images}</div>

}
export default ImageList;