'use client';

import { motion } from 'framer-motion';

const stats = [
  { label: 'Years of collective experience', value: '25+' },
  { label: 'Completed fit-outs & builds', value: '120+' },
  { label: 'In-house disciplines', value: '6' },
  { label: 'Cities served across India', value: '8' },
];

const capabilities = [
  {
    title: 'Integrated design-build',
    description:
      'Architecture, interior design, and execution operate as one team so decisions stay coordinated from sketch to snag list.',
  },
  {
    title: 'Carpentry & joinery',
    description:
      'A dedicated workshop fabricates bespoke cabinetry, paneling, and furniture that fit millimeter-precise site conditions.',
  },
  {
    title: 'MEP & systems',
    description:
      'Mechanical, electrical, plumbing, lighting, and automation are engineered in-house to avoid late-stage surprises.',
  },
  {
    title: 'Program management',
    description:
      'Clear schedules, transparent budgets, and on-site supervision keep every stakeholder aligned throughout delivery.',
  },
];

const process = [
  {
    title: '01 · Discovery',
    body: 'We audit requirements, study sites, and translate lived routines into project briefs with measurable outcomes.',
  },
  {
    title: '02 · Design development',
    body: 'Concepts evolve into coordinated drawings, mockups, and material palettes that lock scope and budgets early.',
  },
  {
    title: '03 · Build & fabricate',
    body: 'Civil, services, and carpentry teams execute in parallel while weekly reviews ensure quality benchmarks hold.',
  },
  {
    title: '04 · Handover & care',
    body: 'Snag rectification, documentation, and post-occupancy support keep the spaces performing long after launch.',
  },
];

const culture = [
  'Cross-disciplinary pods pair architects with project managers and master carpenters.',
  'On-site mockups de-risk details before we commit to full production.',
  'Vetting partners for sustainability ensures every finish ages responsibly.',
  'Documentation rituals capture lessons learned for future projects.',
];

