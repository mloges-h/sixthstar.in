import React from 'react'
import Head from 'next/head'
import ContactUsForm from './Form/ContactUsForm'
import Link from 'next/link'
import Header from './header'

export async function getStaticProps() {
  const res = await fetch(`https://js.sixthstar.in/wp-json/wp/v2/pages?slug=contact`);
  const pages = await res.json();

  return {
    props: {
      page: pages[0], 
    },
  };
}


export default function Contact({ page }) {
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

        {/* banner sec starts */}

        <section className="contact-banner-sec">
        <div className="container-1">
  <div className="row ">

    <div className="col-12">
      
    </div>

  </div>
</div>
        </section>

        {/* banner sec ends */}

        {/* contact form starts */}

    <section className="contact-form-sec">
    <div className="container-1">
  <div className="row">
    <div className="col-md-6">
    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15554.6483831902!2d80.2334966!3d12.9294261!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1105717f8fe239c9%3A0x45c0f6cf503fc3ea!2sSixth%20Star%20Technologies%20-%20Web%20Hosting%20company%20in%20Chennai!5e0!3m2!1sen!2sin!4v1721981052844!5m2!1sen!2sin" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"/>
    </div>

    <div className="col-md-6 contact-form">
    <ContactUsForm/>
    </div>

  </div>
</div>
    </section>

        {/* contact form ends */}

            {/* contact para sec starts */}
        <section className="contact-para-sec">
        <div className="container-1 ">
  <div className="row ">

    <div className="col-12">
        <p>We never fail to hear your queries at any cause. You can call us or email and can fix meetings to get your things done very quickly. We are always at your door step to get involved and ensure to remain in constant touch till you get rid of your problems. Though we branch out at various geographical regions we never break down in providing our vast IT services. We have got everything covered meeting your needs.</p>
    </div>

  </div>
</div>
        </section>

        {/* contact para sec starts */}

        {/* contact address sec starts */}
        
        <section className="contact-add-sec">
        <div className="container-1 w">
  <div className="row ">

    <div className="col-12">
    <h3 className='text-center'>Find Us</h3>
    <hr />
    <div className="row contact-add">

    <div className="col-lg-3 col-md-6">
        <h3>Corporate Office</h3>
        <hr />
        <p><strong>Sixth Star Technologies,</strong><br/>
        1st Floor, No.3 & 4, Siri Towers, Fourrts Ave, Annani Indira Nagar, Muttukkaranchavadi, Thoraipakkam, Chennai, Tamilnadu, India – 600 097.</p>
        <ul>
            <li><i className="fa-solid fa-phone"></i> <Link href='tel:43869199'>(044) 43869199</Link></li>
            <li><i className="fa-solid fa-phone"></i> <Link href='tel:9962107399'>+91 99621 07399</Link></li>
            <li><i className="fa-regular fa-envelope"></i> <Link href='mailto:sales@sixthstar.in'>sales@sixthstar.in</Link></li>
            <li><i className="fa-regular fa-envelope"></i> <Link href='mailto:support@sixthstar.in'>support@sixthstar.in</Link></li>
        </ul>
    </div>

    <div className="col-lg-3 col-md-6">
    <h3>Malaysia</h3>
        <hr />
        <p><strong>Sixth Star Technologies,</strong> <br/>C4-2-39, Jalan 1/152,Taman OUG, Parklane ,58200, Kuala Lumpur, Malaysia.</p>
        <ul>
            <li><i className="fa-solid fa-phone"></i> <Link href='tel:+60 102117305'>+60 1021 17305</Link></li>
            <li><i className="fa-solid fa-phone"></i> <Link href='tel:+03 77720136'>+03 7772 0136</Link></li>
            <li><i className="fa-regular fa-envelope"></i> <Link href='mailto:sales@sixthstar.in'>sales@sixthstar.in</Link></li>
            <li><i className="fa-solid fa-globe"></i> <Link href='https://www.sixthstar.in'>www.sixthstar.in</Link></li>
        </ul>
    </div>

    <div className="col-lg-3 col-md-6">
    <h3>Germany</h3>
        <hr />
        <p><strong>Sixth Star Technologies,</strong> <br/>Boetzinger Straße 60, 79111 Freiburg, Germany. </p>
        <ul>
            <li><i className="fa-solid fa-phone"></i> <Link href='tel:+49 761 4514 0'>+49 761 4514 0</Link></li>
            <li><i className="fa-regular fa-envelope"></i> <Link href='mailto:sales@sixthstar.in'>sales@sixthstar.in</Link></li>
        </ul>
    </div>

    <div className="col-lg-3 col-md-6">
    <h3>Hyderabad</h3>
        <hr />
        <p><strong>Sixth Star Technologies,</strong><br/>
        Infotech Plot No A-38,Ground Floor JJ Nagar , Naredmet x Roads, Hyderabad-500094</p>
        <ul>
            <li><i className="fa-solid fa-phone"></i> <Link href='tel:9383996666'>+91 9383996666</Link></li>
        </ul>
    </div>

  </div>
    </div>

  </div>
</div>
        </section>

        {/* contact address sec ends */}


      </div>
    </div>
  )
}
