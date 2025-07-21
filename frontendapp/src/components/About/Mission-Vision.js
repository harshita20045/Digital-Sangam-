function MissionVision() {
  return (
    <div className="container my-5">
      <div className="row g-4">
        {/* Mission Card */}
        <div className="col-md-6">
          <div className="card h-100 shadow-sm">
            <div className="card-body p-4">
              <h5 className="card-title">Our Mission</h5>
              <p className="text-muted pt-3 mb-2">
                To create the world's most comprehensive digital repository of
                Indian cultural heritage, making it accessible, interactive, and
                engaging for current and future generations.
              </p>
              <ul className="text-muted ps-3 mb-0">
                <li>
                  Preserve endangered languages and dialects through digital
                  documentation
                </li>
                <li>
                  Connect tribal communities with the modern world while
                  respecting their traditions
                </li>
                <li>Educate young Indians about their rich cultural heritage</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Vision Card */}
        <div className="col-md-6">
          <div className="card h-100 shadow-sm">
            <div className="card-body p-4">
              <h5 className="card-title">Our Vision</h5>
              <p className="text-muted pt-3 mb-2">
                A world where every Indian, regardless of where they live, can
                access and connect with their cultural roots, and where India's
                cultural diversity is celebrated globally.
              </p>
              <ul className="text-muted ps-3 mb-0">
                <li>
                  Become the global hub for Indian cultural knowledge and learning
                </li>
                <li>
                  Foster cross-cultural understanding and appreciation worldwide
                </li>
                <li>
                  Inspire future generations to value and preserve cultural
                  heritage
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MissionVision;
