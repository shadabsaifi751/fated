import Head from "next/head";
import HeroSection from "@/components/HeroSection";
import Header from "@/components/Header";
import ChooseToMatch from "@/components/ChooseToMatch";
import Footer from "@/components/Footer";
import FatedWork from "@/components/FatedWork";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fated - Where Minds Meet Heart Follows | Connect by Topics</title>
        <meta name="description" content="Fated is a unique dating platform focused on deep, meaningful connections. Learn how fated works and choose your perfect match based on shared interests." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Fated - Connect by Topics" />
        <meta property="og:description" content="Where Minds Meet Heart Follows." />
      </Head>

      {/* Main Content Area */}
      <main className="min-h-screen">
        <Header/>
        <HeroSection />
        <FatedWork/>
        <ChooseToMatch/>
        <Footer/>
      </main>
    </>
  );
}
