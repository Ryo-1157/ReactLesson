const Title = (props) => {
  return (
    <div className="className">
      <img src={props.logo} width={36} height={36} alt="Reactのロゴです" />
      <h2>{props.title}</h2>
    </div>
  );
};

export default Title;
