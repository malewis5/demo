import Link from "next/link";

const features = [
  {
    title: "Complete health history",
    description:
      "Lab results, imaging reports, immunizations, and visit summaries from every provider, organized in one timeline.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6">
        <path d="M8 3h8a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" />
        <path d="M9 8h6M9 12h6M9 16h4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Prescriptions & refills",
    description:
      "See active medications, dosage instructions, and request refills without waiting on hold.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6">
        <rect x="3" y="8" width="18" height="8" rx="4" transform="rotate(-45 12 12)" />
        <path d="M8.5 15.5l7-7" />
      </svg>
    ),
  },
  {
    title: "Secure messaging",
    description:
      "Ask your care team questions and receive answers in an encrypted inbox, with a full record of the conversation.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6">
        <path d="M4 5h16a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H9l-5 4V6a1 1 0 0 1 1-1Z" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Appointments",
    description:
      "Book, reschedule, and get reminders for upcoming visits. Check in before you arrive.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6">
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M3 10h18M8 3v4M16 3v4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Share with anyone",
    description:
      "Grant time-limited access to a specialist, caregiver, or family member. Revoke it any time.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6">
        <circle cx="18" cy="5" r="2.5" />
        <circle cx="6" cy="12" r="2.5" />
        <circle cx="18" cy="19" r="2.5" />
        <path d="M8.2 10.8l7.6-4.6M8.2 13.2l7.6 4.6" />
      </svg>
    ),
  },
  {
    title: "Billing & insurance",
    description:
      "Review statements, understand what insurance covered, and pay balances in a couple of taps.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6">
        <rect x="3" y="6" width="18" height="12" rx="2" />
        <path d="M3 10h18M7 14h4" strokeLinecap="round" />
      </svg>
    ),
  },
];

const steps = [
  {
    number: "01",
    title: "Verify your identity",
    description:
      "Sign up with the email or phone number on file with your provider and confirm with a one-time code.",
  },
  {
    number: "02",
    title: "Connect your providers",
    description:
      "Link hospitals, clinics, pharmacies, and labs. Records sync automatically as new results come in.",
  },
  {
    number: "03",
    title: "Take control of your care",
    description:
      "Review results the moment they're ready, message your team, and share records when you need to.",
  },
];

