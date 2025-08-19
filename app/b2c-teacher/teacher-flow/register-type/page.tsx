"use client"
import SuccessCard from "@/components/student/auth/success-card";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import { motion } from "framer-motion";

const RegisterType = () => {
  return (
    <MaxWidthWrapper>
      <motion.div
        className="relative w-full min-h-screen flex flex-col overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="relative z-10 flex items-center justify-center w-full min-h-screen p-4">
          <SuccessCard successUrl="/student/auth/login" />


        </div>
      </motion.div>
    </MaxWidthWrapper>
  )
}

export default RegisterType;