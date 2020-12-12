import React from 'react'

const Header = (props) => {
    return <h1>{props.course.name}</h1>;
  };
  
  const Content = (course) => {
    
    return (
      <>
        {course.course.parts.map((course) => (
          <div key = {course.id}>
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

  export default Course
  