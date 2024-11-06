import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Header from '../header'
import HomeTalkForm from '../Form/HomeTalkForm'


export async function getStaticProps() {
  const res = await fetch(`https://js.sixthstar.in/wp-json/wp/v2/pages?slug=cloud-hosting`);
  const pages = await res.json();

  return {
    props: {
      page: pages[0], 
    },
  };
}


export default function CloudHosting({ page }) {

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
        

        {/* banner section starts */}
        <section className='cloudserver-container-banner'>
          <div class="container">
  <div class="row ">

    <div class="col-md-6 cloudserver-container-banner-content">
    <h1 className='cloudserver-container-banner-content-mainheading'>
            Cloud Server
                </h1>
          
            <p className='cloudserver-container-banner-content-para'>
            SixthStar Technology stands as the ultimate choice for your <br/>cloud hosting needs, providing complete hosting solutions<br/> that exceed industry standards.            </p>
            <button> <Link href='/contactus'> contact us</Link></button>
    </div>

    <div class="col-md-6 cloudserver-container-banner-img">
            <img src="https://res.cloudinary.com/daggx9p24/image/upload/v1725947688/secure-cloud-computing_ljgx4f.png" alt="" />
    </div>

  </div>
</div>
            
        </section>

        {/* banner section ends */}

{/* spam filter sec 1 starts */}
<section className="cloudserver-sec1">
<div class="container">
  <div class="row ">

    <div class="col-12">    
        <h2>How to Select the Optimal Cloud Server Provider</h2>
        <hr />
        <p className='optimal-para'>When it comes to your cloud hosting service, choosing the right choice is key for your business. Here are some instructions to help you make the right decision</p>
        <p className='optimal-para'>Before diving deep into most cloud hosting providers, take some time to think about your unique needs. Consider factors such as your budget, technical prerequisites, scalability expectations, and the geographic location of your target audience. Choosing the provider that best suits your goals will depend on your specific requirements.</p>
        <p className='optimal-para'>Analyze the provider’s reliability and uptime performance in the past. Choose a service with a track record of reliable uptime and simple procedures because downtime can be quite expensive for your company.</p>
    </div>

  </div>
</div>
</section>
 
{/* spam filter sec 1 ends */}

{/* spam filter Trail sec starts */}
{/* spam filter Trail sec ends */}
<section className="cloudserver-sec">
<div className="container">
  <div className="row text-center">

    <div className="col-12">
    
    </div>
<div className='cloudserver-1' >
    <div className="row ">
<div className="col-lg-4 col-md-12 flip-card">
<div className="flip-card-inner">
    <div className="flip-card-front flip-box">
    <img src="https://res.cloudinary.com/daggx9p24/image/upload/v1724753141/security-safe-shield-svgrepo-com_trcoiq.svg" alt="Real-time GPS Tracking" width={100} height={100} loading='lazy' />
    <h4>Security Measures </h4>
    </div>
    <div className="flip-card-back flip-box-back">
      <p className='flip-para'>Security comes first in cloud servers. Ask about the provider’s security protocols, including things like firewall deployment, intrusion detection systems, and data encryption. See ISO 27001 and other certifications for further assurance</p>
    </div>
  </div>
</div>


<div className="col-lg-4 col-md-12 flip-card">
<div className="flip-card-inner">
    <div className="flip-card-front flip-box">
    <img src="https://res.cloudinary.com/daggx9p24/image/upload/v1724753140/loss-graph-down-svgrepo-com_yttukq.svg" alt="Route Optimization" width={100} height={100} loading='lazy' />
    <h4>Scalability</h4>
    </div>
    <div className="flip-card-back flip-box-back">
      <p className='flip-para'>Your hosting solution should be able to grow along with your enterprise. Ensure that the implementation provides scalability options so that it can easily accommodate increased traffic and resource requirements.</p>
    </div>
  </div>
</div>

<div className="col-lg-4 col-md-12 flip-card">
<div className="flip-card-inner">
    <div className="flip-card-front flip-box">
    <img src="https://res.cloudinary.com/daggx9p24/image/upload/v1724753139/flowchart-flow-diagram-browser-svgrepo-com_q31emy.svg" alt="Maintenance Management" width={100} height={100} loading='lazy'/>
    <h4>Data Center Locations</h4>
    </div>
    <div className="flip-card-back flip-box-back">
      <p className='flip-para'>Choose a provider whose data centers are strategically located to best serve your target audience. This can significantly increase overall website performance.</p>
    </div>
  </div>
</div>
<div className="col-lg-4 col-md-12 flip-card">
<div className="flip-card-inner">
    <div className="flip-card-front flip-box">
    <img src="https://res.cloudinary.com/daggx9p24/image/upload/v1724753139/connection-relation-communication-svgrepo-com_crrla3.svg" alt="Fuel Management" width={100} height={100} loading='lazy' />
    <h4> Exceptional Customer Support
    </h4>
    </div>
    <div className="flip-card-back flip-box-back">
      <p className='flip-para'>Stellar customer support is a must. Monitor the availability and responsiveness of the provider’s support team to ensure prompt assistance when needed.</p>
    </div>
  </div>
</div>

</div>


  </div>



  </div>
</div>
</section>
{/* spam filter feat sec start */}
<section className="cloudserver-feat-sec">
<div class="container">
  <div class="row ">

    <div class="col-md-6">
      <h4>Benefits of Cloud Hosting</h4>
      <p className='benefits-para'>We significantly demonstrate high verifiable levels of spam and virus detection service for your business. The organizations should take following,</p>
      <p className='benefits-para'><strong>Instant Launch</strong>–Our cloud servers start up instantly, saving you valuable time that can be better spent delivering content instead of dealing with complex server configurations</p>
      <p className='benefits-para'><strong>Intuitive Interface</strong>–The intuitive and user-friendly interface simplifies server management, allowing you to do things like secure data, resize servers, and upgrade with just a few clicks</p>
      <p className='benefits-para'><strong>Affordability</strong>– As one of India’s leading cloud hosting providers, SixthStar Technologies only charges for the resources you actually use. We also offer affordable bandwidth pricing, ensuring that unexpected traffic spikes don’t increase monthly costs.</p>
      <p className='benefits-para'><strong>Accessibility </strong>– It enables your business to deploy applications across platforms, from laptops to Android phones, increasing accessibility and reliability for users.</p>
      <p className='benefits-para'><strong>Reliability</strong>–Compared to shared hosting, it offers better reliability. Each server is isolated, preventing problems with one account from affecting the performance of others, and ensuring constant uptime.</p>
      <p className='benefits-para'><strong>Security</strong>– Your data is safe in the cloud. Distributing server data across redundant servers protects your information from hardware failures. Automated backups and snapshots assure that your server content remains secure and up-to-date</p>
      <p className='benefits-para'><strong>Hybrid Capabilities</strong>–SixthStar’s cloud hosting integrates seamlessly with both public and private clouds, as well as dedicated servers, providing flexibility and versatility in your hosting solutions.</p>
      <p className='benefits-para'><strong>Flexible Options</strong>– We offer a wide range of flavours, form factors, and storage options designed for popular applications, allowing you to choose just the right fit for your specific needs.</p>
      <p className='benefits-para'><strong>Fully redundant architecture</strong>– Our decentralized SAN architecture is supported by UPS and generator-backed redundant power feeds, ensuring zero downtime Layer 1 network providers with multiple layers and redundant network and fiber channel switching to assure great availability and redundancy prominent.</p>
    </div>

    <div class="col-md-6  text-center">
      <img src="https://res.cloudinary.com/daggx9p24/image/upload/v1724758432/1a3e492656_qujcsh.jpg" alt="" />
    </div>

  </div>
</div>
</section>

{/* cloudserver feat sec ends */}

{/* cloudserver Protect sec start */}
<div>
  <h2 className='text-center cloud-support-heading'>
    Sixthstar Support Features
  </h2>
  <p className='text-center cloud-support-para'>
    
At SixthStar Technologies, our services are designed to provide comprehensive support to meet a variety of business and individual needs. Here are some of the key support features and benefits you can expect when choosing cloud hosting with SixthStar
  </p>
</div>

<section className="cloudserver-pro-sec">
<div class="container">
  <div class="row ">

    <div class="col-12">
      <h3>Server Services</h3>
      <hr />
      <div class="row cloudserver-pro">

    <div class="col-lg-4 col-md-12">
      <h4>24/7 Technical Support
      </h4>
      <p className='services-para'>We recognize that technical issues may arise at any time. That’s why our dedicated support team is available 24/7, to help with any of your hosting problems or questions.</p>
        <hr />
    </div>

    <div class="col-lg-4 col-md-6">
      <h4>Server Management</h4>
      <p className='services-para'>As your business grows, your hosting needs may change. SixthStar’s support team is ready to help you upgrade or downgrade, ensuring your hosting situation matches your evolving needs.</p>
      <hr  />
    </div>

    <div class="col-lg-4 col-md-6">
    <h4>Scalability assistance</h4>
      <p className='services-para'>We prioritize data security. Our services include automated backup solutions and snapshots to protect your data. In case of data loss or emergency, our support team can assist with data recovery.</p>
      <hr  />
    </div>
  </div>
  <div class="row cloudserver-pro">

<div class="col-lg-4 col-md-12">
  <h4>Security Guidance</h4>
  <p className='services-para'>We are committed to providing the best possible performance. Our support staff can help optimize your hosting environment, implement content delivery networks (CDNs), and optimize server configuration for speed and responsiveness.</p>
    <hr />
</div>

<div class="col-lg-4 col-md-6">
  <h4>Performance Optimization</h4>
  <p className='services-para'>We are committed to providing the best possible performance. Our support staff can help optimize your hosting environment, implement content delivery networks (CDNs), and optimize server configuration for speed and responsiveness.</p>
  <hr  />
</div>

<div class="col-lg-4 col-md-6">
<h4>Migration Assistance</h4>
  <p className='services-para'>If you are switching from another hosting provider or platform, our support team can assist with the migration process, ensuring a seamless transition to SixthStar’s cloud server.</p>
  <hr  />
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


{/* spam filter Protect sec ends */}

{/* spam filter faq sec start */}




{/* spam filter faq sec ends */}
      </div>
    </div>
  )
}
