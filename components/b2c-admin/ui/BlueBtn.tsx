type BlueBtnProps = {
  title: string;
};

const BlueBtn = ({ title }: BlueBtnProps) => {
  return (
    <button className="rounded-[42px] text-lg font-semibold bg-[#3366ff] text-white px-2.5 py-4 cursor-pointer inline-block">
      {title}
    </button>
  );
};

export default BlueBtn;
