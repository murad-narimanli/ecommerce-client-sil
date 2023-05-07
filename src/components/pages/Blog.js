import React, { useEffect, useState } from "react";
import { Card } from "antd";
import { useNavigate } from "react-router-dom";
import client from "../../api/api";
import "../../assets/scss/Blog.scss";

const { Meta } = Card;

function Blog() {
  const navigate = useNavigate();
  const [data, setData] = useState({});

  useEffect(() => {
    getdata();
  }, []);
  const getdata = async () => {
    await client.get("blog").then((res) => {
      if (res.data.length) {
        setData(res.data[0]);
      }
    });
  };

  return (
    <div className="container blog">
      <Card
        className="cardBlog"
        hoverable
        style={{ width: "45%" }}
        cover={<img alt={data.title} src={data.image} />}
      >
        <Meta title={data.title} className="pb-3" />
        <p className="blog-date">{data.date}</p>
        <p>{data.text}</p>
        <a
          className="blog_btn"
          onClick={() => {
            navigate("/blogdetail");
          }}
        >
          Daha ətraflı
        </a>
      </Card>
    </div>
  );
}

export default Blog;
