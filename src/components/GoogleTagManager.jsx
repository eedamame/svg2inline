import { useEffect } from 'react';

const GoogleTagManager = ({ gtmId }) => {
  useEffect(() => {
    if (!gtmId) return;
    
    // Cookie同意の確認
    const consent = localStorage.getItem('cookie-consent');
    if (consent === 'declined') {
      console.log('Google Tag Manager: ユーザーがCookieを拒否したため無効化');
      return;
    }

    // dataLayer 初期化
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      'gtm.start': new Date().getTime(),
      event: 'gtm.js'
    });

    // Google Tag Manager script を動的に追加
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`;
    document.head.appendChild(script);

    // noscript用のiframe（通常はbody内に配置されるが、Reactアプリでは後から追加）
    const noscript = document.createElement('noscript');
    const iframe = document.createElement('iframe');
    iframe.src = `https://www.googletagmanager.com/ns.html?id=${gtmId}`;
    iframe.height = '0';
    iframe.width = '0';
    iframe.style.display = 'none';
    iframe.style.visibility = 'hidden';
    noscript.appendChild(iframe);
    document.body.insertBefore(noscript, document.body.firstChild);

    return () => {
      // クリーンアップ
      const scripts = document.querySelectorAll(`script[src*="gtm.js?id=${gtmId}"]`);
      scripts.forEach(script => script.remove());
      const noscriptElements = document.querySelectorAll('noscript iframe[src*="googletagmanager"]');
      noscriptElements.forEach(element => element.parentNode.remove());
    };
  }, [gtmId]);

  return null;
};

export default GoogleTagManager;