import { useEffect } from 'react';

const GoogleAdSense = ({ clientId }) => {
  useEffect(() => {
    if (!clientId) return;
    
    // Cookie同意の確認
    const consent = localStorage.getItem('cookie-consent');
    if (consent === 'declined') {
      console.log('Google AdSense: ユーザーがCookieを拒否したため無効化');
      return;
    }

    // AdSense script を動的に追加
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${clientId}`;
    script.crossOrigin = 'anonymous';
    document.head.appendChild(script);

    return () => {
      // クリーンアップ（必要に応じて）
      const scripts = document.querySelectorAll('script[src*="googlesyndication"]');
      scripts.forEach(script => script.remove());
    };
  }, [clientId]);

  return null;
};

// AdSense 広告ユニットコンポーネント
export const AdUnit = ({ 
  adClient, 
  adSlot, 
  style = { display: 'block' },
  format = 'auto',
  fullWidthResponsive = true 
}) => {
  useEffect(() => {
    try {
      if (window.adsbygoogle) {
        window.adsbygoogle.push({});
      }
    } catch (error) {
      console.error('AdSense error:', error);
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={style}
      data-ad-client={adClient}
      data-ad-slot={adSlot}
      data-ad-format={format}
      data-full-width-responsive={fullWidthResponsive.toString()}
    />
  );
};

export default GoogleAdSense;