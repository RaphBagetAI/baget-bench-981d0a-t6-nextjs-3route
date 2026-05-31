export default function Docs() {
  return (
    <section className="max-w-3xl mx-auto space-y-8">
      <header>
        <h1 className="text-4xl font-fraunces font-bold text-forest-green">
          Getting Started with Shipyard
        </h1>
        <p className="mt-3 text-charcoal font-opensans text-lg">
          Shipyard is designed to streamline your deployment process with simple developer tools.
        </p>
      </header>

      <article className="bg-white rounded shadow-natural p-6 space-y-4 font-opensans text-charcoal">
        <h2 className="text-2xl font-fraunces font-bold text-forest-green">
          Installation
        </h2>
        <pre className="bg-light-stone p-4 rounded overflow-x-auto font-mono text-sm">
          <code>
{`npm install shipyard-cli

# or with yarn
yarn add shipyard-cli
`}
          </code>
        </pre>

        <h2 className="text-2xl font-fraunces font-bold text-forest-green">
          Usage
        </h2>
        <p>
          Once installed, configure your deployment with a simple YAML file and run the CLI to start shipping faster.
        </p>

        <pre className="bg-light-stone p-4 rounded overflow-x-auto font-mono text-sm">
          <code>
{`shipyard deploy --config shipyard.yml
`}
          </code>
        </pre>

        <h2 className="text-2xl font-fraunces font-bold text-forest-green">
          Learn More
        </h2>
        <p>
          Visit our comprehensive docs and API reference at our GitHub repository to extend and customize Shipyard.
        </p>
      </article>
    </section>
  );
}
