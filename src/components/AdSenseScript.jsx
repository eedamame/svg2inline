import { useEffect } from 'react';

const AdSenseScript = ({ clientId }) => {
  useEffect(() => {
    if (!clientId) return;
    
    // Cookie同意の確認
    const consent = localStorage.getItem('cookie-consent');
    if (consent === 'declined') {
      console.log('AdSense: Cookie拒否により読み込みをスキップ');
      return;
    }

    // 既にスクリプトが読み込まれているかチェック
    const existingScript = document.querySelector(`script[src*="adsbygoogle.js"]`);
    if (existingScript) {
      console.log('AdSense: スクリプトは既に読み込まれています');
      return;
    }

    // AdSenseスクリプトを動的に追加
    const script = document.createElement('script');
    script.async = true;
    const scriptUrl = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${clientId}`;
    script.src = scriptUrl;
    script.crossOrigin = 'anonymous';
    
    console.log('AdSense: スクリプト読み込み開始', { 
      clientId, 
      url: scriptUrl,
      domain: window.location.hostname 
    });
    
    script.onload = () => {
      console.log('AdSense: スクリプト読み込み完了');
    };
    
    script.onerror = (error) => {
      console.error('AdSense: スクリプト読み込みエラー', { 
        error, 
        clientId, 
        url: scriptUrl,
        domain: window.location.hostname 
      });
    };

    document.head.appendChild(script);

    return () => {
      // クリーンアップ
      const scripts = document.querySelectorAll('script[src*="adsbygoogle.js"]');
      scripts.forEach(s => s.remove());
    };
  }, [clientId]);

  return null;
};

export default AdSenseScript;