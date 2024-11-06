import React from 'react'
import Head from 'next/head'
import Header from '../header'

export async function getStaticProps() {
	const res = await fetch(`https://js.sixthstar.in/wp-json/wp/v2/pages?slug=why-choose-us`);
	const pages = await res.json();
  
	return {
	  props: {
		page: pages[0], 
	  },
	};
  }
  
  
  export default function WhyChooseUs({ page }) {
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
    <h1 className=' text-center about heading '>
        Why Choose Us
    </h1>
    <p className='about-para'>It’s our obligation to make your company appear opulent by utilising cutting-edge IT technology with a positive return on investment.

For leading companies, we have produced a large number of expert websites. When building websites, we really focused on innovation and creativity. We also offered clients cost-saving strategies, allowing us to access a variety of software solutions.

We believed that you could ask yourself why you should use our services for your needs. There are numerous additional people in this decade who are all providing comparable services.</p>
<p className='about-para'>
The conditions that we promise to uphold for our clients are as follows:

1. Committed Teamwork
We have a solid team and an efficient working environment, which guarantee

quality outcome
expanding and profitable
shortened time

2. Effectiveness and Efficiency
Efficiency, in our opinion, is doing the correct thing by comprehending the needs of the client. Our knowledgeable staff delivers the intended execution without wasting time or money. To meet our goals in a specific amount of time, business ethics and efficiency are crucial.

3. Prompt Delivery
Utilising the most recent IT technologies, our organisation delivers its services to each client on time. We are able to complete our task ahead of schedule for our clients.

4.Flexibility
Flexibility is a key concept in our workplace; it refers to the ability for each person to modify when, where, and how they work in order to accommodate the demands of the company and its clients. 

operational adaptability
Products’ adaptability
Process flexibility
Program flexibility
Production flexibility.

5.Reliability
By accurately and honestly attaining our goal, we as a team constantly perform effectively. Customers trust and give us positive ratings based on the services we deliver. The dependability is attained via,  Precision Security
Authenticity

6.Accountability
In our solutions, it is the individual obligation of every employee to do the tasks they have been given in order to meet the organisational objective. Our objective is to submit the goods to the appropriate clients in good condition and deliver them on schedule.</p>
</div>



    </div>
  )
}
