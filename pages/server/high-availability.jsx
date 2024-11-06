import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Header from '../header.jsx'
import HomeTalkForm from '../Form/HomeTalkForm.jsx'

import AppFeatSlider from '../section/appfeatslider.jsx'


export async function getStaticProps() {
  const res = await fetch(`https://js.sixthstar.in/wp-json/wp/v2/pages?slug=high-availability`);
  const pages = await res.json();

  return {
    props: {
      page: pages[0], 
    },
  };
}


export default function HighAvailability({ page }) {
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
         <section className='highavailability-container-banner'>
          <div class="container">
       <div class="row ">

        <div class="col-md-6 highavailability-container-content">
        <h1>
            High Availability
            </h1>
          
            <p >
            High Availability (HA) is the ability of a system to operate <br/>continuously and error-free over a period of time. 

            </p>
            <button > <Link href='/contactus'> contact us</Link></button>
       </div>

        <div class="col-md-6 highavailability-container-content">
        <img src="https://res.cloudinary.com/daggx9p24/image/upload/v1725881862/ha_banner_lgglqu.webp" alt="" />
        </div>
             </div>
      </div>
        </section>
 {/* banner sec ends */}

 {/* cluster sec start */}

        <div>
        <h2 className='text-center cluster-sec-heading'>
        Cluster with High Availability
        </h2>
        </div>
        <div className='row cluster-sec-row'>
        <div className='col-sm cluster-sec-colunm'>
        <img className='cluster-sec-img' src="https://res.cloudinary.com/daggx9p24/image/upload/v1724406547/3cf6b05f0c_vqgmyn.jpg" alt="" />
        </div>
        <div className='col-sm cluster-sec-colunm'>
    
        <p  className='cluster-sec-colunm-para'>
        Servers that are clustered together into high availability clusters function as a single system. They utilise several networks but share the same storage, which is also known as a failover cluster. They carry out the same duties as the underlying system they serve because they are able to handle the same workloads.

one server in a cluster fails, the application or service hosted by the cluster can continue to function without interruption by another server or node. By setting up high-availability clusters, you may ensure that there isn’t a single point of failure for crucial processing and cut down on downtime altogether.

To guarantee that nodes are constantly prepared, HA clusters are routinely tested. The free Heartbeat programme is frequently used by IT administrators to keep tabs on cluster health. In order to make sure that everything is operating as it should, the programme sends data packets to every machine in the cluster.
        </p>
        </div>
        </div>
       

            {/* advantages sec start*/}
           
        <div>
        <h3 className='text-center advantage-sec-heading '>High Availability Advantages</h3>
        </div>
        <section className="advantages-sec">
        <div className="container">
        <div className="row ">
        <div className="col-12">
            
            
        </div>
        <div className="row advantages-pc">

    <div className="col-lg-2 col-md-12 advantage-sec-column ">
        <img className='advantage-sec-column-img' src="https://res.cloudinary.com/daggx9p24/image/upload/v1725882626/d4f6d1c61d_wkhruo.png" alt="SFTP" loading='lazy'/>
        <h4>Decreased downtime​</h4>
    </div>

    <div className="col-lg-2 col-md-6">
    <img  className='advantage-sec-column-img' src="https://res.cloudinary.com/daggx9p24/image/upload/v1725882626/726bbc8b4a_lohm5d.png" alt="Features" loading='lazy' />
    <h4>SLA within 1%​</h4>
    </div>

    <div className="col-lg-2 col-md-6">
    <img  className='advantage-sec-column-img'src="https://res.cloudinary.com/daggx9p24/image/upload/v1725882627/603547f57a_ew8teb.png" alt="Automation" loading='lazy' />
    <h4>Assurance of service continuity</h4>
    </div>

    <div className="col-lg-2 col-md-6">
    <img  className='advantage-sec-column-img' src="https://res.cloudinary.com/daggx9p24/image/upload/v1725882627/9e9b682f2_gc2cq0.png" alt="Forum" loading='lazy' />
    <h4>Outstanding performance</h4>
    </div>

    <div className="col-lg-2 col-md-6">
    <img className='advantage-sec-column-img' src="https://res.cloudinary.com/daggx9p24/image/upload/v1725882626/510c7479eb_ecmftj.png" alt="Secured" loading='lazy' />
    <h4>Protected data</h4>
    </div>

  </div>
        </div>

       
        <div className="row advantages-mob-sec">

    <div className="col-lg-2 col-md-12">
        
    </div>
    </div>

        </div>

        </section>

{/* recovery versus start */}
        <div>
        <h2 className='text-center cluster-sec-heading'>
       IT Catastrophe Recovery Versus High Availability?
        </h2>
        </div>
        <div className='row cluster-sec-row'>
        <div className='col-sm cluster-sec-colunm'>
        <img className='cluster-sec-img' src="https://res.cloudinary.com/daggx9p24/image/upload/v1724412948/12ecff3b02_mtxorx.jpg" alt="" />
        </div>
        <div className='col-sm cluster-sec-colunm'>
    
        <p  className='cluster-sec-colunm-para'>
        IT systems and services that are highly available are created to be accessible 99.999% of the time throughout both scheduled and unforeseen outages. Almost always on is the so-called “five-nine reliability system.”

The backup system or backup component takes over if a vital IT infrastructure fails but is still maintained by a high-availability architecture. Users and programmes can access the same data that was accessible prior to the interruption and continue working uninterrupted as a result.

IT Disaster Recovery describes the techniques, tools, and policies that IT organisations should use to restore vital IT services and components following a disaster. A data centre being destroyed as a result of a significant earthquake is an example of a cyber disaster.

High availability is a technique for handling minor but significant failures of easily repairable IT infrastructure components. A procedure called IT disaster recovery is used to handle major occurrences that might bring down the whole IT infrastructure.
        </p>
        </div>
        </div>
        {/* recovery versus end */}


      

            {/* increased accesibility start */}

            <div>
                <h2 className='text-center increased-sec-heading'>
                    Advantages of Increased Accessibility
                </h2>
                <p className='increased-sec-para'>
                Defining in detail the collection of availability concerns you wish to address is the first step in selecting a high availability solution. When it comes to business continuity, these concerns may be divided into five major categories.
                </p>
            </div>

            <div className='appfeatslider-container-main'>
            <AppFeatSlider />
            </div>
        

            {/* infrastructure-sec start */}
            <div>
                    <h2 className='text-center infrastructure-sec-heading'>Why exactly is an HA infrastructure required?</h2>
                </div>

            <section className="infrastructure-sec">
            <div className="container"> 
              
  <div className="row ">

    <div className="col-12">
   
    
    <div className="row infrastructure">

          <div className="col-md-6 ">
            <ul>
              <li >
                <div className="col1">
                <i className="fa-regular fa-circle-check"></i>
                </div>
                <div className="col2">
                  <h4>You frequently handle significant application administration.​</h4>
                 
                </div>
              </li>

              <li >
                <div className="col1">
                <i className="fa-regular fa-circle-check"></i>
                </div>
                <div className="col2">
                  <h4>Because part of your job entails guaranteeing excellent performance.​</h4>
                  
                </div>
              </li>

              <li >
                <div className="col1">
                <i className="fa-regular fa-circle-check"></i>
                </div>
                <div className="col2">
                  <h4>You desire a reliable service that is always available.​</h4>
                </div>
              </li>
            </ul>
          </div>

          <div className="col-md-6 align-content-center">
            <img src="https://res.cloudinary.com/daggx9p24/image/upload/v1724476939/On-premise_usccux.gif" alt="How it works" loading='lazy'/>
          </div>

          </div>
    
    </div>
  </div>
</div>
            </section>
            {/* infrastructure sec ends */}

<div className='container'>
    <h2 className='text-center ha-components-sec-heading'>
        Infrastructure with High Availability Components
    </h2>
    <div class="row ">

<div class="col-12 ha-components-sec">
<h3>Redundancy:
    </h3>
    <p >Hardware redundancy, software and application redundancy, and data redundancy are all elements of high-availability IT infrastructure. Redundancy refers to the ability of servers or database components in a high-availability cluster to carry out the same functions.</p>

    <h3>Replication:

    </h3>
    <p>High availability can only be attained by data replication. To share and duplicate data, a cluster’s nodes must be the same. The nodes must communicate with one another and exchange the same information to make sure that any node may step in and provide the best service possible if the server or network device it is supporting fails.

Data can also be replicated between clusters in order to support high availability and business continuity in the event that a data centre fails.

A high-availability cluster fails over when a job performed by the primary component that has failed is transferred to a backup component. A recommended practise for high availability and catastrophe recovery is the maintenance of an off-site failover infrastructure.

IT administrators can quickly redirect traffic to the failover system by monitoring the health of critical main systems in case they fail or become overloaded</p>

    <h3>Malfunction:
    </h3>
    <p>In contrast to fault tolerance, which aims for zero downtime, high availability has a lower downtime target. An yearly downtime of 4.61 minutes is anticipated for a high-availability system that seeks to achieve operational uptime of 99.999%, or five nines.

Contrary to high availability, delivering high-quality performance is not a priority for fault tolerance. Fault-tolerance architecture is used in IT infrastructure to prevent downtime for a mission-critical application.

Cost-wise, fault tolerance is more expensive than high availability. Fault tolerance is a more expensive way to guarantee uptime than high availability since it may involve backing up whole hardware, software, and power supply systems. High-availability systems do not require the replication of physical components.</p>

    <h3>Recovery:
    </h3>
    <p>Most business continuity plans include strategies for fault tolerance, high availability, and catastrophic recovery. These steps help sustain crucial operations and offer support when a major IT failure occurs in a company, regardless of how big or small. High availability and fault tolerance complement each other well since they help users in the event of an IT disaster.</p>

   
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
