import demo from "../../assets/demo.png";
import ArticalBox from "./ArticalBox";
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
      title: "This is first artical title",
      des: "This is an artical des. with a lot of text and texxt.This is an artical des. with a lot of text and texxt.This is an artical des. with a lot of text and texxt.This is an artical des. with a lot of text and texxt.",
      time: 4,
      author: "Siam",
      ctg: "Category",
    },
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
      title: "This is first artical title",
      des: "This is an artical des. with a lot of text and texxt.This is an artical des. with a lot of text and texxt.This is an artical des. with a lot of text and texxt.This is an artical des. with a lot of text and texxt.",
      time: 4,
      author: "Siam",
      ctg: "Category",
    },
  ];

  return <ArticalBox data={blogs}></ArticalBox>;
}
