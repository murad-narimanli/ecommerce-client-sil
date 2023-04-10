import React from "react";
import { Card } from "antd";
import "../../assets/scss/Blog.scss";
import Image from "../../assets/image/image";
const { Meta } = Card;
function Blog() {
  const image = "";
  const title = "Üzünüzə qulluq edin";
  const date = "01/01/2023";
  const text =
    "Mövsüm fərqi olmadan özümüzə və üzümüzə qulluq etmək mütləqdir. Yayda günəş şüalarının faydaları olsa da, düzgün saatlarda günəşlənməsək zərərli tərəfləri ilə qarşılaşarıq....";

  return (
    <div className="container d-flex justify-content-center">
      <Card
        hoverable
        style={{ width: "60%" }}
        cover={<img alt={title} src={Image.Blogimg0} />}
      >
        <Meta title={title} className="pb-3" />
        <p className="blog-date">{date}</p>
        <p>{text}</p>
        <a href="#" className="blog_btn">
          Read more
        </a>
      </Card>
    </div>
  );
}

export default Blog;
