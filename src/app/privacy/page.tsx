import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — SubVitals",
  description: "SubVitals privacy policy. We collect no personal data beyond Reddit username.",
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-bold text-white mb-4">{title}</h2>
      <div className="text-white/60 leading-relaxed space-y-3">{children}</div>
    </section>
  );
}

export default function PrivacyPolicy() {
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
          <h1 className="text-4xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-white/40 text-sm">
            Effective date: May 27, 2026 — Last updated: May 27, 2026
          </p>
        </div>

        <div className="prose-invert">
          <Section title="Overview">
            <p>
              SubVitals (&quot;the App&quot;, &quot;we&quot;, &quot;us&quot;) is a Reddit Devvit application
              that provides CX analytics tools for brand subreddit moderators.
              This Privacy Policy explains what data we collect, how we use it,
              and your rights regarding that data.
            </p>
            <p>
              <strong className="text-white">The short version:</strong> We collect
              almost nothing. All data stays inside Reddit&apos;s infrastructure,
              is scoped to your subreddit, and is automatically deleted when you
              uninstall the app.
            </p>
          </Section>

          <Section title="Data We Collect">
            <p>SubVitals collects and processes the following data:</p>
            <ul className="list-none space-y-3">
              {[
                {
                  title: "Reddit username",
                  desc: "The Reddit username of moderators interacting with SubVitals dashboards, used to attribute mod actions and for team metrics.",
                },
                {
                  title: "Post and comment content",
                  desc: "Text content of posts and comments submitted to your subreddit, used for classification and sentiment scoring. This is the same content that is publicly visible on Reddit.",
                },
                {
                  title: "Mod action metadata",
                  desc: "Timestamps, action types, and outcomes of moderation actions taken through SubVitals, used for audit logs and team metrics.",
                },
                {
                  title: "Subreddit configuration",
                  desc: "Settings you configure in the app (brand name, taxonomy, thresholds). Stored in Devvit Redis, scoped to your subreddit.",
                },
              ].map((item) => (
                <li
                  key={item.title}
                  className="flex gap-3 bg-white/[0.02] border border-white/[0.06] rounded-xl p-4"
                >
                  <span className="text-[#ff4500] mt-0.5">•</span>
                  <div>
                    <strong className="text-white">{item.title}:</strong>{" "}
                    {item.desc}
                  </div>
                </li>
              ))}
            </ul>
          </Section>

          <Section title="What We Do NOT Collect">
            <ul className="space-y-2">
              {[
                "Email addresses or contact information",
                "IP addresses or device fingerprints",
                "Passwords or authentication tokens",
                "Financial information of any kind",
                "Data from users who have not interacted with a SubVitals-enabled subreddit",
                "Cross-subreddit user behavior",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-red-400 mt-1 text-xs">✕</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Section>

          <Section title="Data Storage">
            <p>
              All data collected by SubVitals is stored exclusively in Reddit&apos;s
              Devvit Redis infrastructure. This means:
            </p>
            <ul className="space-y-2">
              {[
                "Data never leaves Reddit's servers",
                "Data is scoped per-subreddit — one subreddit cannot access another's data",
                "All data is automatically deleted when you uninstall SubVitals from your subreddit",
                "We do not operate any external databases, cloud storage, or data pipelines",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-[#ff4500] mt-1 text-xs">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Section>

          <Section title="OpenAI Integration">
            <p>
              SubVitals optionally integrates with OpenAI&apos;s API for AI-powered
              post classification and sentiment scoring. This feature is opt-in
              and requires you to provide your own OpenAI API key.
            </p>
            <p>
              When AI classification is enabled, the text content of posts and
              comments is sent to OpenAI&apos;s API for processing. This content
              consists of publicly visible Reddit posts only. No personally
              identifiable information (PII) beyond what is already public on
              Reddit is transmitted.
            </p>
            <p>
              OpenAI&apos;s data handling is governed by the{" "}
              <a
                href="https://openai.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#ff4500] hover:underline"
              >
                OpenAI Privacy Policy
              </a>
              . If you do not provide an OpenAI API key, all classification is
              performed locally using the AFINN lexicon with no external
              data transmission.
            </p>
          </Section>

          <Section title="Cookies and Tracking">
            <p>
              SubVitals uses <strong className="text-white">no cookies</strong>,
              no tracking pixels, no analytics SDKs, and no third-party analytics
              of any kind. The app runs entirely within Reddit&apos;s Devvit iframe
              environment, which does not support traditional web tracking
              mechanisms.
            </p>
          </Section>

          <Section title="Data Sharing">
            <p>
              We do not sell, rent, trade, or share your data with any third
              party except as described in the OpenAI Integration section above.
            </p>
            <p>
              We may disclose data if required by law or to comply with a valid
              legal process, but such disclosure would be of data already held
              by Reddit under their own legal obligations.
            </p>
          </Section>

          <Section title="Your Rights">
            <p>You have the right to:</p>
            <ul className="space-y-2">
              {[
                "Access the data SubVitals holds about your subreddit (available through the dashboard)",
                "Delete all SubVitals data by uninstalling the app from your subreddit",
                "Opt out of AI classification by not providing an OpenAI API key",
                "Contact us with questions or concerns about data handling",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-[#ff4500] mt-1 text-xs">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Section>

          <Section title="Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time. Material
              changes will be communicated through the SubVitals app interface
              and on the GitHub repository. Continued use of the app after
              changes constitutes acceptance of the updated policy.
            </p>
          </Section>

          <Section title="Contact">
            <p>
              Questions about this Privacy Policy? Contact us via Reddit at{" "}
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
        <Link href="/terms" className="hover:text-white transition-colors">
          Terms of Service
        </Link>
      </footer>
    </div>
  );
}
