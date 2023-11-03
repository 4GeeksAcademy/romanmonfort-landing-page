import React from 'react'
import Card from './Card'

const Cards = () => {
    return (
        
        <div className="row  mt-3 mb-3">
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                <Card />
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 ">
                <Card />
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 ">
                <Card />
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 ">
                <Card />
            </div>
        </div>
        
    )
}

export default Cards