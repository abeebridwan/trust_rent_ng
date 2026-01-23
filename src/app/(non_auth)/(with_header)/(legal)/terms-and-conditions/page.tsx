import Link from "next/link";

export default function TermsAndConditionsPage() {
  return (
    <section className="py-12 md:py-16 px-4">
      <div className="space-y-8">
        <h1 className="font-semibold text-base md:text-2xl">
          Terms of Service
        </h1>

        <p className="font-medium text-sm md:text-lg">
          Effective Date: August 15, 2025
        </p>

        <p className="text-sm md:text-lg">
          Welcome to <strong>Vetarent</strong>, a product of{" "}
          <strong>Unique Moehly Multi Concepts Ltd.</strong> These Terms of
          Service (“Terms”) govern your access to and use of the Vetarent
          website, Progressive Web App (PWA), and related services
          (collectively, the “Service”). By creating an account or using the
          Service, you agree to be bound by these Terms.
        </p>

        {/* 1 */}
        <div>
          <h2 className="font-semibold text-base md:text-lg">
            1. Our Service
          </h2>
          <p className="text-sm md:text-lg">
            Vetarent is a technology platform that connects individuals seeking
            rental properties (“Tenants”) with property owners (“Landlords”).
            Our services include:
          </p>

          <ul className="text-sm md:text-lg list-disc list-inside ml-4 space-y-2">
            <li>Mandatory identity verification for all users</li>
            <li>Verification of landlords’ right to list properties</li>
            <li>Property listing and rental application tools</li>
            <li>Secure communication between verified users</li>
          </ul>

          <p className="text-sm md:text-lg mt-2">
            <strong>Important Disclaimer:</strong> Vetarent is a neutral
            technology platform. We are not a real estate broker, agent, or
            legal advisor. We do not own, manage, inspect, or endorse any
            properties listed. All lease agreements are strictly between the
            Landlord and the Tenant.
          </p>
        </div>

        {/* 2 */}
        <div>
          <h2 className="font-semibold text-base md:text-lg">
            2. Account Creation & Mandatory Verification
          </h2>

          <ul className="text-sm md:text-lg list-disc list-inside ml-4 space-y-2">
            <li>
              <strong>Eligibility:</strong> You must be at least 18 years old to
              use the Service.
            </li>
            <li>
              <strong>Account Security:</strong> You are responsible for
              safeguarding your login credentials and all activity under your
              account.
            </li>
            <li>
              <strong>Mandatory Verification:</strong> All users must complete
              identity verification. Landlords must also complete property
              verification before publishing listings.
            </li>
            <li>
              <strong>Accurate Information:</strong> You agree to provide true,
              complete, and up-to-date information. False or misleading
              information may result in immediate account termination.
            </li>
          </ul>
        </div>

        {/* 3 */}
        <div>
          <h2 className="font-semibold text-base md:text-lg">
            3. Landlord-Specific Terms
          </h2>

          <ul className="text-sm md:text-lg list-disc list-inside ml-4 space-y-2">
            <li>
              <strong>Listing Fee:</strong> A one-time, non-refundable listing
              fee is required to publish a property.
            </li>
            <li>
              <strong>Right to Rent:</strong> You confirm that you have the legal
              authority to rent any property you list.
            </li>
            <li>
              <strong>Listing Accuracy:</strong> You are responsible for the
              accuracy of property details, pricing, and images.
            </li>
            <li>
              <strong>Photo Watermarking:</strong> You grant Vetarent permission
              to apply protective watermarks to uploaded images.
            </li>
            <li>
              <strong>Listing Management:</strong> You must promptly update
              listing availability. Inactive listings may be unpublished.
            </li>
          </ul>
        </div>

        {/* 4 */}
        <div>
          <h2 className="font-semibold text-base md:text-lg">
            4. Prohibited Conduct & Communication
          </h2>

          <p className="text-sm md:text-lg">
            You agree not to:
          </p>

          <ul className="text-sm md:text-lg list-disc list-inside ml-4 space-y-2">
            <li>Use the Service for unlawful or fraudulent purposes</li>
            <li>Impersonate another person or create false accounts</li>
            <li>Post abusive, misleading, or discriminatory content</li>
            <li>Circumvent verification or payment systems</li>
            <li>
              Contact users outside the Service for unauthorized purposes
            </li>
          </ul>

          <p className="text-sm md:text-lg mt-2">
            To protect the community, Vetarent reserves the right (but not the
            obligation) to review communications when investigating reports,
            disputes, or policy violations.
          </p>
        </div>

        {/* 5 */}
        <div>
          <h2 className="font-semibold text-base md:text-lg">
            5. Termination
          </h2>
          <p className="text-sm md:text-lg">
            We may suspend or terminate your account at any time if we believe
            your conduct violates these Terms, harms other users, or undermines
            the integrity of the platform.
          </p>
        </div>

        {/* 6 */}
        <div>
          <h2 className="font-semibold text-base md:text-lg">
            6. Disclaimers & Limitation of Liability
          </h2>
          <p className="text-sm md:text-lg">
            The Service is provided “AS IS” without warranties of any kind.
            Vetarent does not guarantee the quality, safety, legality, or
            availability of any property listed. To the fullest extent
            permitted by law, Vetarent shall not be liable for indirect,
            incidental, or consequential damages arising from your use of the
            Service.
          </p>
        </div>

        {/* 7 */}
        <div>
          <h2 className="font-semibold text-base md:text-lg">
            7. Governing Law
          </h2>
          <p className="text-sm md:text-lg">
            These Terms are governed by and construed in accordance with the
            laws of the Federal Republic of Nigeria.
          </p>
        </div>

        
        
      </div>
    </section>
  );
}
