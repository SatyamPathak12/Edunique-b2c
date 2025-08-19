"use client"
interface ButtonProps {
  ButtonHeading: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
}

const ScrollableButton = ({ ButtonHeading ,onClick}:ButtonProps) => {
  return (
    <div>
      <button 
       onClick={onClick}
      className="   rounded-full z-50 hover:cursor-pointer text-white px-3 py-3  bg-[#ffcc00] fixed bottom-8 sm:right-10  right-20 ">{ButtonHeading}</button>
    </div>
  );
};
export default ScrollableButton;
