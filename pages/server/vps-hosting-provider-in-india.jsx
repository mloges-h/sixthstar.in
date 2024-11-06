import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Header from '../header.jsx'

import AppFeatSlider from '../section/appfeatslider.jsx'
import VpsHostingSlider from '../section/vpshostingslider.jsx'
import HomeTalkForm from '../Form/HomeTalkForm.jsx'


export async function getStaticProps() {
  const res = await fetch(`https://js.sixthstar.in/wp-json/wp/v2/pages?slug=vps-hosting`);
  const pages = await res.json();

  return {
    props: {
      page: pages[0], 
    },
  };
}


export default function VpsHosting({ page }) {
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

         {/* banner sec start */}
         <section className='vps-container-banner'>
          <div className='vps-container-banner-content'>
            <h1 className='vps-container-banner-content-mainheading'>
            VPS Hosting
            </h1>
          
            <p className='vps-container-banner-content-para'>
            Lightning fast response times from our Cloud VPS hosting server.<br/> Our focus is to provide high security and with no downtime.
            </p>
            <button><Link href='/contactus'>contact us</Link></button>

          </div>
            
        </section>
 {/* banner sec ends */}

 {/* privatecloud sec start */}

        <div>
        <h2 className='text-center privatecloud-sec-heading'>
        High Availability Private Cloud VPS Hosting Server
        </h2>
        </div>
  <div className='private-cloud-main'>
    <div className='privatecloud-sec-colunm'>
        <p  className=' text-center privatecloud-sec-colunm-para'>
        Ιsolated Infrastructure with dedicated VPS hosting providing with hardware resources in high availability clusters with at least N+1 configuration that guarantee ultimate uptime, increased security & reliability. Full root access:

Full root/administrator access for comprehensive system control over software, services, users and rights.
        </p>
        </div>
        </div>
        
        
       

            {/* vps-ha-infra sec start*/}
            <div>
        <h3 className='text-center vps-ha-infra-sec-heading '>Other Common Features of High Availability Private VPS Cloud Server</h3>
        </div>
       
        <section className="vps-ha-infra-sec">
        <div className="container">
      
        <div className="row ">
        <div className="col-12">
            
            
        </div>
        
        <div className="row vps-ha-infra-pc">

    <div className="col-lg-2 col-md-12 vps-ha-infra-sec-column ">
        <img className='vps-ha-infra-sec-column-img' src="https://res.cloudinary.com/daggx9p24/image/upload/v1725885075/cc81c42524_ao8gfu-removebg-preview_vfr0sf.png" alt="SFTP" loading='lazy'/>
        <h4>Top Class Data Center​</h4>
    </div>

    <div className="col-lg-2 col-md-6">
    <img  className='vps-ha-infra-sec-column-img' src="https://res.cloudinary.com/daggx9p24/image/upload/v1725885072/91c01d124c_ra3cam-removebg-preview_mlt08l.png" alt="Features" loading='lazy' />
    <h4>Backup-Replicated Storage</h4>
    </div>

    <div className="col-lg-2 col-md-6">
    <img  className='vps-ha-infra-sec-column-img'src="https://res.cloudinary.com/daggx9p24/image/upload/v1725885072/38b6cbe0dd_kj4hn7-removebg-preview_bhhpcj.png" alt="Automation" loading='lazy' />
    <h4>Multiple Range Of Storage Capacity</h4>
    </div>

    <div className="col-lg-2 col-md-6">
    <img  className='vps-ha-infra-sec-column-img' src="https://res.cloudinary.com/daggx9p24/image/upload/v1725885072/8f9ea29976_lncpxo-removebg-preview_moldwd.png" alt="Forum" loading='lazy' />
    <h4>Immediate Resources Upgrade</h4>
    </div>

    <div className="col-lg-2 col-md-6">
    <img className='vps-ha-infra-sec-column-img' src="https://res.cloudinary.com/daggx9p24/image/upload/v1725885072/0017a768a7_zjwypt-removebg-preview_f1fily.png" alt="Secured" loading='lazy' />
    <h4>Wide Range Of Resource Options</h4>
    </div>

  </div>
        </div>

       
        <div className="row vps-ha-infra-mob-sec">

    <div className="col-lg-2 col-md-12">
        
    </div>
    </div>

        </div>
        <div className="container">
        <div className="row ">
        <div className="col-12">
            
            
        </div>
        
        <div className="row vps-ha-infra-pc">

    <div className="col-lg-2 col-md-12 vps-ha-infra-sec-column ">
        <img className='vps-ha-infra-sec-column-img' src="https://res.cloudinary.com/daggx9p24/image/upload/v1725885071/f537f2433c_sxhuig-removebg-preview_nbmgeo.png" alt="SFTP" loading='lazy'/>
        <h4>High Speed Network​</h4>
    </div>

    <div className="col-lg-2 col-md-6">
    <img  className='vps-ha-infra-sec-column-img' src="https://res.cloudinary.com/daggx9p24/image/upload/v1725885073/294d0031e4_qgf80x-removebg-preview_ccgi2g.png" alt="Features" loading='lazy' />
    <h4>Full Cloud Support</h4>
    </div>

    <div className="col-lg-2 col-md-6">
    <img  className='vps-ha-infra-sec-column-img'src="https://res.cloudinary.com/daggx9p24/image/upload/v1725885072/4a4022fdf2_goytea-removebg-preview_maucaf.png" alt="Automation" loading='lazy' />
    <h4>Migrate From VMware Or Other Clouds</h4>
    </div>

    <div className="col-lg-2 col-md-6">
    <img  className='vps-ha-infra-sec-column-img' src="https://res.cloudinary.com/daggx9p24/image/upload/v1725885074/a0f01ddbce_xzoeu5-removebg-preview_jk8btt.png" alt="Forum" loading='lazy' />
    <h4>Windows Or Linux</h4>
    </div>

    <div className="col-lg-2 col-md-6">
    <img className='vps-ha-infra-sec-column-img' src="https://res.cloudinary.com/daggx9p24/image/upload/v1725885073/2707bf7b58_t1ogdr-removebg-preview_lv9ylz.png" alt="Secured" loading='lazy' />
    <h4>With Unmetered Monthly Traffic Included</h4>
    </div>

  </div>
        </div>

       
        <div className="row vps-ha-infra-mob-sec">

    <div className="col-lg-2 col-md-12">
        
    </div>
    </div>

        </div>

        </section>
        

      



          {/* advantages sec start*/}
           
      {/* vps-ha-inf starts */}
        <div>
        <h2 className='text-center vps-ha-inf-sec-heading'>
High Availability Infrastructure        </h2>
        </div>
        <div className='row vps-ha-inf-sec-row'>
        <div className='col-sm vps-ha-inf-sec-colunm'>
        <img className='vps-ha-inf-sec-img' src="https://res.cloudinary.com/daggx9p24/image/upload/v1724674097/19947_ul6zsr.jpg" alt="" />
        </div>
        <div className='col-sm vps-ha-inf-sec-colunm'>
    
        <p  className='vps-ha-inf-sec-colunm-para'>
        MassiveGRID’s Infrastructure is one of the few Cloud Infrastructures today that offers true High Availability Services. Having maximum reliability in mind, we built a state of the art Infrastructure that can achieve 100% uptime for our clients, regardless service, server type or operating system. Ask us anything to sales@massivegrid.com about our platform, we love talking for it!

        </p>
        </div>
        </div>
        {/* recovery versus end */}


      

            {/* increased accesibility start */}

           
            <div className='vpshosting-container-main'>
            <VpsHostingSlider />
            </div>
        

            {/* reliable-network-sec start */}
            <div>
                    <h2 className='text-center reliable-network-sec-heading'>Fast and Reliable Network Infrastructure</h2>
                </div>

            <section className="reliable-network-sec">
            <div className="container"> 
              
  <div className="row ">

    <div className="col-12">
   
    
    <div className="row reliable-network">

          <div className="col-md-6  ">
            <ul className='reliable-section-colum1'>
              <li >
                <div className="col1">
                <i className="fa-regular fa-circle-check"></i>
                </div>
                <div className="col2">
                  <h4 className='vps-reliable-para'>Our Network is built on Cisco equipment in a redundant topology.</h4>
                 
                </div>
              </li>

              <li >
                <div className="col1">
                <i className="fa-regular fa-circle-check"></i>
                </div>
                <div className="col2">
                  <h4 className='vps-reliable-para'>The network’s capacity today is 3000 Gbps and expands every month. ​</h4>
                  
                </div>
              </li>

              <li >
                <div className="col1">
                <i className="fa-regular fa-circle-check"></i>
                </div>
                <div className="col2">
                  <h4 className='vps-reliable-para'>Our customers benefit from our state of the art network and it’s increasing capacity.​</h4>
                </div>
              </li>
            </ul>
          </div>

          <div className="col-md-6 align-content-center">
            <img className='reliable-network-sec-img' src="https://res.cloudinary.com/daggx9p24/image/upload/v1725963290/10221126_r8mzff_p48vao.png" alt="How it works" loading='lazy'/>
          </div>

          </div>
    
    </div>
  </div>
</div>
            </section>
            {/* infrastructure sec ends */}

            {/* fast hardware sec start */}

         
        <div className='row fast-hardware-row'>
        <div className='col-sm fast-hardware-sec-colunm'>
        <img className='fast-hardware-sec-img' src="https://res.cloudinary.com/daggx9p24/image/upload/v1725963453/d36e3db5cb_o6o4dh_nij2yc.png" alt="" />
        </div>

        <div className='col-sm fast-hardware-sec-colunm'>
        <div>
        <h2 className='text-center fast-hardware-sec-heading'>
Extremely Fast Hardware        </h2>
        </div>
        <p  className='fast-hardware-sec-colunm-para'>
        MassiveGRID’s Private Clouds offer DEDICATED resources to you. That means that you will have 100% of resources available anytime to your Servers. Storage is DEDICATED as well to you. No big shared and unstable storage pools. You get a variety of Reliable, Fast Dedicated Storages to choose from.
        </p>
        </div>
        </div>
{/* 
    choice-of-linux-start */}
        
        <div className='row linuxwindow-sec-row'>
        <div className='col-sm linuxwindow-sec-colunm'>
        <div>
        <h2 className='text-center linuxwindow-heading'>
Choice of Linux/windows
        </h2>
        </div>
        <p  className='linuxwindow-sec-colunm-para'>
        Customers can choose between various Linux and Windows distributions servers as per their wish such as:
        </p>
        <div className='row'>
            <div className='col-sm linuxwindow-sec'>
                <img className='linuxwindow-sec-image' src="https://res.cloudinary.com/daggx9p24/image/upload/v1724647922/centos_qm0mht.jpg" alt="" />
            </div>
            <div className='col-sm'>
                <img className='linuxwindow-sec-image' src="https://res.cloudinary.com/daggx9p24/image/upload/v1724647922/fedora_nswuuk.png" alt="" />
            </div>
            <div className='col-sm'>
                <img className='linuxwindow-sec-image' src="https://res.cloudinary.com/daggx9p24/image/upload/v1724647923/open-sueue_bwptil.jpg" alt="" />
            </div>
        </div>
        </div>
        <div className='col-sm linuxwindow-sec-colunm'>
            <div>
        <img className='linuxwindow-sec-img' src="https://res.cloudinary.com/daggx9p24/image/upload/v1724734805/linux-01-2c9d9cbbfba6fcb9_gtbvtm.webp" alt="" />
        </div>
        </div>
        </div>
        
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
