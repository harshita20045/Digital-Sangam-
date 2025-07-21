import triveni from "../../images/triveni.jpg";

function Rooted() {
  return (
    <div className="container-fluid py-5 mt-5" style={{ backgroundColor: "#fceeee" }}>
      <div className="row align-items-center justify-content-center g-5 px-3">

      
        <div className="col-12 col-md-4 ">
          <h2 className=" mb-3">Rooted in Ancient Wisdom</h2>
          <p className="text-muted" style={{ fontSize: "15px" }}>
            The concept of "Sangam" comes from ancient Indian tradition,
            where rivers meet to create something greater than the sum of
            their parts. Just as the sacred Triveni Sangam brings together
            three rivers, Digital Sangam brings together cultures, languages,
            and traditions from across India.
            <br /><br />
            Our platform embodies the ancient Indian philosophy of
            "Vasudhaiva Kutumbakam" (the world is one family), creating a space
            where all cultures are celebrated and preserved with equal respect
            and dignity.
          </p>

      
          <div
            className="mt-4 p-3"
            style={{
              backgroundColor: "#ffffffff",
              border: "1px solid #ff9933",
              borderRadius: "12px",
              maxWidth: "100%",
            }}
          >
            <p style={{ fontSize: "14px", marginBottom: "0" }}>
              <em>
                "Just as a river enriches the lands it touches, culture enriches
                the lives it reaches. Digital Sangam ensures this enrichment
                flows to every corner of the world."
              </em>
              <br />
              <strong className="d-block mt-2">— Our Founding Philosophy</strong>
            </p>
          </div>
        </div>

        <div className="col-12 col-md-6 text-center">
          <img
            src={triveni}
            alt="Triveni"
            className="img-fluid"
            style={{ borderRadius: "20px", maxWidth:"500px",maxHeight: "1000px", objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Rooted;
