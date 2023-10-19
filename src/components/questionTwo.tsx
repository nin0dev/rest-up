export default function Question() {
  return (
    <div className="h-screen grid grid-rows-3 grid-cols-3">
      <div className="row-start-2 flex justify-end items-center mr-5">
        <button
          title="Previous"
          className="w-10 h-10 flex items-center uppercase text-[12px] p-3 rounded bg-[#A72ABA] shadow-2xl shadow-[#A72ABA]"
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
      <div className="row-start-2 col-start-2 rounded border-solid p-5 border-[1px] border-[#565656] bg-gradient-to-tr from-neutral-900 to-transparent">
        <h2 className="text-white top-10">
          How many hours of sleep did you get last night?
        </h2>
      </div>
      <div className="row-start-2 flex justify-start items-center ml-5">
        <button
          title="Next"
          className="w-10 h-10 flex items-center uppercase text-[12px] p-3 rounded bg-[#A72ABA] shadow-2xl shadow-[#A72ABA]"
        >
          <svg
            width="18"
            height="11"
            viewBox="0 0 11 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.3536 4.35356C10.5488 4.15829 10.5488 3.84171 10.3536 3.64645L7.17157 0.464467C6.97631 0.269205 6.65973 0.269205 6.46447 0.464467C6.2692 0.659729 6.2692 0.976312 6.46447 1.17157L9.29289 4L6.46447 6.82843C6.2692 7.02369 6.2692 7.34027 6.46447 7.53554C6.65973 7.7308 6.97631 7.7308 7.17157 7.53554L10.3536 4.35356ZM-8.74228e-08 4.5L10 4.5L10 3.5L8.74228e-08 3.5L-8.74228e-08 4.5Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
      <div>
        <input />
      </div>
    </div>
  );
}
