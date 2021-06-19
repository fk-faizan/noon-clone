import React from 'react'

const Card = ({ img, alt, title, desc, price, oldPrice, disc, arrival, promo }) => {
    return (
        <>
            <div className="card p-3" style={{ width: '12rem' }}>
                <div className="__disc">
                    <div className="__box">
                        {promo != '' ?
                            <div className="__content">
                                <p className="m-0">{promo}</p>
                            </div>
                            : ``
                        }
                    </div>
                    <button type="button" className="btn btn-warning btn-sm"><img src="https://z.nooncdn.com/s/app/com/noon/icons/wishlist.svg" alt="wishlist" /></button>
                </div>
                <img src={img} className="card-img-top" alt={alt} />
                <div className="card-body p-0 pt-2">
                    <div className="__detail">
                        <p className="card-title m-0">{title}</p>
                        <p className="card-text">{desc}</p>
                    </div>
                    <div className="__price">
                        <p className="__new-price m-0">AED <b>{price}</b> </p>
                        <p className="__old-price mb-1 text-muted"><del> {!oldPrice == '' ? `AED ${oldPrice}` : 'a'}</del> <span>{!disc == '' ? `${disc} % OFF` : ''}</span></p>
                    </div>
                    <div className="__arrival pt-2">
                        <p className="d-block-flex"><span>Arrives</span> <b>{arrival}</b></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card
