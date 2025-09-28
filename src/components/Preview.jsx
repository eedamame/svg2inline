import React from 'react';

function Preview({ svgContent, editedCSS }) {
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

  const extractDataUrlFromCSS = (cssText) => {
    console.log('CSS解析中:', cssText);
    
    // background-image: url() からdata URLを抽出
    const match = cssText.match(/background-image:\s*url\(([^)]+)\)/);
    
    if (match) {
      let dataUrl = match[1];
      // 先頭と末尾のクオートを削除
      dataUrl = dataUrl.replace(/^["']|["']$/g, '');
      console.log('抽出されたdata URL:', dataUrl);
      return dataUrl;
    }
    
    console.log('data URLが見つかりませんでした');
    return null;
  };

  const decodeSVGFromDataUrl = (dataUrl) => {
    if (!dataUrl || !dataUrl.startsWith('data:image/svg+xml,')) {
      return null;
    }
    
    try {
      const encodedSvg = dataUrl.replace('data:image/svg+xml,', '');
      const decodedSvg = encodedSvg
        .replace(/%3C/g, '<')
        .replace(/%3E/g, '>')
        .replace(/%7B/g, '{')
        .replace(/%7D/g, '}')
        .replace(/%23/g, '#')
        .replace(/%25/g, '%')
        .replace(/'/g, '"');
      
      return decodedSvg;
    } catch (error) {
      console.error('SVGデコードエラー:', error);
      return null;
    }
  };

  const encodedSvg = encodeSVGForCSS(svgContent);
  const editedDataUrl = extractDataUrlFromCSS(editedCSS);
  const editedSvgContent = editedDataUrl ? decodeSVGFromDataUrl(editedDataUrl) : null;
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg">
      <h3 className="text-xl font-semibold text-gray-800 mb-6">Preview</h3>
      <div className="space-y-6">
        <div>
          <h4 className="text-sm font-medium text-gray-600 mb-3">Original SVG</h4>
          <div 
            className="border border-gray-200 rounded-lg p-4 flex items-center justify-center min-h-20"
            dangerouslySetInnerHTML={{ __html: svgContent }}
          />
        </div>
        <div>
          <h4 className="text-sm font-medium text-gray-600 mb-3">CSS Applied (24x24px)</h4>
          <div 
            className="border border-gray-200 rounded-lg p-4 flex items-center justify-center min-h-20"
          >
            <div
              className="w-6 h-6 bg-no-repeat bg-contain bg-center"
              style={{
                backgroundImage: editedDataUrl ? `url("${editedDataUrl}")` : `url("data:image/svg+xml,${encodedSvg}")`
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Preview;