import React from "react";
import ReactDOM from "react-dom";
import Course from "./components/Course"
/*
const Header = (props) => {
  return <h1>{props.course.name}</h1>;
};

const Content = (course) => {
  
  return (
    <>
      {course.course.parts.map((course) => (
        <div>
          {course.name} {course.exercises}
        </div>
      ))}
    </>
  );
};

const Total = (props) => {

  const total = props.course.parts.reduce((sum, part) => sum + part.exercises,0)
  console.log(total)
  return (
    <>
      <p>Yhteensä {total} tehtävää</p>
    </>
  );
  
};

const Course = ({ course }) => {
  console.log(course);
  return (
    <>
      <Header course={course} />

      <Content course={course} />

      <Total course={course} />
    </>
  );
};

*/
const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]
  /*
  const course = {
    name: "Half Stack application development",
    id: 1,
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2,
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3,
      },
      
    ],
  };
*/
  return (
    <div>
      {courses.map((course) => (
        
          <Course key = {course.id} course={course} />
       
      ))}
    </div>
    /*
      <div>
        <Header course = {course}/>
        <Content course = {course}/>
        <Total course = {course}/>
      </div>
      */
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
