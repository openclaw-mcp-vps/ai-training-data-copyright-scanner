export default function Home() {
  const faqs = [
    {
      q: 'What types of datasets can I scan?',
      a: 'CopyrightScan supports text corpora, image datasets, code repositories, and mixed-media archives in common formats like CSV, JSON, ZIP, and tar.gz.'
    },
    {
      q: 'How does copyright detection work?',
      a: 'We use content fingerprinting combined with lookups against copyright databases and known licensed works registries to flag potential violations with confidence scores.'
    },
    {
      q: 'Is my data kept private?',
      a: 'All uploads are encrypted in transit and at rest. Scan jobs are processed in isolated environments and your data is deleted within 24 hours of report generation.'
    }
  ]

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Legal Compliance for AI Teams
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Scan Training Data for<br />
          <span className="text-[#58a6ff]">Copyright Violations</span>
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          Upload your AI training datasets and get instant compliance reports. Identify copyrighted content before it becomes a legal liability.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors duration-150"
        >
          Start Scanning — $18/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-4">No credit card required for first scan. Cancel anytime.</p>
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$18</p>
          <p className="text-[#8b949e] text-sm mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8 text-sm text-[#c9d1d9]">
            {[
              'Unlimited dataset scans',
              'Content fingerprinting engine',
              'Copyright database lookups',
              'Detailed compliance PDF reports',
              'Background processing queue',
              'Email alerts on violations',
              'API access included'
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span> {f}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors duration-150"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
