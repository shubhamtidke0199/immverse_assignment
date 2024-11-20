import React from "react";

const QuizCard = () => {
  return (
    <div className="flex flex-col p-8 shadow-xl rounded-xl">
      <header className="mb-8 text-3xl font-extrabold ">Last Quiz</header>
      <section className="flex items-center gap-12 mx-auto">
        <div className=" rotate-45 flex items-center justify-center bg-[#3287A4] border-[#26C6DA] border-8 rounded-3xl min-w-28 max-w-28 max-h-28 min-h-28">
          <p className="font-semibold text-white -rotate-45">Passed</p>
        </div>
        <div>
          <ul className="flex flex-col gap-4 text-2xl text-gray-400">
            <li>Correct Answer - 8</li>
            <li>Incorrect Answer - 2</li>
            <li>Skipped - 0</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default QuizCard;
