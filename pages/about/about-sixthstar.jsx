import React from 'react'
import Head from 'next/head'
import Header from '../header'

export async function getStaticProps() {
	const res = await fetch(`https://js.sixthstar.in/wp-json/wp/v2/pages?slug=about-sixthstar`);
	const pages = await res.json();
  
	return {
	  props: {
		page: pages[0], 
	  },
	};
  }
  
  
  export default function About({ page }) {
  
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
<div className='about'>
    <h1 className='text-center about-heading'>
        About us
    </h1>
    <p className='about-para'>With more than 16 years of experience in offering a range of hosting services for any size business application, Sixth Star Technologies is a well-known and globally successful provider of IT solutions in India. Our corporate office is in Chennai and our sales office is in Malaysia.

By upholding the project quality, timelines, and technical support services, more than 1200 projects have been successfully produced on various platforms and delivered to numerous clients in various locations.

With our hosting packages and solutions, we create exceptional value for our customers and offer a great return on investment. Our responsive support staff will be on hand around-the-clock to address any kind of technical difficulty and assist you via live chats, phone calls, and emails whenever necessary.</p>
</div>



    </div>
  )
}
