module.exports = {
    reactStrictMode: true,
    poweredByHeader: false,
    compress: true, // Enable gzip compression for production
    
    // Security headers
    async headers() {

      return [
        {
          source: '/(.*)',
          headers: [
            {
              key: 'X-Content-Type-Options',
              value: 'nosniff',
            },
            {
              key: 'X-Frame-Options',
              value: 'DENY',
            },
            {
              key: 'X-XSS-Protection',
              value: '1; mode=block',
            },
          ],
        },
      ];
    },
  
    // Redirects
    async redirects() {
      return [
        // Redirect from HTTP to HTTPS
        {
          source: '/(.*)',
          has: [
            {
              type: 'header',
              key: 'x-forwarded-proto',
              value: 'http',
            },
          ],
          destination: 'https://sixthstar.in/:path*',
          permanent: true,
        },
        // Redirect from www to non-www
        {
          source: '/(.*)',
          has: [
            {
              type: 'host',
              value: 'www.sixthstar.in',
            },
          ],
          destination: 'https://sixthstar.in/:path*',
          permanent: true,
        },
        // Specific redirects
        {
        source: '/mail-services/carbonio-mail-features',
        destination: '/server/carbonio-mail-features',
        permanent: true,
      },
      {
        source: '/carbonio-mail-features',
        destination: '/server/carbonio-mail-features',
        permanent: true,
      },

        {
          source: '/carbonio-community-edition',
          destination: '/server/carbonio-community-edition',
          permanent: true,
        },
        {
          source: '/high-availability-3',
          destination: '/server/high-availability',
          permanent: true,
        },
        {
          source: '/dedicated-server-hosting-provider-in-chennai',
          destination: '/server/dedicated-server-hosting-provider-in-chennai',
          permanent: true,
        },
        {
          source: '/vps-hosting-provider-in-india',
          destination: '/server/vps-hosting-provider-in-india',
          permanent: true,
        },
        {
          source: '/cloud-hosting-companies-in-india',
          destination: '/server/cloud-hosting-companies-in-india',
          permanent: true,
        },
        {
          source: '/shared-server-hosting-in-chennai',
          destination: '/server/shared-server-hosting-in-chennai',
          permanent: true,
        },
        {
          source: '/carbonio-email-hosting-in-chennai',
          destination: '/server/carbonio-email-hosting-in-chennai',
          permanent: true,
        },
        {
          source: '/incoming-spam-filter-2',
          destination: '/server/incoming-spam-filter',
          permanent: true,
        },
        {
          source: '/outgoing-spam-filter',
          destination: '/server/outgoing-spam-filter',
          permanent: true,
        },
        {
          source: '/contact',
          destination: '/contactus',
          permanent: true,
        },
        
          {
            source: '/about/sitemap-2',
            destination: '/about/sitemap',
            permanent: true,
          },

     
          {
            source: '/about/why-choose-us  ',
            destination: '/about/why-choose-us',
            permanent: true,
          },
          {
            source: '/about/about-sixthstar ',
            destination: '/about/about-sixthstar',
            permanent: true,
          },
          
          {
            source: '/about/clients/,
            destination: '/about/about-sixthstar',
            permanent: true,
          },

          {
            source: '/blog		 ',
            destination: '/about/about-sixthstar',
            permanent: true,
          },
      ];
    },
  };
  