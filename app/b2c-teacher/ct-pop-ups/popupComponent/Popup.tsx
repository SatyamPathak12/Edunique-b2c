import { FiEdit2, FiEye, FiTrash2 } from "react-icons/fi";
import { PopupPropB2CTeacher, TeacherB2CBaseModal } from "@/app/b2c-teacher/new-pop-ups/page";

const Popup: React.FC<PopupPropB2CTeacher> = ({
    isOpen,
    onClose,
}) => {
    return (
        <TeacherB2CBaseModal isOpen={isOpen} onClose={onClose} maxWidth="max-w-32">
            <div className="bg-white p-2 rounded-3xl space-y-2">
                <button className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-[#3366FF1A] text-[#3366ff] ">
                    <FiEye />
                    <span>View</span>
                </button>
                <button className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-[#3366FF1A] text-[#3366ff] ">
                    <FiEdit2 />
                    <span>Edit</span>
                </button>
                <button className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-[#3366FF1A] text-[#3366ff] ">
                    <FiTrash2 />
                    <span>Delete</span>
                </button>
            </div>
        </TeacherB2CBaseModal>
    )
}

export default Popup;