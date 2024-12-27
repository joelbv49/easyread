import React, { useState, useEffect } from 'react';
import {pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

// Set up the worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const ContentPreview = ({ url, file }) => {
  const [fileType, setFileType] = useState(null);
  const [fileUrl, setFileUrl] = useState(null);

  useEffect(() => {
    if (file) {
      setFileType('file');
      setFileUrl(URL.createObjectURL(file));
    } else if (url) {
      setFileType('website');
      setFileUrl(url);
    }

    return () => {
      if (fileUrl && fileUrl.startsWith('blob:')) {
        URL.revokeObjectURL(fileUrl);
      }
    };
  }, [url, file, fileUrl]);



  const renderContent = () => {
    switch (fileType) {
      case 'file':
        return (
          <div className="w-full h-full flex items-center justify-center bg-gray-100">
            <p className="text-xl font-semibold text-gray-600">
              File preview not available
            </p>
          </div>
        );
      case 'website':
      default:
        return (
          <iframe
            src={fileUrl}
            title="Website Preview"
            className="w-full h-full border-none"
            sandbox="allow-scripts"
          />
        );
    }
  };

  return (
    <div className="w-full h-full bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-4  flex font-custom2 bg-slate-900 text-white  items-center border-b h-12 w-full">
        <h2 className="text-md font-semibold ">
          {fileType === 'website' ? 'Website Preview' : 'File Preview'}
        </h2>
      </div>
      <div className="w-full h-[calc(100%-4rem)]">
        {renderContent()}
      </div>
    </div>
  );
};

export default ContentPreview;

