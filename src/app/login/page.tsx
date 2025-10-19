"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NationalLogin from "@/components/NationalLogin";

export default function LoginPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#FFF7E1]">
      <Navbar />
      <div className="flex-1 flex flex-col justify-center pb-16">
        <NationalLogin />
      </div>
      <Footer />
    </main>
  );
}
