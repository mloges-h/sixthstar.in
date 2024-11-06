import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Header from '../header'
import HomeTalkForm from '../Form/HomeTalkForm'

export async function getStaticProps() {
  const res = await fetch(`https://js.sixthstar.in/wp-json/wp/v2/pages?slug=dedicated-server-hosting-provider-in-chennai`);
  const pages = await res.json();

  return {
    props: {
      page: pages[0], 
    },
  };
}


export default function DedicatedServer({ page }) {
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
        <Head>
        <title>Dedicated Hosting Chennai - Sixthstar Technologies</title>
		<meta name="description" content="high availability service providers in Chennai for applications, databases, and file storage both on-premises data centers and in the cloud." />
        </Head>
        {/* banner sec starts */}
        <section className='dedicated-banner-sec'>
        <div className="container dedicated-banner">
  <div className="row p-2">

    <div className="ban-left-1 col-md-6">
    <h1 className="text-container">
    <span className="letter flip">D</span>
    <span className="letter flip">e</span>
    <span className="letter flip">d</span>
    <span className="letter flip">i</span>
    <span className="letter flip">c</span>
    <span className="letter flip">a</span>
    <span className="letter flip">t</span>
    <span className="letter flip">e</span>
    <span className="letter flip">d</span>
<span className="letter flip">&nbsp;</span>
    <br/>

    <span className="letter flip">H</span>
    <span className="letter flip">o</span>
    <span className="letter flip">s</span>
    <span className="letter flip">t</span>
    <span className="letter flip">i</span>
    <span className="letter flip">n</span>
    <span className="letter flip">g</span>
  
     </h1>
        <p>We are the providers of exclusive dedicated server hosting in Chennai with resourceful facilities.</p>
        <div >
      

        </div>
        <button><Link href='/contactus'>Contact us</Link></button>
    </div>

    <div className="col-md-6 ban-right-1">

    </div>

  </div>
</div>
        </section>

      {/* banner sec ends */}

      {/* ha1 sec start */}

<section className="app-dev1-sec">
<div className="container">
  <div className="row ">

    <div className="col-12">
        <h2 className='text-center dedicated-sec1-heading'>High Performance Dedicated Hosting Server in Chennai</h2>
        <p className='dedicated-sec1-para'>Once the server is been given to the client they can have complete control servers with root/administrator access. You can choose our servers from Linux and Windows plans featuring high-reliability disks, multicore processors, spare disks, redundant network configuration and power supply. We also provide Firewalls and encryption method for your security purposes. If you are in need of extra RAM storage, our sales team will be keen to discuss the details with you.</p>
    
    </div>

  </div>
</div>
</section>

{/* ha1 sec ends */}

{/* ha elements sec starts */}

{/* ha elements sec ends */}

 {/* Ha Infra sec starts */}
<section className='ha-infa-sec'>
<div className="container">
  <div className="row ">

    <div className="col-12">
    </div>

  </div>
</div>
</section>

 <section className="vps-whychoose-sec p-3">
        <div className="container ha-infra">
            <div className="row vps-whychoose-1">
            
            <div className="col-md-6">
            <img className='why-first-image' src="https://res.cloudinary.com/daggx9p24/image/upload/v1725962258/6082c5d961_ui0knj-removebg-preview_yoetip.png" alt="HA why choose" loading='lazy' />
            </div>

            <div className="col-md-6 ">
            <div className="row ">

            <div className="col-12 ha-infra">
            
            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
   
    <div className="carousel-item active " data-bs-interval="10000">
    <h3 className='slideInUp'>Strong And Configurable Servers</h3>
    <p className=''>Enjoy features like unlimited bandwidth, strong security, and configurable servers Profit from the dedicated hosting on powerful bare-metal-powered servers in Chennai, which provide you adaptable infrastructure options, a fast network, unrivalled security, and round-the-clock support.</p>
    </div>
    
    <div className="carousel-item " data-bs-interval="2000">
    <h3 className='slideInUp'>Advanced Protection</h3>
    <p>For High-Performance Dedicated server Hosting provider in Chennai, we offer specialized security policies, zero-day vulnerability protection, and round-the-clock real-time security monitoring. This ensures that your dedicated server in India is always safe from potential dangers.</p>
    </div>

    <div className="carousel-item ">
      <h3 className='slideInUp'>NVMe SSD Disc Drives</h3>
      <p>
      In comparison to conventional hard disc drives (HDDs), using solid-state drives (SSDs) can unquestionably boost performance and data storage capabilities.</p>
    </div>

    <div className="carousel-item ">
    <h3 className='slideInUp'>Unlimited Bandwidth</h3>
    <p>
    With Dedicated Hosting, there are no limits on the amount of inbound or outbound data that can be sent to or from your hosting website or application.</p>   </div>
  
    <div className="carousel-item ">
    <h3 className='slideInUp'>Managed Server</h3>
    <p>
    
Receive excellent technical support from our experienced staff. We make sure that your Chennai-based dedicated server provider is always current on security patches, OS updates, and other critical maintenance procedures.</p>   </div>

    <div className="carousel-item ">
    <h3 className='slideInUp'>Root-Level Access</h3>
    <p>
   
Obtain root-level access to fully operate your server and remotely monitor it without sacrificing security.</p>   </div>
    <div className="carousel-item ">
    <h3 className='slideInUp'>Service Uptime Of 99.99%</h3>
    <p>
    
As a dedicated hosting provider, we offer industry-leading uptime performance and provide a 99.99% uptime guarantee, showcasing our trust in our infrastructure and our business-class track record.</p>   </div>
   

  
  </div>

  




  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
  <i className="fa-solid fa-chevron-left"></i>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
  <i className="fa-solid fa-chevron-right"></i>
    <span className="visually-hidden">Next</span>
  </button>
</div>

            </div>

            </div>

            <div className="row vps-whychoose-2">
            <div className="col-12">
            
                <button> <Link href='/contactus' style={{color:'black'}}>Talk to our Experts</Link></button>
               
                </div>
                

            </div>
            </div>

            </div>
        </div>
        </section>

        {/* Ha Infra sec ends */}

       
      {/* ha cluster sec start */}
      <h2 className='text-center why-sixthstar-heading'>Why Sixthstar for Dedicated servers</h2>
      <section className="ha-clust-sec">
      <div className="container">
  <div className="row ">

    <div className="col-12">
    <div className="row ha-clust">

    <div className="col-md-6">
      <img src="https://res.cloudinary.com/daggx9p24/image/upload/v1725961780/50e05daba0_ploq0o.png" alt="High Availability Clusters" loading='lazy'/>
    </div>

    <div className="col-md-6">
      <ul>
        <li> <i className="fa-regular fa-circle-check"></i> <p>FULL CONTROL: Enjoy the freedom of hosting with your control – youcan install any software and have the Full root access with your own your choice of OS that gives you endless options. </p></li>
        <li> <i className="fa-regular fa-circle-check"></i> <p>RELIABILITY: Our dedicated Server hostings are set up with reliable sources. Even if there is any high-risk event of a disk failure, your dedicated Server will continue to function normally in our data center.</p></li>
        <li> <i className="fa-regular fa-circle-check"></i> <p>UPTIME GUARANTEE: We assure 99.9% uptime guarantee considering your peace of mind with unlimited bandwidth and disk storage.</p></li>
        <li> <i className="fa-regular fa-circle-check"></i> <p>NO HIDDEN COST: No setup fee, Installation fee or maintenance fee and provide the best service for you with no contract deals.</p></li>
        <li> <i className="fa-regular fa-circle-check"></i> <p>SECURITY & BACKUP: We are very much concerned about your security in the network operation and therefore we provide you firewalls and follow encryption methods. Also, we provide the best backup for your service with no cost.</p></li>
        <li> <i className="fa-regular fa-circle-check"></i> <p>SUPPORT SYSTEM: Our team will be available at any instance to stand by you and to deliver the best support service and maintenance for your server.</p></li>
      </ul>
    </div>

  </div>
    </div>

  </div>
</div>
      </section>

      {/* ha cluster sec start */}

            {/* ha cluster sec start */}
            <section className="ha-clust-sec">
      <div className="container">
        <h2 className='text-center'>Server Services</h2>

  <div className="row ">

    <div className="col-12">
    <div className="row ha-clust">

    <div className="col-md-6">
      <p className='server-service-para'>Apart from all the available resources and benefits of the dedicated server hosting in chennai, the main thing of the best service relies on the support and maintenance of a firm. Thus, our support team will be present 24*7 to provide maintenance and full-fill your your entire request at a possible quick time.

Grab our offers as soon as possible and scale in your business! Get more resources and greater control over your server environment with our custom-built dedicated server hosting provider Chennai, than a VPS/VDS hosting service can offer.
Whether your business is a start-up or a huge worldwide corporation, we offer enterprise-level solutions for your organization’s vital business software, websites, and apps. As the name suggests, only that and nothing else is done with a server. If it is used for social networking, e-commerce hosting, or business WordPress hosting, the risk of a security breach is reduced because it is used just for those and other purposes.
Thanks to its enhanced CPU, RAM, and storage capacities, the server can run a variety of online games better than other VPS Gaming servers, ensuring that you have a lag-free gaming experience and smooth transitions. No matter what game you are playing, the server always has enough resources to keep the game functioning smoothly.</p>
       
    </div>

    <div className="col-md-6">
      <img src="https://res.cloudinary.com/daggx9p24/image/upload/v1725961879/99d9d668cd_lq2mzd.png" alt="disaster recovery" loading='lazy'/>
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


      {/* ha cluster sec start */}



      </div>

          
    </div>
  )
}
