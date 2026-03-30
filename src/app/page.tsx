export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center px-6 py-16 sm:px-10 lg:px-12">
      <section className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-[2rem] border border-line bg-surface p-8 shadow-[0_24px_80px_rgba(88,54,20,0.12)] backdrop-blur md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-accent">
            Issa / Product Kickoff
          </p>
          <h1 className="mt-6 max-w-3xl text-5xl font-semibold tracking-[-0.04em] text-foreground sm:text-6xl">
            Nurbek&apos;s app shell is live, and the product thinking starts next.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
            This workspace is ready for the next phase: clarifying the product
            through planning docs, then turning those decisions into a real
            build with Next.js.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              className="rounded-full bg-foreground px-5 py-3 text-sm font-semibold text-background transition-transform duration-200 hover:-translate-y-0.5"
              href="https://nextjs.org/docs"
              target="_blank"
              rel="noreferrer"
            >
              Read Next.js docs
            </a>
            <a
              className="rounded-full border border-line bg-surface-strong px-5 py-3 text-sm font-semibold text-foreground transition-colors duration-200 hover:bg-white/90"
              href="https://vercel.com/docs"
              target="_blank"
              rel="noreferrer"
            >
              Explore Vercel docs
            </a>
          </div>
        </div>

        <div className="space-y-6">
          <section className="rounded-[2rem] border border-line bg-surface-strong p-8 shadow-[0_18px_48px_rgba(88,54,20,0.1)]">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">
              Next steps
            </p>
            <p className="mt-4 text-sm leading-7 text-muted">
              Set up for Nurbek to define the vision first, then iterate quickly
              once the product direction is clear.
            </p>
            <ul className="mt-5 space-y-4 text-sm leading-7 text-muted">
              <li className="rounded-2xl border border-line bg-white/50 px-4 py-3">
                Capture requirements in <span className="font-semibold text-foreground">AGENTS.md</span>.
              </li>
              <li className="rounded-2xl border border-line bg-white/50 px-4 py-3">
                Break scope into milestones inside <span className="font-semibold text-foreground">PLAN.md</span>.
              </li>
              <li className="rounded-2xl border border-line bg-white/50 px-4 py-3">
                Start implementation once the product direction is locked.
              </li>
            </ul>
          </section>

          <section className="rounded-[2rem] border border-line bg-[linear-gradient(135deg,rgba(199,92,44,0.92),rgba(239,177,111,0.92))] p-8 text-white shadow-[0_18px_48px_rgba(114,53,23,0.16)]">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/80">
              Today&apos;s baseline
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-white/14 p-4 backdrop-blur">
                <p className="text-2xl font-semibold">Next.js 16</p>
                <p className="mt-2 text-sm text-white/80">App Router, TypeScript, Tailwind CSS</p>
              </div>
              <div className="rounded-2xl bg-white/14 p-4 backdrop-blur">
                <p className="text-2xl font-semibold">Ready to ship</p>
                <p className="mt-2 text-sm text-white/80">GitHub publishing and Vercel deployment flow</p>
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
