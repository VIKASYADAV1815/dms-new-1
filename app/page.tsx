'use client'

import Header from '@/components/Header'
import { PremiumHero } from '@/components/PremiumHero'
import { ServicesEnhanced } from '@/components/ServicesEnhanced'
import { DataBreachSection } from '@/components/DataBreachSection'
import { PremiumLockHero } from '@/components/PremiumLockHero'
import { InfrastructureSecure } from '@/components/InfrastructureSecure'
import CaseStudies from '@/components/CaseStudies'
import Testimonials from '@/components/Testimonials'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#08090B]">
      <Header />
      <PremiumHero />
      <ServicesEnhanced />
      <DataBreachSection />
      <PremiumLockHero />
      <InfrastructureSecure />
      <CaseStudies />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  )
}
