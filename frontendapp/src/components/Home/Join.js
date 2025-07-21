function Join() {
  return (
    <>
      <div className="container-fluid py-5 justify-content-center align-items-center" style={{ backgroundColor: "#F64100" }}>
        <h1
          className="text-center text-brown w-50 mx-auto"
          style={{ fontWeight: "400", color: "#ffffffff" }}
        >
          Join the Cultural Revolution{" "}
        </h1>
        <div className="d-block w-30 mx-auto pt-5">
          <p className="text-center" style={{ fontSize: "20px", color: "#ffffff" }}>
            Be part of preserving and celebrating India's cultural heritage.<br/>
            Start your journey of discovery today.
          </p>
          
        </div>
        <div className="d-flex justify-content-center align-items-center p-4 flex-wrap" style={{ gap: "6px" }}>
          <button className="btn btn-light" style={{color:"#F64100",width:"30%",fontSize:"12px",fontWeight:"bold"}}>Explore Now</button>
        </div>
      </div>
    </>
  );
}

export default Join;
