import React from "react";
import { LEARNING_PATH } from "../../../data";
import Card from "./Card";

const LearningPath = () => {
  return (
    <div className="p-4 border bg-gray-50 border-primary rounded-xl ">
      <header className="text-xl font-extrabold mb- 4">
        Artificial Intelligence
      </header>
      <section className="grid gap-4">
        {LEARNING_PATH.map((path) => (
          <Card key={path.title} title={path.title} date={path.date} />
        ))}
      </section>
    </div>
  );
};

export default LearningPath;