const trust = [
  { label: "HIPAA compliant", detail: "Audited annually" },
  { label: "256-bit encryption", detail: "At rest and in transit" },
  { label: "SOC 2 Type II", detail: "Independently certified" },
  { label: "You own your data", detail: "Export or delete any time" },
];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50">
      <header className="sticky top-0 z-20 border-b border-zinc-200/70 bg-white/80 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/80">
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-2.5 font-semibold tracking-tight">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal-600 text-white">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="h-4.5 w-4.5">
                <path d="M12 5v14M5 12h14" strokeLinecap="round" />
              </svg>
            </span>
            Meridian Health
          </Link>
          <nav className="hidden items-center gap-8 text-sm text-zinc-600 md:flex dark:text-zinc-400">
            <a href="#features" className="hover:text-zinc-900 dark:hover:text-zinc-50">Features</a>
            <a href="#how-it-works" className="hover:text-zinc-900 dark:hover:text-zinc-50">How it works</a>
            <a href="#security" className="hover:text-zinc-900 dark:hover:text-zinc-50">Security</a>
            <a href="#providers" className="hover:text-zinc-900 dark:hover:text-zinc-50">For providers</a>
          </nav>
          <div className="flex items-center gap-3 text-sm font-medium">
            <a
              href="#sign-in"
              className="hidden rounded-full px-4 py-2 text-zinc-700 hover:bg-zinc-100 sm:inline-flex dark:text-zinc-300 dark:hover:bg-zinc-800"
            >
              Sign in
            </a>
            <a
              href="#get-started"
              className="inline-flex rounded-full bg-teal-600 px-4 py-2 text-white transition-colors hover:bg-teal-700"
            >
              Create account
            </a>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="relative overflow-hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[520px] bg-[radial-gradient(ellipse_at_top,var(--color-teal-100),transparent_65%)] dark:bg-[radial-gradient(ellipse_at_top,var(--color-teal-950),transparent_65%)]"
          />
          <div className="mx-auto grid w-full max-w-6xl items-center gap-14 px-6 pb-20 pt-20 lg:grid-cols-2 lg:pb-28 lg:pt-28">
            <div className="flex flex-col gap-6">
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-xs font-medium text-teal-800 dark:border-teal-900 dark:bg-teal-950 dark:text-teal-300">
                <span className="h-1.5 w-1.5 rounded-full bg-teal-500" />
                Now connected to 2,400+ providers
              </span>
              <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
                Your medical records, finally in one place.
              </h1>
              <p className="max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                Meridian brings together lab results, prescriptions, visit notes, and imaging from
                every provider you&apos;ve ever seen — so you can understand your health and share it
                with the people who care for you.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="#get-started"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-teal-600 px-6 text-base font-medium text-white transition-colors hover:bg-teal-700"
                >
                  Access my records
                </a>
                <a
                  href="#how-it-works"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-zinc-300 px-6 text-base font-medium transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:hover:bg-zinc-900"
                >
                  See how it works
                </a>
              </div>
              <p className="text-sm text-zinc-500">
                Free for patients. No credit card required.
              </p>
            </div>

            <div className="relative">
              <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-xl shadow-zinc-900/5 dark:border-zinc-800 dark:bg-zinc-900">
                <div className="flex items-center justify-between border-b border-zinc-100 pb-4 dark:border-zinc-800">
                  <div>
                    <p className="text-xs uppercase tracking-wide text-zinc-500">Patient</p>
                    <p className="font-medium">Jordan Rivera</p>
                  </div>
                  <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
                    All records synced
                  </span>
                </div>
                <ul className="divide-y divide-zinc-100 dark:divide-zinc-800">
                  {[
                    { title: "Comprehensive metabolic panel", meta: "Quest Diagnostics · Today", status: "New result" },
                    { title: "Annual physical — visit summary", meta: "Dr. Amara Okafor · Aug 22", status: "" },
                    { title: "Lisinopril 10mg", meta: "Refill ready · CVS Pharmacy", status: "Refill" },
                    { title: "Chest X-ray", meta: "Northside Imaging · Jul 9", status: "" },
                  ].map((item) => (
                    <li key={item.title} className="flex items-center justify-between gap-4 py-3.5">
                      <div className="min-w-0">
                        <p className="truncate text-sm font-medium">{item.title}</p>
                        <p className="truncate text-xs text-zinc-500">{item.meta}</p>
                      </div>
                      {item.status && (
                        <span className="shrink-0 rounded-md bg-teal-50 px-2 py-1 text-xs font-medium text-teal-700 dark:bg-teal-950 dark:text-teal-300">
                          {item.status}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
                <div className="mt-2 grid grid-cols-3 gap-3 border-t border-zinc-100 pt-4 text-center dark:border-zinc-800">
                  {[
                    ["12", "Providers"],
                    ["148", "Documents"],
                    ["3", "Active Rx"],
                  ].map(([value, label]) => (
                    <div key={label} className="rounded-lg bg-zinc-50 py-3 dark:bg-zinc-800/60">
                      <p className="text-lg font-semibold">{value}</p>
                      <p className="text-xs text-zinc-500">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="border-t border-zinc-200 bg-zinc-50 py-20 dark:border-zinc-800 dark:bg-zinc-900/40">
          <div className="mx-auto w-full max-w-6xl px-6">
            <div className="max-w-2xl">
              <p className="text-sm font-medium text-teal-700 dark:text-teal-400">Everything in one portal</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
                Built for the way you actually manage your health
              </h2>
              <p className="mt-4 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                No more phone tag, fax machines, or five different logins. Meridian gives you a single,
                accurate picture of your care.
              </p>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal-700 dark:bg-teal-950 dark:text-teal-300">
                    {feature.icon}
                  </div>
                  <h3 className="mt-5 text-lg font-semibold">{feature.title}</h3>
                  <p className="mt-2 leading-7 text-zinc-600 dark:text-zinc-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="how-it-works" className="py-20">
          <div className="mx-auto w-full max-w-6xl px-6">
            <div className="max-w-2xl">
              <p className="text-sm font-medium text-teal-700 dark:text-teal-400">How it works</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
                Up and running in under five minutes
              </h2>
            </div>
            <ol className="mt-12 grid gap-10 md:grid-cols-3">
              {steps.map((step) => (
                <li key={step.number} className="relative">
                  <span className="font-mono text-sm text-teal-700 dark:text-teal-400">{step.number}</span>
                  <h3 className="mt-3 text-xl font-semibold">{step.title}</h3>
                  <p className="mt-2 leading-7 text-zinc-600 dark:text-zinc-400">{step.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="security" className="border-y border-zinc-200 bg-zinc-950 py-20 text-zinc-50 dark:border-zinc-800">
          <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div>
              <p className="text-sm font-medium text-teal-400">Security &amp; privacy</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
                Your health information deserves the highest standard of protection
              </h2>
              <p className="mt-4 max-w-xl text-lg leading-8 text-zinc-400">
                Every record is encrypted, every access is logged, and nothing is shared without your
                explicit permission. You can see exactly who has viewed your data and when.
              </p>
              <a
                href="#security-whitepaper"
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-teal-400 hover:text-teal-300"
              >
                Read our security overview
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                  <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
            <dl className="grid grid-cols-2 gap-4">
              {trust.map((item) => (
                <div key={item.label} className="rounded-xl border border-zinc-800 bg-zinc-900 p-5">
                  <dt className="font-medium">{item.label}</dt>
                  <dd className="mt-1 text-sm text-zinc-400">{item.detail}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section id="providers" className="py-20">
          <div className="mx-auto w-full max-w-6xl px-6">
            <div className="grid gap-8 rounded-3xl border border-zinc-200 bg-zinc-50 p-8 lg:grid-cols-2 lg:items-center lg:p-12 dark:border-zinc-800 dark:bg-zinc-900/40">
              <div>
                <p className="text-sm font-medium text-teal-700 dark:text-teal-400">For providers</p>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
                  Give your patients a portal they&apos;ll actually use
                </h2>
                <p className="mt-3 leading-7 text-zinc-600 dark:text-zinc-400">
                  Meridian integrates with major EHR systems via FHIR, reduces inbound calls, and
                  keeps your practice compliant without extra staff time.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
                <a
                  href="#provider-demo"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-zinc-900 px-6 font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
                >
                  Request a demo
                </a>
                <a
                  href="#provider-docs"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-zinc-300 px-6 font-medium transition-colors hover:bg-white dark:border-zinc-700 dark:hover:bg-zinc-900"
                >
                  Integration docs
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="get-started" className="pb-24 pt-4">
          <div className="mx-auto w-full max-w-3xl px-6 text-center">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Ready to see your complete health picture?
            </h2>
            <p className="mt-4 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              Create a free account and connect your first provider in minutes.
            </p>
            <form className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="you@example.com"
                className="h-12 flex-1 rounded-full border border-zinc-300 bg-white px-5 text-base outline-none placeholder:text-zinc-400 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 dark:border-zinc-700 dark:bg-zinc-900"
              />
              <button
                type="submit"
                className="inline-flex h-12 items-center justify-center rounded-full bg-teal-600 px-6 font-medium text-white transition-colors hover:bg-teal-700"
              >
                Get started
              </button>
            </form>
            <p className="mt-3 text-xs text-zinc-500">
              By continuing you agree to our Terms of Service and Privacy Policy.
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-200 py-10 dark:border-zinc-800">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Meridian Health, Inc. All rights reserved.</p>
          <nav className="flex flex-wrap gap-6">
            <a href="#privacy" className="hover:text-zinc-900 dark:hover:text-zinc-50">Privacy</a>
            <a href="#terms" className="hover:text-zinc-900 dark:hover:text-zinc-50">Terms</a>
            <a href="#hipaa" className="hover:text-zinc-900 dark:hover:text-zinc-50">HIPAA notice</a>
            <a href="#accessibility" className="hover:text-zinc-900 dark:hover:text-zinc-50">Accessibility</a>
            <a href="#contact" className="hover:text-zinc-900 dark:hover:text-zinc-50">Contact</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
