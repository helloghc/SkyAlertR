import React from 'react';
import { Helmet } from 'react-helmet';

const SITE_NAME = 'SkyAlert News MX';

const HelmetHeader = ({shareUrl, title, summary, bgImage}) => (
    <Helmet>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta property="type" content="website" />
        <meta property="url" content={shareUrl} />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
        <meta property="title" content={title} />
        <meta property="description" content={summary} />
        <meta property="image" content={bgImage} />
        <meta name="robots" content="NOODP" />
        <meta property="og:locale" content="es_MX" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={summary} />
        <meta property="og:image" content={bgImage} />
        <meta property="og:url" content={shareUrl} />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta content="image/*" property="og:image:type" />
    </Helmet>
);

export default HelmetHeader;