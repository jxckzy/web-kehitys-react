const Greeting = ({name, age, isTeacher}) => {
  console.log(name);
  return (
    <h1>
      Greeting, {name}. Age: {age}. {isTeacher ? 'Teacher' : 'Student'}.
    </h1>
  );
};

export default Greeting;
