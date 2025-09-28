import { useEffect } from 'react';

const GoogleAnalytics = ({ measurementId }) => {
  useEffect(() => {
    if (!measurementId) return;

    // Google Analytics script を動的に追加
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script1);

    // gtag 初期化スクリプトを追加
    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${measurementId}', {
        anonymize_ip: true,
        allow_google_signals: false,
        allow_ad_personalization_signals: false
      });
    `;
    document.head.appendChild(script2);

    return () => {
      // クリーンアップ（必要に応じて）
      const scripts = document.querySelectorAll('script[src*="googletagmanager"]');
      scripts.forEach(script => script.remove());
    };
  }, [measurementId]);

  return null;
};

export default GoogleAnalytics;