import React, { useState } from 'react';
import FileUpload from './components/FileUpload';
import CodeOutput from './components/CodeOutput';
import Preview from './components/Preview';

function App() {
  const [svgContent, setSvgContent] = useState('');
  const [generatedCSS, setGeneratedCSS] = useState('');

  const handleFileUpload = (content) => {
    setSvgContent(content);
    const encodedSvg = encodeSVGForCSS(content);
    const cssCode = generateCSSCode(encodedSvg);
    setGeneratedCSS(cssCode);
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
    return `.icon {
  background-image: url("data:image/svg+xml,${encodedSvg}");
  background-repeat: no-repeat;
  background-size: contain;
  width: 24px;
  height: 24px;
}`;
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>SVG to CSS Inline Converter</h1>
        <p>SVGファイルをCSSのdata URLに変換してインライン埋め込み用コードを生成します</p>
      </header>

      <main className="app-main">
        <FileUpload onFileUpload={handleFileUpload} />
        
        {svgContent && (
          <div className="results">
            <Preview svgContent={svgContent} />
            <CodeOutput generatedCSS={generatedCSS} />
          </div>
        )}
      </main>
    </div>
  );
}

export default App;