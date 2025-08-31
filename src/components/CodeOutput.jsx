import React, { useState } from 'react';

function CodeOutput({ generatedCSS }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(generatedCSS);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('コピーに失敗しました:', err);
      
      const textArea = document.createElement('textarea');
      textArea.value = generatedCSS;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="code-section">
      <div className="code-header">
        <h3>生成されたCSS</h3>
        <button 
          className={`copy-btn ${copied ? 'copied' : ''}`}
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
          {copied ? 'コピー完了!' : 'コピー'}
        </button>
      </div>
      <div className="code-container">
        <pre><code>{generatedCSS}</code></pre>
      </div>
    </div>
  );
}

export default CodeOutput;