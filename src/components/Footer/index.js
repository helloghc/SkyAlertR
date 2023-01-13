import React from 'react';
import FooterUS from './US';
import FooterMX from './MX';

const COUNTRY = process.env.REACT_APP_COUNTRY || 'MX';

const Footer = () => COUNTRY === 'US' ? ( <FooterUS /> ) : ( <FooterMX /> );

export default Footer;