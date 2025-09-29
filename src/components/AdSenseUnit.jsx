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
      console.log('AdSense Unit: Cookie拒否により広告表示をスキップ');
      return;
    }

    // AdSenseスクリプトが読み込まれているかチェック
    const checkAdSense = () => {
      console.log('AdSense Unit: チェック開始', {
        windowAdsByGoogle: !!window.adsbygoogle,
        adRefCurrent: !!adRef.current,
        adSlot: adSlot
      });
      
      if (window.adsbygoogle && adRef.current) {
        try {
          // 既に処理済みかチェック
          const status = adRef.current.getAttribute('data-adsbygoogle-status');
          console.log('AdSense Unit: ステータス確認', { status });
          
          if (!status) {
            console.log('AdSense Unit: 広告ユニット初期化開始');
            window.adsbygoogle.push({});
            console.log('AdSense Unit: 広告ユニット初期化完了');
            
            // 少し待ってからステータスを再確認
            setTimeout(() => {
              const newStatus = adRef.current?.getAttribute('data-adsbygoogle-status');
              console.log('AdSense Unit: 初期化後ステータス', { newStatus });
            }, 1000);
          }
        } catch (error) {
          console.error('AdSense Unit: 初期化エラー', error);
        }
      } else {
        console.log('AdSense Unit: 条件未満足、リトライ', {
          windowAdsByGoogle: !!window.adsbygoogle,
          adRefCurrent: !!adRef.current
        });
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