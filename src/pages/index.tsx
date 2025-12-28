import Head from "next/head";
import HeroSection from "@/components/HeroSection";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FatedWork from "@/components/FatedWork";
import ChooseTopics from "@/components/ChooseTopics";
import ScrollEngage from "@/components/ScrollEngage";
import InterestAlign from "@/components/InterestAlign";

export default function Home() {
  return (<>
    <Head>
      <title>Fated – Dating App Based on Thoughts, Ideas & Conversations (India)</title>
      <meta name="description" content="Fated is a new-age dating app where connections start with thoughts, ideas, and meaningful conversations — not just photos. Join the waitlist in India." />      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="/favicon.ico" />
      <meta property="og:title" content="Fated – Dating App Based on Thoughts & Conversations" />
      <meta property="og:description" content="A new-age dating app where connections begin with ideas, not photos." />
    </Head>

    {/* Main Content Area */}
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      {/* <FatedWork /> */}
      <ChooseTopics />
      <ScrollEngage />
      <InterestAlign />
      <Footer />
    </main>
  </>
  );
}
