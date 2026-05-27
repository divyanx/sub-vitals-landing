import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — SubVitals",
  description: "SubVitals terms of service. Free, open-source Reddit mod tool.",
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-bold text-white mb-4">{title}</h2>
      <div className="text-white/60 leading-relaxed space-y-3">{children}</div>
    </section>
  );
}

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Nav */}
      <header className="border-b border-white/[0.06] px-6 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg overflow-hidden ring-1 ring-white/10">
              <Image
                src="/sub-vitals-landing/icon-1024.png"
                alt="SubVitals"
                width={32}
                height={32}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-white font-semibold">SubVitals</span>
          </Link>
          <Link
            href="/"
            className="text-white/50 hover:text-white text-sm transition-colors"
          >
            ← Back to home
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-6 py-16">
        <div className="mb-12">
          <span className="text-[#ff4500] text-sm font-semibold uppercase tracking-widest mb-3 block">
            Legal
          </span>
          <h1 className="text-4xl font-bold text-white mb-4">Terms of Service</h1>
          <p className="text-white/40 text-sm">
            Effective date: May 27, 2026 — Last updated: May 27, 2026
          </p>
        </div>

        <div className="prose-invert">
          <Section title="Acceptance of Terms">
            <p>
              By installing or using SubVitals (&quot;the App&quot;, &quot;we&quot;, &quot;us&quot;), you
              agree to be bound by these Terms of Service. If you do not agree
              to these terms, do not install or use the App.
            </p>
            <p>
              These terms apply to subreddit moderators and administrators who
              install SubVitals on their subreddits.
            </p>
          </Section>

          <Section title="Description of Service">
            <p>
              SubVitals is a free, open-source Devvit application for Reddit that
              provides CX analytics tools for brand subreddit moderators. The App
              provides features including:
            </p>
            <ul className="space-y-2">
              {[
                "Automated post classification by intent",
                "Sentiment scoring using lexicon-based and AI-powered analysis",
                "Crisis detection and alerting",
                "Team performance metrics",
                "Moderation audit logging",
                "AI-assisted moderation copilot (requires your own OpenAI API key)",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-[#ff4500] mt-1 text-xs">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Section>

          <Section title="Free and Open-Source">
            <p>
              SubVitals is provided free of charge. The source code is available
              on GitHub under an open-source license. You are free to review,
              fork, and contribute to the codebase.
            </p>
            <p>
              Because SubVitals is a free tool built for a hackathon, it is
              provided &quot;as-is&quot; without any guarantees of uptime, continued
              development, or feature completeness.
            </p>
          </Section>

          <Section title="Your Responsibilities">
            <p>By using SubVitals, you agree to:</p>
            <ul className="space-y-2">
              {[
                "Comply with Reddit's Terms of Service and Content Policy at all times",
                "Not use the App to harass, surveil, or discriminate against Reddit users",
                "Not attempt to extract, scrape, or redistribute data processed by the App outside of its intended dashboard features",
                "Keep your OpenAI API key secure if you provide one (we store it encrypted in Devvit Redis)",
                "Use the App only for lawful moderation purposes consistent with your subreddit's stated purpose",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-[#ff4500] mt-1 text-xs">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Section>

          <Section title="Prohibited Uses">
            <p>You may not use SubVitals to:</p>
            <ul className="space-y-2">
              {[
                "Automate punitive mod actions without human review",
                "Build shadow profiles on individual Reddit users",
                "Circumvent Reddit's rate limits or API terms",
                "Resell access to the App or its data",
                "Use AI features to generate modmail responses without human review and editing",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-red-400 mt-1 text-xs">✕</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Section>

          <Section title="Disclaimer of Warranties">
            <p>
              SubVitals is provided &quot;as is&quot; and &quot;as available&quot; without warranties
              of any kind, express or implied. We do not warrant that the App
              will be uninterrupted, error-free, or produce accurate results.
            </p>
            <p>
              Sentiment scores, classifications, and crisis alerts are automated
              signals and should be treated as starting points for human judgment,
              not as definitive conclusions. Moderators are responsible for all
              final moderation decisions.
            </p>
          </Section>

          <Section title="Limitation of Liability">
            <p>
              To the maximum extent permitted by applicable law, we shall not be
              liable for any indirect, incidental, special, consequential, or
              punitive damages arising from your use of SubVitals, including but
              not limited to loss of data, missed escalations, or incorrect
              classifications.
            </p>
          </Section>

          <Section title="Intellectual Property">
            <p>
              SubVitals is open-source software. The source code is available on
              GitHub. The SubVitals name and logo are owned by the developer.
              You may not use them to imply endorsement or affiliation without
              permission.
            </p>
          </Section>

          <Section title="Third-Party Services">
            <p>
              SubVitals integrates with third-party services including Reddit
              (through the Devvit platform) and optionally OpenAI. Your use of
              these services is governed by their respective terms:
            </p>
            <ul className="space-y-2">
              {[
                {
                  name: "Reddit Terms of Service",
                  url: "https://www.redditinc.com/policies/user-agreement",
                },
                {
                  name: "OpenAI Terms of Use",
                  url: "https://openai.com/terms",
                },
                {
                  name: "Reddit Devvit Terms",
                  url: "https://www.redditinc.com/policies/developer-terms",
                },
              ].map((link) => (
                <li key={link.name} className="flex items-start gap-2">
                  <span className="text-[#ff4500] mt-1 text-xs">→</span>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#ff4500] hover:underline"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </Section>

          <Section title="Termination">
            <p>
              You may stop using SubVitals at any time by uninstalling it from
              your subreddit. Uninstallation permanently deletes all SubVitals
              data associated with your subreddit.
            </p>
            <p>
              We reserve the right to discontinue SubVitals at any time without
              notice, including after the Reddit Mod Tools Hackathon concludes.
              We will make reasonable efforts to provide advance notice if the
              App is being shut down.
            </p>
          </Section>

          <Section title="Changes to These Terms">
            <p>
              We may update these Terms of Service. We will notify users of
              material changes through the app interface and the GitHub
              repository. Continued use of SubVitals after changes constitutes
              acceptance.
            </p>
          </Section>

          <Section title="Governing Law">
            <p>
              These Terms are governed by the laws of India, without regard to
              conflict of law principles. Disputes will be resolved through
              binding arbitration or in the courts of Delhi, India.
            </p>
          </Section>

          <Section title="Contact">
            <p>
              Questions about these Terms? Contact us via Reddit at{" "}
              <a
                href="https://www.reddit.com/user/divyanx_"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#ff4500] hover:underline"
              >
                u/divyanx_
              </a>
              {" "}or open an issue on the GitHub repository.
            </p>
          </Section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/[0.06] py-8 px-6 text-center text-white/30 text-sm">
        <Link href="/" className="hover:text-white transition-colors">
          SubVitals
        </Link>
        {" · "}
        <Link href="/privacy" className="hover:text-white transition-colors">
          Privacy Policy
        </Link>
      </footer>
    </div>
  );
}
