
"use client";

import React, { useState } from 'react';
import Header from '@/components/b2c-student/Header';
import {
  ProfileFormSection,
  NewsletterSection
} from './components';
import StudentNavbarNew from '@/components/student-navbar-new';
import Footer from '@/components/layout/Footer';
import { useRouter } from 'next/navigation';

export default function EditStudentProfilePage() {
  const [formData, setFormData] = useState({
    name: "Shlok Agheda",
    emailAddress: "example@gm.com",
    contactNumber: "1234567890",
    classNum: "8th",
    gender: "Male",
    dob: "00 JAN 0000",
    group: "A",
    city: "Mumbai",
    state: "Maharashtra",
    country: "India",
    pinCode: "000000",
  });
  const [newsletterEmail, setNewsletterEmail] = useState("");

  const handleProfileFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const router = useRouter();
  const handleProfileSave = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/b2c-student/student-flow/my-course")
  };

  const handleNewsletterEmailChange = (value: string) => {
    setNewsletterEmail(value);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter Subscription:", newsletterEmail);
    alert(`Subscribed with ${newsletterEmail} (check console)!`);
    setNewsletterEmail("");
  };

  return (
    <div className="bg-[#e3e3e3] min-h-screen flex flex-col">
      <StudentNavbarNew />

      <main className="flex-grow container mx-auto p-3 sm:p-4 md:p-6 lg:p-8">

        <ProfileFormSection
          formData={formData}
          onFormChange={handleProfileFormChange}
          onProfileSave={handleProfileSave}
          profileAvatarSrc="/images/person.jpg"
        />

        <NewsletterSection
          newsletterEmail={newsletterEmail}
          onNewsletterEmailChange={handleNewsletterEmailChange}
          onNewsletterSubmit={handleNewsletterSubmit}
        />
      </main>
      <Footer />
    </div>
  );
}
