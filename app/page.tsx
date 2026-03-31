import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/home/Hero'
import { CredibilityBar } from '@/components/home/CredibilityBar'
import { GitHubRepos } from '@/components/home/GitHubRepos'
import { AgentIdeas } from '@/components/home/AgentIdeas'
import { PricingSection } from '@/components/home/PricingSection'
import { TechStack } from '@/components/home/TechStack'
import { Databases } from '@/components/home/Databases'
import { WhoToLearnFrom } from '@/components/home/WhoToLearnFrom'
import { WorkWithMe } from '@/components/home/WorkWithMe'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <CredibilityBar />
        <GitHubRepos />
        <AgentIdeas />
        <PricingSection />
        <TechStack />
        <Databases />
        <WhoToLearnFrom />
        <WorkWithMe />
      </main>
      <Footer />
    </>
  )
}
