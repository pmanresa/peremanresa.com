import * as fonts from './fonts';

const round = (x, n) => Math.round(x * (n * 10)) / (n * 10);
const scaleN = (n) => round(Math.pow(1.2, n), 3);
const scale = (n) => `${scaleN(n)}rem`;
const headerHeight = 98;

const brandColor = '#FF6464';
const accent = ['#66ACF4', '#F4F6FE', '#391695'];
const dark = ['#21243D', '#1D212C', '#2A343E', '#747474'];
const lightColors = ['#FFFFFF', '#FAFAFA', '#EFEFEF', '#D7D7D7'];

const colors = {
  brand: brandColor,
  accent,
  white: '#FFFFFF',
  black: '#21243D',
  dark,
  lightColors,
  red: '#FF0000',
  darkBlue: '#21243D',
  blue: '#85B9BF',
  green: '#00ab6b',
  darkGreen: '#038252',
  lightGreen: '#00ab6b2e',
  blackShades: ['#393E41'],
};

const theme = {
  scale,
  scaleN,
  colors,
  fonts,
  color: colors.black,
  bg: colors.white,
  padding: `0 ${scaleN(2)}rem`,
  margin: `0 auto`, // makes the body centered
  maxWidth: '50rem',
  borderRadius: '0.2rem',
  lineHeight: 1.5,
  focus: {
    border: '0.4rem red solid',
  },
  p: {
    fontSize: scale(1.25),
    lineHeight: 1.58,
  },
  a: {
    color: colors.brand,
    textDecoration: 'none',
    hover: {
      color: colors.accent[0],
      textDecoration: 'underline',
    },
  },
  header: {
    height: headerHeight,
    logo: {
      width: '91px',
    },
    paddingBottom: '4rem',
    title: {
      fontSize: scale(3),
      textAlign: 'left',
      padding: `${scale(0)} 0 0 0`,
      margin: `0 0 ${scale(6)} 0`,
      lineHeight: scaleN(0),
    },
    subTitle: {
      fontSize: `${scale(0)}`,
      padding: `${scale(-4)} 0 0 0`,
      margin: `${scale(-20)} 0 0 0`,
      lineHeight: scaleN(-1),
    },
    isHome: {
      title: {
        fontSize: scale(7),
        textAlign: 'center',
        padding: `${scale(2)} 0 0 0`,
        margin: `${scale(0)} 0 ${scale(4)} 0`,
        lineHeight: scaleN(0),
      },
      subTitle: {
        fontSize: `${scale(0)}`,
        padding: `${scale(-4)} 0 0 0`,
        margin: `0`,
        lineHeight: scaleN(-1),
      },
    },
  },
  menu: {
    mobile: {
      padding: `${scale(3)} ${scale(3)}`,
      opened: {
        bg: colors.blackShades[0],
      },
      closed: {
        bg: 'transparent',
      },
      label: {
        width: scale(3),
        height: scale(3),
        fontSize: scale(3.2),
      },
      a: {
        fontFamily: fonts.SansSerif,
        fontSize: scale(1.5),
        padding: `0 0 ${scale(1)}`,
        textAlign: 'left',
        color: colors.white,
        active: {
          color: colors.brand,
        },
      },
      ul: {
        margin: `${scale(0.2)} 0 0 ${scale(0.2)}`,
      },
    },
    desktop: {
      // padding: `${scale(3.8)} ${scale(3)}`,
      padding: `0`,
      bg: 'transparent',
      a: {
        fontFamily: fonts.Heebo,
        fontSize: '20px',
        fontWeight: 500,
        padding: `${scale(1)} ${scale(-0.4)}`,
        textAlign: 'right',
        color: colors.black,
        active: {
          color: colors.brand,
        },
        hover: {
          color: colors.brand,
        },
      },
      ul: {
        margin: `0 ${scale(1)} 0 auto`,
      },
    },
  },
  socialLinks: {
    margin: `0`,
    padding: 0,
    a: {
      color: colors.black,
      fontSize: scale(2.5),
      margin: `0 0 ${scale(0)}`,
      padding: `0`,
      hover: {
        color: colors.brand,
      },
    },
  },
  welcome: {
    margin: 0,
    padding: `${scale(0)} 0`,
    backgroundColor: colors.accent[1],
    fontFamily: fonts.System,
    fontSize: '1.2rem',
    lineHeight: scaleN(1.7),
    greeting: {
      fontFamily: fonts.Heebo,
      fontSize: '2.5rem',
      fontWeight: 600,
    },
  },
  h1: {
    fontSize: scale(5.8),
    margin: 0,
    padding: `${scale(8)} 0 0 0`,
  },
  h2: {
    fontSize: scale(3.8),
    margin: 0,
    padding: `${scale(8)} 0 0 0`,
  },
  h3: {
    fontSize: scale(3),
    margin: 0,
    padding: `${scale(6)} 0 0 0`,
  },
  h4: {
    fontSize: scale(2),
    margin: 0,
    padding: `${scale(6)} 0 0 0`,
  },
  h5: {
    fontSize: scale(1),
    margin: 0,
    padding: `${scale(4)} 0 0 0`,
  },
  h6: {
    fontSize: scale(1),
    margin: 0,
    padding: `${scale(4)} 0 0 0`,
  },
  blog: {
    author: {
      fontFamily: fonts.System,
      fontSize: scale(-0.7),
      lineHeight: scaleN(2),
      time: {
        color: colors.darkBlue,
      },
    },
    list: {
      margin: `0 0 ${scale(4)} 0`,
      header: {
        fontSize: scale(6),
        padding: `${scale(1)} 0 0 0`,
        margin: `${scale(4)} 0 0 0`,
      },
      ul: {
        padding: `0`,
        margin: `0`,
      },
      item: {
        border: '1px solid rgba(0,0,0,.125);',
        padding: scale(1.2),
        hover: {
          backgroundColor: colors.blackShades[0],
        },
        title: {
          fontFamily: fonts.Helvetica,
          fontSize: scale(1.2),
          lineHeight: scaleN(1),
          margin: `0 0 ${scale(-0.8)}`,
          color: colors.darkBlue,
          hover: {
            color: colors.brand,
          },
        },
        text: {
          fontFamily: fonts.SansSerif,
          fontSize: scale(-0.3),
          color: colors.darkBlue,
          lineHeight: scaleN(2),
          padding: `0`,
          margin: `0`,
        },
      },
    },
    post: {
      padding: '20px',
      margin: `${scale(0.5)} auto 0`,
      maxWidth: '46.25rem',
      header: {
        fontFamily: fonts.Heebo,
        fontSize: '2.3rem',
        fontStretch: 'extra-condensed',
        margin: `0 0 ${scale(0.5)}`,
      },
      content: {
        fontFamily: fonts.SansSerif,
        fontWeight: 500,
        lineHeight: 1.55,
        code: {
          color: colors.white,
          fontSize: scale(1),
          borderRadius: '0.2rem',
          margin: `0`,
          padding: `${scale(-8)} ${scale(-4)}`,
          backgroundColor: colors.dark[1],
        },
        highlight: {
          backgroundColor: null,
          borderRadius: '0.2rem',
          margin: `${scale(0)} -50rem`,
          padding: `0 50rem`,
          code: {
            color: colors.white,
          },
        },
        a: {
          color: colors.green,
        },
        p: {
          fontSize: scale(0.8),
          margin: 0,
          padding: `2rem 0 0 0`,
          lineHeight: '1.55',
        },
        ul: {
          fontSize: scale(1),
          margin: 0,
          padding: `${scale(2)}`,
        },
      },
    },
  },
  page: {
    padding: '20px',
    margin: `${scale(0)} auto ${scale(4)}`,
    maxWidth: '60rem',
    header: {
      fontFamily: fonts.Heebo,
      fontSize: '2.6rem',
      margin: `0 0 ${scale(2)}`,
    },
    content: {
      fontFamily: fonts.Serif,
      p: {
        fontSize: scale(1),
        margin: 0,
        padding: `2rem 0 0 0`,
      },
      ul: {
        fontSize: scale(1),
        margin: 0,
        padding: `0 ${scale(2)}`,
      },
    },
  },
};

export default theme;
