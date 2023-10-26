export default function QuestionOne() {
  return (
    <>
      <div className="row-start-2 col-start-2 rounded-lg border-solid p-5 border-[1px] border-[#565656] bg-gradient-to-tr from-neutral-900 to-transparent">
        <div className="h-full">
          <h2 className="text-white text-lg top-10">
            What would be your ideal sleep duration per day?
          </h2>
          <form>
            <input className="text-black top-1/2" type="time" required />
          </form>
        </div>
      </div>
    </>
  );
}
