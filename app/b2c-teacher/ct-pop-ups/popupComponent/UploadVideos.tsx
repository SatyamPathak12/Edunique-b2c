import { FiX } from "react-icons/fi";
import { IoCloudUploadOutline } from "react-icons/io5";
import { PopupPropB2CTeacher, TeacherB2CBaseModal } from '../../new-pop-ups/page';

const UploadVideo: React.FC<PopupPropB2CTeacher> = ({
    isOpen,
    onClose,
}) => {
    return (
        <TeacherB2CBaseModal isOpen={isOpen} onClose={onClose} maxWidth="max-w-md">
            <div className="rounded-3xl px-4 pt-6 pb-4 ">
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold">Upload Video File</h2>
                    <button
                        onClick={onClose}
                        className="p-1.5 bg-[#F9FAFB] rounded-full hover:bg-gray-200"
                    >
                        <FiX />
                    </button>
                </div>

                <div className="flex flex-col gap-1 pb-4 mt-6">
                    <label className='font-medium text-md mb-2' htmlFor="url">Enter URL</label>
                    <input id="url" type="text" className='rounded-full px-4 py-2 bg-gray-50 border' placeholder='Text' />
                </div>
                <div className="text-center mt-4 mb-6">Or</div>
                <label className='font-medium text-md '>Upload Document</label>
                <div className="flex items-center gap-2 rounded-full my-2 border border-gray-300 bg-gray-50 p-2 text-gray-400">
                    <div className="p-1 bg-pink-100 rounded-full">
                        <IoCloudUploadOutline className="text-[#FF3366]" size={20} />
                    </div>
                    <span className="truncate">Document Name</span>
                </div>
                <div className="flex items-center justify-end gap-4 my-4">
                    <button onClick={onClose} className="w-22 py-3 text-center border bg-[#f9fafb] text-gray-600 rounded-full font-medium">Cancel</button>
                    <button onClick={onClose} className="w-22 py-3 text-center bg-[#3366ff] text-white font-medium rounded-full">Next</button>
                </div>
            </div>
        </TeacherB2CBaseModal>
    );
};

export default UploadVideo;