import { DASHBOARD_CARD_DATA } from "../../data";
import Card from "../dashboard/Card";
import Improvement from "../dashboard/Improvement";
import LearningPath from "../dashboard/learning-path/LearningPath";
import Note from "../dashboard/Note";
import ProfileHeader from "../dashboard/ProfileHeader";
import QuizCard from "../dashboard/QuizCard";

const Dashboard = () => {
  return (
    <div>
      <header className="mb-8 text-3xl font-extrabold">My Journey</header>
      <section className="mb-8">
        <ProfileHeader />
      </section>
      {/* CARDS */}
      <section className="grid grid-cols-3 gap-4 mb-8">
        {DASHBOARD_CARD_DATA.map((data) => (
          <Card
            key={data.title}
            title={data.title}
            subtitle={data.subtitle}
            bgColor={data.bgColor}
          />
        ))}
      </section>
      {/* LEARNING PATH, QUIZ ,IMPROVEMENT */}
      <section className="grid grid-cols-2 gap-8 mb-8">
        <div className="px-6 py-8 shadow-xl rounded-2xl">
          <header className="mb-6 text-3xl font-extrabold">
            My Learning Path
          </header>
          <div className="px-8">
            <LearningPath />
          </div>
        </div>
        <div>
          <section>
            <QuizCard/>
          </section>
          <section>
            <Improvement/>
          </section>
        </div>
      </section>
      {/* NOTE */}
      <section>
        <Note />
      </section>
    </div>
  );
};

export default Dashboard;
