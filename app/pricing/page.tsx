export default function Pricing() {
  return (
    <section className="max-w-4xl mx-auto space-y-12">
      <header className="text-center">
        <h1 className="text-4xl font-fraunces font-bold text-forest-green">
          Pricing Plans
        </h1>
        <p className="mt-4 text-charcoal font-opensans">
          Choose a plan that fits your team's needs and scale your development with Shipyard.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            title: 'Starter',
            price: '$15/mo',
            features: [
              'Basic deployment automation',
              'Email support',
              'Single project',
              'Community access'
            ],
          },
          {
            title: 'Pro',
            price: '$50/mo',
            features: [
              'Advanced deployment automation',
              'Priority email support',
              'Multi-project management',
              'Detailed analytics'
            ],
          },
          {
            title: 'Enterprise',
            price: 'Contact us',
            features: [
              'Custom deployment pipeline',
              'Dedicated support',
              'Unlimited projects',
              'Custom integrations'
            ],
          },
        ].map(({ title, price, features }) => (
          <div key={title} className="bg-white rounded shadow-natural p-6 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-fraunces font-bold mb-3 text-forest-green">{title}</h2>
              <p className="text-xl font-opensans font-semibold mb-4">{price}</p>
              <ul className="text-charcoal font-opensans space-y-1 list-disc list-inside">
                {features.map(feature => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </div>
            {title !== 'Enterprise' && (
              <a href="/docs" className="mt-6 inline-block text-center bg-warm-amber text-forest-green font-semibold rounded shadow-natural px-4 py-2 hover:bg-amber-300 transition">
                Get Started
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
