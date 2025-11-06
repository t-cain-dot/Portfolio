'use client'; // this is the client boundary

import dynamic from 'next/dynamic';
const PDFViewer = dynamic(() => import('./PDFViewer'), { ssr: false });

export default function PDFViewerWrapper() {
  return <PDFViewer />;
}
