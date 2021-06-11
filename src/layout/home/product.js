import React from 'react'
import { Card } from '../../components/index';

const Product = () => {
    return (
        <>
        <div className="pt-4 pb-5">
                <div className="row px-3 m-0 mb-2">
                    <h5>Recommended for you</h5>
                </div>
                <div className="row p-0 m-0 justify-content-around">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
        </div>

        </>
    )
}

export default Product
