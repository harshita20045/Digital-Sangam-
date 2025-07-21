function Why() {
  return (
    <>
      <div
        className="container-fluid py-5"
        style={{ backgroundColor: "#fceeee" }}
      >
        <h1
          className="text-center text-brown"
          style={{ fontWeight: "400", color: "#733214" }}
        >
          What DigitalSangam ?
        </h1>
        <div className="d-block w-75 mx-auto pt-5">
          <p className="text-center">
            In an increasingly digital world, India's rich cultural heritage
            faces the challenge of preservation and accessibility. Digital
            Sangam bridges this gap by creating a comprehensive digital
            repository that makes our diverse cultural wealth accessible to
            everyone, everywhere.
          </p>
          <p className="text-center">
            We believe that culture is not just about the past—it's a living,
            breathing entity that evolves while maintaining its core essence.
            Our platform serves as a meeting point (Sangam) where traditional
            knowledge meets modern technology, where ancient wisdom finds new
            expressions, and where every Indian can connect with their roots
            regardless of geographical boundaries.
          </p>
          <p className="text-center">
            From the snow-capped mountains of Kashmir to the tropical shores of
            Kerala, from the deserts of Rajasthan to the forests of Northeast
            India, every region has its unique voice. Digital Sangam ensures
            these voices are heard, preserved, and celebrated for generations to
            come.
          </p>
        </div>
  <div className="d-flex justify-content-center align-items-center pt-5 gap-1 flex-wrap"   style={{ gap: "6px" }}>


          <div
          className="d-block mx-auto p-3"

            style={{
              backgroundColor: "#ECE4C6",
              borderRadius: "10px",
              height: "160px",
           width: "250px",
            }}
          >
            <h2 className="text-center" style={{ fontSize: "20px" }}>
              Preserve
            </h2>
            <p className="text-muted text-center" style={{ fontSize: "15px" }}>
              Safeguarding cultural knowledge and traditions through digital
              archiving and documentation.
            </p>
          </div>
          <div
            className="d-block mx-auto p-3"
            style={{
              backgroundColor: "#FFD6D6",
              borderRadius: "10px",
              height: "160px",
              width: "250px",
            }}
          >
            <h2 className="text-center" style={{ fontSize: "20px" }}>
              Connect
            </h2>
            <p className="text-muted text-center" style={{ fontSize: "15px" }}>
              Building bridges between communities and fostering cultural exchange and understanding.
            </p>
          </div>{" "}
          <div
            className="d-block mx-auto p-3"
            style={{
              backgroundColor: "#f2f9bbff",
              borderRadius: "10px",
              height: "160px",
            width: "250px",
            }}
          >
            <h2 className="text-center" style={{ fontSize: "20px" }}>
              Education
            </h2>
            <p className="text-muted text-center" style={{ fontSize: "15px" }}>
             Making cultural education engaging and accessible through interactive learning experiences.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Why;
