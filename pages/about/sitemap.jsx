import React from 'react'
import Head from 'next/head'
import Header from '../header'

export async function getStaticProps() {
	const res = await fetch(`https://js.sixthstar.in/wp-json/wp/v2/pages?slug=sitemap`);
	const pages = await res.json();
  
	return {
	  props: {
		page: pages[0], 
	  },
	};
  }
  
  
  export default function Sitemap({ page }) {
  
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

        <section className='sitemap-container-banner'>
          <div className='sitemap-container-banner-content'>
            <h1 className= 'sitemap-container-banner-content-heading '>
            Sitemap
            </h1>
           

          </div>
        </section>{/* banner-ends */}   

        <section className='sitemap-section2'>
            <div className='row'>
                <div className='col-sm sitemap-column1'>
            <div className='sitemap-list1-content'>
                <h2 className='sitemap-list1-heading'> Carbonio Mail</h2>
            </div>
           <ul className='sitemap-list'>
            <li className='sitemap-list'><i class="fa-solid fa-circle-check"></i> Carbonio Mail Features</li>
            <li><i class="fa-solid fa-circle-check"></i>  Zextras Carbonio</li>
            <li><i class="fa-solid fa-circle-check"></i> Carbonio Demo</li>
            <li><i class="fa-solid fa-circle-check"></i> Carbonio Community Edition</li>
            <li><i class="fa-solid fa-circle-check"></i> High Availability</li>
           </ul>
           </div>
           <div className='col-sm sitemap-column1'>
            <div className='sitemap-list1-content'>
                <h2 className='sitemap-list1-heading'> Server</h2>
            </div>
           <ul className='sitemap-list'>
            <li><i class="fa-solid fa-circle-check"></i> Dedicated Hosting</li>
            <li><i class="fa-solid fa-circle-check"></i> VPS Hosting</li>
            <li><i class="fa-solid fa-circle-check"></i> Cloud Hosting</li>
            <li><i class="fa-solid fa-circle-check"></i> Shared Server Hosting</li>
            <li><i class="fa-solid fa-circle-check"></i> Carbonio Email Hosting Providers</li>
           </ul>
           </div>
           </div>
        </section>

        
    </div>
  )
}
