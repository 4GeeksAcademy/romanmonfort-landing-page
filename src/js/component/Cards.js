import React from 'react'
import Card from './Card'



const Cards = () => {
    let data=[{title:"hola",des:"tarjera de el principio"},
    {title:"como estamos",des:"tarjeta de el medio 1"},
    {title:"titulo del titulo",des:"tarjeta de el medio 2 "},
    {title:"el principio",des:"el final del mundo "}]
    return (
        <div className="row  mt-3 mb-3">
            {data.map((item,i) => {
            return( 
                <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                    <Card key={i} title={item.title} des={item.des} />
                </div>
                ) 

            })}      
        </div>      
    )
}

export default Cards