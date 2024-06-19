import ImageDiv from "../body/image"
import image from '../../assets/logo.svg'
import './footer.scss'
import BottomContainer from "./bottom-container"

const datas: Array<{h5: string, items: string[]}>=[
    {
        h5:'Product',
        items:['Overview','Pricing','Marketplace','Features','Integrations']
    },
    {
        h5:'Company',
        items:['About','Team','Blog','Careers']
    },
    {
        h5:'Connect',
        items:['Contact','Newsletter','LinkedIn']
    }

]



const Footer=()=>{
    return(
        <div className="footer">
            <ImageDiv image={image}/>
            {datas.map((data,index)=>{
                return(
                    <BottomContainer key={index} h5={data.h5} items={data.items}/>
                )
            })}

        </div>
    )
}
export default Footer