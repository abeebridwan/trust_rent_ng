export default function PrivacyPolicyPage() {
  return (
    <section className="py-12 md:py-16 px-4">
      <div className="space-y-8">
        <h1 className="font-semibold text-base md:text-2xl">
          Privacy Policy
        </h1>

        <p className="font-medium text-sm md:text-lg">
          Last Updated: August 7, 2025
        </p>

        <p className="text-sm md:text-lg">
          Your privacy is the foundation of trust on Vetarent. This Privacy Policy
          explains how <strong>Unique Moehly Multi Concepts Ltd.</strong> (“we”,
          “us”, or “our”) collects, uses, and protects your personal information
          when you use the Vetarent platform. By using our services, you agree to
          the collection and use of information in accordance with this policy.
        </p>

        {/* 1 */}
        <div>
          <h2 className="font-semibold text-base md:text-lg">
            1. Information We Collect
          </h2>
          <p className="text-sm md:text-lg">
            We collect information to provide, operate, and improve our services.
          </p>

          <ul className="text-sm md:text-lg list-disc list-inside ml-4 space-y-2">
            <li>
              <strong>Account Information:</strong> Name, email address, and
              password when you create an account.
            </li>
            <li>
              <strong>Verification Information:</strong> With your consent, we
              collect government-issued ID details (such as NIN or Driver’s
              License) and a selfie via a secure third-party KYC provider.
            </li>
            <li>
              <strong>Property Verification (Landlords):</strong> Documents such
              as Certificate of Occupancy or utility bills to verify ownership or
              authority to rent.
            </li>
            <li>
              <strong>Listing Information:</strong> Property details, images, and
              descriptions uploaded by landlords.
            </li>
            <li>
              <strong>Application Information (Tenants):</strong> Supporting
              documents such as employment letters submitted during applications.
            </li>
            <li>
              <strong>Usage Data:</strong> IP address, browser type, device
              information, and pages visited.
            </li>
          </ul>
        </div>

        {/* 2 */}
        <div>
          <h2 className="font-semibold text-base md:text-lg">
            2. How We Use Your Information
          </h2>
          <ul className="text-sm md:text-lg list-disc list-inside ml-4 space-y-2">
            <li>To create and manage your Vetarent account</li>
            <li>To verify identities and maintain platform safety</li>
            <li>To facilitate property listings, applications, and payments</li>
            <li>To prevent fraud and enforce our Terms of Service</li>
            <li>To communicate service updates, alerts, and support messages</li>
            <li>To improve platform performance and user experience</li>
            <li>To resolve disputes between users when necessary</li>
          </ul>
        </div>

        {/* 3 */}
        <div>
          <h2 className="font-semibold text-base md:text-lg">
            3. Information Sharing & Disclosure
          </h2>
          <p className="text-sm md:text-lg">
            We do <strong>not</strong> sell your personal information. We only
            share data in limited circumstances:
          </p>

          <ul className="text-sm md:text-lg list-disc list-inside ml-4 space-y-2">
            <li>
              <strong>With Other Users:</strong> Application details are shared
              with landlords only when a tenant applies. Property addresses are
              revealed only after approval.
            </li>
            <li>
              <strong>With Service Providers:</strong> Trusted partners such as
              KYC providers, payment processors (e.g. Paystack), cloud hosting
              services, and email services.
            </li>
            <li>
              <strong>Legal Requirements:</strong> When required by law or valid
              legal requests.
            </li>
          </ul>
        </div>

        {/* 4 */}
        <div>
          <h2 className="font-semibold text-base md:text-lg">
            4. Data Security
          </h2>
          <p className="text-sm md:text-lg">
            We use industry-standard technical, administrative, and physical
            safeguards to protect your data, including encryption and secure
            storage. While no system is 100% secure, we continuously improve our
            security practices.
          </p>
        </div>

        {/* 5 */}
        <div>
          <h2 className="font-semibold text-base md:text-lg">
            5. Your Data Rights
          </h2>
          <p className="text-sm md:text-lg">
            In line with the Nigeria Data Protection Regulation (NDPR), you have
            the right to access, correct, or request deletion of your personal
            information. You may also withdraw consent where applicable.
          </p>
        </div>

        {/* 6 */}
        <div>
          <h2 className="font-semibold text-base md:text-lg">
            6. Changes to This Policy
          </h2>
          <p className="text-sm md:text-lg">
            We may update this Privacy Policy from time to time. Any changes will
            be posted on this page with an updated “Last Updated” date.
          </p>
        </div>

        {/* 7 */}
        <div>
          <h2 className="font-semibold text-base md:text-lg">
            7. Contact Us
          </h2>
          <p className="text-sm md:text-lg">
            If you have questions about this Privacy Policy or your data, please
            <a href="/" className="text-vetarent-blue"> contact us</a> 
          </p>
        </div>

      </div>
    </section>
  );
}
