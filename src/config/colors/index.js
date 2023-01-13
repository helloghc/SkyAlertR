import lightMX from './MX/light';
import darkMX  from './MX/dark';
import lightUS from './US/light';
import darkUS  from './US/dark';

const COUNTRY = process.env.REACT_APP_COUNTRY || 'MX';

export const LIGHT = COUNTRY === 'MX' ? lightMX : lightUS;
export const DARK = COUNTRY === 'MX' ? darkMX : darkUS ;