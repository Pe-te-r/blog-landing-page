import Content from "./content";
import "./bodyTop.scss"
import ImageDiv from "./image";
import image from '../../assets/illustration-editor-desktop.svg'
const BodyTop=()=>{

    const contents=[
        {
            h4:`  Introducing an extensible editor`,
            p:`Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. 
                        The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, 
                        videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or 
                        change the looks of a blog`
        },{
           h4:`  Robust content management` ,
           p:`  Flexible content management enables users to easily move through posts. Increase the usability of your blog 
                by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.`
        }
    ]

    
    return(
        <div className="bodyTop">
            {/* <div className="box"> */}
                    <h3 className='heading3'>Design for the Future</h3>
                <div className="inner-box left">
                    {contents.map((conten,index)=>{
                        return(
                            <Content key={index} h4={conten.h4} p={conten.p}/>
                        )
                    })}
                </div>
                <div className="inner-box right">
                    <ImageDiv image={image}/>
                </div>
            {/* </div> */}
        </div>
    )

}

export default BodyTop;