import './image.scss'
interface imageType{
    image: string
}
const ImageDiv: React.FC<imageType>=({image})=>{
    return(
    <>
        <div className='imageDiv'>
            <img src={image} alt="" />
        </div>
    </>
    )
}

export default ImageDiv