export default function ResumePage() {
  const pdfUrl = "https://xywzbpmzpbcqlvikdbkh.supabase.co/storage/v1/object/public/Resume/Tyler_Cain_Resume%20(2).pdf

  return (
    <div style={{ width: "100%", height: "100vh", padding: "1rem" }}>
      <iframe
        src={pfURL}
        width="100%"
        height="100%"
        style={{ border: "none" }}
        title="Resume PDF"
      />
    </div>
  )
}
