export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container max-w-3xl">
        <h2 className="text-2xl font-bold mb-6">Contact</h2>
        <form className="grid gap-4 card p-6" action="https://formspree.io/f/YOUR_FORMSPREE_ID" method="POST" aria-label="Contact form">
          <div>
            <label htmlFor="name" className="block text-sm font-medium">Name</label>
            <input id="name" name="name" required minLength={2} className="mt-1 w-full rounded-lg border px-3 py-2 bg-white dark:bg-zinc-900" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium">Email</label>
            <input id="email" name="email" type="email" required className="mt-1 w-full rounded-lg border px-3 py-2 bg-white dark:bg-zinc-900" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium">Message</label>
            <textarea id="message" name="message" required minLength={10} rows={5} className="mt-1 w-full rounded-lg border px-3 py-2 bg-white dark:bg-zinc-900"></textarea>
          </div>
          <div className="flex items-center gap-3">
            <button className="btn-primary" type="submit">Send</button>
            <p className="text-sm text-zinc-500">Or email: <a className="underline" href="mailto:harshaasapu.b@gmail.com">harshaasapu.b@gmail.com</a></p>
          </div>
          <div className="pt-2 text-sm text-zinc-600 dark:text-zinc-400">
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/baba-sriharsha-asapu/" className="underline" target="_blank" rel="noopener">LinkedIn</a>
              <a href="https://github.com/Harsha-03" className="underline" target="_blank" rel="noopener">GitHub</a>
              <a href="https://twitter.com" className="underline" target="_blank" rel="noopener">Twitter</a>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}