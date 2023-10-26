export default function Question() {
  return (
    <div className="h-screen grid grid-rows-3 grid-cols-3">
      <div className="row-start-2 col-start-2 rounded-md border-solid p-5 border-[1px] border-[#565656] bg-gradient-to-tr from-neutral-900 to-transparent">
        <h2 className="text-white top-10">
          How many hours of sleep did you get last night?
        </h2>
      </div>
      <div>
        <input />
      </div>
    </div>
  );
}
