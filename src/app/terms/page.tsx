import type { Metadata } from 'next';
import LegalLayout from '../components/LegalLayout';

export const metadata: Metadata = {
  title: 'Terms of Service | AegisStack',
  description: 'Read the Terms of Service for using AegisStack. Understand your rights and responsibilities when using our project management and QA platform.',
};

const sections = [
  { id: 'acceptance', title: 'Acceptance of Terms' },
  { id: 'license', title: 'Use License' },
  { id: 'accounts', title: 'User Accounts' },
  { id: 'prohibited', title: 'Prohibited Uses' },
  { id: 'termination', title: 'Termination' },
  { id: 'disclaimer', title: 'Disclaimer' },
  { id: 'liability', title: 'Limitation of Liability' },
  { id: 'governing-law', title: 'Governing Law' },
  { id: 'contact', title: 'Contact Information' },
];

export default function Terms() {
  return (
    <LegalLayout
      title="Terms of Service"
      sections={sections}
    >
      <section id="acceptance">
        <h2>Acceptance of Terms</h2>
        <p>
          By accessing and using AegisStack ("the Service"), you accept and agree to be bound by the terms and provisions of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services. Any participation in this service will constitute acceptance of this agreement. If you do not agree to abide by the above, please do not use this service.
        </p>
      </section>

      <section id="license">
        <h2>Use License</h2>
        <p>
          Permission is granted to temporarily access the materials on AegisStack's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
        </p>
        <ul>
          <li>Modify or copy the materials;</li>
          <li>Use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
          <li>Attempt to decompile or reverse engineer any software contained on AegisStack's website;</li>
          <li>Remove any copyright or other proprietary notations from the materials; or</li>
          <li>Transfer the materials to another person or "mirror" the materials on any other server.</li>
        </ul>
        <p>
          This license shall automatically terminate if you violate any of these restrictions and may be terminated by AegisStack at any time.
        </p>
      </section>

      <section id="accounts">
        <h2>User Accounts</h2>
        <p>
          When you create an account with us, you must provide us with information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service. You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password.
        </p>
      </section>

      <section id="prohibited">
        <h2>Prohibited Uses</h2>
        <p>You agree not to use the Service:</p>
        <ul>
          <li>In any way that violates any applicable national or international law or regulation.</li>
          <li>For the purpose of exploiting, harming, or attempting to exploit or harm minors in any way.</li>
          <li>To transmit, or procure the sending of, any advertising or promotional material, including any "junk mail", "chain letter," "spam," or any other similar solicitation.</li>
          <li>To impersonate or attempt to impersonate AegisStack, an AegisStack employee, another user, or any other person or entity.</li>
          <li>To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the Service, or which, as determined by us, may harm AegisStack or users of the Service or expose them to liability.</li>
        </ul>
      </section>

      <section id="termination">
        <h2>Termination</h2>
        <p>
          We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use the Service will immediately cease.
        </p>
      </section>

      <section id="disclaimer">
        <h2>Disclaimer</h2>
        <p>
          The materials on AegisStack's website are provided on an 'as is' basis. AegisStack makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
        </p>
      </section>

      <section id="liability">
        <h2>Limitation of Liability</h2>
        <p>
          In no event shall AegisStack or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on AegisStack's website, even if AegisStack or an AegisStack authorized representative has been notified orally or in writing of the possibility of such damage.
        </p>
      </section>

      <section id="governing-law">
        <h2>Governing Law</h2>
        <p>
          These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction in which AegisStack operates, and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
        </p>
      </section>

      <section id="contact">
        <h2>Contact Information</h2>
        <p>
          If you have any questions about these Terms of Service, please contact us at <a href="mailto:support@aegisstack.com">support@aegisstack.com</a>.
        </p>
      </section>
    </LegalLayout>
  );
}
