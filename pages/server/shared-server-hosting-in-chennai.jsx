import Link from 'next/link'
import React from 'react'
import Head from 'next/head'
import Header from '../header'
import HomeTalkForm from '../Form/HomeTalkForm'

import SharedServerSlider from '../section/sharedserverslider'

export async function getStaticProps() {
  const res = await fetch(`https://js.sixthstar.in/wp-json/wp/v2/pages?slug=shared-server-hosting`);
  const pages = await res.json();

  return {
    props: {
      page: pages[0], 
    },
  };
}


export default function SharedServerHosting({ page }) {
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

      <div className='main'>
      <Header/>

        {/* banner sec starts */}
        <section className="shared-banner-sec">
        <div className="container">
  <div className="row ">

    <div className="col-md-6">
        <h1>Shared Server Hosting</h1>
        <p>Shared server hosting is commonly used for personal or small business purposes where you rely on the host server along with other websites.</p>
        <div className="row list">

         <div className="col-md-6">
            <ul>
                <li><i className="fa-solid fa-cloud"></i> Fast and reliable hosting services </li> 
                <li><i class="fa-solid fa-clock"></i> Uptime guaranteed </li> 
                <li><i class="fa-solid fa-gear"></i> Best technology services </li> 
            </ul>
        </div>

        <div className="col-md-6">
        <ul>
                <li><i className="fa-solid fa-server"></i> One click installation </li> 
                <li><i className="fa-solid fa-shield"></i> Best maintenance and support </li> 
            </ul>
        </div>

  </div>

  <div className='shared-btn'>
    <button className='btn1'><Link href='/contactus'>Contact now</Link></button>
    <button className='btn2'><Link href='/get-a-demo'>Get Demo</Link></button>
  </div>
    </div>

    <div className="col-md-6">
    <img src="https://res.cloudinary.com/daggx9p24/image/upload/v1724823177/a415545bb9a81e35d09b2fc184e2e801_kf7yge.gif" alt="" />
    </div>

  </div>
</div>
        </section>

        {/* banner sec ends */}

        {/* shared tab sec starts */}
        <section className="shared-tab-sec">
        <div className="container">
  <div className="row ">
    <div className="col-12 shared-tab">
    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
  <li className="nav-item" role="presentation">
    <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true"><i className="fi fi-sr-envelopes"></i> Two-factor Authentication</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false"><i className="fi fi-sr-calendar"></i> Discovery and Archiving</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false"> <i className="fa-regular fa-address-book"></i> Videos calls and chats</button>
  </li>
</ul>
<div className="tab-content" id="pills-tabContent">
  <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
  <div className="container">
  <div className="row ">

    <div className="col-md-6">
      <img src="https://res.cloudinary.com/daggx9p24/image/upload/v1725956251/2fa_dnqeqn.png" alt="Email" />
    </div>

    <div className="col-md-6">
      <h5>Your mails will have an additional layer of protection thanks to Carbonio’s two-factor authentication (2FA) system.</h5>
      <ul>
        <li><i className="fa-regular fa-circle-check"></i> Clear and intuitive communications</li>
        <li><i className="fa-regular fa-circle-check"></i> Unified inbox for social and business accounts</li>
        <li><i className="fa-regular fa-circle-check"></i> Attachment Drag & Drop and preview</li>
        <li><i className="fa-regular fa-circle-check"></i> Sorting, searching and flagging</li>
        <li><i className="fa-regular fa-circle-check"></i> Filtering rules & auto-responders</li>
        <li><i className="fa-regular fa-circle-check"></i> Smartphone app for iOS and Android</li>
        <li><i className="fa-regular fa-circle-check"></i> Compatible with MS Outlook, Apple Mail, Thunderbird & other clients</li>
      </ul>
    </div>

  </div>
</div>
  </div>
  <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">
  <div className="container">
  <div className="row ">

    <div className="col-md-6">
      <img src="https://res.cloudinary.com/daggx9p24/image/upload/v1725956251/Archiving_jlstyj.png" alt="Email" />
    </div>

    <div className="col-md-6">
      <h5>Businesses who need legal and audit compliance for their email service can use Carboni’s optional Archiving and Discovery capability.</h5>
      <ul>
        <li><i className="fa-regular fa-circle-check"></i> Personal, shared and public calendars</li>
        <li><i className="fa-regular fa-circle-check"></i> Easy group scheduling with free/busy views</li>
        <li><i className="fa-regular fa-circle-check"></i> Manage external participants & appointments</li>
        <li><i className="fa-regular fa-circle-check"></i> Quick setup and fast access to Reminders</li>
        <li><i className="fa-regular fa-circle-check"></i> Time zone integration and visualization</li>
        <li><i className="fa-regular fa-circle-check"></i> Seamless import & export options</li>
      </ul>
    </div>

  </div>
</div>
  </div>
  <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabindex="0">
  <div className="container">
  <div className="row ">

    <div className="col-md-6">
      <img src="https://res.cloudinary.com/daggx9p24/image/upload/v1725956252/video_calls_cpsipf.png" alt="Email" />
    </div>

    <div className="col-md-6">
      <h5>Zimbra Connect provides 1:1 texting, group chat, and video calls for collaboration. Nothing needs to be used separately, everything is under one roof.</h5>
      <ul>
        <li><i className="fa-regular fa-circle-check"></i> Centralized contact management</li>
        <li><i className="fa-regular fa-circle-check"></i> Shared and public address books</li>
        <li><i className="fa-regular fa-circle-check"></i> Auto contact gathering</li>
        <li><i className="fa-regular fa-circle-check"></i> Sorting, searching and flagging</li>
        <li><i className="fa-regular fa-circle-check"></i> Time zone integration and visualization</li>
        <li><i className="fa-regular fa-circle-check"></i> Directly create shared and private mailing lists and appointments</li>
      </ul>
    </div>

  </div>
</div>
  </div>
  </div>
    </div>

  </div>
</div>
        </section>

        {/* shared tab sec ends */}

        {/* shared feature sec starts */}

        <section className="shared-feat-sec">
        <div className="container">
        <div className="row ">

        <div className="col-12">
        <h3 className='p-3 text-center'>Features and Shared Web Hosting</h3>
        <div className="row shared-feat">

      <div className="col-lg-4 col-md-12">
      <i class="fa-brands fa-dropbox"></i>
    <h4>Graphic interfaces</h4>
    <p>For both control panel or Plesk control platform.</p>
    </div>

    <div className="col-lg-4 col-md-6">
    <i class="fa-solid fa-address-book"></i>
    <h4>Full Application Support</h4>
    <p>Applications of the third party can also be installed or removed by customers.</p>
    </div>

  

    </div>

    <div className="row shared-feat">

      <div className="col-lg-4 col-md-12">
      <i class="fa-solid fa-money-bill"></i>
    <h4>Affordable Pricing</h4>
    <p>Free and instant setup is available and your packages will be of reasonable cost.

</p>
    </div>

    <div className="col-lg-4 col-md-6">
    <i class="fa-solid fa-phone"></i>
    <h4>Free Technical Support</h4>
    <p>24/7 support is been provided with backups and our support team will help in maintaining your platforms.</p>
    </div>

 
    </div>

        </div>

      </div>
      </div>
        </section>

        {/* shared feature sec ends */}

{/* shared contact sec starts */}
      <section className="shared-cont-sec">
      <div className="container">
  <div className="row ">

    <div className="col-12 shared-cont">
      <div className='cont'>
      <i className="fa-solid fa-headset"></i>
        <h3><Link href='mailto:support@sixthstar.in'>Support</Link></h3>
      </div>
      <div className='cont'>
      <i className="fa-solid fa-message"></i>
      <div className='cont1'>
        <h4>Live Chat </h4>
        <p><Link href='mailto:support@sixthstar.in'>Any time</Link></p>
      </div>
      </div>
      <div className='cont'>
      <i className="fa-solid fa-phone"></i>
      <div className='cont1'>
        <h4>Call US </h4>
        <p> <Link href='tel:9176627399'>7am - 9pm</Link></p>
      </div>
      </div>
      <div className='cont'>
      <i className="fa-solid fa-phone"></i>
      <div className='cont1'>
        <h4>Sales Team </h4>
        <p><Link href='tel:9383996666'> +91 9383996666</Link></p>
      </div>
      </div>
    </div>

  </div>
</div>
      </section>

{/* enpt contact sec ends */}

{/* webdev process page start */}


<section className='home-talk-sec'>
        <div className="container">
        <div className="row ">

            <div className="col-12">
            <h5 className='text-center p-3'>Talk To Our Carbonio Expert</h5>
            <HomeTalkForm />
            </div>

        </div>
        </div>
        </section>



      </div>
    </div>
  )
}
