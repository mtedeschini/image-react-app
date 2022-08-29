import Image from "./Image"
import './ImagesList.css' 

export default function ImagesList({images}) {
    return(
        <div className="imagesList">
            {images.map((image, index) => {
                return(
                    <Image key={index} image={image}/>
                )
            })}
        </div>
    )
};
