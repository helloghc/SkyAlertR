const size = {
  mobileS: "320px",
  mobileCustom: "360px",
  mobileM: "375px",
  mobileL: "410px",
  mobileXL: "415px",
  tablet: "768px",
  laptopS: "992px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px"
};

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileCustom: `(min-width: ${size.mobileCustom})`,
  mobileL: `(min-width: ${size.mobileL})`,
  mobileXL: `(min-width: ${size.mobileXL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptopS: `(min-width: ${size.laptopS})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`
};
