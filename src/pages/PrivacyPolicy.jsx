export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 pt-28 pb-16">
      <div className="max-w-5xl mx-auto bg-white/80 backdrop-blur rounded-3xl shadow-lg p-8 md:p-12 border border-white">

        <h1 className="text-4xl font-bold text-indigo-900 mb-2">
          Privacy <span className="text-purple-700">Policy</span>
        </h1>
        <p className="text-indigo-600 mb-10">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <Section title="1. Introduction">
          <p>
            Welcome to <b>Margdarshan</b>. Your privacy is important to us. This Privacy
            Policy explains how we collect, use, and protect your personal information
            when you use our platform.
          </p>
        </Section>

        <Section title="2. Information We Collect">
          <ul className="list-disc ml-6 space-y-2">
            <li>Personal details like name, email, phone number</li>
            <li>Account information such as role (student, counselor, NGO, admin)</li>
            <li>Usage data like pages visited and actions taken on the platform</li>
          </ul>
        </Section>

        <Section title="3. How We Use Your Information">
          <ul className="list-disc ml-6 space-y-2">
            <li>To provide and improve our services</li>
            <li>To manage user accounts and sessions</li>
            <li>To communicate important updates</li>
            <li>To ensure platform security</li>
          </ul>
        </Section>

        <Section title="4. Data Security">
          <p>
            We implement reasonable security measures to protect your data. However,
            no method of transmission over the internet is 100% secure, so we cannot
            guarantee absolute security.
          </p>
        </Section>

        <Section title="5. Sharing of Information">
          <p>
            We do not sell or rent your personal information to third parties. Your data
            may only be shared when required by law or to provide core services of the platform.
          </p>
        </Section>

        <Section title="6. Cookies">
          <p>
            We may use cookies to improve user experience, analyze usage, and maintain
            session information.
          </p>
        </Section>

        <Section title="7. Your Rights">
          <ul className="list-disc ml-6 space-y-2">
            <li>You can request to view, update, or delete your data</li>
            <li>You can request account deletion at any time</li>
          </ul>
        </Section>

        <Section title="8. Changes to This Policy">
          <p>
            We may update this Privacy Policy from time to time. Any changes will be
            posted on this page.
          </p>
        </Section>

        <Section title="9. Contact Us">
          <p>
            If you have any questions about this Privacy Policy, you can contact us at:
          </p>
          <p className="mt-2 font-semibold text-indigo-700">
            margdarshanplatform@gmail.com
          </p>
        </Section>

      </div>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold text-indigo-900 mb-2">{title}</h2>
      <div className="text-indigo-800 leading-relaxed">{children}</div>
    </div>
  );
}

