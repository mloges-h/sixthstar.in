import React from 'react'
import Head from 'next/head';
import Header from '../header'
import Link from 'next/link';
import HomeTalkForm from '../Form/HomeTalkForm';


export async function getStaticProps() {
  const res = await fetch(`https://js.sixthstar.in/wp-json/wp/v2/pages?slug=carbonio-email-features`);
  const pages = await res.json();

  return {
    props: {
      page: pages[0], 
    },
  };
}


export default function CarbonioEmailHosting({ page }) {


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

       {/* banner */}
 <section className='Carboniomail-container-banner'>
          <div className='Carboniomail-container-banner-content'>
            <h1 className='Carboniomail-container-banner-content-mainheading'>
            Carbonio Mail Features
            </h1>
            <h2 className='Carboniomail-container-banner-content-heading'>
            Private Mail Server
            </h2>
            <p className='Carboniomail-container-banner-content-para'>
            “The product’s email server at its heart is completely customisable.<br/>Only a small portion of the package includes collaboration and webmail functionality.”

            </p>
            <button className='section1-button'> <Link href="/contactus">contact us</Link> </button>

          </div>
          
        </section>{/* banner-ends */}

       

        <section className='real-time-backup-sec'>
    <div className="real-time-backup text-center">
    
<h2 className='text-center real-time-backup-sec-heading  '>Real-Time Backup and Restore</h2>

<div className="real-timecontainer">
  <div className="row real-time-backup">

    <div className="col-lg-2 col-md-12 m-3 p-3 text-center features-box1 W-30 h-20px">
    <img src="https://res.cloudinary.com/daggx9p24/image/upload/v1724223485/time-stopwatch-watch-svgrepo-com_eero6t.svg" className='' width={62} height={45} alt="feature" loading='lazy'/> 
    <h3> Real-time</h3>
    <p className='real-para'>Since the Carbonio backup system is real-time, even in the event of a disaster, there is no worry of data loss.</p>
    </div>

    <div className="col-lg-2 col-md-6 m-3 p-3 text-center features-box1" >
    <img src="https://res.cloudinary.com/daggx9p24/image/upload/v1724223485/recovery-services-svgrepo-com_l0ox3a.svg" width={62} height={45} alt="feature 2" loading='lazy'/> 
    <h3> Disaster recovery </h3>
    <p className='real-para'> Carbonio safeguards all of your data in the event of a calamity, which is constantly a serious threat. The recuperation process is very simple and rapid.</p>
    
    </div>

    <div className="col-lg-2 col-md-6 m-3 p-3 text-center features-box1">
    <img src="https://res.cloudinary.com/daggx9p24/image/upload/v1724223485/levels-adjust-svgrepo-com_df6egu.svg" width={62} height={45} alt="feature 3" loading='lazy'/> 
    <h3> Single items restore</h3>
    <p className='real-para'>Allows administrators to recover specific items from backups rather than the entire mailbox, saving time and resources.    </p>
    
    </div>

    <div className="col-lg-2 col-md-6 m-3 p-3 text-center features-box1">
    <img src="https://res.cloudinary.com/daggx9p24/image/upload/v1724223483/cloud-download-svgrepo-com_ljmlmt.svg" width={62} height={45} alt="feature 3" loading='lazy'/> 
    <h3> Restore Local Account</h3>
    <p className='real-para'>Allows administrators to retrieve all items within a certain retention period in order to restore accounts.</p>
    
    </div>

    <div className="col-lg-2 col-md-6 m-3 p-3 text-center features-box1">
    <img src="https://res.cloudinary.com/daggx9p24/image/upload/v1724223484/restore-svgrepo-com_uugrmh.svg" width={62} height={45} alt="feature 4" loading='lazy'/> 
    <h3> Backup Export </h3>
    <p className='real-para'> Allows administrators to export individual domains or accounts.</p>
    
    </div>

  </div>

 

  <div className="row real-time-backup-row" >

    <div className="col-lg-2 col-md-12 m-3 p-3 text-center features-box1">
    <img src="https://res.cloudinary.com/daggx9p24/image/upload/v1724223483/import-goods-delivery-svgrepo-com_u0y5vc.svg" className='' width={62} height={45} alt="feature 5" loading='lazy'/> 
    <h3> Import External Backup</h3>
    <p className='real-para'>Allows administrators to use and import backup files made on different infrastructure.</p>
    </div>

    <div className="col-lg-2 col-md-6 m-3 p-3 text-center features-box1" >
    <img src="https://res.cloudinary.com/daggx9p24/image/upload/v1724223483/cloud-ids-svgrepo-com_bikcso.svg" width={62} height={45} alt="feature 6" loading='lazy'/> 
    <h3>Backup on External Volume </h3>
    <p className='real-para'>Allows administrators to backup to NFS or bucket-based external storage.

</p>
    
    </div>

    <div className="col-lg-2 col-md-6 m-3 p-3 text-center features-box1">
    <img src="https://res.cloudinary.com/daggx9p24/image/upload/v1724223483/earning-finance-investment-wealth-currency-svgrepo-com_seqnnn.svg" width={62} height={45} alt="featur 7" loading='lazy'/> 
    <h3> Fast Multi-threading</h3>
    <p className='real-para'>Helps the recovery process by speeding it up by restoring many accounts at once.</p>
    
    </div>

    <div className="col-lg-2 col-md-6 m-3 p-3 text-center features-box1">
    <img src="https://res.cloudinary.com/daggx9p24/image/upload/v1724223483/check-svgrepo-com_i3uzpr.svg" width={62} height={45} alt="feature 8" loading='lazy'/> 
    <h3> Coherency Check</h3>
    <p className='real-para'>Designed to find damaged BLOBs and information.</p>
    
    </div>

    <div className="col-lg-2 col-md-6 m-3 p-3 text-center features-box1">
    <img src="https://res.cloudinary.com/daggx9p24/image/upload/v1724223483/automatic-flash-svgrepo-com_zczxh3.svg" width={62} height={45} alt="feature 8" loading='lazy'/> 
    <h3>Automatic Purge</h3>
    <p className='real-para'>The automatic cleanup process that gets rid of backups after a predetermined retention period.</p>
    
    </div>
 

  </div> 
 

</div>
{/* <button className="shbt justification-center" onClick={handleClick}>See More</button> */}

       
      
</div>
</section>
 <div>
      <h2 className='text-center storage-managment-heading'>Advanced Storage Management</h2>

    </div>
    <div className='row main-row-storage'>
      <div className='col-sm '>
       <img className='Carboniomail-storagemanagement-image' src="https://res.cloudinary.com/daggx9p24/image/upload/v1724231980/15633_hx3o89.jpg"  />
      </div>
      <div className='col-sm storagemanagement-columns-main '>
        <div className='row'>
          <div className='col-sm storagemanagement-columns-one'>
            <h2>Object Storage Support </h2>
            <p>Allows administrators to transfer a sizable amount of data to reliable cloud storage. Both preprovisioning and storage space are saved as a result. Additionally, it supports all S3-compatible services (including Cloudian, Scality S3, Amazon S3, EMC, OpenIO, and Swift).</p>
          </div>
          <div className='col-sm storagemanagement-columns-two'>
          <h2>Centralized Storage</h2>
          <p>Allows administrators to use a single shared drive for many mailstores. Better data management, particularly in large-scale multistore systems, and quicker transfer procedures, like mailbox moves, are the two key benefits.</p>
            </div>
            <div className='col-sm  storagemanagement-columns-three'>
            <h2>Hierarchical storage management</h2>
            <p>Allows administrators to use a single shared drive for many mailstores. Better data management, particularly in large-scale multistore systems, and quicker transfer procedures, like mailbox moves, are the two key benefits.</p>
            </div>
            
            
          
        </div>
        <div className='row storagemanagement-row'>
          <div className='col-sm storagemanagement-columns-four'>
          <h2>Item Deduplication</h2>
          <p>By automatically eliminating duplicate files and only saving them once, it helps conserve space. If necessary, the file may be referred to more than once without taking up more space.</p>
          </div>
          <div className='col-sm  storagemanagement-columns-five'>
          <h2>Batch compression</h2>
          <p>By compressing information, especially backup files, it helps conserve space.</p>
            </div>
            <div className='col-sm  storagemanagement-columns-six'>
            <h2>Effortless migration </h2>
            <p>Allows administrators to simply move domains or whole accounts to new infrastructures.</p>
            </div>
            
            
          
        </div>
        <div className='row'>
          <div className='col-sm  storagemanagement-columns-seven'>
          <h2>Easy Volume Management </h2>
          <p>Allows administrators to control numerous volumes using the CLI and UI.</p>
          </div>
          <div className='col-sm  storagemanagement-columns-eight'>
          <h2>External Tika Connector</h2>
          <p>Allows the use of external Tika resources to include attachments in the Lucene indexer.</p>
            </div>
            <div className='col-sm  storagemanagement-columns-nine'>
            <h2>Mailbox Move </h2>
            <p>Allows administrators to effortlessly transfer accounts to different servers within the same infrastructure.</p>
            </div>
            
            
          
        </div>

        
      </div>
    </div>
    <div className='administrative-pofile-container'>

    
    <div className='administrative-pofile-heading text-center' >
    <h2 className='administrative-pofile-heading-heading'> Specialized Administrative Profiles</h2>
    </div>
    <div className='row Administrative-Profiles-row' >
      <div className='col-sm administrative-pofile-column'>
       
        <p ><b>Delegated Administration</b> – To delegate rights and permissions to different users.</p>
        <p><b>Granular Rights and Permissions</b> –  Granted rights and permissions can be different for each delegated admin.</p>
        <p><b>Multi-multitenant Environment </b> – As an admin can grant rights to other users to make them delegated admins, each delegated admin can do the same with other users as long as they are granted those rights themselves.  </p>
        
        
      </div>
      <div className='col-sm'>
        <img className='administrative-profile-image' src="https://res.cloudinary.com/daggx9p24/image/upload/v1725874066/carbonio-email_boxb5c.webp" alt="" />
      </div>
      <div className='col-sm administrative-pofile-column'>
      <p><b>Domain Settings</b> –  Allows global admins to specify some limits at the domain level that any admins cannot exceed.</p>
        <p><b>Quota Management</b> – Allows global admin to set different types of quota limits.</p>
        <p><b>User Management Through Class-of service</b> – Define which users in the domain can use a specific class of service.</p>
        <p><b>User Management Through Class-of service</b> – Define which users in the domain can use a specific class of service.</p>
        </div>
    </div>
    </div>
    <div className=' text-center'>
    <h2 className='high-availabililty-heading'  > 
      High Availability
    </h2>
    </div>
  <div className='row high-availabililty-row'>
    <div className='col-sm high-availabililty-column'>
<img className='high-availabililty-image' src="https://res.cloudinary.com/daggx9p24/image/upload/v1724240087/3666934_no5v7b.jpg" alt="" />
    </div>
   
    <div className='col-sm high-availabililty-column'>
      
        
    <p> <b>Active/Active Cluster – </b> All replicas are active and ready to take over.</p>
   <p> <b>Granular Control Per User – </b>  To let admins choose which accounts can use high availability </p>
   <p> <b>Heartbeat Monitoring System –  </b> A component that monitors how fast the server replies based on the CPU or memory loads helps avoid any slowdowns.</p>
    <p><b>Auto-switch Failover  – </b> A backup operational mode in which a secondary system automatically kicks in to continue the functions of a system component if the primary one goes offline so the users may never see the failure.</p>
   <p> <b>Active/Active Cluster – </b> All replicas are active and ready to take over.</p>
  <p><b>Active/Active Cluster – </b> All replicas are active and ready to take over.</p>  
      

    </div>
  </div>
  <div className=' text-center'> <h2 className='eas-support-heading'>Eas Support</h2></div>
<section className=' eas-support'>



  <div className= "eas-container">
<div className='row eas-support-row'>
  <div className='col-sm eas-one'>
    <p>ABQ device control – Granular (allow/block/quarantine) access control for mobile devices connecting to the server.</p>
  </div>
  <div className='col-sm eas-one'>
    <p>Address Book Service for External Clients Such as Outlook – Allows external clients, such as Outlook, that don’t support multiple address book sync or autocomplete feature to subscribe to an LDAP-based address book managed by the administrator.</p>
  </div>
  <div className='col-sm eas-one'>
    <p>Anti-DDoS – Allows admins to specify a limit and automatically suspend the connections on devices that exceed the limit.</p>
  </div>
  <div className='col-sm eas-one'>
    <p>Mobile Device Management (MDM) – Allows remote mobile management such as remote wipe, application control, security features, etc.

</p>
  </div>
  <div className='col-sm eas-one'>
    <p>Remote Wipe for Mobile Devices – To wipe out mobile devices remotely when needed.</p>
  </div>
 
</div>

</div>
</section>  


<div className='administrative-pofile-container'>

    
<div className='administrative-pofile-heading text-center' >
<h2 className='administrative-pofile-heading-heading'> EMAIL</h2>
</div>
<div className='row Administrative-Profiles-row' >
  <div className='col-sm administrative-pofile-column'>
   
    <p ><b>Multiple compose tabs</b> –  To facilitate composing without the need to close other tabs.</p>
    <p><b>Built-in antivirus and anti-spam</b> –  Perfect for fast replies directly inside the email pane.</p>
    <p><b>Single/conversation view modes </b> – To read emails as a conversation or in separate email messages.</p>
    <p><b>Attachment preview  </b> – Opening attachments without the need to download the attachment or close the email pane</p>
    <p><b>Drag and drop capabilities </b> –  Easily manage attachments and move emails into different folders including trash.</p>
    <p><b>Address autocomplete </b> – Fast email address suggestions based on the global address list.</p>
    <p><b>Scheduled sending </b> – To send prepared email messages at the exact time even when the sender is logged out.</p>
   
 
    
    
  </div>
  <div className='col-sm'>
    <img className='email-image' src="https://res.cloudinary.com/daggx9p24/image/upload/v1724309749/1-Signatures-blog_fyqrk0.gif" alt="" />
  </div>
  
  <div className='col-sm administrative-pofile-column'>
  <p><b>Manage messages using tags and folders</b> –  Extremely useful for team members, projects collaborators, or any arbitrary group of users to receive affiliated email messages.</p>
    <p><b>Granting view, manage, or administrative rights for shared objects </b> –To define different access permissions for shared objects.</p>
    <p><b>Delegating users to reply on behalf of you </b> – Useful for team members, project managers, etc.</p>
    <p><b>Multiple Address book </b> –Useful for managing address books of big enterprises with multiple sectors.</p>
    <p><b>MShared Address book</b> –To allow multiple users access to different address books.</p>
    <p><b>White-labeled </b> –It’s highly customizable e.g. insert company logo and the preferred image on the login page.</p>

    </div>
</div>
</div>



<div>
  <h2 className='text-center secure-authentication-heading'>Secure Authentication</h2>
</div>
<div className='secure-authentication-container'>
<div className='row secure-authentication-row'>
  <div className='col-sm secure-authentication-column'>
    <h2>Two Factor Authentication</h2>
    <p>To boost the security of user accounts using any time-based one-time password apps.</p>
  </div>
  <div className='col-sm secure-authentication-column'>
  <h2>Support for both IdP-initiated and SPinitiated SSO</h2>
  <p>IdP-initiated SSO: end-users can log into their identity provider account such as Okta, AzureAD, Auth0, UCS, etc., and click on a specific app to log into their account. SP-initiated SSO: </p>
  </div>
  </div>
  <div className='row'>
  <div className='col-sm secure-authentication-column'>
  <h2>Domain level authentication</h2>
  <p>Allows admins to configure different endpoints for different domains – each domain can have its unique authentication endpoint.  </p>
  </div>
  <div className='col-sm secure-authentication-column'>
  <h2>Dedicated mobile password </h2>
  <p> Allows users access to the account using a dedicated credential. It will enable access without using the main password.</p>
  </div>
  </div>
  <div className='row'>
  <div className='col-sm secure-authentication-column'>
  <h2>Support for QR Code </h2>
  <p>To allow users to connect to TOTPsupported apps such as Google Authenticator for 2FA simply by scanning the generated QR code.</p>
  </div>
  <div className='col-sm secure-authentication-column'>
  <h2>SAML Integration </h2>
  <p>Users can secure but easily log into their accounts without providing their credentials using any identity provider.</p>
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



          
  )
}

