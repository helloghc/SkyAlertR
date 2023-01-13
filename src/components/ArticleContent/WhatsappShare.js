import React from 'react';
import isMobile from  '../../helpers/CheckDevice';

const WhatsappShare = ({url, text, onPress}) => {
    const href = isMobile() ? `whatsapp://send?text=${text}: ${url}`:`https://wa.me/525579020029?text=${encodeURIComponent(`${text} - lee la nota completa aquí ${url}`)}`;
    return (
        <a data-action="share/whatsapp/share" 
            href={href}
            onClick={onPress}>
        <div className="shareWhatsapp">
          <i className="fa fa-whatsapp" aria-hidden="true"></i>
        </div>
      </a>
    );
};

export default WhatsappShare;