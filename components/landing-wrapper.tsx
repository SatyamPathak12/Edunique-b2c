"use client";
import Navbar from "./landing-navbar";

export default function landingWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}
