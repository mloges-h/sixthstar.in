import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Review from '../review'
import Header from '../header'
import HomeTalkForm from '../Form/HomeTalkForm'
export async function getStaticProps() {
  const res = await fetch(`https://js.sixthstar.in/wp-json/wp/v2/pages?slug=incoming-spam-filter`);
  const pages = await res.json();

  return {
    props: {
      page: pages[0], 
    },
  };
}


export default function IncomingSpamFilter({ page }) {

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
    <h1>Incoming Email Spam Filtering Service by Sixthstar</h1>
    <p>Get maximum protection from spam without any hassle!</p>
    <button><Link href='/contactus'>Contact US</Link></button>
    </div>

    <div className="col-md-6">
      <img src="https://res.cloudinary.com/daggx9p24/image/upload/v1724908917/incoming_spam_filter_banner_bafwjk.webp" alt="" />
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
      <h3>INCOMING SPAM FILTER</h3>
      <div className="row income-spam-1">

    <div className="col-lg-4 col-md-12">
    <i className="fa-solid fa-shield"></i>
      <h4>Guard your network against spams</h4>
      <p>We have applied innovative and best strategy to exclude spam mail before it reaches your inbox.</p>
    </div>

    <div className="col-lg-4 col-md-6">
    <i className="fa-solid fa-virus"></i>
    <h4>Identifies new spam instantly</h4>
    <p>We ensure uninterrupted progress in safe data collection and analysis, immediately finding new techniques and identifying the threats. That amassed spam filter technique is shared in real-time with all our worldwide clients, offering an instant solution against new malware issues.</p>

    </div>

    <div className="col-lg-4 col-md-6">
    <i className="fa-solid fa-envelope"></i>
    <h4>Maximized Email Continuity</h4>
    <p>An additional protection layer is provided in spam filter for redundancy and email continuity purpose. When the receiver mail server is unapproachable, SixthStar’s Spam filters queue inbound email.</p>
    </div>

  </div>
    </div>

  </div>
</div>
</section>

 {/* INCOMING SPAM FILTER sec ends */}

 {/* superior filter quality sec starts */}

<section className="income-spam-sup-sec">
<div className="container">
  <div className="row ">

    <div className="col-12">
    <h3>SUPERIOR FILTER QUALITY AND EFFICIENCY</h3>
     <div className="row income-spam-sup">

<div className="col-md-6">
    <p>Our spam filter process tons of emails per second. We offer incoming Spam filters that provide you with more accuracy.</p>
    <h4>Enhance resource effectiveness</h4>
    <p>Our superior level incoming filter functions in your mail infrastructure, and you no longer require to handle such a huge number of inbounding mail spam.</p>
    <h4>Strengthen employee productivity</h4>
    <p>Using this Spam filter, your quality time is preserved and thus you can concentrate fully on your business work.</p>
    <button><Link href='/contactus'>Enquire Now</Link></button>
</div>

<div className="col-md-6">
    <img src="https://res.cloudinary.com/daggx9p24/image/upload/v1724923882/superior_spam_filtering_ucsdvb.webp" alt="" />
</div>

</div>
    </div>

  </div>
</div>

</section>
 {/* superior filter quality sec ends */}

{/* process section starts */}

<section className="income-spam-process-sec">
<div className="container">
  <div className="row ">

    <div className="col-12 income-spam-process">
    <h3>PROCESS CARRIED OUT IN SIXTHSTAR’S INCOMING SPAM FILTER</h3>
    <ul className="timeline">
				<li>
					<h4>Filtering Technology</h4>
					<ul>
            <li>SMTP Level Filtering</li>
            <li>Data Level Filtering</li>
          </ul>
					</li>
				<li>
					<h4>Filtering Technology</h4>
					<ul>
            <li>Login</li>
            <li>Add domain</li>
          </ul>
          <p>Configure MX record</p>
          </li>
				<li>
					<h4>View incoming Bandwidth overview</h4>
        	</li>
          <li>
					<h4>View incoming delivery queue</h4>
        	</li>
          <li>
					<h4>Incoming whitelist filtering rules</h4>
          <ul>
            <li>Domain rules</li>
            <li>Admin rules</li>
            <li>Default rules</li>
            <li>Global rules</li>
            <li>Inherited rules</li>
            <li>Query rules</li>
          </ul>
        	</li>

			</ul>
    </div>

  </div>
</div>
</section>

{/* process section ends */}

{/* adding filter section start */}

<section className="income-filter-sec">
<div className="container">
  <div className="row ">

    <div className="col-12">
    <h3>ADD INCOMING WHITELIST FILTERING RULES</h3>
     <div className="row income-filter">

<div className="col-md-6">

    <h4>Incoming Blacklist filtering rules</h4>
    <ul>
      <li>Domain rules</li>
      <li>Admin rules</li>
      <li>Default rules</li>
      <li>Global rules</li>
      <li>Inherited rules</li>
      <li>Query rules</li>
    </ul>
</div>

<div className="col-md-6">
<img src="https://res.cloudinary.com/daggx9p24/image/upload/v1724930260/spam_filter_types_bfstqi.webp" alt="" />
</div>

</div>
    </div>

  </div>
</div>

</section>
{/* adding filter section ends */}

{/* adding filter section start */}

<section className="income-filter-sec">
<div className="container">
  <div className="row ">

    <div className="col-12">
    <h3>ADD INCOMING BLACKLIST FILTERING RULES</h3>
     <div className="row income-filter">

     <div className="col-md-6">
<img src="https://res.cloudinary.com/daggx9p24/image/upload/v1724931118/spam_filtering_black_list_xaml9i.webp" alt="" />
</div>


<div className="col-md-6">

    <h4>View incoming log search</h4>
    <ul>
      <li>Filter incoming mail</li>
      <li>Report</li>
    </ul>
    <h4>Create email scout report</h4>
    <ul>
      <li>Create email scout report</li>
      <li>Enable the quarantine</li>
      <li>Access the quarantine</li>
      <li>View Domain level incoming spam quarantine</li>
      <li>View Email Level spam quarantine</li>
      <li>IMAP Access</li>
      <li>IMAP folders</li>
    </ul>
    <h4>Message queueing</h4>
    <ul>
      <li>Automatic retry schedule</li>
      <li>Message queued</li>
      <li>Your own fallback server</li>
    </ul>
</div>



</div>
    </div>

  </div>
</div>

</section>
{/* adding filter section ends */}

{/* adding filter section start */}

<section className="income-spam-domain-sec">
<div className="container">
  <div className="row ">

    <div className="col-12">
    <h3>MANAGE DOMAIN ALIAS</h3>
     <div className="row income-spam-domain">


<div className="col-md-6">

    <ul>
      <li>Add domain alias</li>
    </ul>
    <h4>Configure domain settings</h4>
    <ul>
      <li>Rejected local part characters</li>
      <li>Advanced settings</li>
    </ul>
    <h4>Manage destinations</h4>
    <ul>
      <li>Add destinations</li>
      <li>Perform Network checks on destination server</li>
    </ul>
    <h4>View domain statistics</h4>
    <ul>
      <li>Train spam</li>
      <li>Train not spam</li>
      <li>Report spam</li>
      <li>Clear callout cache – incoming</li>
      <li>Set up whitelist filtering rules domain level</li>
      <li>Set up blacklist filtering rules domain level</li>
    </ul>
</div>

<div className="col-md-6">
<img className='manage-img' src="https://res.cloudinary.com/daggx9p24/image/upload/v1724932252/domain_jueymm.webp" alt="" />
</div>


</div>
    </div>

  </div>
</div>

</section>
{/* adding filter section ends */}

{/* FEATURES sec starts */}

<section className="income-spam-feat-sec">
<div className="container">
  <div className="row ">

    <div className="col-12">

    <h3>FEATURES OF INCOMING SPAM FILTER</h3>
    <div className="row income-spam-feat">

    <div className="col-md-6">
      <h4>TECHNICAL FEATURES</h4>
    <ul className="timeline">
				<li>
					<h5>Dual deployment options</h5>
					<p>You can either pick our hosted cloud spam filter or indulge the incoming filter instantly into your cloud hardware locally.</p>
					</li>
				<li>
					<h5>Integration and automation</h5>
          <p>SixthStar offers pre-built accomplices to completely incorporate the incoming filter with significant control panels and other email collaboration tools such as</p>
					<ul>
            <li>CPanel</li>
            <li>Odin Service Automation</li>
            <li>Direct Admin</li>
            <li>Plesk</li>
            <li>Open-Xchange.</li>
          </ul>
          </li>
          <li>
            <h5>Supported mail server</h5>
            <p>Our spam filter solution is completely independent and assists any SMTP consistent mail server like</p>
            <ul>
              <li>Zimbra mail</li>
              <li>Exchange mail filter</li>
              <li>Postfix mail filter</li>
              <li>Exim</li>
              <li>Gmail</li>
              <li>Lotus</li>
            </ul>
          </li>

			</ul>
    </div>

    <div className="col-md-6">
    <h4>FULL SUPPORT AND UPDATES</h4>
    <ul className="timeline">
				<li>
					<p>The incoming spam filter is entirely monitored, maintained and updated by our expert team and synchronize with our worldwide centralized database.</p>
					</li>
				<li>
					<h5>Quarantine and reporting</h5>
          <p>In order to verify the status of any email, we provide an extensive log-search tool with progressed quarantine options. These quarantine options can be displayed through IMAP via web.</p>
          </li>
          <li>
            <h5>Delivery queue</h5>
            <p>We provide an additional redundancy level in spam filter when required destination server become unreached. The queued mails are forced to the receiver end mail server when approachable again, thus it avoids email from being lost or pushed back to the sender.</p>
          </li>
          <li>
            <h5>Administration</h5>
            <p>In this incoming spam filter, there is an availability of multi-level central web interface that provides access to various permission levels, branding choices and other functional capabilities like user detection, whitelisting tools, blacklisting tools and attachment management.</p>
          </li>
			</ul>
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



{/* features sec ends */}


    </div>
  )
}
