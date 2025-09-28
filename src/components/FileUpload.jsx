import React, { useRef } from 'react';

function FileUpload({ onFileUpload }) {
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type === 'image/svg+xml') {
      const reader = new FileReader();
      reader.onload = (e) => {
        onFileUpload(e.target.result);
      };
      reader.readAsText(file);
    } else {
      alert('SVGファイルを選択してください / Please select an SVG file');
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    event.currentTarget.classList.add('border-blue-400', 'bg-blue-50');
  };

  const handleDragLeave = (event) => {
    event.preventDefault();
    event.currentTarget.classList.remove('border-blue-400', 'bg-blue-50');
  };

  const handleDrop = (event) => {
    event.preventDefault();
    event.currentTarget.classList.remove('border-blue-400', 'bg-blue-50');
    
    const file = event.dataTransfer.files[0];
    if (file && file.type === 'image/svg+xml') {
      const reader = new FileReader();
      reader.onload = (e) => {
        onFileUpload(e.target.result);
      };
      reader.readAsText(file);
    } else {
      alert('SVGファイルを選択してください / Please select an SVG file');
    }
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="mb-12">
      <div 
        className="border-2 border-dashed border-gray-300 rounded-xl p-12 text-center cursor-pointer transition-all duration-300 bg-white hover:border-blue-400 hover:bg-blue-50"
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={handleClick}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept=".svg,image/svg+xml"
          onChange={handleFileChange}
          className="hidden"
        />
        <div className="mb-4 text-gray-400">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mx-auto">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="7,10 12,15 17,10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
        </div>
        <div>
          <p className="text-lg mb-1 text-gray-700">SVGファイルをドラッグ&ドロップまたはクリックして選択</p>
          <p className="text-base mb-2 text-gray-600">Drag & drop SVG files or click to select</p>
          <span className="text-sm text-gray-500">対応形式 / Supported: .svg</span>
        </div>
      </div>
    </div>
  );
}

export default FileUpload;