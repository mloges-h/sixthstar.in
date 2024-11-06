import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function VpsHostingSlider() {
    let sliderRef = useRef(null);

    const play = () => {
        sliderRef.slickPlay();
    };

    const pause = () => {
        sliderRef.slickPause();
    };

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 768, 
                settings: {
                    slidesToShow: 1,
                    centerMode: true 
                }
            }
        ]
    };

    return (
        <div>
            <div className="slider-container vpshosting-slider">
                <Slider ref={slider => (sliderRef = slider)} {...settings}>
                    <div className="pb-2 vpshosting-slides">
                        <div className="slide">
                        <img src="https://res.cloudinary.com/daggx9p24/image/upload/v1724733051/sata-svgrepo-com_l1iclk.svg " alt="Enhance Visibility" loading="lazy" width={50} height={50}  />
                        <h4>SSD Storage
                        ​</h4>
                        <p>Customers have the choice of standard SATA HDD storage or SDD storage instead which offers access times over ten times faster. SSD is the best choice if you have data on your VPS cloud server that is frequently accessed.</p>
                        </div>
                    </div>
                    <div className="pb-2  vpshosting-slides ">
                             <div className="slide">
                        <img src="https://res.cloudinary.com/daggx9p24/image/upload/v1724733051/set-up-svgrepo-com_afemi0.svg" alt="Collect Data" loading="lazy" width={50} height={50} />
                        <h4>Availability</h4>
                        <p>SixthStar’s VPS cloud platforms use only the highest quality in the industry from brands like HP, Intel, SolidFire and F5 Networks. Our aim is to make our products and service as fail-safe as possible and thus guaranteeing at least 99.9% availability and meaning your servers and business run smoothly.</p>
                        </div>
                    </div>
                    <div className="pb-2  vpshosting-slides ">
                    <div className="slide">
                        <img src="https://res.cloudinary.com/daggx9p24/image/upload/v1724733214/cloud-storage-svgrepo-com_dlldph.svg" alt="User Friendliness" loading="lazy" width={50} height={50} />
                        <h4>Backup</h4>
                        <p>As a reliable VPS hosting provider in India, SixthStar always ensures that your data is secure and we maintain regular interval of your data backup.</p>
                        </div>
                    </div>
                    <div className="pb-2  vpshosting-slides ">
                    <div className="slide">
                        <img src="https://res.cloudinary.com/daggx9p24/image/upload/v1724733051/technical-support-customer-svgrepo-com_ucoug1.svg" alt="Best Approach" loading="lazy" width={50} height={50} />
                        <h4>Support</h4>
                        <p>Fully managed Dedicated Hosting 24/7/365 Top notch support via Phone, SMS and E-mail 24/7/365 server monitoring 60 days money back Guarantee 99.9% uptime guarantee</p>
                        </div>
                    </div>
                    
                </Slider>
                <div style={{ textAlign: "center" }}>
                </div>
            </div>
        </div>
    );
}
