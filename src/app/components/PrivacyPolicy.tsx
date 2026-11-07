const policySections = [
  {
    title: '1. Introduction',
    paragraphs: [
      'Affordable Fix & Fab respects your privacy and is committed to protecting the personal information you provide when using our website or contacting us.',
      'This Privacy Policy explains what information we collect, how we use it and how we protect it.',
    ],
  },
  {
    title: '2. Information We Collect',
    paragraphs: ['When you contact us, request a quote or use our website, we may collect:'],
    list: [
      'Your name',
      'Phone number',
      'Email address',
      'Suburb or project location',
      'Details about your project or enquiry',
      'Photographs or attachments you voluntarily provide',
      'Other information relevant to providing our services',
    ],
    after: 'We may also collect basic website usage information through cookies or website analytics, where these features are enabled.',
  },
  {
    title: '3. How We Use Your Information',
    paragraphs: ['We collect and use your information to:'],
    list: [
      'Respond to enquiries and quote requests.',
      'Discuss your fabrication, welding or repair requirements.',
      'Prepare and provide quotes.',
      'Arrange jobs, installations and services.',
      'Communicate regarding ongoing or completed work.',
      'Manage invoices, payments and business records.',
      'Improve our website and customer experience.',
    ],
    after: 'We will only use your information for legitimate business purposes.',
  },
  {
    title: '4. Sharing Your Information',
    paragraphs: [
      'Affordable Fix & Fab does not sell or rent personal information to third parties.',
      'We may share relevant information with trusted service providers where necessary to operate our business, such as website hosting providers, email services and business software providers.',
      'We may also disclose information where required or authorised by law.',
    ],
  },
  {
    title: '5. Storage and Security',
    paragraphs: [
      'We take reasonable steps to protect personal information against loss, misuse, unauthorised access, modification or disclosure.',
      'Information may be stored electronically through our business systems, email services and website hosting providers.',
      'While we take care to protect your information, no method of electronic storage or transmission can be guaranteed to be completely secure.',
    ],
  },
  {
    title: '6. Cookies and Website Analytics',
    paragraphs: [
      'Our website may use cookies and similar technologies to improve website functionality and understand how visitors use our website.',
      'Where enabled, third-party services such as Google Analytics or advertising platforms may collect information about website visits and interactions.',
      'You can manage or disable cookies through your web browser settings.',
    ],
  },
  {
    title: '7. Accessing or Correcting Your Information',
    paragraphs: [
      'You may contact us to request access to personal information we hold about you or to request corrections if the information is inaccurate or outdated.',
      'We will consider and respond to reasonable requests.',
    ],
  },
  {
    title: '8. How Long We Keep Your Information',
    paragraphs: [
      'We retain personal information only for as long as reasonably necessary for business, administrative and legal purposes.',
      'Business records may be retained for periods required under Australian record-keeping laws.',
      'When information is no longer required, we take reasonable steps to securely delete or de-identify it.',
    ],
  },
  {
    title: '9. Contact Us',
    paragraphs: [
      'If you have questions about this Privacy Policy or how your personal information is handled, please contact us:',
      'Affordable Fix & Fab',
      'Email: affordablefixandfab@outlook.com',
      'Phone: 0412 677 236',
      'Website: https://www.fixandfab.com.au/',
    ],
  },
  {
    title: '10. Changes to This Policy',
    paragraphs: [
      'We may update this Privacy Policy from time to time to reflect changes to our business practices, website or applicable requirements.',
      'The latest version will always be available on our website.',
    ],
  },
];

export function PrivacyPolicy() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-secondary pb-24 pt-36">
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(91, 190, 214, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(91, 190, 214, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 mx-auto max-w-4xl px-6">
        <div className="mb-10 border-b border-primary/30 pb-8">
          <div className="mb-4 flex items-center gap-4">
            <div className="h-0.5 w-12 bg-primary" />
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Affordable Fix &amp; Fab
            </span>
          </div>
          <h1
            className="mb-3 text-white"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(2.5rem, 8vw, 5rem)',
              lineHeight: 0.95,
              letterSpacing: '0.02em',
            }}
          >
            Privacy Policy
          </h1>
          <p className="text-sm text-muted-foreground">Last updated: 7 November 2026</p>
        </div>

        <div className="space-y-8">
          {policySections.map((section) => (
            <section key={section.title} className="border-l-2 border-primary/30 pl-5">
              <h2
                className="mb-3 text-2xl text-primary"
                style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.03em' }}
              >
                {section.title}
              </h2>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {'list' in section && section.list && (
                  <ul className="list-disc space-y-2 pl-6 marker:text-primary">
                    {section.list.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                )}
                {'after' in section && section.after && <p>{section.after}</p>}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
