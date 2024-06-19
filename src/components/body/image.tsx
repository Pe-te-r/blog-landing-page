import './image.scss'
interface imageType{
    image: string
    height?: number
    width?: number
}
const ImageDiv: React.FC<imageType>=({image,height,width})=>{
    return(
    <>
        <div className='imageDiv'>
            <img src={image} height={height} width={width} alt="" />
        </div>
    </>
    )
}

export default ImageDiv