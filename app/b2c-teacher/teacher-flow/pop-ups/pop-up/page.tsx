// components/PopupMenu.tsx
import { Eye, Pencil, Trash } from 'lucide-react';

export default function PopupMenu() {
  return (
    <div className="bg-white rounded-3xl shadow-2xl   mx-auto  justify-center items-center my-40 py-4 px-4 w-44 flex flex-col gap-2 text-[#3366FF]">
      <button className="flex  justify-center items-center  w-full gap-2 px-4 py-2  bg-[#3366FF]/10 rounded-2xl transition">
        <Eye size={18} />
        <span>View</span>
      </button>
      <button className="flex items-center justify-center  w-full gap-2 px-4 py-2 rounded-2xl bg-[#3366FF]/10  transition">
        <Pencil size={18} />
        <span>Edit</span>
      </button>
      <button className="flex items-center  justify-center w-full  gap-2 px-4 py-2 rounded-2xl bg-[#3366FF]/10  transition">
        <Trash size={18} />
        <span>Delete</span>
      </button>
    </div>
  );
}
