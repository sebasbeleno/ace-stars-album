import React from "react";
import Footer from "./Footer";
import Head from "./Head";
import Navbar from "./Navbar";

interface LayoutProps {
  children: React.ReactNode;
  title: string;
  description: string;
}

export default function Layout({ children, title, description }: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head title={title} description={description} />
      <Navbar />
      <main className="flex w-full flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
