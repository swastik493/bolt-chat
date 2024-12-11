// import Image from "next/image";

import FeatureSection from "@/components/base/FeatureSection";
import Footer from "@/components/base/Footer";
import HeroSection from "@/components/base/HeroSection";
import Navbar from "@/components/base/Navbar";
import UserReviews from "@/components/base/UserReviews";
import { getServerSession } from "next-auth";
import { CustomSession, authOption } from "./api/auth/[...nextauth]/options";

export default async function Home() {
  const session:CustomSession|null = await getServerSession(authOption)
  return (
    <div className="min-h-screen flex flex-col ">
      {/* Header */}
      <Navbar user={session?.user}/>
      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <FeatureSection />

      {/* User Reviews Section */}
      <UserReviews />

      {/* Footer */}
      <Footer />
    </div>
  );
}
