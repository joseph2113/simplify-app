import * as React from 'react';

export interface ILayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
  return (
    <div className='w-full h-screen font-sans flex overflow-y-hidden'>
      {children}
    </div>
  );
}

export default Layout;
