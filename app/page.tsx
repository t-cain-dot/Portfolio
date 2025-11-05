import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <nav>
        <ul>
          <li><a href="/Kaden">Kaden</a></li>
          <li><a href="/Tyler">Tyler</a></li>
          <li><a href="/Goop">Goop</a></li>
          <li>Ghoul</li>
          <li><a href="/Triangle Visualizer">Triangle Visualizer</a></li>
        </ul>
      </nav>
    </div>
  );
}
