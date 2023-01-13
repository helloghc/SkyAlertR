import es from './es';
import en from './en';

const COUNTRY = process.env.REACT_APP_COUNTRY || 'MX';

export default () => COUNTRY === 'US' ? en : es;
