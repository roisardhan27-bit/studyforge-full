import Header from "../components/Header";
import TaskList from "../components/TaskList";
import HabitTracker from "../components/HabitTracker";
import PomodoroTimer from "../components/PomodoroTimer";
import XPTracker from "../components/XPTracker";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="container mx-auto p-4 flex-1 space-y-4">
        <TaskList tasks={["07:00 – Math Study","10:00 – English Homework","19:00 – Review Biology"]}/>
        <HabitTracker />
        <PomodoroTimer />
        <XPTracker />
      </div>
    </div>
  );
}