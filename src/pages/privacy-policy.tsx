import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy - Fated</title>
        <meta name="description" content="Privacy Policy for FATED dating app" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-white">
        <Header />

        <div className="container mx-auto px-4 py-8 sm:py-12 max-w-4xl">
          <h1 className="lobster-font text-4xl sm:text-5xl text-[#4B164C] mb-6">
            Privacy Policy for FATED
          </h1>

          <p className="text-gray-600 mb-8">
            Last updated: January 18, 2026
          </p>

          <div className="prose prose-lg max-w-none space-y-8">
            <p className="text-gray-700 leading-relaxed">
              FATED ("we", "our", "us") values your privacy and is committed to protecting your personal data.
              This Privacy Policy explains how we collect, use, store, and protect information when you use the
              FATED mobile application and related services.
            </p>

            <hr className="border-gray-300 my-8" />

            <section>
              <h2 className="text-2xl sm:text-3xl font-semibold text-[#4B164C] mb-4">
                1. Information We Collect
              </h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                We may collect the following types of information:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Personal Information:</strong> Name, email address, age, profile photos</li>
                <li><strong>User-Generated Content:</strong> Opinions, responses, messages, and interactions within the app</li>
                <li><strong>Usage Data:</strong> App interactions, device information, and basic analytics data</li>
                <li><strong>Location Data (if enabled):</strong> Approximate location to improve discovery and relevance</li>
              </ul>
            </section>

            <hr className="border-gray-300 my-8" />

            <section>
              <h2 className="text-2xl sm:text-3xl font-semibold text-[#4B164C] mb-4">
                2. How We Use Your Information
              </h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                We use your information to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Create and manage user accounts</li>
                <li>Enable matching, conversations, and connections</li>
                <li>Improve app functionality and user experience</li>
                <li>Maintain safety, moderation, and prevent misuse</li>
                <li>Communicate important updates or support messages</li>
              </ul>
            </section>

            <hr className="border-gray-300 my-8" />

            <section>
              <h2 className="text-2xl sm:text-3xl font-semibold text-[#4B164C] mb-4">
                3. Data Sharing
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We do not sell personal data.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We may share limited data only with trusted third-party service providers (such as cloud hosting,
                analytics, or messaging services) strictly to operate and improve the app.
              </p>
            </section>

            <hr className="border-gray-300 my-8" />

            <section>
              <h2 className="text-2xl sm:text-3xl font-semibold text-[#4B164C] mb-4">
                4. Data Security
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We use reasonable technical and organizational measures to protect your data against unauthorized
                access, loss, or misuse.
              </p>
            </section>

            <hr className="border-gray-300 my-8" />

            <section>
              <h2 className="text-2xl sm:text-3xl font-semibold text-[#4B164C] mb-4">
                5. Children's Privacy
              </h2>
              <p className="text-gray-700 leading-relaxed">
                FATED is not intended for users under the age of 18. We do not knowingly collect personal data
                from children. If we learn that such data has been collected, we will delete it immediately.
              </p>
            </section>

            <hr className="border-gray-300 my-8" />

            <section>
              <h2 className="text-2xl sm:text-3xl font-semibold text-[#4B164C] mb-4">
                6. User Rights
              </h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                You can:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Edit or delete your profile</li>
                <li>Request account and data deletion</li>
                <li>Contact us for privacy-related concerns</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                Requests can be made by emailing{" "}
                <a href="mailto:hello@fated.in" className="text-[#4B164C] underline hover:text-[#6B1E6D]">
                  hello@fated.in
                </a>.
              </p>
            </section>

            <hr className="border-gray-300 my-8" />

            <section>
              <h2 className="text-2xl sm:text-3xl font-semibold text-[#4B164C] mb-4">
                7. Changes to This Policy
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We may update this Privacy Policy from time to time. Any changes will be posted on this page
                with an updated date.
              </p>
            </section>

            <hr className="border-gray-300 my-8" />

            <section>
              <h2 className="text-2xl sm:text-3xl font-semibold text-[#4B164C] mb-4">
                8. Contact Us
              </h2>
              <p className="text-gray-700 leading-relaxed mb-2">
                If you have questions about this Privacy Policy or your data, contact us at:
              </p>
              <p className="text-gray-700">
                <a href="mailto:hello@fated.in" className="text-[#4B164C] underline hover:text-[#6B1E6D] font-semibold">
                  hello@fated.in
                </a>
              </p>
            </section>
          </div>
        </div>

        <Footer />
      </main>
    </>
  );
}
