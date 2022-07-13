function About() {
  return (
    <>
      <div style={{ marginTop: '15rem', width: '100%', height: '10px' }} className="about-scroll"></div>

      <div className="container about">
        <div className="row">
          <div className="col-md-6 text-center">
            <img alt="about" src="../img/icons8-hub-400.png" style={{ width: "50%" }} className="img-fluid" />
          </div>
          <div className="col-md-6">
            <h2 className="main-title about-h2">ABOUT</h2>
            <p className="main-p">
              OIPLABS To provide a neutral environment to foster interoperability, standards conformance, and development for the interconnected world,
              while attracting students to and preparing them for careers in cutting-edge technology.
              To create an interoperable world by enabling the best engineers, entrepreneurs, and technology.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
