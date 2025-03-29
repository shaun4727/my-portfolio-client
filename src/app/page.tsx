import SkillSection from '@/components/home/components/skill-section';
import styles from './page.module.css';
import HeroSection from '@/components/home/components/hero-section';
import ProjectSection from '@/components/home/components/project-section';

export default function Home() {
  return (
    <div className={styles.page}>
      <HeroSection />
      <SkillSection />
      <ProjectSection />
    </div>
  );
}
