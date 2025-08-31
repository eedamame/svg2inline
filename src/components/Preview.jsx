import React from 'react';

function Preview({ svgContent }) {
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

  const encodedSvg = encodeSVGForCSS(svgContent);
  return (
    <div className="preview-section">
      <h3>プレビュー</h3>
      <div className="preview-container">
        <div className="preview-item">
          <h4>元のSVG</h4>
          <div 
            className="svg-preview original"
            dangerouslySetInnerHTML={{ __html: svgContent }}
          />
        </div>
        <div className="preview-item">
          <h4>CSS適用後（24x24px）</h4>
          <div 
            className="svg-preview css-applied" 
            style={{
              backgroundImage: `url("data:image/svg+xml,${encodedSvg}")`
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Preview;