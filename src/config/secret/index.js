
let secret;

'#if PRODUCT === "BO"';
secret = {
  skyAlert: {
    production:{
      headers: {
        'X-Application-Key': 'cVA739zNYKD530DO12JdMU2y2663X4w4',
      },
    },
    staging: {
      headers: {
        'X-Application-Key': 'ip5a9KSXOsk6knCA0rZRb6JmZ59jJXtv',
      },
    },
  },
};
'#elif PRODUCT === "CC"';
secret = {
  skyAlert: {
    production:{
      headers: {
        'X-Application-Key': 'KDQF2ufynKInHcpdORzZ',
      },
    },
    staging: {
      headers: {
        'X-Application-Key': 'aaaaaaaaaaaaaaaaaaaa',
      },
    },
  },
};
'#endif';

export default secret;