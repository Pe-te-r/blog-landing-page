import image from '../../assets/illustration-laptop-desktop.svg'
import ImageDiv from './image'
import Content from './content'
import './bodyBottom.scss'

const BodyBottom=()=>{
    const contents=[
        {
        h4:"  Free, open, simple",
        p:`  Blogr is a free and open source application backed by a large community of helpful developers. It supports 
            features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, 
            and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.`
    },
    {
        h4:"  Powerful tooling",
        p:`  Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but
  capable of producing even the most complicated sites.`
    }
]
    return(<>
        <div className="bottomContainer">
            <div className="bottom-left">
                <ImageDiv image={image} width={724} height={500}/>
            </div>
            <div className="bottom-right">
                {contents.map((content,index)=>{
                    return(
                        <Content key={index} h4={content.h4} p={content.p}/>
                    )
                })}
            </div>
        </div>
    </>)
}
export default BodyBottom