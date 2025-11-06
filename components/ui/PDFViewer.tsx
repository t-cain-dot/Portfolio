'use client';

export default function PDFViewer() {
  return (
    <div className="w-full h-[90vh] flex justify-center">
      <iframe
        src="/resume.pdf"
        className="w-full h-full border-0"
        title="My Resume"
      />
    </div>
  );
}
