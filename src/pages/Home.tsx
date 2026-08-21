function Home() {
  const contactLinkClass =
    'rounded-full border-[1.5px] border-wine px-4 py-2 font-medium text-wine dark:border-wine-dark dark:text-wine-dark oled:border-white oled:text-white ' +
    'transition hover:-translate-y-0.5 hover:scale-105 hover:text-white hover:shadow-lg hover:shadow-wine/35 ' +
    'hover:bg-gradient-to-br hover:from-wine hover:to-wine-hover ' +
    'dark:hover:from-wine-dark dark:hover:to-wine-dark-hover active:translate-y-0 active:scale-95 ' +
    'oled:hover:from-white oled:hover:to-white oled:hover:text-black oled:hover:shadow-none'

  return (
    <section className="mx-auto mt-16 max-w-2xl px-6 text-center">
      <img
        src="/profile.jpeg"
        alt="Akshata Singh"
        className="mx-auto mb-4 h-72 w-72 rounded-full border-4 border-wine object-cover object-top dark:border-wine-dark oled:border-white"
      />
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Akshata Singh</h1>
      <p className="mt-1 font-semibold text-wine dark:text-wine-dark oled:text-white">
        Full Stack Developer &amp; AI Engineer
      </p>

      <div className="my-6 flex flex-wrap justify-center gap-3">
        <a href="mailto:akshatasingh444@gmail.com" className={contactLinkClass}>
          akshatasingh444@gmail.com
        </a>
        <a href="tel:+447747231464" className={contactLinkClass}>
          +44 7747231464
        </a>
        <a
          href="https://linkedin.com/in/AkshataSingh"
          target="_blank"
          rel="noreferrer"
          className={contactLinkClass}
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/AkshataSingh"
          target="_blank"
          rel="noreferrer"
          className={contactLinkClass}
        >
          GitHub
        </a>
      </div>

      <p className="leading-relaxed text-gray-500 dark:text-gray-400">
        Full Stack Developer with 4+ years of experience building production web applications
        and AI-powered systems using React, Node.js, TypeScript and Python. Architected a
        multi-agent AI platform integrating Claude and OpenAI APIs, and shipped production
        platforms in financial services.
      </p>
    </section>
  )
}

export default Home
