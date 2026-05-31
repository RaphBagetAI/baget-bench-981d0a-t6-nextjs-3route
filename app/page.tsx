export default function Home() {
  return (
    <section className="space-y-12">
      <header className="text-center max-w-xl mx-auto">
        <h1 className="text-4xl font-fraunces font-bold leading-tight">
          Shipyard: Ship Your Code Smarter
        </h1>
        <p className="mt-4 text-charcoal text-lg font-opensans">
          Shipyard accelerates your development workflow with powerful developer tools designed to simplify, automate, and optimize shipping your projects.
        </p>
        <a href="/pricing" className="inline-block mt-6 px-6 py-3 bg-warm-amber text-forest-green font-semibold rounded shadow-natural hover:bg-amber-300 transition">
          Get Started
        </a>
      </header>
      <div className="mt-16 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <article className="bg-white rounded shadow-natural p-6">
          <h2 className="text-2xl font-fraunces font-bold mb-3">Automation</h2>
          <p className="text-charcoal font-opensans">
            Automate your deployment pipeline with robust tools that simplify tasks and reduce errors.
          </p>
        </article>

        <article className="bg-white rounded shadow-natural p-6">
          <h2 className="text-2xl font-fraunces font-bold mb-3">Collaboration</h2>
          <p className="text-charcoal font-opensans">
            Enable seamless teamwork with integrated tools for sharing, reviewing, and coordinating development efforts.
          </p>
        </article>

        <article className="bg-white rounded shadow-natural p-6">
          <h2 className="text-2xl font-fraunces font-bold mb-3">Insights</h2>
          <p className="text-charcoal font-opensans">
            Gain actionable insights into your deployment metrics and team productivity to ship faster.
          </p>
        </article>
      </div>
    </section>
  );
}
