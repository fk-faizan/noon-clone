import React from 'react'

const Card = () => {
    return (
        <>
            <div className="card" style={{width: '12rem'}}>
                <img src="https://z.nooncdn.com/products/tr:n-t_240/v1605814220/N41044065A_1.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                    <p className="card-title m-0">Apple iPhone 12 Pro Max</p>
                    <p className="card-text">256GB</p>
                    <p className="__price">AED <b>4682</b> </p>
                    <p className="__old-price">AED 5119 <span>8% OFF</span></p>
                    <p className="__arrival">Arrives <b>Tomorrow, Jun 12</b> </p>
                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                </div>
            </div>
        </>
    )
}

// image
// desc
// Price
// real price with discount
// Arrives
// express logo     ||| ratings


export default Card
