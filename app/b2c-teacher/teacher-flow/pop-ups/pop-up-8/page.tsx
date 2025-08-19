// components/PopupMenu.tsx
import { Eye, Pencil, Trash } from 'lucide-react';

export default function PopupMenu() {
  return (
    <div className="bg-white rounded-3xl shadow-2xl mx-auto  justify-center items-center my-40 py-4 px-4 w-48 flex flex-col gap-2 text-[#3366FF]">
      
      <button className="flex items-center justify-center  w-full gap-2 px-6 py-2 rounded-2xl bg-[#3366FF]/10  transition">
        <Pencil size={18} />
        <span>Edit</span>
      </button>
      <button className="flex items-center  justify-center w-full  gap-2 px-6 py-2 rounded-2xl bg-[#3366FF]/10  transition">
        <Trash size={18} />
        <span>Delete</span>
      </button>
    </div>
  );
}
