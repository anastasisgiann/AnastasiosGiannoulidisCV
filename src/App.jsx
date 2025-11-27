
import { Courses } from "./Courses";
import Course from './components/Course';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="courses">
          <h2>Online Courses</h2>
          <ul>
            <Course {...Courses[0]}/>
            <Course {...Courses[1]}/>
            <Course {...Courses[2]}/>
          </ul>
        </section>
      </main>
      
    </div>
  );
}

export default App;
