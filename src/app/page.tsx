"use client";

import React, { useState, useCallback } from "react";
import { TopTicker } from "@/components/layout/TopTicker";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Toast } from "@/components/ui/Toast";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { WorkSection } from "@/components/sections/WorkSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { useGSAPAnimations } from "@/hooks/useGSAPAnimations";
import type { SectionId } from "@/config/site";

export default function Home() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Initialize GSAP scroll triggers and entrance timelines
  useGSAPAnimations();

  const handleNavigate = useCallback((id: SectionId | string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const handleCopyEmail = useCallback((email: string) => {
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(email)
        .then(() => {
          setToastMessage(`COPIED [${email}] TO CLIPBOARD`);
          setTimeout(() => {
            setToastMessage(null);
          }, 3500);
        })
        .catch(() => {
          window.location.href = `mailto:${email}`;
        });
    } else {
      window.location.href = `mailto:${email}`;
    }
  }, []);

  return (
    <>
      <ScrollProgress />
      <TopTicker />
      <Header onNavigate={handleNavigate} />

      <main id="main-content" role="main">
        <HeroSection
          onNavigate={handleNavigate}
          onCopyEmail={handleCopyEmail}
        />
        <AboutSection />
        <ExperienceSection />
        <WorkSection />
        <SkillsSection />
        <ContactSection onCopyEmail={handleCopyEmail} />
      </main>

      <Footer />
      <Toast message={toastMessage} />
    </>
  );
}
