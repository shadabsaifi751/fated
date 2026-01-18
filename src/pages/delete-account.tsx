import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function DeleteAccount() {
  return (
    <>
      <Head>
        <title>Account Deletion - Fated</title>
        <meta name="description" content="Request deletion of your FATED account" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-white">
        <Header />

        <div className="container mx-auto px-4 py-8 sm:py-12 max-w-4xl">
          <h1 className="lobster-font text-4xl sm:text-5xl text-[#4B164C] mb-6">
            Account Deletion – FATED
          </h1>

          <div className="prose prose-lg max-w-none space-y-6">
            <p className="text-gray-700 leading-relaxed text-lg">
              To request deletion of your FATED account and associated data, please email{" "}
              <a href="mailto:hello@fated.in?subject=Account%20Deletion%20Request" className="text-[#4B164C] underline hover:text-[#6B1E6D] font-semibold">
                hello@fated.in
              </a>{" "}
              from your registered email address with the subject "Account Deletion Request".
            </p>

            <div className="bg-gray-50 border-l-4 border-[#4B164C] p-6 my-8">
              <p className="text-gray-700 leading-relaxed">
                Upon verification, we will permanently delete your account, profile information, photos, messages,
                and user-generated content within <strong>7 working days</strong>, unless retention is required by law.
              </p>
            </div>

            <section className="mt-8">
              <h2 className="text-2xl font-semibold text-[#4B164C] mb-4">
                What Gets Deleted?
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Your account and profile information</li>
                <li>Profile photos and images</li>
                <li>Messages and conversations</li>
                <li>User-generated content and responses</li>
                <li>Preferences and settings</li>
              </ul>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-semibold text-[#4B164C] mb-4">
                Important Notes
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>This action is permanent and cannot be undone</li>
                <li>You must send the request from your registered email address</li>
                <li>Deletion will be completed within 7 working days</li>
                <li>Some data may be retained if required by law or for legal compliance</li>
              </ul>
            </section>

            <div className="mt-12 p-6 bg-[#4B164C]/5 rounded-lg">
              <h3 className="text-xl font-semibold text-[#4B164C] mb-3">
                Need Help?
              </h3>
              <p className="text-gray-700">
                If you have any questions about account deletion or data privacy, please contact us at{" "}
                <a href="mailto:hello@fated.in" className="text-[#4B164C] underline hover:text-[#6B1E6D] font-semibold">
                  hello@fated.in
                </a>
              </p>
            </div>
          </div>
        </div>

        <Footer />
      </main>
    </>
  );
}
