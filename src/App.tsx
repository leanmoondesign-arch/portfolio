import { Layout } from './components/layout/Layout';
import { Hero } from './components/home/Hero';
import { About } from './components/home/About';
import { EnterpriseImpact } from './components/home/EnterpriseImpact';
import { DigitalVault } from './components/home/DigitalVault';
import { Contact } from './components/home/Contact';

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <EnterpriseImpact />
      <DigitalVault />
      {/* <AIWorkflow /> */}
      <Contact />
    </Layout>
  );
}

export default App;
