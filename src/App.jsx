import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import FileUpload from './components/FileUpload';
import CodeOutput from './components/CodeOutput';
import Preview from './components/Preview';
import PrivacyPolicy from './components/PrivacyPolicy';
import Terms from './components/Terms';
import GoogleAnalytics from './components/GoogleAnalytics';
import GoogleAdSense from './components/GoogleAdSense';
import CookieBanner from './components/CookieBanner';

function App() {
  const [svgContent, setSvgContent] = useState('');
  const [generatedCSS, setGeneratedCSS] = useState('');
  const [editedCSS, setEditedCSS] = useState('');
  const [currentPage, setCurrentPage] = useState('home');

  // Google Analytics と AdSense の ID（実際の値に置き換える）
  const GA_MEASUREMENT_ID = process.env.REACT_APP_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX';
  const ADSENSE_CLIENT_ID = process.env.REACT_APP_ADSENSE_CLIENT_ID || 'ca-pub-XXXXXXXXXXXXXXXX';

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      setCurrentPage(hash || 'home');
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // 初回読み込み時

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleFileUpload = (content) => {
    setSvgContent(content);
    const encodedSvg = encodeSVGForCSS(content);
    const cssCode = generateCSSCode(encodedSvg);
    setGeneratedCSS(cssCode);
    setEditedCSS(cssCode);
  };

  console.log('editedCSS: ', editedCSS)

  const handleCSSEdit = (newCSS) => {
    console.log('App: CSS編集されました', newCSS);
    setEditedCSS(newCSS);
  };

  const encodeSVGForCSS = (svgContent) => {
    return svgContent
      .replace(/"/g, "'")
      .replace(/%/g, "%25")
      .replace(/#/g, "%23")
      .replace(/{/g, "%7B")
      .replace(/}/g, "%7D")
      .replace(/</g, "%3C")
      .replace(/>/g, "%3E")
      .replace(/\s+/g, " ")
      .trim();
  };

  const generateCSSCode = (encodedSvg) => {
    const cssCode = `.icon {
  background-image: url("data:image/svg+xml,${encodedSvg}");
  background-repeat: no-repeat;
  background-size: contain;
  width: 24px;
  height: 24px;
}`;
    console.log('生成されたCSS:', cssCode);
    return cssCode;
  };

  const renderContent = () => {
    switch (currentPage) {
      case 'privacy':
        return <PrivacyPolicy />;
      case 'terms':
        return <Terms />;
      default:
        return (
          <div className="px-4 py-8">
            <header className="text-center mb-12 max-w-4xl mx-auto">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">SVG to CSS Inline Converter</h1>
              <p className="text-lg text-gray-600 mb-2">SVGファイルをCSSのdata URLに変換してインライン埋め込み用コードを生成します</p>
              <p className="text-base text-gray-500">Convert SVG files to CSS data URLs for easy inline embedding</p>
            </header>

            <main className="max-w-6xl mx-auto">
              <FileUpload onFileUpload={handleFileUpload} />
              
              {svgContent && (
                <div className="grid lg:grid-cols-2 gap-8 items-start">
                  <Preview svgContent={svgContent} editedCSS={editedCSS} />
                  <CodeOutput 
                    generatedCSS={generatedCSS} 
                    editedCSS={editedCSS}
                    onCSSEdit={handleCSSEdit}
                  />
                </div>
              )}
            </main>
          </div>
        );
    }
  };

  return (
    <>
      {/* Google Analytics */}
      <GoogleAnalytics measurementId={GA_MEASUREMENT_ID} />
      
      {/* Google AdSense */}
      <GoogleAdSense clientId={ADSENSE_CLIENT_ID} />
      
      <Layout>
        {renderContent()}
      </Layout>

      {/* Cookie同意バナー */}
      <CookieBanner />
    </>
  );
}

export default App;