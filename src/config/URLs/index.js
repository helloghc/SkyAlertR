import urlsMX from './MX'; 
import urlUS from './US';

const COUNTRY = process.env.REACT_APP_COUNTRY || 'MX';

export default COUNTRY === 'MX' ? urlsMX : urlUS;
