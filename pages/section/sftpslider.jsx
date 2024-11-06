import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function Sftpslider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
      return (
        <Slider {...settings}>
          <div className="sftp-transfer-mob">
          <img src="https://sixthstartech.com/wp-content/uploads/2024/04/pngwing.com-1-qlwqdmkinhzug7820sr7uhd95evx7twtl4xsbjur82.png" alt=""  />
          <h4>SFTP or FTPS?​</h4>
          </div>

          <div className="sftp-transfer-mob">
          <img src="https://sixthstartech.com/wp-content/uploads/2024/04/feature-selection-qlwqs3b3tpsp467nk1uj7tym8vl9o5c48qcs6uengy.png" alt="" />
          <h4>Features​​</h4>
          </div>
          
          <div className="sftp-transfer-mob">
          <img src="https://sixthstartech.com/wp-content/uploads/2024/04/automated-qlwr6nt1r9qp2l1shckcv5ltpvs2z96c8udpz8sz0y.png" alt="" />
          <h4>Automation​</h4>
          </div>

          <div className="sftp-transfer-mob">
           <img src="https://sixthstartech.com/wp-content/uploads/2024/04/question-qlwqxe4cd31wl0ihlubsrzt6u3gs2pdmmyscm0jqdu.png" alt="" />
    <h4>Forum​</h4>
          </div>

          <div className="sftp-transfer-mob">
            <img src="https://sixthstartech.com/wp-content/uploads/2024/04/secure-data-qlwskqnhr4f1hpcwbwpax9kkzvg4ru9i07gdxgtwgw.png" alt="" />
    <h4>Secured​</h4>
          </div>

        </Slider>
      );
    }
    
    