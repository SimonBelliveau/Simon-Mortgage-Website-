"use client";
/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Home() {
  type Lang = "en" | "fr";
  const [lang, setLang] = useState<Lang>("en");

  // Brand
  const NAVY = "#0D3559";
  const ORANGE = "#F68B1F";
  const SOFT = "#F6F9FC";

  const APPLY_URL =
    "https://velocity.newton.ca/sso/public.php?sc=1mv0wu7jgafdt";

  // ───────────────────────────────────────────────────────────────────────────────
  // COPY (unchanged; FR aligned to EN)
  // ───────────────────────────────────────────────────────────────────────────────
  const t = {
    en: {
      nav: [
        "Home",
        "Services",
        "Rates",
        "Lenders",
        "Pre-Approval",
        "About",
        "Contact",
      ],
      tag: "Trusted mortgage guidance across Atlantic Canada",
      heroH: "More lenders, better rates, mortgages made simple.",
      heroP:
        "Purchase, refinance, build or renew — I shop multiple lenders and tailor the right strategy for your file. Clear steps, quick turnarounds, and construction/HELOC options for a solution that fits.",
      ctas: { pre: "Get Pre-Approved", apply: "Apply Online", call: "Book a Call" },
      bullets: [
        "Access to A, B & private lenders",
        "Competitive rates & flexible products",
        "Construction financing & HELOC options",
      ],
      services: "My Services",
      rates: "Current Featured Rates",
      rateFoot:
        "Illustrative only; OAC; conditions apply. Contact me for a live quote based on your file.",
      lenders: "Lenders We Work With",
      lendersBlurb:
        "Broad access to leading banks, credit unions, monoline and alternative lenders — I match your file to the best fit.",
      pre: {
        h: "Get Pre-Approved",
        p: "Start here and I'll reply with your personalized checklist and next steps.",
        submit: "Submit",
      },
      thanks: "Thanks! I'll follow up by email with next steps.",
      about: "About",
      meet: "Meet Simon",
      contact: "Contact",
      details: "Details",
      fullName: "Full name",
      email: "Email",
      phone: "Phone",
      subject: "Subject",
      howHelp: "How can I help?",
      send: "Send",
      hours: "Mon–Fri: 9–6 (by appt)",
      footerNav: "Navigation",
      footerDisc: "Disclosures",
      footerText:
        "Rates and products subject to change without notice. OAC. Terms and conditions apply. APR may vary.",
      subscribe: "Stay in the loop",
      subscribeHint:
        "Quarterly updates on market moves & new programs. No spam.",
    },
    fr: {
      nav: [
        "Accueil",
        "Services",
        "Taux",
        "Prêteurs",
        "Préapprobation",
        "À propos",
        "Contact",
      ],
      tag: "Conseils hypothécaires de confiance à travers l'Atlantique",
      heroH: "Taux concurrentiels, produits adaptés — prêteurs A, B et privés.",
      heroP:
        "Achat, refinancement, construction ou renouvellement — je magasine plusieurs prêteurs et bâtis une stratégie sur mesure. Étapes claires, délais rapides et options construction/marge de crédit pour une solution adaptée.",
      ctas: {
        pre: "Obtenir une préapprobation",
        apply: "Postuler en ligne",
        call: "Réserver un appel",
      },
      bullets: [
        "Accès aux prêteurs A, B et privés",
        "Taux compétitifs & produits flexibles",
        "Financement construction & options de marge",
      ],
      services: "Services",
      rates: "Taux en vedette",
      rateFoot:
        "À titre indicatif; OAC; conditions applicables. Contactez-moi pour un taux en temps réel selon votre dossier.",
      lenders: "Prêteurs partenaires",
      lendersBlurb:
        "Accès aux banques, caisses, prêteurs spécialisés et alternatifs — j'aligne votre dossier au meilleur produit.",
      pre: {
        h: "Obtenir une préapprobation",
        p: "Commencez ici et je vous enverrai une liste de documents personnalisée et les prochaines étapes.",
        submit: "Envoyer",
      },
      thanks: "Merci! Je vous écrirai avec les prochaines étapes.",
      about: "À propos",
      meet: "Rencontrez Simon",
      contact: "Contact",
      details: "Coordonnées",
      fullName: "Nom complet",
      email: "Courriel",
      phone: "Téléphone",
      subject: "Objet",
      howHelp: "Comment puis-je aider?",
      send: "Envoyer",
      hours: "Lun–Ven : 9–18 (sur rendez-vous)",
      footerNav: "Navigation",
      footerDisc: "Mentions",
      footerText:
        "Les produits et taux peuvent changer sans préavis. OAC. Modalités s'appliquent. Le TAP peut varier.",
      subscribe: "Restez informé",
      subscribeHint: "Mises à jour trimestrielles. Aucun pourriel.",
    },
  }[lang];

  // Smooth scroll helper
  const go = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  // Mailto fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [msg, setMsg] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Add subtle header shadow on scroll
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lenders (logos optional)
  const lenders: { name: string; logo?: string }[] = [
    { name: "TD", logo: "/lenders/td.png" },
    { name: "Scotiabank", logo: "/lenders/scotia.png" },
    { name: "UNI", logo: "/lenders/uni.png" },
    { name: "Manulife", logo: "/lenders/manulife.png" },
    { name: "Strive", logo: "/lenders/strive.png" },
    { name: "First National", logo: "/lenders/firstnational.png" },
    { name: "Radius", logo: "/lenders/radius.png" },
    { name: "optimum", logo: "/lenders/optimum.png" },
    { name: "Equitable Bank", logo: "/lenders/equitable.png" },
    { name: "RFA", logo: "/lenders/rfa.png" },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* ───────────────────────── Header ───────────────────────── */}
      <header
        className={`sticky top-0 z-50 border-b bg-white/80 backdrop-blur transition-shadow ${
          scrolled ? "shadow-sm" : ""
        }`}
      >
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/logo.jpg"
              alt="Fairview Mortgages"
              className="h-16 md:h-20 w-auto"
            />
            <span
              className="hidden sm:block font-semibold text-lg"
              style={{ color: NAVY }}
            >
              Simon Belliveau Mortgages
            </span>
          </div>

          <nav className="hidden lg:flex items-center gap-6 text-sm">
            {[
              "home",
              "services",
              "rates",
              "lenders",
              "pre",
              "about",
              "contact",
            ].map((id, i) => (
              <button
                key={id}
                onClick={() => go(id)}
                className="text-slate-600 hover:text-slate-900 transition-colors"
              >
                {t.nav[i]}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={APPLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline px-3 py-1.5 rounded-lg text-white"
              style={{ background: ORANGE }}
            >
              {t.ctas.apply}
            </a>
            <button
              onClick={() => setLang(lang === "en" ? "fr" : "en")}
              className="px-3 py-1 text-sm border rounded-lg hover:bg-slate-50"
            >
              {lang === "en" ? "FR" : "EN"}
            </button>
          </div>
        </div>
      </header>

      {/* ───────────────────────── Hero ───────────────────────── */}
      <section
        id="home"
        className="relative overflow-hidden"
        style={{
          background:
            "linear-gradient(180deg, #ffffff 0%, #f8fbff 60%, #ffffff 100%)",
        }}
      >
        {/* decorative blobs */}
        <div
          className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full blur-3xl opacity-20"
          style={{ background: ORANGE }}
        />
        <div
          className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full blur-3xl opacity-20"
          style={{ background: NAVY }}
        />

        <div className="mx-auto max-w-6xl px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span
              className="inline-flex items-center text-xs px-3 py-1 rounded-full mb-4"
              style={{ background: `${ORANGE}22`, color: NAVY }}
            >
              {t.tag}
            </span>
            <h1
              className="text-4xl md:text-5xl font-bold leading-tight tracking-tight"
              style={{ color: NAVY }}
            >
              {t.heroH}
            </h1>
            <p className="mt-4 text-slate-600">{t.heroP}</p>

            <div className="mt-6 flex flex-wrap gap-3">
              <button
                onClick={() => go("pre")}
                className="px-5 py-3 rounded-lg text-white shadow-sm hover:shadow transition-shadow"
                style={{ background: NAVY }}
              >
                {t.ctas.pre}
              </button>
              <a
                href={APPLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-lg hover:bg-slate-50 transition-colors"
                style={{ border: `1px solid ${NAVY}`, color: NAVY }}
              >
                {t.ctas.apply}
              </a>
              <button
                onClick={() => go("contact")}
                className="px-5 py-3 rounded-lg border hover:bg-slate-50 transition-colors"
                style={{ borderColor: NAVY, color: NAVY }}
              >
                {t.ctas.call}
              </button>
            </div>

            <ul className="mt-6 grid sm:grid-cols-3 gap-3 text-sm">
              {t.bullets.map((b) => (
                <li key={b} className="flex items-center gap-2">
                  <span
                    className="h-2 w-2 rounded-full"
                    style={{ background: ORANGE }}
                  />
                  {b}
                </li>
              ))}
            </ul>
          </div>

          {/* headshot with soft glow */}
          <div className="md:pl-10 flex justify-center relative">
            <div
              className="absolute -inset-6 rounded-3xl blur-2xl opacity-40"
              style={{
                background:
                  "radial-gradient(60% 60% at 40% 40%, #F6B61F55 0%, transparent 70%)",
              }}
            />
            <img
              src="/simon.jpg"
              alt="Simon Belliveau"
              className="w-full max-w-sm h-auto rounded-2xl shadow-lg relative"
            />
          </div>
        </div>
      </section>

      {/* subtle divider */}
      <div className="border-t" />

      {/* ───────────────────────── Services ───────────────────────── */}
      <section id="services" className="mx-auto max-w-6xl px-4 py-12">
        <h2
          className="text-3xl font-semibold mb-6 tracking-tight"
          style={{ color: NAVY }}
        >
          {t.services}
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            [
              "Purchase & Pre-Approvals",
              "Accurate pre-approvals with clear maximums and monthly payment estimates.",
            ],
            [
              "Refinance & HELOC",
              "Optimize cash-flow, consolidate debt, or access equity for projects with smart strategies.",
            ],
            [
              "Construction / New Build",
              "Draw schedules, cost-to-complete and flexible financing for your build.",
            ],
            [
              "Renewals & Switch",
              "Compare offers and secure better terms without starting from scratch.",
            ],
            [
              "Self-Employed Solutions",
              "Bank-statement programs, stated-income options, and best-fit lender policies.",
            ],
            [
              "Strategy & Planning",
              "Penalty math, fixed vs variable, 3- vs 5-year — explained simply.",
            ],
          ].map(([h, p]) => (
            <div
              key={String(h)}
              className="rounded-2xl border shadow-sm p-5 hover:shadow-md transition-shadow bg-white"
            >
              <h3 className="font-semibold mb-1">{h}</h3>
              <p className="text-sm text-slate-600">{p}</p>
            </div>
          ))}
        </div>
      </section>

      {/* accent strip */}
      <div
        className="w-full"
        style={{ background: "linear-gradient(90deg, #F6B61F22, #0D355911)" }}
      >
        <div className="mx-auto max-w-6xl h-[1px]" />
      </div>

      {/* ───────────────────────── Rates ───────────────────────── */}
      <section id="rates" className="mx-auto max-w-6xl px-4 py-12">
        <h2
          className="text-3xl font-semibold mb-6 tracking-tight"
          style={{ color: NAVY }}
        >
          {t.rates}
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            [lang === "en" ? "3-Year Fixed" : "Fixe 3 ans", "3.99%"],
            [lang === "en" ? "5-Year Fixed" : "Fixe 5 ans", "3.89%"],
            [
              lang === "en" ? "5-Year Variable" : "Variable 5 ans",
              lang === "en" ? "Prime − 0.70%" : "Taux préférentiel − 0,70%",
            ],
            [lang === "en" ? "HELOC (Revolving)" : "Marge de crédit", "Prime + 0.50%"],
          ].map(([term, rate]) => (
            <div
              key={String(term)}
              className="rounded-2xl border shadow-sm p-5 bg-white hover:shadow-md transition-shadow"
            >
              <div className="text-xl">{term}</div>
              <div className="text-3xl font-bold" style={{ color: NAVY }}>
                {rate}
              </div>
              <div className="text-xs text-slate-500 mt-2">{t.rateFoot}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ───────────────────────── Lenders ───────────────────────── */}
      <section
        id="lenders"
        className="mx-auto max-w-6xl px-4 py-12 bg-white"
        style={{ background: SOFT }}
      >
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
          <div>
            <h2
              className="text-3xl font-semibold tracking-tight"
              style={{ color: NAVY }}
            >
              {t.lenders}
            </h2>
            <p className="text-slate-600 mt-1">{t.lendersBlurb}</p>
          </div>
          <a
            href={APPLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="self-start px-4 py-2 rounded-lg text-white shadow-sm hover:shadow transition-shadow"
            style={{ background: NAVY }}
          >
            {lang === "en" ? "Apply Online" : "Postuler en ligne"}
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {lenders.map((l) => (
            <div
              key={l.name}
              className="rounded-xl border shadow-sm p-4 bg-white flex items-center justify-center h-24 hover:shadow-md transition-shadow"
            >
              {l.logo ? (
                <img
                  src={l.logo}
                  alt={l.name}
                  className="max-h-12 w-auto opacity-90 grayscale hover:grayscale-0 transition"
                />
              ) : (
                <span className="text-sm font-medium" style={{ color: NAVY }}>
                  {l.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ───────────────────────── Reviews ───────────────────────── */}
      <section id="reviews" className="mx-auto max-w-6xl px-4 py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <div>
            <h2
              className="text-3xl font-semibold tracking-tight"
              style={{ color: NAVY }}
            >
              Real Customer Reviews
            </h2>
            <p className="text-slate-600 mt-1">
              I'm proud of the feedback from clients across Atlantic Canada.
              Read real stories and ratings on Google.
            </p>
          </div>
          <a
            href="https://www.google.com/search?q=simon+belliveau&oq=&gs_lcrp=EgZjaHJvbWUqCQgAECMYJxjqAjIJCAAQIxgnGOoCMgkIARAjGCcY6gIyCQgCECMYJxjqAjIPCAMQLhgnGK8BGMcBGOoCMgkIBBAjGCcY6gIyCQgFECMYJxjqAjIJCAYQIxgnGOoCMgkIBxAjGCcY6gLSAQkxOTk1ajBqMTWoAgiwAgHxBUwmHu82slAZ&sourceid=chrome&ie=UTF-8#"
            target="_blank"
            rel="noopener noreferrer"
            className="self-start px-4 py-2 rounded-lg text-white shadow-sm hover:shadow transition-shadow"
            style={{ background: NAVY }}
          >
            Read on Google
          </a>
        </div>

        <div className="rounded-2xl border shadow-sm p-6 mb-6 flex flex-col sm:flex-row gap-6 items-start sm:items-center bg-white">
          <div className="flex items-center gap-3">
            <div className="text-4xl font-bold" style={{ color: NAVY }}>
              5.0
            </div>
            <div className="flex items-center">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} viewBox="0 0 24 24" className="h-6 w-6" fill="#F6B60C">
                  <path d="M12 .587l3.668 7.431 8.2 1.193-5.934 5.786 1.401 8.168L12 18.896l-7.335 3.869 1.401-8.168L.132 9.211l8.2-1.193z" />
                </svg>
              ))}
            </div>
          </div>
          <div className="text-slate-600">
            Average rating on Google.{" "}
            <span className="text-slate-500">(Updated periodically)</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              q: "Simon made the whole process simple and stress-free. Clear advice and quick responses.",
              n: "M. P.",
            },
            {
              q: "Great access to lenders and products. He found a solution that fit my construction timeline.",
              n: "J. L.",
            },
            {
              q: "Transparent, professional and bilingual—highly recommend for anyone in Atlantic Canada.",
              n: "A. D.",
            },
          ].map((r, i) => (
            <div
              key={i}
              className="rounded-2xl border shadow-sm p-5 bg-white hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-1 mb-2">
                {Array.from({ length: 5 }).map((_, j) => (
                  <svg key={j} viewBox="0 0 24 24" className="h-4 w-4" fill="#F6B60C">
                    <path d="M12 .587l3.668 7.431 8.2 1.193-5.934 5.786 1.401 8.168L12 18.896l-7.335 3.869 1.401-8.168L.132 9.211l8.2-1.193z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-slate-700">“{r.q}”</p>
              <div className="mt-3 text-xs text-slate-500">— {r.n} (Google)</div>
            </div>
          ))}
        </div>

        <div className="mt-6">
          <a
            href="https://www.google.com/search?q=simon+belliveau&oq=&gs_lcrp=EgZjaHJvbWUqCQgAECMYJxjqAjIJCAAQIxgnGOoCMgkIARAjGCcY6gIyCQgCECMYJxjqAjIPCAMQLhgnGK8BGMcBGOoCMgkIBBAjGCcY6gIyCQgFECMYJxjqAjIJCAYQIxgnGOoCMgkIBxAjGCcY6gLSAQkxOTk1ajBqMTWoAgiwAgHxBUwmHu82slAZ&sourceid=chrome&ie=UTF-8#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-5 py-3 rounded-lg hover:bg-slate-50 transition-colors"
            style={{ border: `1px solid ${NAVY}`, color: NAVY }}
          >
            See all reviews on Google
          </a>
        </div>
      </section>

      {/* ───────────────────────── Pre-Approval ───────────────────────── */}
      <section
        id="pre"
        className="mx-auto max-w-6xl px-4 py-12 grid md:grid-cols-2 gap-8 items-start"
      >
        <div>
          <h2
            className="text-3xl font-semibold mb-2 tracking-tight"
            style={{ color: NAVY }}
          >
            {t.pre.h}
          </h2>
          <p className="text-slate-600 mb-4">{t.pre.p}</p>
          <div className="mt-5 flex gap-3">
            <a
              href={APPLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-lg text-white shadow-sm hover:shadow transition-shadow"
              style={{ background: NAVY }}
            >
              {lang === "en" ? "Apply Online" : "Postuler en ligne"}
            </a>
            <button
              onClick={() => go("contact")}
              className="px-5 py-3 rounded-lg border hover:bg-slate-50 transition-colors"
              style={{ borderColor: NAVY, color: NAVY }}
            >
              {lang === "en" ? "Book a Call" : "Réserver un appel"}
            </button>
          </div>
        </div>

        <div className="rounded-2xl border shadow-sm p-6 bg-white">
          {submitted ? (
            <p className="text-sm">{t.thanks}</p>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="space-y-3"
            >
              <div className="grid sm:grid-cols-2 gap-3">
                <input
                  className="w-full rounded-lg border px-3 py-2"
                  placeholder={t.fullName}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <input
                  className="w-full rounded-lg border px-3 py-2"
                  type="email"
                  placeholder={t.email}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <input
                className="w-full rounded-lg border px-3 py-2"
                placeholder={t.phone}
                value={phone}
                onChange={(e) =>
                  setPhone(e.target.value.replace(/[^0-9]+/g, ""))
                }
              />
              <textarea
                className="w-full rounded-lg border px-3 py-2"
                rows={4}
                placeholder={
                  lang === "en"
                    ? "Tell me about your goal (purchase, refinance, build, etc.)"
                    : "Parlez-moi de votre projet (achat, refinancement, construction, etc.)"
                }
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
              />
              <button
                type="submit"
                className="w-full px-4 py-2 rounded-lg text-white shadow-sm hover:shadow transition-shadow"
                style={{ background: NAVY }}
              >
                {t.pre.submit}
              </button>
              <p className="text-[11px] text-slate-500">
                {lang === "en"
                  ? "By submitting, you agree to be contacted regarding mortgage options. Your info is kept confidential."
                  : "En soumettant, vous consentez à être contacté au sujet d'options hypothécaires. Vos informations demeurent confidentielles."}
              </p>
            </form>
          )}
        </div>
      </section>

    {/* ───────────────────────── About ───────────────────────── */}
<section
  id="about"
  className="mx-auto max-w-6xl px-4 py-12 grid lg:grid-cols-3 gap-8 items-start"
>
  {/* Left Column - About Text */}
  <div className="lg:col-span-2">
    <h2
      className="text-3xl font-semibold mb-6 tracking-tight"
      style={{ color: NAVY }}
    >
      {t.about}
    </h2>

    <div className="rounded-2xl border shadow-sm p-6 space-y-3 text-sm leading-relaxed bg-white">
      <h3 className="font-semibold">{t.meet}</h3>
      <p>
  Simon is a bilingual professional with a strong background in
  business administration, sales, and team management. Holding a
  master&#39;s degree in business administration from Université de
  Moncton and an international management degree from Université de
  Poitiers, Simon combines solid academic credentials with practical
  expertise.
      </p>
      <p>
        In his role as a territory manager at Molson Coors Canada, Simon
        excelled in client management, relationship building, and
        negotiating agreements, earning national recognition for his
        performance. His public sector experience includes roles at
        Fisheries and Oceans Canada and the City of Dieppe, where he
        honed skills in regulatory compliance, stakeholder management, and
        strategic decision-making.
      </p>
      <p>
        As a former university athlete, Simon developed leadership,
        communication, and teamwork skills, along with a competitive
        spirit and resilience. A proud father of two, he values
        responsibility and balance, actively participating in hockey and
        golf. Simon is a strategic thinker and relationship builder,
        dedicated to helping clients find the right financial products for
        their needs.
      </p>
    </div>
  </div>

  {/* Right Column - Photo Mosaic */}
  <div className="space-y-6">
    {/* Row 1 */}
    <div className="grid grid-cols-2 gap-4">
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow">
        <Image
          src="/simon.jpg"
          alt="Simon Belliveau"
          fill
          className="object-cover object-center"
          sizes="(min-width: 1024px) 560px, (min-width: 640px) 45vw, 90vw"
          quality={92}
          priority
        />
      </div>
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow">
        <Image
          src="/simon2.jpg"
          alt="Simon Belliveau"
          fill
          className="object-cover object-center"
          sizes="(min-width: 1024px) 560px, (min-width: 640px) 45vw, 90vw"
          quality={92}
        />
      </div>
    </div>

    {/* Row 2 */}
    <div className="grid grid-cols-2 gap-4">
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow">
        <Image
          src="/team.jpg"
          alt="Fairview Team"
          fill
          className="object-cover object-center"
          sizes="(min-width: 1024px) 560px, (min-width: 640px) 45vw, 90vw"
          quality={92}
        />
      </div>
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow">
        <Image
          src="/team2.jpg"
          alt="Fairview Team"
          fill
          className="object-cover object-center"
          sizes="(min-width: 1024px) 560px, (min-width: 640px) 45vw, 90vw"
          quality={92}
        />
      </div>
    </div>
  </div>
</section>


      {/* ───────────────────────── Contact ───────────────────────── */}
      <section
        id="contact"
        className="mx-auto max-w-6xl px-4 py-12 grid md:grid-cols-3 gap-6"
      >
        <div className="md:col-span-2 rounded-2xl border shadow-sm p-6 bg-white">
          <h2
            className="text-3xl font-semibold mb-4 tracking-tight"
            style={{ color: NAVY }}
          >
            {t.contact}
          </h2>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              const subject = encodeURIComponent(
                lang === "en" ? "Website contact" : "Contact via site web"
              );
              const body = encodeURIComponent(
                `Name/Nom: ${name}\nEmail: ${email}\nPhone/Tél: ${phone}\n\n${msg}`
              );
              window.location.href = `mailto:simon@fairviewmortgages.ca?subject=${subject}&body=${body}`;
            }}
            className="grid sm:grid-cols-2 gap-3"
          >
            <input
              className="rounded-lg border px-3 py-2"
              placeholder={t.fullName}
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              className="rounded-lg border px-3 py-2"
              type="email"
              placeholder={t.email}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              className="rounded-lg border px-3 py-2"
              placeholder={t.phone}
              value={phone}
              onChange={(e) =>
                setPhone(e.target.value.replace(/[^0-9]+/g, ""))
              }
            />
            <input
              className="rounded-lg border px-3 py-2"
              placeholder={t.subject}
            />
            <textarea
              className="sm:col-span-2 rounded-lg border px-3 py-2"
              rows={4}
              placeholder={t.howHelp}
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
            />
            <div className="sm:col-span-2 flex gap-3">
              <button
                type="submit"
                className="px-4 py-2 rounded-lg text-white shadow-sm hover:shadow transition-shadow"
                style={{ background: NAVY }}
              >
                {t.send}
              </button>
              <a
                href={APPLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg hover:bg-slate-50 transition-colors"
                style={{ border: `1px solid ${NAVY}`, color: NAVY }}
              >
                {lang === "en" ? "Apply Online" : "Postuler en ligne"}
              </a>
            </div>
          </form>
        </div>

        <div className="rounded-2xl border shadow-sm p-6 text-sm space-y-2 bg-white">
          <div className="font-semibold">{t.details}</div>
          <div>
            <strong>Phone:</strong>{" "}
            <a className="underline" href="tel:+15062334449">
              (506) 233-4449
            </a>
          </div>
          <div>
            <strong>Email:</strong>{" "}
            <a className="underline" href="mailto:simon@fairviewmortgages.ca">
              simon@fairviewmortgages.ca
            </a>
          </div>
          <div>
            <strong>Office:</strong> 150 Edmonton Ave Moncton, NB
          </div>
          <div>
            <strong>Location:</strong> Moncton / Dieppe, NB
          </div>
          <div>
            <strong>Hours:</strong> {t.hours}
          </div>
        </div>
      </section>

      {/* ───────────────────────── Footer ───────────────────────── */}
      <footer className="border-t bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10 grid md:grid-cols-4 gap-6 text-sm">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <img src="/logo.jpg" alt="Fairview Mortgages" className="h-6 w-auto" />
              <span className="font-semibold" style={{ color: NAVY }}>
                Fairview Mortgages
              </span>
            </div>
            <p className="text-slate-600">
              Licensed in New Brunswick. This site is for informational purposes
              and does not constitute an offer to lend. E&OE.
            </p>
          </div>

          <div>
            <div className="font-medium mb-2">{t.footerNav}</div>
            <div className="flex flex-col gap-1">
              {t.nav.map((label, i) => (
                <button
                  key={label}
                  onClick={() =>
                    go(
                      [
                        "home",
                        "services",
                        "rates",
                        "lenders",
                        "pre",
                        "about",
                        "contact",
                      ][i]
                    )
                  }
                  className="text-slate-600 hover:text-slate-900 text-left"
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="font-medium mb-2">{t.footerDisc}</div>
            <p className="text-slate-600">{t.footerText}</p>
            <p className="text-slate-600">
              © {new Date().getFullYear()} Fairview Mortgages.
            </p>
          </div>

          <div>
            <div className="font-medium mb-2">{t.subscribe}</div>
            <div className="flex gap-2">
              <input className="rounded-lg border px-3 py-2" placeholder="Email" />
              <button
                className="px-3 rounded-lg text-slate-900"
                style={{ background: ORANGE }}
              >
                OK
              </button>
            </div>
            <p className="text-xs text-slate-500 mt-1">{t.subscribeHint}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
