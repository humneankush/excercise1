import Part from "./Part";
const Content = (props) => {
  return (
    <div>
      <Part part1={props.part1} excercise1={props.excercise1} />
      <Part part2={props.part2} excercise2={props.excercise2} />
      <Part part3={props.part3} excercise3={props.excercise3} />
    </div>
  );
};

export default Content;
