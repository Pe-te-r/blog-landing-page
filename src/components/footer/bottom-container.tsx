import React from 'react'
import './bottom-container.scss'

interface inputData{
    h5:string,
    items:string[]
}

const BottomContainer: React.FC<inputData>=({h5,items})=>{
    return (
        <div className='bottom-box'>
            <h5>{h5}</h5>
            <ul>
                {items.map((item,index)=>{
                    return(
                        <li key={index}>{item}</li>
                    )
                })}
            </ul>
        </div>
    )
}

export default BottomContainer