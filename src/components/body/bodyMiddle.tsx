 
import "./bodyMiddle.scss"
import Content from "./content"
import ImageDiv from "./image"
import image from '../../assets/illustration-phones.svg'

const BodyMiddle=()=>{
    const content={
        h4:"  State of the Art Infrastructure",
        p:`  With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.`
    }
    return(
        <div className="bodyMiddle">
            <div className="middleInner">

            <div className="left-middle">
                <ImageDiv image={image}/>
            </div>
            <div className="right-middle">
                <Content h4={content.h4} p={content.p} />
            </div>
            </div>

        </div>
    )
}
export default BodyMiddle