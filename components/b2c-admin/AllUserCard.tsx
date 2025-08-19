"use client";

import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

export type UserRole = "Student" | "Teacher" | "Mentor";

export interface UserCardProps {
  name: string;
  image: string;
  role: UserRole;
  subtitle: string; // Subject / Institution / Level
  classInfo: string;
  batchInfo: string;
  id: string;
  showBorder?: boolean;
  navigate?: string;
}

const getHrefByRole = (role: UserRole, id: string) => {
  switch (role) {
    case "Teacher":
      return `/admin-b2c/admin-panel/teacher-profile`;
    case "Mentor":
      return `/admin-b2c/admin-panel/mentor-profile`;
    case "Student":
      return `/admin-b2c/admin-panel/student-profile`;
    default:
      return "#";
  }
};

const UserCard: FC<UserCardProps> = ({
  name,
  image,
  role,
  subtitle,
  classInfo,
  batchInfo,
  id,
  showBorder = false,
  navigate = "",
}) => {
  const isPink = role === "Teacher" || role === "Mentor";
  const href = getHrefByRole(role, id);

  return (
    <Link href={navigate || href} className="block">
      <div
        className={`w-full bg-[#F9FAFB] rounded-2xl p-[6px] flex  font-main items-center gap-4 cursor-pointer hover:shadow-md transition ${
          showBorder ? "border border-[#B0B0B0]" : ""
        }`}
      >
        {/* Profile */}
        <div
          className={`relative rounded-[14px] overflow-hidden border ${
            role === "Teacher" || role === "Mentor"
              ? "w-20 h-20"
              : role === "Student"
              ? "w-18 h-14"
              : ""
          }`}
        >
          <Image
            src={image}
            alt={name}
            fill
            className="w-full h-full object-cover"
          />
        </div>

        {/* Info */}
        <div className="text-sm leading-tight">
          <p
            className={`${
              role === "Student" ? "font-normal" : "font-semibold"
            } text-base text-gray-900`}
          >
            {name}
          </p>
          {isPink && <p className="font-medium text-[#ff3366]">{subtitle}</p>}
          <p className="text-xs text-gray-500">{classInfo}</p>
          <p className="text-xs text-gray-500">{batchInfo}</p>
        </div>
      </div>
    </Link>
  );
};

export default UserCard;
