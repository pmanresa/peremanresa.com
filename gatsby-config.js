module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.peremanresa.com',
    title: 'Pere Manresa',
    description: `Welcome! This is Pere Manresa's personal website. I like to write about Data Science, Machine Learning and Career.`,
    author: {
      name: 'Pere Manresa',
      bio: `I\'m a Data Scientist at <a href="https://www.bcgdv.com">BCG Digital Ventures</a>. We invent, build and invest in startups with the world\'s most influential companies. I build high-performance products and teams.`,
      homeCity: 'Berlin',
      email: 'pmanresa93@gmail.com',
      twitter: 'peremanresa6',
      defaultLink: 'https://github.com/pmanresa',
    },
    sourceCodeLink: 'https://github.com/pmanresa/peremanresa.com',
    // disqusShortname: 'hugomagalhes',
    menu: [
      // { label: 'Home', slug: '/' },
      { label: 'Writing', slug: '/writing/' },
      // { label: 'Speaking', slug: '/speaking/' },
      { label: 'About', slug: '/about/' },
      // { label: 'Contact', slug: '/contact/' },
    ],
    contact: {
      type: 'email',
      value: 'pmanresa93@gmail.com',
      link: 'mailto:pmanresa93@gmail.com',
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/content/blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: `ADD YOUR TRACKING ID HERE`,
    //   },
    // },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Pere Manresa`,
        short_name: `Pere Manresa`,
        start_url: `/`,
        background_color: `white`,
        theme_color: `white`,
        display: `minimal-ui`,
        icon: `src/images/logo_tab.png`, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `limelight`,
          `Poppins:300,400,500,700`, // you can also specify font weights and styles
          `Heebo:300,400,500,700`,
        ],
        display: 'swap',
      },
    },
  ],
};
