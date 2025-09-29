import { useEffect, useRef } from 'react';

const AdSenseUnit = ({ 
  adClient, 
  adSlot, 
  style = { display: 'block' },
  format = 'auto',
  fullWidthResponsive = true,
  className = ''
}) => {
  const adRef = useRef(null);

  useEffect(() => {
    // Cookie同意の確認
    const consent = localStorage.getItem('cookie-consent');
    if (consent === 'declined') {
      return;
    }

    // AdSenseスクリプトが読み込まれているかチェック
    const checkAdSense = () => {
      if (window.adsbygoogle && adRef.current) {
        try {
          // 既に処理済みかチェック
          const status = adRef.current.getAttribute('data-adsbygoogle-status');
          
          if (!status) {
            window.adsbygoogle.push({});
          }
        } catch (error) {
          console.error('AdSense Unit: 初期化エラー', error);
        }
      } else {
        // AdSenseスクリプトがまだ読み込まれていない場合、少し待ってリトライ
        setTimeout(checkAdSense, 100);
      }
    };

    checkAdSense();
  }, []);

  // Cookie拒否時は何も表示しない
  const consent = localStorage.getItem('cookie-consent');
  if (consent === 'declined') {
    return null;
  }

  return (
    <ins
      ref={adRef}
      className={`adsbygoogle ${className}`}
      style={style}
      data-ad-client={adClient}
      data-ad-slot={adSlot}
      data-ad-format={format}
      data-full-width-responsive={fullWidthResponsive.toString()}
    />
  );
};

export default AdSenseUnit;