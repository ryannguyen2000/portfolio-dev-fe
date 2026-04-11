import type { ReactNode } from 'react';

interface MarketingLayoutProps {
  children: ReactNode;
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div className="marketing-layout">
      {/* Add navigation, header, or other shared components here */}
      <main>{children}</main>
      {/* Add footer or other shared components here */}
    </div>
  );
}