export default function AboutPage() {
  return (
    <div className="bg-twc-warm text-twc-charcoal">
      {/* Hero Section */}
      <section className="relative h-auto py-32 w-full overflow-hidden bg-[#1a1a1a] pt-28">
        <div className="container-wide flex items-center">
          <motion.div
            className="max-w-3xl space-y-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-twc-red rounded-full"></div>
              <p className="text-[10px] tracking-widest-plus text-twc-grey uppercase">
                About the studio
              </p>
            </div>

            <h1 className="font-serif-display text-display text-twc-warm">
              Built with collaborators, driven by craft.
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Company Overview & Founder Section */}
      <section className="section-padding bg-twc-warm">
        <div className="container-wide">
          <div className="grid gap-16 lg:grid-cols-2 items-start">
            <div className="space-y-8">
              <div className="space-y-6">
                <span className="text-xs tracking-[0.3em] uppercase text-twc-grey">The company</span>
                <h2 className="font-serif-display text-[clamp(2rem,3vw,3rem)] leading-tight text-twc-charcoal">
                  Factory precision meets on-site excellence.
                </h2>
              </div>
              <div className="text-lg leading-relaxed text-twc-charcoal/75 font-light space-y-5">
                <p>
                  The Wall Crafters Interior Fitouts (TWC Fitouts) is a cabinetry and interior manufacturing company focused on modular kitchens, wardrobes, and fixed furniture that anchor premium homes and workplaces.
                </p>
                <p>
                  Established in 2025, our business model pairs factory-based production with on-site installation pods so the precision of the workshop extends to every detail installed on site.
                </p>
              </div>
            </div>

            <div className="bg-twc-charcoal text-twc-warm rounded-[32px] p-10 space-y-6">
              <span className="text-xs tracking-[0.3em] uppercase text-twc-grey/60">About the founder</span>
              <h3 className="font-serif-display text-3xl leading-snug">
                Anikate Singhal
              </h3>
              <p className="text-twc-warm/80 leading-relaxed">
                The studio is led by founder Anikate Singhal, a BBA in Entrepreneurship alumnus of IILM and SBS Swiss Business School, Zurich, whose background in venture creation keeps our processes entrepreneurial yet disciplined.
              </p>
              <p className="text-twc-warm/80 leading-relaxed">
                His approach combines strategic thinking with hands-on oversight—ensuring every project balances design integrity with operational clarity from inception to handover.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-twc-charcoal text-twc-warm">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-2 items-start">
            <div className="space-y-6">
              <span className="text-xs tracking-[0.3em] uppercase text-twc-grey/60">By the numbers</span>
              <h2 className="font-serif-display text-[clamp(2rem,3vw,3rem)] leading-tight">
                Built on experience, driven by results.
              </h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {stats.map((item) => (
                <div key={item.label} className="border border-twc-warm/10 rounded-2xl p-6 bg-white/5">
                  <p className="text-4xl font-serif-display text-twc-warm">{item.value}</p>
                  <p className="mt-2 text-sm tracking-wide uppercase text-twc-grey/70">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why We Exist Section */}
      <section className="section-padding bg-twc-warm">
        <div className="container-wide max-w-5xl">
          <div className="bg-twc-charcoal text-twc-warm rounded-[32px] p-12 lg:p-16 space-y-8 text-center">
            <p className="text-xs tracking-[0.4em] uppercase text-twc-grey/60">Why we exist</p>
            <h2 className="font-serif-display text-[clamp(2.2rem,3.5vw,3.5rem)] leading-snug">
              Clarity in process, warmth in execution.
            </h2>
            <p className="text-lg text-twc-grey/80 leading-relaxed max-w-3xl mx-auto">
              From villas and penthouses to work hubs and hospitality fit-outs, we build environments that balance narrative and practicality. Every touchpoint—from the carpentry shop to the final clean-down—is handled in-house for accountability you can feel.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-twc-charcoal text-twc-warm relative overflow-hidden">
        <div className="noise-texture absolute inset-0 opacity-[0.15] pointer-events-none"></div>
        <div className="container-wide relative">
          <div className="flex flex-col gap-6 mb-12">
            <span className="text-xs tracking-[0.3em] uppercase text-twc-grey">Capabilities</span>
            <h2 className="font-serif-display text-[clamp(2rem,3vw,3.5rem)] leading-tight">
              Everything under one roof, so the hand-off disappears.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {capabilities.map((item) => (
              <div key={item.title} className="border border-twc-warm/10 rounded-3xl p-8 bg-white/5 backdrop-blur">
                <p className="text-sm tracking-[0.4em] uppercase text-twc-grey/70">{item.title}</p>
                <p className="mt-4 text-lg leading-relaxed text-twc-warm/80">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6">
            <span className="text-xs tracking-[0.4em] uppercase text-twc-grey">How we work</span>
            <h2 className="font-serif-display text-[clamp(2rem,3vw,3.5rem)] leading-tight">
              Process that keeps complexity calm.
            </h2>
            <p className="text-lg leading-relaxed text-twc-charcoal/75">
              Every project enters a shared delivery framework. Designers, engineers, and carpenters meet weekly, while clients review via live dashboards and annotated drawings.
            </p>
            <div className="space-y-4">
              {culture.map((point) => (
                <div key={point} className="flex gap-4">
                  <span className="w-2 h-2 mt-2 rounded-full bg-twc-red"></span>
                  <p className="text-base text-twc-charcoal/80">{point}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {process.map((step) => (
              <div key={step.title} className="border border-twc-charcoal/10 rounded-3xl p-6 bg-white">
                <p className="text-sm tracking-[0.3em] uppercase text-twc-grey">{step.title}</p>
                <p className="mt-3 text-lg leading-relaxed text-twc-charcoal/80">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-twc-charcoal text-twc-warm">
        <div className="container-wide grid gap-12 lg:grid-cols-2 items-center">
          <div className="space-y-6">
            <span className="text-xs tracking-[0.4em] uppercase text-twc-grey">Studios & workshops</span>
            <h2 className="font-serif-display text-[clamp(2rem,3vw,3.5rem)] leading-tight">
              Chennai HQ, on-site pods everywhere else.
            </h2>
            <p className="text-lg leading-relaxed text-twc-grey/80">
              Our design studio and fabrication workshop sit side by side in Chennai. When projects activate in other cities, we deploy mobile pods—site leads, supervisors, and QC engineers—who plug into the same digital backbone for drawings, checklists, and procurement.
            </p>
          </div>
          <div className="border border-twc-warm/10 rounded-[32px] p-10 bg-white/5 backdrop-blur">
            <p className="text-sm tracking-[0.4em] uppercase text-twc-grey/70">Where we work next</p>
            <ul className="mt-6 space-y-4 text-lg text-twc-warm/80">
              <li className="flex items-center justify-between border-b border-white/10 pb-3">
                <span>Residential transformations</span>
                <span className="text-sm tracking-[0.4em] uppercase">Penthouses · Villas</span>
              </li>
              <li className="flex items-center justify-between border-b border-white/10 pb-3">
                <span>Work lounges & studios</span>
                <span className="text-sm tracking-[0.4em] uppercase">Work · Retail</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Hospitality & experience</span>
                <span className="text-sm tracking-[0.4em] uppercase">F&B · Leisure</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section-padding bg-twc-warm">
        <div className="container-wide text-center space-y-6">
          <p className="text-sm tracking-[0.4em] uppercase text-twc-grey">Next steps</p>
          <h2 className="font-serif-display text-[clamp(2.2rem,3.5vw,3.8rem)] leading-tight max-w-4xl mx-auto">
            Have a site, a floor plate, or a blank canvas? Let’s design and build it with intent.
          </h2>
          <p className="text-lg text-twc-charcoal/75 max-w-3xl mx-auto">
            Share your drawings, aspirations, or even just a Pinterest board. We will map the scope, assemble the pod, and walk you through the way forward within a week.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="mailto:main@thewallcrafters.com"
              className="border border-twc-charcoal px-8 py-4 text-sm tracking-wider uppercase hover:bg-twc-charcoal hover:text-twc-warm transition-colors duration-300"
            >
              Email the studio
            </a>
            <a
              href="/interiors"
              className="px-8 py-4 text-sm tracking-wider uppercase text-twc-charcoal/80 hover:text-twc-red"
            >
              View our work
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
