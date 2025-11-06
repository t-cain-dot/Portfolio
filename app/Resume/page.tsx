"use client";

export default function ResumePage() {
  return (
    <main className="flex flex-col items-center p-8">
      <h1 className="text-2xl font-bold mb-4">My Resume</h1>
      <iframe
        src="/tyler-cain-resume.pdf"
        className="w-full h-[90vh] border rounded-xl shadow-md"
      />
    </main>
  );
}
