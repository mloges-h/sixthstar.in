import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function AppFeatSlider() {
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
            <div className="slider-container appfeat-slider">
                <Slider ref={slider => (sliderRef = slider)} {...settings}>
                    <div className="pb-2 appfeat-slides">
                        <div className="slide">
                        <img src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722231106/overview_ujuzag.webp" alt="Enhance Visibility" loading="lazy" width={50} height={50}  />
                        <h4>Scheduled outages​</h4>
                        <p>High availability may decrease the effect on your customers and users when you need to take systems or data offline to complete necessary maintenance tasks, such nightly backups or the installation of new hardware or software.</p>
                        </div>
                    </div>
                    <div className="pb-2  appfeat-slides ">
                             <div className="slide">
                        <img src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722231223/to-do_zmq41j.svg" alt="Collect Data" loading="lazy" width={50} height={50} />
                        <h4> unexpected outages</h4>
                        <p>High availability systems can provide security against unplanned outages caused by human error, software bugs, hardware malfunctions, and environmental dangers.</p>
                        </div>
                    </div>
                    <div className="pb-2  appfeat-slides ">
                    <div className="slide">
                        <img src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722231106/overview_ujuzag.webp" alt="User Friendliness" loading="lazy" width={50} height={50} />
                        <h4>Disaster recovery</h4>
                        <p>In the event of a catastrophe, a group of tools, techniques, services, and protocols are utilised to restore and operate mission-critical software at a remote site.</p>
                        </div>
                    </div>
                    <div className="pb-2  appfeat-slides ">
                    <div className="slide">
                        <img src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722231106/ranking-star_cr651w.webp" alt="Best Approach" loading="lazy"width={50} height={50} />
                        <h4>load balancing</h4>
                        <p>High availability systems can be used for load balancing. The most widely used workload-balancing systems include allocating tasks to the resources that are available. Contrast this with conventional performance management techniques</p>
                        </div>
                    </div>
                    
                </Slider>
                <div style={{ textAlign: "center" }}>
                </div>
            </div>
        </div>
    );
}
