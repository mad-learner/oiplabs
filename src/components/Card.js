function Card(props) {
  return (
    <div className="card">
      <br />
      <div style={{ textAlign: "center", height: "100px", marginBottom: "2rem" }}>
        <img alt="card-img" src={"../img/" + props.img} className="text-center img-fluid" height="100px" />
      </div>
      <div className="text-center">
        <h3 className="card-title">{props.title}</h3>
      </div>
      <div className="p-3">
        <p className="card-text">
          {props.text}
        </p>
      </div>
    </div>
  );
}
export default Card;