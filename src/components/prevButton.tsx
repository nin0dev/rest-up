export default function PrevButton({ onClick }: any) {
  return (
    <div className="row-start-2 col-start-1 flex justify-end items-center mr-5">
      <button
        title="Previous"
        className="w-10 h-10 flex items-center uppercase text-[12px] p-3 rounded bg-[#A72ABA] shadow-2xl shadow-[#A72ABA]"
        onClick={onClick}
        type="submit"
      >
        <svg
          width="18"
          height="11"
          viewBox="0 0 11 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.646447 3.64645C0.451184 3.84171 0.451184 4.15829 0.646447 4.35355L3.82843 7.53553C4.02369 7.7308 4.34027 7.7308 4.53553 7.53553C4.7308 7.34027 4.7308 7.02369 4.53553 6.82843L1.70711 4L4.53553 1.17157C4.7308 0.976311 4.7308 0.659728 4.53553 0.464466C4.34027 0.269204 4.02369 0.269204 3.82843 0.464466L0.646447 3.64645ZM11 3.5L1 3.5V4.5L11 4.5V3.5Z"
            fill="white"
          />
        </svg>
      </button>
    </div>
  );
}
