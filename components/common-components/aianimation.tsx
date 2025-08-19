export default function AILoadingPopup() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 px-4">
      <div className="bg-white rounded-3xl p-4 overflow-hidden w-full max-w-[620px] max-h-[596px] flex flex-col items-center justify-center shadow-xl">
        {/* Loader Video */}
        <div className="w-full aspect-video rounded-3xl overflow-hidden">
          <video
            autoPlay
            loop
            muted
            className="w-full h-full object-cover"
          >
            <source src="/star-loader.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Gradient Text */}
        <p className="mt-6 text-xl md:text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#FF3366] via-[#3366FF] to-[#3366FF] text-center">
          Please wait a moment while the AI works its magic.
        </p>
      </div>
    </div>
  );
}
