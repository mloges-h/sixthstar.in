import React from 'react'
import Link from 'next/link'
import Review from './review'
import HomeTalkForm from './Form/HomeTalkForm'
import ClientSlider from './section/clientslider'
import Testimonial from './Testimonial'
import Header from './header'
import Head from 'next/head'


export async function getStaticProps() {
  const res = await fetch(`https://js.sixthstar.in/wp-json/wp/v2/pages?slug=Home`);
  const pages = await res.json();

  return {
    props: {
      page: pages[0], 
    },
  };
}


export default function Home({ page }) {
  return (
    <div>
    <Head>
         <title>{page.yoast_head_json.title} </title>
	<meta name="description" content={page.yoast_head_json.description} />
	<link rel="canonical" href='' />
	<meta property="og:locale" content={page.yoast_head_json.og_locale} />
	<meta property="og:type" content={page.yoast_head_json.og_type} />
	<meta property="og:title" content={page.yoast_head_json.og_title} />
	<meta property="og:description" content={page.yoast_head_json.og_description} />
	<meta property="og:url" content={page.yoast_head_json.og_url} />
	<meta property="og:site_name" content={page.yoast_head_json.og_site_name} />
	
	<meta property="article:modified_time" content={page.yoast_head_json.article_modified_time} />

	<meta name="twitter:card" content={page.yoast_head_json.twitter_card} />

  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
     {page.yoast_head_json.schema}
        ` }} />
        </Head>
        <Header/>
        {/* banner sec starts */}

        <section className="home-banner-sec">
        <div className="container">
  <div className="row ">

    <div className="col-12">
        <h1>ULTIMATE AND DIGITAL PRIVATE WORKPLACE</h1>
        <h2>THE EVOLUTION OF DIGITAL SOVEREIGNTY</h2>
        <div className="home-but">
            <button><Link href='/server/carbonio-mail-features'>CARBONIO MAIL</Link></button>
            <button><Link href='/contactus'>CARBONIO DEMO</Link></button>
        </div>
    </div>

  </div>
</div>
        </section>

        {/* banner sec ends */}

        {/* home partners section starts */}

        <section className="home-part-sec">

        <div className="row ">

<div className="col-12">
  <h3>Official Partners Of Zextras</h3>
<div className="row home-part">

<div className="col-lg-4 col-md-12 sixth">
    <h4>SIXTHSTAR TECHNOLOGIES</h4>
</div>

<div className="col-lg-4 col-md-6">
    <img src="https://res.cloudinary.com/daggx9p24/image/upload/v1725092543/certified_partner-removebg-preview_ov97n3_ed5ugq.webp" alt="" />
</div>

<div className="col-lg-4 col-md-6 ">
<h4>CARBONIO</h4>
</div>

</div>
</div>

</div>
        
        </section>

        {/* home partners section ends */}


        {/* ZEXTRAS section starts */}

        <section className="home-zextras-sec">
        <div className="container">
  <div className="row ">

    <div className="col-12">
    <h2>ZEXTRAS CARBONIO</h2>
    <p>Carbonio is trusted by most of the businesses who looking for digital sovereignty but can’t give up scalability.</p>

    <div className="row home-zextras">

    <div className="col-md-6">
        <h4>Robust and Secure</h4>
        <p>The private corporate email and collaboration platform Carbonio is completely exclusive and includes:</p>
        <ul>
            <li> <i className="fa-regular fa-square-check"></i> <p>E-mail, Contacts and Calendar Essentials, Address book all shareable across a domain</p></li>
            <li> <i className="fa-regular fa-square-check"></i> <p>A complete corporate email server equipped with anti-spam and anti-virus software.</p></li>
            <li> <i className="fa-regular fa-square-check"></i> <p>Chat and Video chats.</p></li>
            <li> <i className="fa-regular fa-square-check"></i> <p>Supports Mobile App both Android and IOS.</p></li>
            <li> <i className="fa-regular fa-square-check"></i> <p>Robust backup and High Availability.</p></li>
            <li> <i className="fa-regular fa-square-check"></i> <p>File Management System including collaborative editing and document sharing.</p></li>
    
        </ul>
    </div>

    <div className="col-md-6">
    <video className="elementor-video" src="https://res.cloudinary.com/daggx9p24/video/upload/v1725012521/Zextras-Carbonio-1_ae8mhi.mp4" autoplay="" muted="muted" controlslist="nodownload"></video>
    </div>

  </div>

    </div>

  </div>
</div>
        </section>

        {/* ZEXTRAS section ends */}

        

        {/* review sec starts */}

        <section className='home-review-sec'>
            <Review />
        </section>

        {/* review sec ends */}

        {/* Digital Workplace section starts */}

        <section className="home-workplace-sec">
        <div className="container">
  <div className="row ">

    <div className="col-12">
    <h3>Fully Private Digital Workplace</h3>
    <div className="row home-workplace">
    <div className="col-12 work-tab">
    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
  <li className="nav-item" role="presentation">
    <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true"> Carbonio Mail Features</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false"> Carbonio Community Edition</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">  Carbonio for Public sector</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" id="pills-Public-tab" data-bs-toggle="pill" data-bs-target="#pills-Public" type="button" role="tab" aria-controls="pills-Public" aria-selected="false"> Carbonio for Public sector</button>
  </li>
</ul>
<div className="tab-content work-cont" id="pills-tabContent">
  <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
  <div className="container">
  <div className="row ">

    <div className="col-md-6">
      <ul>
        <li><i className="fa-regular fa-circle-check"></i> Private email server</li>
        <li><i className="fa-regular fa-circle-check"></i> Real-time backup and restore</li>
        <li><i className="fa-regular fa-circle-check"></i> Advanced storage management</li>
        <li><i className="fa-regular fa-circle-check"></i> Specialized administrative</li>
        <li><i className="fa-regular fa-circle-check"></i> High Availability</li>
        <li><i className="fa-regular fa-circle-check"></i> Secure authentication</li>
        <li><i className="fa-regular fa-circle-check"></i> Chat and video chats</li>
      </ul>
    </div>
    <div className="col-md-6">
      <img src="https://res.cloudinary.com/daggx9p24/image/upload/v1725020399/carbonio-email-management_m2bmia_megxhk.gif" alt="Email" />
    </div>
  </div>
</div>
  </div>
  <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">
  <div className="container">
  <div className="row ">

<div className="col-md-6">
  <ul>
    <li><i className="fa-regular fa-circle-check"></i> Advanced E-mail</li>
    <li><i className="fa-regular fa-circle-check"></i> Shared Calendars</li>
    <li><i className="fa-regular fa-circle-check"></i> File Management</li>
    <li><i className="fa-regular fa-circle-check"></i> Collaborative Editing</li>
    <li><i className="fa-regular fa-circle-check"></i> Easy Administration</li>
    <li><i className="fa-regular fa-circle-check"></i> Complete Set of Modern Features</li>
    <li><i className="fa-regular fa-circle-check"></i> Free and Open-source</li>
  </ul>
</div>
<div className="col-md-6">
  <img src="https://res.cloudinary.com/daggx9p24/image/upload/v1725020392/email-management-ce-ezgif.com-video-to-gif-converter_dbohbc.gif" alt="Email" />
</div>
</div>
</div>
  </div>
  <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabindex="0">
  <div className="container">
  <div className="row ">

    <div className="col-md-6">
      <ul>
        <li><i className="fa-regular fa-circle-check"></i> As per Government norms</li>
        <li><i className="fa-regular fa-circle-check"></i> Achieve Data Sovereignty</li>
        <li><i className="fa-regular fa-circle-check"></i> Private Deployment</li>
        <li><i className="fa-regular fa-circle-check"></i> on Premises</li>
        <li><i className="fa-regular fa-circle-check"></i> Digital Workplace</li>
        <li><i className="fa-regular fa-circle-check"></i> Locality</li>
        <li><i className="fa-regular fa-circle-check"></i> Data privacy</li>
      </ul>
    </div>
    <div className="col-md-6">
      <img src="https://res.cloudinary.com/daggx9p24/image/upload/v1725077618/carbonio_public_sector_p8a2ef.webp" alt="Email" />
    </div>
  </div>
</div>
  </div>
  <div className="tab-pane fade" id="pills-Public" role="tabpanel" aria-labelledby="pills-Public-tab" tabindex="0">
  <div className="container">
  <div className="row ">

<div className="col-md-6">
  <ul>
    <li><i className="fa-regular fa-circle-check"></i> 24 / 7 Expertise Support</li>
    <li><i className="fa-regular fa-circle-check"></i> Live monitoring</li>
    <li><i className="fa-regular fa-circle-check"></i> Scalability</li>
    <li><i className="fa-regular fa-circle-check"></i> Data protection</li>
    <li><i className="fa-regular fa-circle-check"></i> Video meeting and Chats</li>
    <li><i className="fa-regular fa-circle-check"></i> Advanced Email Management</li>
    <li><i className="fa-regular fa-circle-check"></i> Collaborative editing</li>
  </ul>
</div>
<div className="col-md-6">
  <img src="https://res.cloudinary.com/daggx9p24/image/upload/v1725077618/carbonio_telco_operators_a5rkzh.webp" alt="Email" />
</div>
</div>
</div>
  </div>
  </div>
    </div>

  </div>
   
    </div>

  </div>
</div>

        </section>

        {/* Digital Workplace section ends */}

        {/* home trans section starts */}

      <section className="home-trans-sec">
      <div className="container">
  <div className="row ">

    <div className="col-12">
    <h3>Transparency and Interoperability of Carbonio</h3>
    <div className="row home-trans">

    <div className="col-md-6">
    <img src="https://res.cloudinary.com/daggx9p24/image/upload/v1725078051/home-trans-img_dj6dod.webp" alt="" />
    </div>

    <div className="col-md-6">
    <p>Unleash the full transparency and interoperability of Carbonio Community Edition, which is 100% open source. Use the software as needed. Carbonio Community Edition, created for the networked workplace, is offered through native Linux packaging. Once installed, all of the functions are available right immediately. With crucial email features, video calls, file management, and collaborative editing, Carbonio CE is prepared for today’s collaborative hybrid workplace.</p>
    </div>

  </div>
    </div>

  </div>
</div>
      </section>

        {/* home trans section ends */}

        {/* home-talk-sec */}

        <section className='home-talk-sec'>
        <div className="container">
        <div className="row ">

            <div className="col-12">
            <h5 className='text-center p-3'>Talk To Our Expert</h5>
            <HomeTalkForm />
            </div>

        </div>
        </div>
        </section>

        {/* home-talk-sec */}

        {/* home Implement section starts */}
        <section className="home-implement-sec">
        <div className="container">
  <div className="row ">

    <div className="col-12">
    <h3>Implementing Carbonio</h3>

    <ul>
      <li>
        <i className="fa-regular fa-circle-check"></i> 
        <div>
          <h4>Purchase a certificate</h4> 
          <p>Buy the SSL certificate that matches exactly to your website need. Trusted CA will increase your visibility strength. You can choose our SSL certificate listed below.</p>
          </div>
          </li>
          <li>
        <i className="fa-regular fa-circle-check"></i> 
        <div>
          <h4>Install the certificate</h4> 
          <p>If you manage your site then you must first generate a certificate signing request (CSR) and then install it if not our team will help you install it. To complete the CSR process, Sixth Star will provide all the documents correctly.</p>
          </div>
          </li>
          <li>
        <i className="fa-regular fa-circle-check"></i> 
        <div>
          <h4>Convert to https</h4> 
          <p>Once you install SSL certificate change all your site page URL into HTTPS so that all the content will be served securely. Generally, Google will give preference/ priority to an HTTPS site.</p>
          </div>
          </li>
    </ul>

    </div>

  </div>
</div>
        </section>

        {/* home Implement section ends */}

    {/* home clients section starts */}
   <ClientSlider />
    {/* home clients section ends */}

    {/* testimaonial section starts */}

    <Testimonial />
    {/* testimonila section ends */}
        

    </div>
  )
}
