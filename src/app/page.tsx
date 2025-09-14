export default function Home() {
  return (
    <>
      {/* INTRO */}
      <section className="text-center py-20">
        <h1 className="text-5xl font-bold">Jason Mora</h1>
        <h2 className="text-2xl text-gray-600 mt-2">Web Developer</h2>
        <p className="mt-4 text-lg max-w-xl mx-auto">
          Creo applicazioni web moderne e performanti con{" "}
          <strong>Next.js</strong> e <strong>React</strong>.
        </p>
        <a
          href="/projects"
          className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Guarda i miei progetti
        </a>
      </section>
      {/* ABOUT ME */}
      <section id="about" className="py-16">
        <h2 className="text-3xl font-bold mb-4">Chi sono</h2>
        <p className="text-lg">
          Sono uno sviluppatore web appassionato di frontend e nuove tecnologie.
          Amo trasformare idee in applicazioni performanti e intuitive.
        </p>
        <a
          href="/aboutme"
          className="text-blue-600 underline mt-2 inline-block hover:text-blue-800"
        >
          Scopri di più
        </a>
      </section>
      {/* ESPERIENZE */}
      <section id="experience" className="py-16">
        <h2 className="text-3xl font-bold mb-6">Esperienza</h2>
        <ul className="space-y-4">
          <li>
            <strong>Frontend Developer</strong> – XYZ Company (2022–oggi)
          </li>
          <li>
            <strong>Freelance</strong> – Progetti in React e Next.js
          </li>
        </ul>
        <a
          href="/experience"
          className="text-blue-600 underline mt-4 inline-block hover:text-blue-800"
        >
          Vedi tutto
        </a>
      </section>
      {/* PROGETTI */}
      <section id="projects" className="py-16">
        <h2 className="text-3xl font-bold mb-6">Progetti</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <article className="p-4 border rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold">Portfolio con Next.js</h3>
            <p className="mt-2">
              Un sito personale sviluppato con Next.js e SEO ottimizzata.
            </p>
            <a
              href="/projects"
              className="text-blue-600 underline mt-2 inline-block hover:text-blue-800"
            >
              Scopri di più
            </a>
          </article>
          <article className="p-4 border rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold">App React</h3>
            <p className="mt-2">
              Un’applicazione web interattiva costruita con React e Tailwind.
            </p>
            <a
              href="/projects"
              className="text-blue-600 underline mt-2 inline-block hover:text-blue-800"
            >
              Scopri di più
            </a>
          </article>
        </div>
        <a
          href="/projects"
          className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Guarda tutti i progetti
        </a>
      </section>
      {/* CONTATTI */}
      <section id="contacts" className="py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Contattami</h2>
        <p className="mb-6">
          Hai un progetto o vuoi collaborare? Scrivimi!
        </p>
        <a
          href="mailto:jason.mora16@gmail.com"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Mandami un&apos;email
        </a>
      </section>
    </>
  );
}
