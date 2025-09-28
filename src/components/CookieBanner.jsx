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
    // 必要に応じて、トラッキングを無効化する処理を追加
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 shadow-lg z-50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex-1">
          <p className="text-sm leading-relaxed">
            このサイトでは、Google AnalyticsとGoogle AdSenseを使用してサイトの利用状況を分析し、
            適切な広告を表示するためにCookieを使用します。
            詳細は
            <a href="#privacy" className="text-blue-400 hover:text-blue-300 underline mx-1">
              プライバシーポリシー
            </a>
            をご確認ください。
          </p>
        </div>
        <div className="flex gap-3 flex-shrink-0">
          <button
            onClick={handleDecline}
            className="px-4 py-2 text-sm border border-gray-600 rounded hover:bg-gray-800 transition-colors"
          >
            拒否
          </button>
          <button
            onClick={handleAccept}
            className="px-4 py-2 text-sm bg-blue-600 hover:bg-blue-700 rounded transition-colors"
          >
            同意する
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;