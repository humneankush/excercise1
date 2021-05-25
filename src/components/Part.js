const Part = (props) => {
  console.log(props);
  return (
    <div>
      <p>
        {props.props.part1.name} {props.props.part1.exercises}
      </p>
      <p>
        {props.props.part2.name} {props.props.part2.exercises}
      </p>
      <p>
        {props.props.part3.name} {props.props.part3.exercises}
      </p>
    </div>
  );
};

export default Part;
