import './content.scss'
interface contentType{
    h4:string,
    p:string
}

const Content: React.FC<contentType>=({h4,p})=>{
    return (
        <div className='containerInfo'>
                    <h4> {h4}</h4>
                    <p> {p}</p>
        </div>
    )
}

export default Content;