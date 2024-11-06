import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Header from '../header'
import HomeTalkForm from '../Form/HomeTalkForm'

export async function getStaticProps() {
  const res = await fetch(`https://js.sixthstar.in/wp-json/wp/v2/pages?slug=carbonio-communityedition`);
  const pages = await res.json();

  return {
    props: {
      page: pages[0], 
    },
  };
}


export default function FleetManagement({ page }) {
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

               {/* banner */}
 <section className='carboniocommunityedition-container-banner'>
          <div className='carboniocommunityedition-container-banner-content'>
            <h1 className='carboniocommunityedition-container-banner-content-mainheading'>
            Carbonio Community Edition  
            </h1>
          
            <p className='carboniocommunityedition-container-banner-content-para'>
            Carbonio Community Edition is 100% open source:<br/> unleash the full potential of transparency and interoperability.

            </p>
            <button className='section1-button'> <Link href='/contactus'>contact us</Link> </button>

          </div>
          
        </section>{/* banner-ends */}

            {/* why choose sec starts */}


            <section className="carbonio-community-edition-whychoose p-3">
                <div>
                    <h2 className='text-center carbonio-community-edition-why-heading '>
                    Why Choose Carbonio Community Edition
                    </h2>
                </div>
            <div className="container">
          <div className="row ">

          <div className="col-12">
          
          <div className="row ">

          <div className="col-md-6 align-content-center carbonio-community-edition-why-img">
            <img src="https://res.cloudinary.com/daggx9p24/image/upload/v1724323662/53bdb74a81_i6nnkm.jpg" alt="why choose fleet" loading='lazy'/>
          </div>

          <div className="col-md-6 carbonio-community-edition-why">
            <ul>
              <li >
                <div className="col1">
                <i className="fa-solid fa-lock-open" style={{backgroundColor:'rgb(19 33 155)'}}></i>
                </div>
                <div className="col2">
                  <h4>Private and Open Source</h4>
                  <p className='text-justify'>Carbonio Community Edition is 100% open source: unleash the full potential of transparency and interoperability. Adapt the software to your needs.</p>
                </div>
              </li>

              <li >
                <div className="col1">
                <i className="fa-solid fa-boxes-packing" style={{backgroundColor:'#004390'}}></i>
                </div>
                <div className="col2">
                  <h4>Ready out of the box</h4>
                  <p className='text-justify'>Designed for the connected workplace, Carbonio CE is available through Linux native packaging. Install it once and get all the features right away.</p>
                </div>
              </li>

              <li >
                <div className="col1">
                <i className="fa-brands fa-font-awesome" style={{backgroundColor:'#56bfd3'}}></i>
                </div>
                <div className="col2">
                  <h4>Fully-fledged platform</h4>
                  <p className='text-justify'>Carbonio Community Edition is ready for today’s collaborative hybrid workplace, with e-mail essentials, video-calls, file management, and collaborative editing.</p>
                </div>
              </li>

            
            </ul>
          </div>

          </div>
          </div>

          </div>
          </div>
            </section>

{/* why choose sec ends */}

{/* digital work sec starts */}

<section className="digital-work-sec">
<div className="container">
  <div className="row ">

    <div className="col-12">

    <div className="row ">

    <div className="col-md-6 align-content-center digital-work">
        <h2 className='digital-work-heading'>Your Private Digital workplace</h2>
     
      <p className='digital-work-para2'>Enjoy the convenience of a modern, faster, and more intuitive email experience. Shared inbox, attachment preview, and a other management tools such as tags, filters, and folder management.</p>
    </div>

    <div className="col-md-6 text-center">
        <img className='digital-work-image' src="https://res.cloudinary.com/daggx9p24/image/upload/v1724324131/c6c0634c71_jthz65.jpg" alt="Fleet Mangement sofware" loading='lazy' />
    </div>

    </div>
    </div>
  </div>
</div>
</section>

{/* digital-work sec ends */}

{/* collaborative sec starts */}




<section className="digital-work-sec">
<div className="container">
  <div className="row ">

    <div className="col-12">

    <div className="row ">
    <div className="col-md-6 text-center">
        <img className='digital-work-image' src="https://res.cloudinary.com/daggx9p24/image/upload/v1724326335/0e247187a3_m848kf.png" alt="Fleet Mangement sofware" loading='lazy' />
    </div>


    <div className="col-md-6 align-content-center digital-work">
        <h2 className='digital-work-heading'>Collaborative Editing</h2>
      
      <p className='digital-work-para2'>Work together simultaneously and edit documents. Real-time collaboration, integrated word processor, spreadsheet, and presentations. Comment, resolve issues, and suggest edits.</p>
    </div>

    
    </div>
    </div>
  </div>
</div>
</section>
{/* collaborative section ends */}

{/* contact section starts*/}
<section className='carbonio-call-t0-sec'>

<div className="container">
  <div className="row justify-content-center carbonio-c2a container ">

    <div className="col-md-8 align-content-center text-center">
    <h4 className='calendar-sec-heading'>Get the most out of your time using modern calendaring. Shared calendars, location and asset management, integration with emails.</h4>
    </div>

    <div className="col-md-4 align-content-center text-center conta-btn">
    <Link href="/contactus">Contact us</Link>
    </div>

  </div>
</div>
</section>
{/* contact section ends*/}

{/* file management-sec starts */}
<div>
    <h2 className='text-center file-management-heading'>
        File Management
    </h2>
</div>

<section className="file-management-sec">
<div className="container">
  <div className="row text-center">

    <div className="col-12">
    
    </div>
<div className='file-management-1' >
    <div className="row ">
<div className="col-lg-4 col-md-12 flip-card">
<div className="flip-card-inner">
    <div className="flip-card-front-carbonio flip-box">
    <img src="https://res.cloudinary.com/daggx9p24/image/upload/v1724223483/cloud-ids-svgrepo-com_bikcso.svg" alt="Real-time GPS Tracking" width={100} height={100} loading='lazy' />
    <h4>A private repository where you may upload, download, browse. </h4>
    </div>
    <div className="flip-card-back flip-box-back">
      <p>File versioning eliminates the need to track changes.</p>
    </div>
  </div>
</div>


<div className="col-lg-4 col-md-12 flip-card">
<div className="flip-card-inner">
    <div className="flip-card-front-carbonio flip-box">
    <img src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722239868/Route-Optimization-1_sehzdd.webp" alt="Route Optimization" width={100} height={100} loading='lazy' />
    <h4>Shared and Private folders.</h4>
    </div>
    <div className="flip-card-back flip-box-back">
      <p>Sharing files both internally and externally.</p>
    </div>
  </div>
</div>

<div className="col-lg-4 col-md-12 flip-card">
<div className="flip-card-inner">
    <div className="flip-card-front-carbonio flip-box">
    <img src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722239839/Maintenance-Management_adup5n.webp" alt="Maintenance Management" width={100} height={100} loading='lazy'/>
    <h4>Maintenance Management</h4>
    </div>
    <div className="flip-card-back flip-box-back">
      <p>Secure sharing to password-protect documents before emailing them.</p>
    </div>
  </div>
</div>
<div className="col-lg-4 col-md-12 flip-card">
<div className="flip-card-inner">
    <div className="flip-card-front-carbonio flip-box">
    <img src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722239830/Fuel-Management_ovlgpw.webp" alt="Fuel Management" width={100} height={100} loading='lazy' />
    <h4> Integrated directly with your email attachments</h4>
    </div>
    <div className="flip-card-back flip-box-back">
      <p>The process and act of creating an organized structure in which you store information for easy retrieval.</p>
    </div>
  </div>
</div>

</div>


  </div>



  </div>
</div>
</section>

{/* file-management-sec ends */}

{/* mobile-application-sec-start */}

<section className="mobile-application-sec">
<div className="container">
  <div className="row ">

    <div className="col-12">

    <div className="row ">
    <div className="col-md-6 text-center">
        <img className='mobile-application-image' src="https://res.cloudinary.com/daggx9p24/image/upload/v1724330737/HIRING_hh1enn.jpg" alt="Fleet Mangement sofware" loading='lazy' />
    </div>


    <div className="col-md-6 align-content-center digital-work">
        <h2 className='mobile-application-heading'>Dedicated Mobile Applications</h2>
      
      <p className='mobile-application-para2'>Enjoy the advantage of having your emails, calendars, files, and other essential information always available and be connected to your work no matter where you are.</p>
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



      </div>
    </div>
  )
}
