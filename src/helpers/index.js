import SkyAlertAPI from '../controllers/SkyAlertAPI';

export const formatUriImage = (idImage, defaultPathImage = '') => {
    let uriBg = defaultPathImage;
    if(idImage){
      uriBg = SkyAlertAPI.getPicURL(idImage, 'image');
    }
    return uriBg;
}

export const getIframeURL= (url) => {
    if (!url){
        return ''
    }
    const soundCloudUrl = `"https://w.soundcloud.com/player/?url=${url}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"`
    return `<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src=${soundCloudUrl}></iframe>`
};
           