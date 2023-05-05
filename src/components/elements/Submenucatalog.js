import React, { useEffect, useState } from "react";
import { Menu } from "antd";
import "../../assets/scss/Home.scss";

import client from "../../api/api";

function Submenucatalog() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    client
      .get("categories")
      .then((response) => {
        if (response.data.length) {
          setCategories(response.data);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <Menu mode="vertical">
        {categories.map((category) => (
          <Menu.Item key={category.id}>
            <p>{category.name}</p>
            <span>{category.visible}</span>
          </Menu.Item>
        ))}
      </Menu>
    </div>
  );
}

export default Submenucatalog;
