import type { Metadata } from 'next';
import LegalLayout from '../components/LegalLayout';

export const metadata: Metadata = {
  title: 'Terms of Use | AegisStack',
  description: 'Read the terms and conditions for using AegisStack. Understand your rights and responsibilities when using our AI-powered test automation platform.',
};

const sections = [
  { id: 'eligibility', title: '1. Eligibility' },
  { id: 'use-of-service', title: '2. Use of the Service' },
  { id: 'account-responsibilities', title: '3. Account Responsibilities' },
  { id: 'data-and-ownership', title: '4. Data and Ownership' },
  { id: 'intellectual-property', title: '5. Intellectual Property' },
  { id: 'service-availability', title: '6. Service Availability' },
  { id: 'fees-and-payment', title: '7. Fees and Payment' },
  { id: 'privacy', title: '8. Privacy' },
  { id: 'disclaimer-of-warranties', title: '9. Disclaimer of Warranties' },
  { id: 'limitation-of-liability', title: '10. Limitation of Liability' },
  { id: 'termination', title: '11. Termination' },
  { id: 'governing-law', title: '12. Governing Law' },
  { id: 'changes-to-terms', title: '13. Changes to Terms' },
  { id: 'contact-us', title: '14. Contact Us' },
];

export default function Terms() {
  return (
    <LegalLayout
      title="Terms of Use"
      sections={sections}
    >
      <p>
        <strong>Effective Date:</strong> August 19, 2025
      </p>
      <p>
        These Terms of Use (“Terms”) govern your access to and use of Aegistack, an AI-powered tool provided by Aegisol (“we”, “our”, “us”), which enables automatic conversion of manual test cases into automation test cases (“the Service”). By accessing or using the Service, you agree to these Terms. If you do not agree, please do not use the Service.
      </p>

      <section id="eligibility">
        <h2>1. Eligibility</h2>
        <p>You must be at least 18 years old to use the Service.</p>
        <p>By using Aegistack, you confirm that you have the legal authority to enter into this agreement on behalf of yourself or your organization.</p>
      </section>

      <section id="use-of-service">
        <h2>2. Use of the Service</h2>
        <p>You agree to use Aegistack only for lawful purposes and in compliance with applicable laws and regulations.</p>
        <p>You may not:</p>
        <ul>
          <li>Use the Service to upload or process unlawful, harmful, or infringing content.</li>
          <li>Attempt to reverse-engineer, decompile, or misuse the Service.</li>
          <li>Interfere with or disrupt the integrity or performance of Aegistack.</li>
        </ul>
      </section>

      <section id="account-responsibilities">
        <h2>3. Account Responsibilities</h2>
        <ul>
          <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
          <li>You are solely responsible for all activities conducted through your account.</li>
          <li>You must notify us immediately if you suspect unauthorized use of your account.</li>
        </ul>
      </section>

      <section id="data-and-ownership">
        <h2>4. Data and Ownership</h2>
        <ul>
          <li>You retain full ownership of the test cases, scripts, and documentation you input into Aegistack.</li>
          <li>We claim no ownership over your data, except the rights necessary to operate and improve the Service.</li>
          <li>Generated outputs (automated test cases) are provided to you for your use, subject to these Terms.</li>
        </ul>
      </section>

      <section id="intellectual-property">
        <h2>5. Intellectual Property</h2>
        <ul>
          <li>All rights, title, and interest in Aegistack, including its AI models, software, and trademarks, remain the exclusive property of Aegisol.</li>
          <li>These Terms do not grant you any license to use Aegisol’s trademarks or intellectual property beyond what is expressly stated.</li>
        </ul>
      </section>

      <section id="service-availability">
        <h2>6. Service Availability</h2>
        <ul>
          <li>We strive to keep Aegistack available at all times but do not guarantee uninterrupted or error-free operation.</li>
          <li>We may update, suspend, or discontinue any part of the Service at our discretion.</li>
        </ul>
      </section>

      <section id="fees-and-payment">
        <h2>7. Fees and Payment</h2>
        <ul>
          <li>Some features of Aegistack may require payment of fees.</li>
          <li>All payments are non-refundable unless otherwise stated.</li>
          <li>Failure to pay may result in suspension or termination of your access.</li>
        </ul>
      </section>

      <section id="privacy">
        <h2>8. Privacy</h2>
        <p>Your use of Aegistack is also governed by our <a href="/privacy" className="text-blue-600 hover:text-blue-700">Privacy Policy</a>, which explains how we collect, use, and protect your information.</p>
      </section>

      <section id="disclaimer-of-warranties">
        <h2>9. Disclaimer of Warranties</h2>
        <p>Aegistack is provided on an “as is” and “as available” basis.</p>
        <p>We disclaim all warranties, express or implied, including but not limited to merchantability, fitness for a particular purpose, and non-infringement.</p>
        <p>We do not guarantee that outputs generated by Aegistack will be error-free, accurate, or suitable for your intended purpose.</p>
      </section>

      <section id="limitation-of-liability">
        <h2>10. Limitation of Liability</h2>
        <p>To the maximum extent permitted by law, Aegisol shall not be liable for:</p>
        <ul>
          <li>Any indirect, incidental, special, or consequential damages.</li>
          <li>Loss of data, profits, or business opportunities resulting from use of the Service.</li>
          <li>Our total liability for any claim relating to the Service will not exceed the fees you paid to use Aegistack in the preceding 12 months.</li>
        </ul>
      </section>

      <section id="termination">
        <h2>11. Termination</h2>
        <ul>
          <li>We may suspend or terminate your access to Aegistack if you violate these Terms.</li>
          <li>You may discontinue use of the Service at any time.</li>
        </ul>
      </section>

      <section id="governing-law">
        <h2>12. Governing Law</h2>
        <p>These Terms shall be governed by and construed in accordance with the laws of the Socialist Republic of Vietnam, without regard to its conflict of laws principles.</p>
      </section>

      <section id="changes-to-terms">
        <h2>13. Changes to Terms</h2>
        <p>We may revise these Terms from time to time. Any changes will take effect when posted on our website, with the updated “Effective Date” at the top. Continued use of the Service indicates your acceptance of the updated Terms.</p>
      </section>

      <section id="contact-us">
        <h2>14. Contact Us</h2>
        <p>If you have questions regarding these Terms, please contact us at:</p>
        <p> 📧 <a href="mailto:tech@aegistack.com">tech@aegistack.com</a></p>
        <p> 🏢 Aegisol – Dong Dinh hamlet, Dien Toan commune, Dien Khanh district, Khanh Hoa province, Vietnam</p>
      </section>
    </LegalLayout>
  );
}
