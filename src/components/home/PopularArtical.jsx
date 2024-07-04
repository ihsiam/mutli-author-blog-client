import { Link } from "react-router-dom";
import demo from "../../assets/demo.png";
export default function PopularArtical() {
  const popularArtial = [
    {
      img: demo,
      title: "Artical 1",
      time: 2,
    },
    {
      img: demo,
      title: "Artical 2",
      time: 2,
    },
    {
      img: demo,
      title: "Artical 3",
      time: 2,
    },
    {
      img: demo,
      title: "Artical 4",
      time: 2,
    },
  ];
  return (
    <div className="popular-artical">
      <h1 className="headerTitle">popular artical</h1>
      <div className="PopularArticalDiv">
        {popularArtial.map((artical) => (
          <div className="row PopularsingleArtical" key={Math.random()}>
            <div className="col-4">
              <Link className="paImg" to={`/articalDetails/${artical.title}`}>
                <img src={artical.img} alt="" />
              </Link>
            </div>
            <div className="col-8">
              <Link className="paTitle" to={`/articalDetails/${artical.title}`}>
                {artical.title}
              </Link>
              <h3 className="paTime">{artical.time} days ago</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
