import React from 'react'
import { Header, Product, ImgSlider, Category } from '../layout/index'

const Home = () => {
    return (
        <>
        <Header />
        <div className="container">
            <ImgSlider />
            <Category />
            <Product />
        </div>
            {/* <br />
            <div style={{display:'flex', justifyContent:'center'}}>
                <button className="btn btn-primary">Click Me</button>
            </div>
            <br /> */}
        </>
    )
}

export default Home
