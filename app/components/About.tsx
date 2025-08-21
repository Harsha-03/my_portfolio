export default function About() {
  return (
    <section id="about" className="section">
      <div className="container grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-2xl font-bold mb-4">About</h2>
          <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
            I’m Baba Sriharsha Asapu, an AI Full‑Stack Developer and M.S. Information Systems student.
            I care about shipping accessible, human‑centered products that blend UX craft with practical ML.
            My mission is to turn messy, real‑world problems into simple, elegant tools that people love to use.
          </p>
          <ul className="mt-4 grid sm:grid-cols-2 gap-2 text-sm">
            <li>• Full‑stack development</li>
            <li>• AI / Machine Learning</li>
            <li>• UX & accessibility (a11y)</li>
            <li>• Product strategy & delivery</li>
          </ul>
        </div>
        <div>
          <div className="rounded-3xl shadow-xl ring-1 ring-black/5 overflow-hidden w-full h-72 bg-gradient-to-br from-brand/30 to-brand-green/20" role="img" aria-label="Profile image placeholder" />
        </div>
      </div>
    </section>
  );
}