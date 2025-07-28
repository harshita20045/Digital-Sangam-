function SignUp() {
  return (
    <div className="container d-flex justify-content-center mt-4 align-items-center vh-100">
      <div className="col-md-5 col-sm-10 col-12 rounded-4">
        <div className="text-center mb-3">
          <div
            style={{
              height: "60px",
              width: "60px",
              background: "linear-gradient(to right, #f97316, #dc2626)", 
              color: "white",
              fontSize: "32px",
              fontWeight: "600",
              borderRadius: "20px",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            DS
          </div>
          <h3 className="mt-3 fw-bold">Welcome to DigitalSangam</h3>
          <p className="text-muted small">
            Join our cultural heritage community
          </p>
        </div>

        <form
          className="py-5 px-5"
          style={{ border: "1px solid #d7d6d6ff", borderRadius: "30px" }}
        >
          <h4 className="text-center mb-3">Create Account</h4>
          <div className="mb-3">
            <label className="form-label fw-semibold">Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your name"
            />{" "}
          </div>{" "}
          <div className="mb-3">
            <label className="form-label fw-semibold">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
            />{" "}
          </div>{" "}
          <div className="mb-3">
            <label className="form-label fw-semibold">Phone Number</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your phone number"
            />{" "}
          </div>
          <div className="mb-3">
            <label className="form-label fw-semibold">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter your password"
            />
          </div>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div>
              <input type="checkbox" id="remember" />
              <label htmlFor="remember" className="ms-1 small">
                I agree to the Terms of Service and Privacy Policy
              </label>
            </div>
           
          </div>
          <button
            type="submit"
            
            style={{ background: "linear-gradient(to right, #f97316, #dc2626)" }}
            className="btn btn-primary w-100"
          >
            Sign up 
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
