import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Musa Packaging collects and uses the details you send through our quote and mockup forms.",
  alternates: { canonical: "/privacy" },
  robots: { index: false },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero crumb="Privacy" title="Privacy policy" />
      <section className="block band">
        {/* TODO: have this reviewed before launch, especially for UK GDPR and EU GDPR. */}
        <div className="wrap prose">
          <h2>What we collect</h2>
          <p>
            When you request a quote or a mockup, we collect the details you type into the form: your name, email address, country and
            the packaging details you describe.
          </p>
          <h2>How we use it</h2>
          <p>We use these details only to reply to your request, prepare your quote and process your order. We never sell your data.</p>
          <h2>How long we keep it</h2>
          <p>We keep enquiry details for as long as we need them to handle your request and any order that follows.</p>
          <h2>Your rights</h2>
          <p>
            You can ask us to see, correct or delete your details at any time by emailing {site.email}. If you are in the UK or the EU you
            also have the right to complain to your data protection authority.
          </p>
        </div>
      </section>
    </>
  );
}
