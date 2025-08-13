import { useLocation } from "react-router-dom";
import { BASE_URL } from "../../../apis/EndPoint";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import FavoriteIcon from '@mui/icons-material/Favorite';

function ArticleDetail() {
  const { state } = useLocation();
  const article = state?.article;
  console.log(article);

  if (!article) {
    return <div className="container mt-5">No article data found.</div>;
  }

  const handleShare = () => {
    const articleUrl = `https://digital-sangam-frontend.onrender.com/article/${article._id}`;

    navigator.clipboard
      .writeText(articleUrl)
      .then(() => alert("Article link copied to clipboard!"))
      .catch(() => alert("Failed to copy the link."));
  };

  return (
    <>
      <Header />
      <div className="container my-5">
        <div
          className="card border-0 shadow-sm"
          style={{ backgroundColor: "#fef6f2", borderRadius: "12px" }}
        >
          <img
            src={
              `${BASE_URL}/article/${article.images[0]}` || "placeholder.jpg"
            }
            className="card-img-top"
            alt={article.title}
            style={{
              maxHeight: "400px",
              objectFit: "cover",
              borderTopLeftRadius: "12px",
              borderTopRightRadius: "12px",
            }}
          />

          <div className="card-body">
            <span className="badge bg-secondary mb-3">
              {article.category || "Culture"}
            </span>
            <h3 className="card-title">{article.title}</h3>

            <div className="d-flex flex-wrap align-items-center text-muted small mb-3">
              <div className="me-4">
                <i className="bi bi-person-circle me-1"></i>
                <AccountCircleIcon /> {article.author?.name || "Author"}
              </div>
              <div className="me-4">
                <i className="bi bi-calendar-event me-1"></i>
                <CalendarMonthIcon />{" "}
                {new Date(article.createdAt).toDateString()}
              </div>
              <div>
                <i className="bi bi-clock me-1"></i>
            <AccessTimeFilledIcon/>    {article.readTime} min read
              </div>
            </div>

            <div className="d-flex gap-3 mb-4 flex-wrap">
              <button className="btn btn-outline-secondary btn-sm">
              <FavoriteIcon/>  <i className="bi bi-eye me-1"></i> 234
              </button>
              <button className="btn btn-outline-secondary btn-sm">
                <i className="bi bi-bookmark me-1"></i> Save
              </button>
              <button
                className="btn btn-outline-secondary btn-sm"
                onClick={handleShare}
              >
                <i className="bi bi-share me-1"></i> Share
              </button>
            </div>

            <div
              className="card-text"
              style={{
                whiteSpace: "pre-line",
                lineHeight: "1.8",
                fontSize: "1rem",
              }}
            >
              {article.content}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ArticleDetail;
