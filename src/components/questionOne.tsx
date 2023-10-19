export default function QuestionOne() {
  return (
    <>
      <div className="row-start-2 col-start-2 rounded border-solid p-5 border-[1px] border-[#565656] bg-gradient-to-tr from-neutral-900 to-transparent">
        <div className="h-full">
          <h2 className="text-white text-lg top-10">
            You usually go to bed around...
          </h2>
          <input className="text-black top-1/2" type="time" />
        </div>
      </div>
      <div className="row-start-2 col-start-3 flex justify-start items-center ml-5">
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
    </>
  );
}
