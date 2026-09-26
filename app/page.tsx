import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Work from "@/components/Work";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Approach from "@/components/Approach";
import OneApproach from "@/components/OneApproach";
import Capabilities from "@/components/Capabilities";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import styles from "./page.module.css";

export default function Page() {
  return (
    <main className={styles.page}>
      <Hero />
      <Intro />
      <Work />
      <Services />
      <Process />
      <Approach />
      <OneApproach />
      <Capabilities />
      <Contact />
      <Footer />
    </main>
  );
}
