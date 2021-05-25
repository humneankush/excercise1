const Content = (props) => {
  return (
    <div>
      <p>
        {props.part1} {props.excercise1}
      </p>
      <p>
        {props.part2} {props.excercise2}
      </p>
      <p>
        {props.part3} {props.excercise3}
      </p>
    </div>
  );
};

export default Content;
