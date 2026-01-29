import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ChildSafety() {
  return (
    <>
      <Head>
        <title>Child Safety & CSAE Policy - Fated</title>
        <meta name="description" content="Child Safety and CSAE Policy for FATED dating app" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-white">
        <Header />

        <div className="container mx-auto px-4 py-8 sm:py-12 max-w-4xl">
          <h1 className="lobster-font text-4xl sm:text-5xl text-[#4B164C] mb-6">
            Child Safety & CSAE Policy
          </h1>

          <p className="text-gray-600 mb-8">
            Last updated: January 2026
          </p>

          <div className="prose prose-lg max-w-none space-y-8">
            <p className="text-gray-700 leading-relaxed">
              Fated is committed to protecting minors and preventing child sexual abuse and exploitation (CSAE).
              We maintain a zero-tolerance policy toward any content or behavior that exploits, endangers, or sexualizes minors.
            </p>

            <hr className="border-gray-300 my-8" />

            <section>
              <h2 className="text-2xl sm:text-3xl font-semibold text-[#4B164C] mb-4">
                Age Restriction
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Fated is strictly for users 18 years and older</li>
                <li>We do not permit minors on the platform</li>
                <li>Age confirmation is required during onboarding</li>
              </ul>
            </section>

            <hr className="border-gray-300 my-8" />

            <section>
              <h2 className="text-2xl sm:text-3xl font-semibold text-[#4B164C] mb-4">
                Prohibited Content & Behavior
              </h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                The following are strictly prohibited:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Any sexual content involving minors</li>
                <li>Grooming, solicitation, or exploitation of minors</li>
                <li>Attempting to misrepresent age</li>
                <li>Sharing or requesting CSAM in any form</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4 font-semibold">
                Violations result in immediate account suspension and permanent bans.
              </p>
            </section>

            <hr className="border-gray-300 my-8" />

            <section>
              <h2 className="text-2xl sm:text-3xl font-semibold text-[#4B164C] mb-4">
                Detection & Moderation
              </h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Fated uses a combination of:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>User reports</li>
                <li>Automated content checks</li>
                <li>Manual moderation reviews</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                All reports related to child safety are treated as high priority.
              </p>
            </section>

            <hr className="border-gray-300 my-8" />

            <section>
              <h2 className="text-2xl sm:text-3xl font-semibold text-[#4B164C] mb-4">
                Reporting Child Safety Concerns
              </h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Users can report:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Profiles</li>
                <li>Messages</li>
                <li>Content in-app using the Report feature</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                Reports involving minors are escalated immediately.
              </p>
            </section>

            <hr className="border-gray-300 my-8" />

            <section>
              <h2 className="text-2xl sm:text-3xl font-semibold text-[#4B164C] mb-4">
                Legal Compliance & Reporting
              </h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Fated complies with all applicable child safety laws and regulations.
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                Where required, we:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Preserve relevant data</li>
                <li>Report confirmed CSAE/CSAM cases to appropriate regional and national authorities</li>
                <li>Cooperate fully with law enforcement</li>
              </ul>
            </section>

            <hr className="border-gray-300 my-8" />

            <section>
              <h2 className="text-2xl sm:text-3xl font-semibold text-[#4B164C] mb-4">
                Contact for Child Safety
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                For child safety or CSAE-related concerns, contact:
              </p>
              <p className="text-gray-700 mb-4">
                <a href="mailto:hello@fated.in" className="text-[#4B164C] underline hover:text-[#6B1E6D] font-semibold">
                  📧 hello@fated.in
                </a>
              </p>
              <p className="text-gray-700 leading-relaxed">
                This inbox is monitored by the team responsible for safety, moderation, and compliance.
              </p>
            </section>
          </div>
        </div>

        <Footer />
      </main>
    </>
  );
}
