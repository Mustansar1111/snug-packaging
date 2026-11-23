import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { site, telHref, whatsappHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "Refund Policy",
  description: "If something goes wrong with your custom packaging order, here's how Snug Packaging puts it right: reprints, refunds and cancellations, in plain English.",
  alternates: { canonical: "/refund-policy" },
};

export default function RefundPolicyPage() {
  return (
    <>
      <PageHero
        crumb="Refund policy"
        title="If something's wrong, we'll make it right."
        lede="Every order is printed just for you, so we can't resell it. That's why we check everything with you before we print, and why we fix our mistakes quickly when they happen."
      />
      <section className="block band">
        <div className="wrap prose">
          <h2>The short version</h2>
          <ul>
            <li>If we made a mistake, we&apos;ll reprint your order at no cost or refund you. You choose.</li>
            <li>Tell us within 7 days of delivery, with a few photos, and we&apos;ll sort it out.</li>
            <li>You can cancel for a full refund any time before you approve your proof.</li>
            <li>We can&apos;t refund a change of mind once your boxes are printed, because they carry your brand and can&apos;t go to anyone else.</li>
          </ul>

          <h2>When we&apos;ll reprint or refund</h2>
          <p>We&apos;ll put it right at our cost if your order:</p>
          <ul>
            <li>doesn&apos;t match the proof you approved, for example the wrong size, layout, board or finish;</li>
            <li>has a print fault, such as smudges, misaligned print or missing foil;</li>
            <li>arrives damaged in transit;</li>
            <li>arrives short, with fewer units than the tolerance shown on your quote.</li>
          </ul>
          <p>If only part of the order is affected, we reprint or refund just that part, so you&apos;re not left waiting for the whole lot.</p>

          <h2>How to tell us</h2>
          <p>
            Email <a href={`mailto:${site.email}`}>{site.email}</a>
            {site.whatsapp && (
              <>
                {" "}or message us on <a href={whatsappHref()} rel="noopener">WhatsApp</a>
              </>
            )}{" "}
            within 7 days of delivery. Send your order number, a short note on what&apos;s wrong, and a few photos, including one of the outer
            shipping carton if anything arrived damaged. You don&apos;t need to send anything back unless we ask. A real person will reply,
            usually within one business day, with the next step.
          </p>

          <h2>What isn&apos;t covered</h2>
          <ul>
            <li>Mistakes in artwork you approved on the proof, such as a typo, a wrong barcode or the wrong size. That&apos;s why we ask you to check the proof carefully.</li>
            <li>Small color differences between your screen and printed board, and small differences between print runs. If an exact color matters, give us a Pantone code.</li>
            <li>Delivery delays caused by couriers or customs. We&apos;ll always chase them for you.</li>
          </ul>

          <h2>Canceling an order</h2>
          <p>
            Before you approve your proof, you can cancel for a full refund, no questions asked. Once you approve it, your order is booked for
            production. If you change your mind within 24 hours of approving and printing hasn&apos;t started, we&apos;ll refund you less any
            costs we&apos;ve already paid, such as cutting dies. Once printing starts, we can&apos;t cancel the order.
          </p>

          <h2>How refunds are paid</h2>
          <p>
            Refunds go back to the way you paid. Once we&apos;ve agreed the refund, we send it within 5 business days. Your bank may take a few
            more days to show it.
          </p>

          <h2>Still not happy?</h2>
          <p>
            Talk to us. Email <a href={`mailto:${site.email}`}>{site.email}</a>
            {site.phone && (
              <>
                {" "}or call <a href={telHref(site.phone)}>{site.phone}</a>
              </>
            )}
            . We&apos;d much rather fix a problem than lose a customer. This policy works alongside our{" "}
            <Link href="/terms">terms of sale</Link> and doesn&apos;t affect your legal rights.
          </p>
        </div>
      </section>
    </>
  );
}
