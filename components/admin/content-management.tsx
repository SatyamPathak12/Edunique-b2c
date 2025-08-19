"use client";

import MaxWidthWrapper from "@/components/admin/max-width-wrapper";
import ManageAccess from "@/app/admin/pop-ups-2/components/ManageAccess";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Settings } from "lucide-react";
import { supabase } from "@/src/supabase-client";

export default function ContentManagement() {
  const [openModal, setOpenModal] = useState<string | null>(null);
  const [folders, setFolders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFolders = async () => {
      setLoading(true);

      const { data, error } = await supabase
        .from("contents")
        .select("folderid, foldername, file");

      if (error) {
        console.error("Error fetching folders", error);
        setLoading(false);
        return;
      }

      setFolders(data || []);
      setLoading(false);
    };

    fetchFolders();
  }, []);

  if (loading) {
    return <p className="p-4">Loading folders...</p>;
  }

  return (
    <div>
      <MaxWidthWrapper className="bg-white p-4 rounded-2xl my-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <ManageAccess
            isOpen={openModal === "manageAccess"}
            onClose={() => setOpenModal(null)}
          />
          {folders.map((folder) => (
            <FolderCard
              key={folder.folderid}
              folder={folder}
              setOpenModal={setOpenModal}
            />
          ))}
        </div>
      </MaxWidthWrapper>
    </div>
  );
}

function FolderCard({
  folder,
  setOpenModal,
}: {
  folder: any;
  setOpenModal: (value: string) => void;
}) {
  const [fileURLs, setFileURLs] = useState<string[]>([]);

  useEffect(() => {
    const getFileURLs = async () => {
      if (!folder.file || folder.file.length === 0) {
        setFileURLs([]);
        return;
      }

      const urls: string[] = [];

      for (const filePath of folder.file) {
        const { data } = await supabase
          .storage
          .from("files")
          .getPublicUrl(filePath);

        if (data?.publicUrl) {
          urls.push(data.publicUrl);
        }
      }

      setFileURLs(urls);
    };

    getFileURLs();
  }, [folder.file]);

  return (
    <div className="p-3 rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] flex gap-4">
      <Link
        href={`/admin/panel/school-MGMT/content-management-files?folderId=${folder.folderid}`}
      >
        <Image
          src="/admin/folder-img.png"
          alt="Folder"
          width={100}
          height={100}
          className="w-24 h-24 object-cover rounded-xl"
        />
      </Link>
      <div className="flex flex-col gap-1 justify-between items-start w-full">
        <h4 className="font-medium">{folder.foldername}</h4>
        <p className="text-xs text-[#6B7280]">
          {folder.file?.length || 0} Files
        </p>

        {/* File list preview */}
        {fileURLs.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {fileURLs.slice(0, 3).map((url, index) => (
              <span
                key={index}
                className="text-xs text-blue-500 underline cursor-pointer"
                onClick={() => window.open(url, "_blank")}
              >
                File {index + 1}
              </span>
            ))}
            {fileURLs.length > 3 && (
              <span className="text-xs text-gray-500">
                +{fileURLs.length - 3} more
              </span>
            )}
          </div>
        )}

        <Button
          className="bg-[#F3F4F6] hover:bg-[#F3F4F6]/90 rounded-full w-full font-normal text-[#6B7280]"
          onClick={() => setOpenModal("manageAccess")}
        >
          <Settings />
          Manage Access
        </Button>
      </div>
    </div>
  );
}
