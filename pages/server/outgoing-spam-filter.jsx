import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Review from '../review'
import Header from '../header'
import HomeTalkForm from '../Form/HomeTalkForm'

export async function getStaticProps() {
  const res = await fetch(`https://js.sixthstar.in/wp-json/wp/v2/pages?slug=outgoing-spam-filter`);
  const pages = await res.json();

  return {
    props: {
      page: pages[0], 
    },
  };
}


export default function OutgoingSpamFilter({ page }) {

  return (
    <div>
      <Header/>
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
      {/* banner section starts */}

      <section className="income-spam-banner-sec">
      <div className="container">
  <div className="row income-spam-banner">

    <div className="col-md-6">
    <h4>Spam Filter</h4>
    <h1>Outbound Email Filtering Service by Sixthstar</h1>
    <p>Blocks spams to provide the most secured email delivery</p>
    <button><Link href='/contactus'>Contact US</Link></button>
    </div>

    <div className="col-md-6">
      <img src="https://res.cloudinary.com/daggx9p24/image/upload/v1724935289/outgoing_spam_filter_mf7ehq.png" alt="" />
    </div>

  </div>
</div>
      </section>

      {/* banner section ends */}

            {/* review section starts */}
      <Review />
 {/* review section ends */}


 {/* INCOMING SPAM FILTER sec starts */}

<section className="income-spam-1-sec">
<div className="container">
  <div className="row ">

    <div className="col-12">
      <h3>WHY SELECT SIXTHSTAR OUTGOING SPAM FILTER?</h3>
      <p>SixthStar offers cloud-based outgoing spam filter that detects and blocks spams to provide the most secured email delivery. Using the outgoing spam filter, you can easily remove mail delivery issues caused by IP address blacklisting.</p>
      <div className="row income-spam-1">

    <div className="col-lg-4 col-md-12">
    <i className="fa-solid fa-shield"></i>
      <h4>Evade IP blacklisting</h4>
      <p>The utilization of outgoing spam filter will help you to get free from network-oriented issues and reduces the time spent on ordering the spam mail.</p>
    </div>

    <div className="col-lg-4 col-md-6">
    <i className="fa-solid fa-virus"></i>
    <h4>Defend your brand and infrastructure</h4>
    <p>We ensure positive client prestige by providing them with an excellent and complete email solution with integrity.</p>

    </div>

    <div className="col-lg-4 col-md-6">
    <i className="fa-solid fa-envelope"></i>
    <h4>Enhance abuse operability</h4>
    <p>Our outgoing spam filter provides neat and clear reports denoting, which users’ needs your consideration, and systematically locks them.</p>
    </div>

  </div>
  <div className="row income-spam-1">

    <div className="col-lg-4 col-md-12">
    <i className="fa-solid fa-shield"></i>
      <h4>Avoid heavy fines</h4>
      <p>Nation-wide legislative and control organization established a rule that is to pay heavy fines for Sending out harmful emails.</p>
    </div>

  </div>
    </div>

  </div>
  
  
</div>
</section>

 {/* INCOMING SPAM FILTER sec ends */}

 {/* superior filter quality sec starts */}


{/* process section starts */}

<section className="income-spam-process-sec">
<div className="container">
  <div className="row ">

    <div className="col-12 income-spam-process">
    <h3>PROCESS CARRIED OUT IN SIXTHSTAR’S OUTGOING SPAM FILTER</h3>
    <ul className="timeline">
				<li>Start outgoing filtering</li>
                <li>Create outgoing user</li>
                <li>Configure the abuse report address</li>
                <li>Configure outgoing delivery</li>
                <li>Set up SPF</li>
                <li>Set up DKIM</li>
                <li>Set up your SMTP Hostnames</li>
                <li>Configure your MTA</li>
                <li>Connection Limits</li>
                <li>Available Outgoing ports</li>
                <li>Block Outgoing Traffic on port 25</li>
                <li>Outgoing License Size</li>
                <li>How to count users/domains?</li>
				

			</ul>
    </div>

  </div>
</div>
</section>

{/* process section ends */}

{/* CONFIGURE section starts */}

<section className="outgoing-spam-config-sec">

<div className="container">
  <div className="row ">

    <div className="col-12">
    <h3>ADD INCOMING WHITELIST FILTERING RULES</h3>
     <div className="row income-filter">

<div className="col-md-6">

    <h4>Incoming Blacklist filtering rules</h4>
    <ul>
      <li>Qmail</li>
      <li>PostFix iP authentication</li>
      <li>PostFix per Username authentication</li>
      <li>PostFix Sender-based routing</li>
      <li>cPanel/WHM User-based authentication</li>
      <li>cPanel/WHM IP-bases authentication</li>
      <li>cPanel/WHM IP-based authentication for selected domain</li>
      <li>Exim IP based authentication</li>
      <li>Exim Username based authentication</li>
      <li>Microsoft Exchange</li>
      <li>Sendmail</li>
      <li>MailEnable</li>
      <li>Kerio</li>
      <li>Icewrap</li>
    </ul>
</div>

<div className="col-md-6">
<img src="https://res.cloudinary.com/daggx9p24/image/upload/v1724996682/configmta_rujjos.webp" alt="" />
</div>

</div>
    </div>

  </div>
</div>

</section>

{/* CONFIGURE section ends */}

{/* SPAM MONITORING section starts */}

<section className="outgoing-spam-mon-sec">

<div className="container">
  <div className="row ">

    <div className="col-12">
    <h3>OUTBOUND SPAM MONITORING</h3>
     <div className="row income-filter">
     <div className="col-md-6">
<img src="https://res.cloudinary.com/daggx9p24/image/upload/v1724997560/spam-monitoring_lmendu.webp" alt="" />
</div>

<div className="col-md-6">
    <ul>
      <li>Control panel quarantine (only for Local Cloud)</li>
      <li>Managing outgoing spam</li>
      <li>Automatic and manual locking</li>
      <li>Alternative reporting</li>
      <li>View outgoing bandwidth overview</li>
      <li>Manage identities</li>
      <li>Add identities</li>
      <li>Manage outgoing user</li>
      <li>Add an outgoing user</li>
      <li>Edit an outgoing user</li>
      <li>Outgoing Identity setup</li>
      <li>Setup Outgoing user authentication for multiple domains with same IP address</li>
      <li>Generate outgoing report</li>
    </ul>
</div>

</div>
    </div>

  </div>
</div>

</section>

{/* SPAM MONITORING section ends */}

{/* FILTERING RULES section starts */}

<section className="outgoing-spam-config-sec">

<div className="container">
  <div className="row ">

    <div className="col-12">
    <h3>VIEW OUTGOING BLACKLIST FILTERING RULES</h3>
     <div className="row income-filter">

<div className="col-md-6">
    <ul>
      <li>Domain rules</li>
      <li>Admin Rules</li>
      <li>Default Rules</li>
      <li>Global Rules</li>
      <li>Inherited Rules</li>
      <li>Query Rules</li>
      <li>Add an outgoing blacklist filtering rules</li>
      <li>Outgoing Log Search</li>
      <li>Filter outgoing mail</li>
      <li>Report</li>
      <li>Create email scout report</li>
      <li>DKIM Certificate generation</li>
      <li>Manage outgoing settings</li>
      <li>Clear Callout cache – outgoing</li>
      <li>View domain statistics outgoing</li>
    </ul>
</div>

<div className="col-md-6">
<img src="https://res.cloudinary.com/daggx9p24/image/upload/v1724998227/filtering_rules_clntv7.webp" alt="" />
</div>

</div>
    </div>

  </div>
</div>

</section>

{/* FILTERING RULES section ends */}

{/* TECHNICAL FEATURES section starts */}

<section className="outgoing-spam-mon-sec">

<div className="container">
  <div className="row ">

    <div className="col-12">
    <h3>TECHNICAL FEATURES OF OUTGOING SPAM FILTER</h3>
     <div className="row income-filter">
     <div className="col-md-6">
<img src="https://res.cloudinary.com/daggx9p24/image/upload/v1724998659/technical-features_unja67.webp" alt="" />
</div>

<div className="col-md-6">
    <ul>
      <li>Dual deployment</li>
      <li>The outbound email filtering can be implemented either in the hosted cloud or into your system hardware locally based on your needs. Additionally, it can be utilized as an outbound SMTP server or redirect all outgoing traffic via the system</li>
      <li>Integration and automation</li>
      <li>We offer a pre-designed add-on to completely combine outgoing spam filter with significant control panels and other email collaboration tools like</li>
      <ul className='sub-list'>
        <li>CPanel</li>
        <li>Odin service automation</li>
        <li>ISP system</li>
        <li>Open-Xchange</li>
        <li>Plesk</li>
      </ul>
    </ul>
</div>

</div>
    </div>

  </div>
</div>

</section>

{/* TECHNICAL FEATURES section ends */}

{/* SUPPORTED MAIL section starts */}

<section className="outgoing-spam-config-sec">

<div className="container">
  <div className="row ">

    <div className="col-12">
    <h3>SUPPORTED MAIL SERVERS</h3>
     <div className="row income-filter">

<div className="col-md-6">
  <p>Our email solutions entirely support any of the SMTP based mail servers like</p>
  <ul>
    <li>Zimbra mail</li>
    <li>Postfix mail filter</li>
    <li>Exim</li>
    <li>Gmail</li>
    <li>Lotus</li>
  </ul>

    <h4>Reports and support</h4>
    <p>Apart from ARF reports and automatic locking, we also hold ties with RBL operators and security firm with business.</p>
    <h4>Software updates and maintenance</h4>
    <p>Don’t spend your quality time in doing administrating work for your system. Our expert professional team will completely take care of your system.</p>
    <h4>Administration</h4>
    <p>SixthStar’s spam filter has user-friendly interface provides various permission stage, branding choices, new user/account discovery, blacklisting tools, whitelisting tools etc.</p>
    <h4>Domain Settings</h4>
    <p>Allows global admins to specify some limits at the domain level that any admins cannot exceed.</p>
    <h4>Quota Management</h4>
    <p>Allows global admin to set different types of quota limits.</p>
    <h4>User Management Through Class-ofservice</h4>
    <p>Define which users in the domain can use a specific class of service.</p>
    <h4></h4>
</div>

<div className="col-md-6">
<img src="https://res.cloudinary.com/daggx9p24/image/upload/v1724999544/email_server_emdru9.webp" alt="" />
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


{/* SUPPORTED MAIL section ends */}

    </div>
  )
}
