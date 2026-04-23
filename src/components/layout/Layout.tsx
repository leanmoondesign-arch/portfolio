import type { ReactNode } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col relative bg-primary text-primary overflow-hidden transition-colors duration-500">
      {/* Background gradients intentionally muted to very low opacity for minimalism */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-500/5 blur-[150px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-cyan-700/5 blur-[150px]" />
      </div>
      
      <Navbar />
      
      <main className="flex-1 flex flex-col relative z-0">
        {children}
      </main>

      <Footer />
    </div>
  );
};
