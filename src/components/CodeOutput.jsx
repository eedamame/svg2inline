import React, { useState } from 'react';

function CodeOutput({ generatedCSS, editedCSS, onCSSEdit }) {
  const [copied, setCopied] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleCopy = async () => {
    const textToCopy = isEditing ? editedCSS : generatedCSS;
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('コピーに失敗しました:', err);
      
      const textArea = document.createElement('textarea');
      textArea.value = textToCopy;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleEdit = () => {
    console.log('CodeOutput: 編集ボタンクリック', !isEditing);
    setIsEditing(!isEditing);
  };

  const handleTextChange = (e) => {
    console.log('CodeOutput: テキスト変更', e.target.value);
    onCSSEdit(e.target.value);
  };

  const handleReset = () => {
    onCSSEdit(generatedCSS);
    setIsEditing(false);
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-semibold text-gray-800">
          Generated CSS {isEditing && <span className="text-sm text-orange-500 font-normal">（Editing）</span>}
        </h3>
        <div className="flex gap-2 items-center">
          <button 
            className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
              isEditing 
                ? 'bg-orange-500 hover:bg-orange-600 text-white' 
                : 'bg-yellow-500 hover:bg-yellow-600 text-white'
            }`}
            onClick={handleEdit}
            title={isEditing ? '表示モードに戻る / Back to view mode' : '編集モードに切り替え / Switch to edit mode'}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
              <path d="m18.5,2.5 a2.121,2.121 0 0,1 3,3 L12,15 l-4,1 1-4 9.5-9.5 z"/>
            </svg>
            {isEditing ? 'View' : 'Edit'}
          </button>
          {isEditing && (
            <button 
              className="flex items-center gap-2 px-3 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg text-sm font-medium transition-colors"
              onClick={handleReset}
              title="元のCSSに戻す / Reset to original CSS"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="23,4 23,10 17,10"/>
                <polyline points="1,20 1,14 7,14"/>
                <path d="M20.49,9A9,9 0 0 0 5.64,5.64L1,10m22,4-4.64,4.36A9,9 0 0 1 3.51,15"/>
              </svg>
              Reset
            </button>
          )}
          <button 
            className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
              copied 
                ? 'bg-green-500 text-white' 
                : 'bg-blue-500 hover:bg-blue-600 text-white'
            }`}
            onClick={handleCopy}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {copied ? (
                <polyline points="20,6 9,17 4,12"/>
              ) : (
                <>
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                  <path d="m5,15 L5,5 a2,2 0 0,1 2-2 l10,0"/>
                </>
              )}
            </svg>
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>
      </div>
      <div className="bg-gray-50 rounded-lg p-6 overflow-x-auto">
        {isEditing ? (
          <textarea
            className="w-full border border-gray-300 rounded-lg p-4 font-mono text-sm bg-white text-gray-800 resize-y min-h-32 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={editedCSS}
            onChange={handleTextChange}
            rows={6}
            spellCheck={false}
          />
        ) : (
          <pre className="whitespace-pre-wrap break-words">
            <code className="font-mono text-sm text-gray-800">{editedCSS}</code>
          </pre>
        )}
      </div>
    </div>
  );
}

export default CodeOutput;