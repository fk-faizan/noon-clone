import React from 'react'
import { Card } from '../../components/index';
import Slider from "react-slick";
import Products from '../../helper/products';

const settings = {
    // dots: true,
    // infinite: false,
    speed: 250,
    slidesToShow: 7,
    slidesToScroll: 7,
    // autoplay: true,
    // autoplaySpeed: 2000,
    // pauseOnHover: true
};


const Product = () => {
    return (
        <>
            <div className="pt-4 pb-5">
                <div className="row px-3 m-0 mb-2">
                    <h5>Recommended for you</h5>
                </div>
                <div className="row m-0">
                    <Slider {...settings}>
                        {
                            Products.map((e, i) =>
                                <Card key={i} img={e.imgUrl} promo={e.promo} alt={e.imgDetail} title={e.title} desc={e.desc} price={e.price} oldPrice={e.oldPrice} disc={e.discount} arrival={e.arrival} />
                            )
                        }
                    </Slider>
                </div>
            </div>

        </>
    )
}

export default Product
