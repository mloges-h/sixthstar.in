import React from 'react';
import Head from 'next/head';
export async function getStaticProps() {
  const res = await fetch(`https://js.sixthstar.in/wp-json/wp/v2/pages?slug=testimonial`);
  const pages = await res.json();

  return {
    props: {
      page: pages[0], 
    },
  };
}


export default function Testimonial({ page }) {
  return (
    <div>
       <Head>
         <title>private and Secured business mail hosting​ in chennai, India - Sixth Star Technologies</title>
	<meta name="description" content="business mail hosting​ -from sixthstar Technologies provides a private and dedicated business email hosting to the business and Entreprises." />
	<link rel="canonical" href="https://sixthstartech.com/business-mail-hosting" />
	<meta property="og:locale" content="en_US" />
	<meta property="og:type" content="article" />
	<meta property="og:title" content="private and Secured business mail hosting​ in chennai, India - Sixth Star Technologies" />
	<meta property="og:description" content="business mail hosting​ -from sixthstar Technologies provides a private and dedicated business email hosting to the business and Entreprises." />
	<meta property="og:url" content="https://sixthstartech.com/business-mail-hosting" />
	<meta property="og:site_name" content="Sixth Star Technologies" />
	<meta property="article:publisher" content="https://www.facebook.com/sixthstartechnologies" />
	<meta property="article:modified_time" content="2024-07-11T12:10:11+00:00" />
	<meta property="og:image" content="https://sixthstartech.com/wp-content/uploads/2024/07/email-hosting-ban-bg-1024x858.png" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:label1" content="Est. reading time" />
	<meta name="twitter:data1" content="4 minutes" />
  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
     
        ` }} />
        </Head>
      {/* review */}

      {/* testimonials */}
      <section className="testimonial">
        <div className="container">
          <h3 className="server heading">Hear what our customers say</h3>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div
                  id="carouselExampleInterval"
                  className="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item testimo active" data-bs-interval="10000">
                      <h4 className="text-center">Dedicated Hosting</h4>
                      <div className="text-center">
                        <img
                          src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722061110/5star-img_urv4bd.webp"
                          className="text-center"
                          alt="Rating"
                          width={120}
                          height={20}
                        />
                      </div>
                      <p className="text-center p-3">
                        Professional guidance with unlimited resource availability. They allow you to easily scale the service at any time.
                      </p>
                      <h4 className="text-center testimo-name">Manikandan</h4>
                      <h5 className="text-center">Chrysalis Homeneeds Pvt. Ltd.</h5>
                    </div>
                    <div className="carousel-item testimo" data-bs-interval="2000">
                      <h4 className="text-center">Cloud Hosting</h4>
                      <div className="text-center">
                        <img
                          src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722061110/5star-img_urv4bd.webp"
                          className="text-center"
                          alt="Rating"
                          width={120}
                          height={20}
                        />
                      </div>
                      <p className="text-center p-3">
                        Lower or increase your cloud storage based on your requirement since their service is redundant and flexible payment is available.
                      </p>
                      <h4 className="text-center testimo-name">Richard</h4>
                      <h5 className="text-center">Shankara Building Products Ltd.</h5>
                    </div>
                    <div className="carousel-item testimo">
                      <h4 className="text-center">SSL</h4>
                      <div className="text-center">
                        <img
                          src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722061110/5star-img_urv4bd.webp"
                          className="text-center"
                          alt="Rating"
                          width={120}
                          height={20}
                        />
                      </div>
                      <p className="text-center p-3">
                        Our e-commerce site had growth only after installing SSL certification. They give you complete guidance right from installation to changing the site into HTTPS.
                      </p>
                      <h4 className="text-center testimo-name">Sethu Murugan</h4>
                      <h5 className="text-center">Hinduja Leyland</h5>
                    </div>
                    <div className="carousel-item testimo">
                      <h4 className="text-center">Shared Hosting</h4>
                      <div className="text-center">
                        <img
                          src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722061110/5star-img_urv4bd.webp"
                          className="text-center"
                          alt="Rating"
                          width={120}
                          height={20}
                        />
                      </div>
                      <p className="text-center p-3">
                        Though we opted for shared hosting, the services didn’t change. They are versatile and provided us with the support system at its best.
                      </p>
                      <h4 className="text-center testimo-name">Anitha</h4>
                      <h5 className="text-center">Bhoomi and Buildings Pvt Ltd</h5>
                    </div>
                    <div className="carousel-item testimo">
                      <h4 className="text-center">Spam Filter</h4>
                      <div className="text-center">
                        <img
                          src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722061110/5star-img_urv4bd.webp"
                          className="text-center"
                          alt="Rating"
                          width={120}
                          height={20}
                        />
                      </div>
                      <p className="text-center p-3">
                        Mail servers are a prodigy in Sixth Star. They have excellent features like blacklisting and abuse management where you won’t find any spams.
                      </p>
                      <h4 className="text-center testimo-name">Ganapathy</h4>
                      <h5 className="text-center">Billroth Hospitals</h5>
                    </div>
                    <div className="carousel-item testimo">
                      <h4 className="text-center">Dedicated Hosting</h4>
                      <div className="text-center">
                        <img
                          src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722061110/5star-img_urv4bd.webp"
                          className="text-center"
                          alt="Rating"
                          width={120}
                          height={20}
                        />
                      </div>
                      <p className="text-center p-3">
                        A distinct and cost-effective solution can be acquired here. It is sure that your dedicated server will be power-packed with resources that have outperforming features.
                      </p>
                      <h4 className="text-center testimo-name">Chalapathirao Sajjarao</h4>
                      <h5 className="text-center">ROCKWORTH</h5>
                    </div>
                    <div className="carousel-item testimo">
                      <h4 className="text-center">VPS Hosting</h4>
                      <div className="text-center">
                        <img
                          src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722061110/5star-img_urv4bd.webp"
                          className="text-center"
                          alt="Rating"
                          width={120}
                          height={20}
                        />
                      </div>
                      <p className="text-center p-3">
                        We received our VPS hosting at a reasonable cost on the requested date. They consistently deliver the services on schedule.
                      </p>
                      <h4 className="text-center testimo-name">Balu</h4>
                      <h5 className="text-center">Makkal TV</h5>
                    </div>
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleInterval"
                    data-bs-slide="prev"
                  >
                    <i className="fa-solid fa-chevron-left"></i>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleInterval"
                    data-bs-slide="next"
                  >
                    <i className="fa-solid fa-chevron-right"></i>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* testimonials ends */}
    </div>
  );
}
