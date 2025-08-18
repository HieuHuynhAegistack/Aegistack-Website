import React from 'react';

import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

const TermsPage: React.FC = () => {
      return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <main>
        <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="prose lg:prose-xl bg-white p-8 rounded-lg shadow">
            <h1 className="text-3xl font-bold leading-tight text-gray-900 mb-6">Terms of Service</h1>
            <p>Last updated: August 18, 2025</p>

            <h2>1. Agreement to Terms</h2>
            <p>
              By using our services, you agree to be bound by these Terms. If you disagree with any part of the terms, then you do not have permission to access the service.
            </p>

            <h2>2. Changes to Terms or Services</h2>
            <p>
              We may modify the Terms at any time, in our sole discretion. If we do so, we’ll let you know either by posting the modified Terms on the Site or through other communications. It’s important that you review the Terms whenever we modify them because if you continue to use the Services after we have posted modified Terms on the Site, you are indicating to us that you agree to be bound by the modified Terms.
            </p>

            <h2>3. Who May Use the Services</h2>
            <p>
              You may use the Services only if you are 18 years or older and are not barred from using the Services under applicable law.
            </p>

            <h2>4. Content and Content Rights</h2>
            <p>
              For purposes of these Terms: (i) “Content” means text, graphics, images, music, software, audio, video, works of authorship of any kind, and information or other materials that are posted, generated, provided or otherwise made available through the Services; and (ii) “User Content” means any Content that Account holders (including you) provide to be made available through the Services.
            </p>

            <h2>5. Contact Information</h2>
            <p>
              If you have any questions about these Terms, please contact us at support@aegistack.com.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsPage;

