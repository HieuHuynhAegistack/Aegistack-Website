import type { Metadata } from 'next';
import LegalLayout from '../components/LegalLayout';

export const metadata: Metadata = {
  title: 'Privacy Policy | AegisStack',
  description: 'Learn how AegisStack collects, uses, and protects your personal data. Our commitment to your privacy and data security.',
};

const sections = [
  { id: 'introduction', title: 'Introduction' },
  { id: 'info-collection', title: 'Information We Collect' },
  { id: 'info-use', title: 'How We Use Your Information' },
  { id: 'data-security', title: 'Data Security' },
  { id: 'data-sharing', title: 'Data Sharing' },
  { id: 'your-rights', title: 'Your Rights' },
  { id: 'policy-changes', title: 'Changes to This Policy' },
  { id: 'contact', title: 'Contact Us' },
];

export default function Privacy() {
  return (
    <LegalLayout
      title="Privacy Policy"
      sections={sections}
    >
      <section id="introduction">
        <h2>Introduction</h2>
        <p>
          Welcome to AegisStack. We are committed to protecting your privacy and handling your personal data in an open and transparent manner. This privacy policy explains how we collect, use, process, and safeguard your information when you use our services.
        </p>
      </section>

      <section id="info-collection">
        <h2>Information We Collect</h2>
        <p>
          We collect information that you provide directly to us when you use our services. This includes:
        </p>
        <ul>
          <li>
            <strong>Account Information:</strong> When you register for an account, we collect personal details such as your name, email address, and password.
          </li>
          <li>
            <strong>Project Data:</strong> We collect and store the data you create within our platform, including project details, test cases, and related files.
          </li>
          <li>
            <strong>Usage Information:</strong> We automatically collect information about your interactions with our services, such as the features you use, the time and date of your visits, and other system activity.
          </li>
          <li>
            <strong>Communications:</strong> If you contact us directly, we may receive additional information about you such as your name, email address, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.
          </li>
        </ul>
      </section>

      <section id="info-use">
        <h2>How We Use Your Information</h2>
        <p>We use the information we collect for various purposes, including to:</p>
        <ul>
          <li>Provide, operate, and maintain our services;</li>
          <li>Improve, personalize, and expand our services;</li>
          <li>Understand and analyze how you use our services;</li>
          <li>Develop new products, services, features, and functionality;</li>
          <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the service, and for marketing and promotional purposes;</li>
          <li>Process your transactions;</li>
          <li>Find and prevent fraud.</li>
        </ul>
      </section>

      <section id="data-security">
        <h2>Data Security</h2>
        <p>
          We implement a variety of security measures to maintain the safety of your personal information. Your data is stored on secure servers and is encrypted both in transit and at rest. We are committed to protecting your data against unauthorized access, alteration, disclosure, or destruction.
        </p>
      </section>

      <section id="data-sharing">
        <h2>Data Sharing</h2>
        <p>
          We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information unless we provide users with advance notice. This does not include website hosting partners and other parties who assist us in operating our website, conducting our business, or serving our users, so long as those parties agree to keep this information confidential.
        </p>
      </section>

      <section id="your-rights">
        <h2>Your Rights</h2>
        <p>You have certain rights regarding your personal data. You have the right to:</p>
        <ul>
          <li>Access the personal data we hold about you.</li>
          <li>Request that we correct any inaccurate personal data.</li>
          <li>Request that we delete your personal data.</li>
          <li>Request a copy of your personal data in a portable format.</li>
        </ul>
        <p>You can exercise these rights by contacting us through our support channels.</p>
      </section>

      <section id="policy-changes">
        <h2>Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
        </p>
      </section>

      <section id="contact">
        <h2>Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us at <a href="mailto:support@aegisstack.com">support@aegisstack.com</a>.
        </p>
      </section>
    </LegalLayout>
  );
}
