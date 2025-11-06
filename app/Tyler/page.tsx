"use client";

export default function ResumePage() {
   const pdfUrl = "https://xywzbpmzpbcqlvikdbkh.supabase.co/storage/v1/object/public/Resume/TylerCainResume.pdf"

  return (
    <div style={{ width: "100%", height: "100vh", padding: "1rem" }}>
      <iframe
        src={pdfUrl}
        width="100%"
        height="100%"
        style={{ border: "none" }}
        title="Resume PDF"
      />
    </div>
  )
}
