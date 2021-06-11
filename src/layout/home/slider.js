import Slider from "react-slick";

const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true
};

const ImgSlider = () => {
    return (
        <>
            <div className="justify-content-center">
                <div className="top-highlight">
                    <img src="https://k.nooncdn.com/cms/pages/20210609/de1f2da18680909edbd1e68fa66fd1b5/en_toggle-noon-01.png" alt="/mashreq-card"  width="100%" height="100%" />
                </div>
                <div className="img-slider">
                    <Slider {...settings}>
                        <div>
                            <img src="https://k.nooncdn.com/cms/pages/20210610/d981949dcd2f5c054ddef85cffa4525b/en_slider-04.png" alt="/xiaomi-days-june-ae" width="100%" height="100%" />
                        </div>
                        <div>
                            <img src="https://k.nooncdn.com/cms/pages/20210609/a7d2ffb734d8e81ca42bad398857e4f5/en_noon-slider-ENBD-01.png" alt="/xiaomi-days-june-ae" width="100%" height="100%" />
                        </div>
                        <div>
                            <img src="https://k.nooncdn.com/cms/pages/20201020/79a2e38e27583a1a5db92d21097f3b8e/en_slider-emaar-uae-emaar.png" alt="/xiaomi-days-june-ae" width="100%" height="100%" />
                        </div>
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default ImgSlider
