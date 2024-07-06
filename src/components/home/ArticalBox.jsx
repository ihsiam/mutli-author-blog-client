import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function ArticalBox({ data }) {
  return (
    <div className="articalSide">
      {data.map((blog) => {
        const { img, ctg, title, author, time, des } = blog;
        return (
          <div key={Math.random()} className="row singleArtical">
            <div className="col-4">
              <div className="blogImage">
                <img src={img} alt="" />
                <span>{ctg}</span>
              </div>
            </div>
            <div className="col-8">
              <Link to={`/articalDetails/${title}`}>
                <h1 className="blogTitle">{title}</h1>
              </Link>
              <div className="auth-time">
                <h1 className="auth">{author}</h1>
                <h1 className="time">{time} days ago</h1>
              </div>
              <p className="des">{des}</p>

              <Link to={`/articalDetails/${title}`}>
                <button className="btn readMore">Read More</button>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}

ArticalBox.propTypes = {
  data: PropTypes.array.isRequired,
};
