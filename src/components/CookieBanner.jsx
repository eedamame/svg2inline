import React, { useState, useEffect } from 'react';

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Cookie同意の確認
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setShowBanner(false);
    
    // Google Tag Manager経由のGoogle Analytics無効化
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      'event': 'cookie_consent_declined',
      'analytics_disabled': true
    });
    
    // 既存のGoogle Analytics Cookieを削除
    const gaCookies = document.cookie.split(';').filter(cookie => 
      cookie.trim().startsWith('_ga') || 
      cookie.trim().startsWith('_gid') ||
      cookie.trim().startsWith('_gat')
    );
    
    gaCookies.forEach(cookie => {
      const cookieName = cookie.split('=')[0].trim();
      // ドメインとパスを指定してCookie削除
      document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.${window.location.hostname}`;
      document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    });
    
    // AdSense関連のCookieも削除
    const adsCookies = document.cookie.split(';').filter(cookie => 
      cookie.trim().startsWith('__gads') || 
      cookie.trim().startsWith('__gpi')
    );
    
    adsCookies.forEach(cookie => {
      const cookieName = cookie.split('=')[0].trim();
      document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.${window.location.hostname}`;
      document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    });
    
    // AdSenseスクリプトも削除
    const adSenseScripts = document.querySelectorAll('script[src*="adsbygoogle.js"]');
    adSenseScripts.forEach(script => script.remove());
    
    // ページリロードで確実に無効化
    window.location.reload();
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 shadow-lg z-50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex-1">
          <p className="text-sm leading-relaxed mb-2">
            このサイトでは、Google Tag Managerを使用してサイトの利用状況を分析し、
            適切な広告を表示するためにCookieを使用します。
            詳細は
            <a href="#privacy" className="text-blue-400 hover:text-blue-300 underline mx-1">
              プライバシーポリシー
            </a>
            をご確認ください。
          </p>
          <p className="text-xs leading-relaxed text-gray-300">
            This site uses Google Tag Manager to analyze usage and display relevant ads. 
            See our <a href="#privacy" className="text-blue-400 hover:text-blue-300 underline">Privacy Policy</a> for details.
          </p>
        </div>
        <div className="flex gap-3 flex-shrink-0">
          <button
            onClick={handleDecline}
            className="px-4 py-2 text-sm border border-gray-600 rounded hover:bg-gray-800 transition-colors"
          >
            拒否 / Decline
          </button>
          <button
            onClick={handleAccept}
            className="px-4 py-2 text-sm bg-blue-600 hover:bg-blue-700 rounded transition-colors"
          >
            同意する / Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;