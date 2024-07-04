import { Link } from "react-router-dom";
import demo from "../../assets/demo.png";
export default function ArticalSide() {
  const blogs = [
    {
      img: demo,
      title: "This is first artical title",
      des: "This is an artical des. with a lot of text and texxt.This is an artical des. with a lot of text and texxt.This is an artical des. with a lot of text and texxt.This is an artical des. with a lot of text and texxt.",
      time: 4,
      author: "Siam",
      ctg: "Category",
    },
    {
      img: demo,
      title: "This is second artical title",
      des: "This is an artical des. with a lot of text and texxt.This is an artical des. with a lot of text and texxt.This is an artical des. with a lot of text and texxt.This is an artical des. with a lot of text and texxt.",
      time: 4,
      author: "Siam",
      ctg: "Category",
    },
    {
      img: demo,
      title: "This is third artical title",
      des: "This is an artical des. with a lot of text and texxt.This is an artical des. with a lot of text and texxt.This is an artical des. with a lot of text and texxt.This is an artical des. with a lot of text and texxt.",
      time: 4,
      author: "Siam",
      ctg: "Category",
    },
    {
      img: demo,
      title: "This is fourth artical title",
      des: "This is an artical des. with a lot of text and texxt.This is an artical des. with a lot of text and texxt.This is an artical des. with a lot of text and texxt.This is an artical des. with a lot of text and texxt.",
      time: 4,
      author: "Siam",
      ctg: "Category",
    },
    {
      img: demo,
      title: "This is fifth artical title",
      des: "This is an artical des. with a lot of text and texxt.This is an artical des. with a lot of text and texxt.This is an artical des. with a lot of text and texxt.This is an artical des. with a lot of text and texxt.",
      time: 4,
      author: "Siam",
      ctg: "Category",
    },
  ];

  return (
    <div className="articalSide">
      {blogs.map((blog) => (
        <div key={Math.random()} className="row singleArtical">
          <div className="col-4">
            <div className="blogImage">
              <img src={blog.img} alt="" />
              <span>{blog.ctg}</span>
            </div>
          </div>
          <div className="col-8">
            <h1 className="blogTitle">
              <Link to={`/articalDetails/${blog.title}`}>{blog.title}</Link>
            </h1>
            <div className="auth-time">
              <h1 className="auth">{blog.author}</h1>
              <h1 className="time">{blog.time} days ago</h1>
            </div>
            <p className="des">{blog.des}</p>
            <button className="btn readMore">
              <Link to={`/articalDetails/${blog.title}`}>Read More</Link>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
