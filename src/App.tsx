import { Layout } from './components/layout/Layout';
import { Hero } from './components/home/Hero';
import { About } from './components/home/About';
import { EnterpriseImpact } from './components/home/EnterpriseImpact';
import { DigitalVault } from './components/home/DigitalVault';
import { Contact } from './components/home/Contact';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <Layout>
        <Hero />
        <About />
        <EnterpriseImpact />
        <DigitalVault />
        {/* <AIWorkflow /> */}
        <Contact />
      </Layout>
    </LanguageProvider>
  );
}

export default App;
