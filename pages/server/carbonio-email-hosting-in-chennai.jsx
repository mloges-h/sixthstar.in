import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Header from '../header'
import HomeTalkForm from '../Form/HomeTalkForm'


export async function getStaticProps() {
    const res = await fetch(`https://js.sixthstar.in/wp-json/wp/v2/pages?slug=carbonio-email-hosting-in-chennai`);
    const pages = await res.json();
  
    return {
      props: {
        page: pages[0], 
      },
    };
  }
  
  
  export default function CarbonioEmailHosting({ page }) {
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

                <section className="emailhosting-banner-sec">
                    <div className="container">
                        <div className="row ">

                            <div className="col-12">
                                <h1 className='email-hosting-banner-heading'>Carbonio Email Hosting</h1>
                                <p className='emailhosting-banner-para'>Carbonio Email Hosting & Collaborations provides an Secured and Private Collaboration Infrastructure to an organisations with our dedicated carbonio hosting services</p>
                            </div>

                        </div>
                    </div>
                </section>
                {/* banner sec ends */}

                {/* Mail Server sec1 starts */}

                <section className="emailhosting-sec">
                    <div className="container">
                        <div className="row ">

                            <div className="col-12">
                                <div className="row emailhosting">
                                    <h2 className='text-center emailhosting-sec1-heading'>
                                        Dedicated Carbonio Email Service Providers
                                    </h2>

                                    <div className="col-1 email-hosting-column">
                                        <p className='emailhosting-sec1-para'>
                                            With the option to be Carbonio email services provider on-premises or in the cloud (public and private), Zextras Carbonio offers the most cutting-edge email and team collaboration experience. Its cutting-edge, integrated web experience increases productivity and makes it possible for distant teams to work together without any issues.

                                            By providing numerous layers of data archiving, daily backups, and 1-click recovery tools, Carbonio focuses on security and data privacy in contrast to other email and collaboration systems.

                                            We will migrate you for FREE!

                                            Let us move your emails without losing any data. To prevent any delays, all migration tasks are scheduled in accordance with the hours when your firm is open with our secured carbonio Email service hosting.
                                        </p>

                                    </div>

                                    <div className="col-2">
                                        <img src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722082695/mail-server-img_bpyfmy.webp" alt="mail-server" loading='lazy' />
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>

                </section>

                {/* Mail Server sec1 ends */}

                {/* mail server why choose sec starts */}
                <section className="sharedserver-whychoose-sec">
                    <h2 className='text-center emailhosting-sec2-heading'>
                        Shared Hosting Types
                    </h2>
                    <div className="container">
                        <div className="row ">

                            <div className="col-12">
                                <div className="row sharedserver-whychoose">

                                    <div className="col-md-6">
                                        <img src="https://res.cloudinary.com/daggx9p24/image/upload/v1724837731/79ca18fe34_gyfbyt.jpg" alt="sharedserver-why-choose" loading='lazy' />
                                    </div>

                                    <div className="col-md-6">
                                        <div className="accordion sharedserver-tab" id="accordionExample">
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="heading1">
                                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
                                                        <h4><i className="fa-regular fa-pen-to-square"></i> Shared word press hosting</h4>
                                                    </button>
                                                </h2>
                                                <div id="collapse1" className="accordion-collapse collapse show" aria-labelledby="heading1" data-bs-parent="#accordionExample">
                                                    <div className="accordion-body">
                                                        <p>It allows multiple customers to share one server and its RAM, resources, and bandwidth. That said, shared hosting customers still benefit from one-click WordPress installs and basic features like free SSL, backups, and good security features</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="heading2">
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                                                        <h4><i className="fa-regular fa-pen-to-square"></i> Premium shared hosting</h4>
                                                    </button>
                                                </h2>
                                                <div id="collapse2" className="accordion-collapse collapse" aria-labelledby="heading2" data-bs-parent="#accordionExample">
                                                    <div className="accordion-body">
                                                        <p>Note that if you want a free domain, you’ll need to upgrade to the Premium Shared Hosting plan</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="heading3">
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                                                        <h4><i className="fa-regular fa-pen-to-square"></i> Windows shared hosting</h4>
                                                    </button>
                                                </h2>
                                                <div id="collapse3" className="accordion-collapse collapse" aria-labelledby="heading3" data-bs-parent="#accordionExample">
                                                    <div className="accordion-body">
                                                        <p>Windows Shared Hosting is a hosting service that allows multiple websites to share a single Windows server. It provides a reliable and cost-effective solution for small to medium-sized businesses, seamlessly accommodating the hosting requirements of multiple users through shared resources and infrastructure.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="heading4">
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                                                        <h4><i className="fa-regular fa-pen-to-square"></i> Linux shared hosting</h4>
                                                    </button>
                                                </h2>
                                                <div id="collapse4" className="accordion-collapse collapse" aria-labelledby="heading47" data-bs-parent="#accordionExample">
                                                    <div className="accordion-body">
                                                        <p>In Linux-shared hosting, multiple websites are hosted on a single server that runs the Linux operating system in a Linux-shared hosting environment. All websites hosted under this hosting model share the server’s resources, such as RAM, CPU, and disc space.</p>
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

                {/* mail server why choose sec starts */}

                {/* mail server sec2 sec starts */}
                <section className="mailserver2-sec">
                    <div className="container">
                        <h2 className='text-center'>Dedicated Carbonio Email Service Providers</h2>
                        <div className="row ">


                            <div className="col-12">


                                <div className="row mailserver2">
                                    <div className="col-md-6">
                                        <img src="https://res.cloudinary.com/daggx9p24/image/upload/v1724839181/29c2d07cdc-removebg-preview_xbtqqr.png" alt="windows" loading='lazy' />
                                        <h4 className='instant'>Instantaneous Backup & Restore</h4>
                                    </div>

                                    <div className="col-md-6">
                                        <p className='email-last-heading1'>With Carbonio’s clever real-time backup and restoration engine, which backs up each and every item and event with split-second accuracy, you can prevent data loss.</p>
                                    </div>
                                </div>

                                <div className="row mailserver2">
                                    <div className="col-md-6">
                                        <p className='email-last-heading'>Enhanced cryptographic security services, including message integrity, data encryption, and others, for email.</p>

                                    </div>
                                    <div className="col-md-6 image2">
                                        <img  src="https://res.cloudinary.com/daggx9p24/image/upload/v1724839182/fa5f4bd30d-removebg-preview_ofnxa1.png" alt="linux" loading='lazy' />
                                        <h4 className='email-last-para'>S/MIME Signatures and Encryption</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
                
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


                {/* mail server sec2 sec starts */}


            </div>
        </div>
    )
}
