export default function ResumePage() {
  const pdfUrl = "https://xywzbpmzpbcqlvikdbkh.supabase.co/storage/v1/object/sign/Resume/Tyler_Cain_Resume%20(2).pdf?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV80YmFiNDNmMC03MTliLTQ1NmQtYTBjYS1iZDIxYWJkZWFmNWIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJSZXN1bWUvVHlsZXJfQ2Fpbl9SZXN1bWUgKDIpLnBkZiIsImlhdCI6MTc2MjQ1MjM0MiwiZXhwIjoxNzkzOTg4MzQyfQ.QIhYietgfcVdt9cPX54ceynL8MLdKrBwDvI37iFS5H4"

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
