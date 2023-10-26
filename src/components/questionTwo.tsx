import { useState } from 'react';

export default function QuestionTwo() {
  const [value, setValue] = useState();
  const onChange = (e: any) => {
    setValue(e.target.value);
    sessionStorage.setItem('currentSleep', e.target.value);
  };
  return (
    <div className="row-start-2 col-start-2 rounded-lg border-solid p-5 border-[1px] border-[#565656] bg-gradient-to-tr from-neutral-900 to-transparent">
      <h2 className="text-white top-10">
        What is your current sleep duration per day?
      </h2>
      <input
        type="time"
        className="text-sm bg-transparent border-[1px] border-solid border-main-purple rounded-sm"
        value={value}
      />
    </div>
  );
}
