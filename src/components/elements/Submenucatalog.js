// import { Menu } from "antd";
// import { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faEgg,
//   faAppleWhole,
//   faSprayCanSparkles,
//   faMobileAndroid,
// } from "@fortawesome/free-solid-svg-icons";
// import {
//   FaBreadSlice,
//   FaBaby,
//   FaShoppingBag,
//   FaCandyCane,
// } from "react-icons/fa";
// import { AliwangwangOutlined, ClearOutlined } from "@ant-design/icons";
// import "../../assets/scss/Home.scss";
// function getItem(label, key, icon, children, type) {
//   return {
//     key,
//     icon,
//     children,
//     label,
//     type,
//   };
// }
// const items = [
//   getItem("Un və Qənnadı məhsulları", "sub1", <FaBreadSlice />, [
//     getItem("Çörək və Lavaş məhsulları", "/bread"),
//     getItem("Unlu şirniyyat məhsulları", "/pastry"),
//     getItem("Qənnadı məhsulları", "/dairy"),
//   ]),
//   getItem(
//     "Süd məhsulları və Yumurtalar",
//     "sub2",
//     <FontAwesomeIcon icon={faEgg} />,
//     [
//       getItem("Yağ", "/butter"),
//       getItem("Qaymaq", "/cream"),
//       getItem("Şor və Kəsmik məhsulları", "/cheese"),
//       getItem("İçməli süd məhsulları", "/beverages"),
//       getItem("Yumurta", "/eggs"),
//       getItem("Yoqurt", "/yogurt"),
//       getItem("Mayonez", "/mayonnaise"),
//       getItem("Süd", "/milk"),
//       getItem("Qatıq", "/curd"),
//       getItem("Xama", "/whey"),
//       getItem("Sarı Pendir", "/yellow-cheese"),
//     ]
//   ),
//   getItem("Meyvə və Tərəvəz", "sub3", <FontAwesomeIcon icon={faAppleWhole} />, [
//     getItem("Quru meyvə", "/olive"),
//     getItem("Təzə meyvə", "/sausage"),
//     getItem("Meyvə", "/sausage"),
//     getItem("Tərəvəz", "/sausage"),
//   ]),
//   getItem("Körpə və Uşaqlar", "sub4", <FaBaby />, [
//     getItem("Uşaq Qidası", "/option9"),
//     getItem("Uşaq yiyəcək və içəcəkləri", "/option10"),
//     getItem("Uşaq üçün hamam süngəri", "/olive"),
//     getItem("Uşaq qabları üçün qabyuyan gel", "/sausage"),
//     getItem("Uşaq kosmetikası", "/sausage"),
//     getItem("Uşaqlar üçün bez və nəm salfet", "/sausage"),
//     getItem("Uşaq paltarı üçün yuyucu və təmizləyici vasitələr", "/olive"),
//     getItem("Uşaq ağız baxım", "/sausage"),
//     getItem("Uşaqlar üçün şampun və qulluq vasitələri", "/sausage"),
//     getItem("Uşaq üçün sabun", "/sausage"),
//     getItem("Oyuncaqlar", "/sausage"),
//   ]),
//   getItem("Baqqaliyə", "sub5", <FaShoppingBag />, [
//     getItem("Səhər yeməkləri", "/option9"),
//     getItem("Tərəvəz konservası", "/option10"),
//     getItem("Ət və balıq konservası", "/olive"),
//     getItem("Süd və Krem konservası ", "/sausage"),
//     getItem("Diabetik", "/sausage"),
//     getItem("Un və evdə bişirmə", "/sausage"),
//     getItem("Cem, bal və pastalar", "/olive"),
//     getItem("Yağlar və sirkələr", "/sausage"),
//     getItem("Düyü,makaron və paxlalar", "/sausage"),
//     getItem("Ədviyyatlar", "/sausage"),
//     getItem("Dad əlavələri və qarnirlər", "/sausage"),
//     getItem("Şəkər", "/sausage"),
//   ]),
//   getItem("Şirniyyat", "sub6", <FaCandyCane />, [
//     getItem("Peçenye və krekerlər", "/option9"),
//     getItem("Plitka və baton şokolad", "/option10"),
//     getItem("Çips, çərəz və qoz-fındıq", "/olive"),
//     getItem("Biskvit, vafli, kekslər", "/sausage"),
//     getItem("Şirniyyat", "/sausage"),
//     getItem("Çəkili şirniyyat", "/sausage"),
//   ]),

//   getItem(
//     "Məişət texnikası",
//     "sub9",
//     <FontAwesomeIcon icon={faMobileAndroid} />,
//     [
//       getItem("İri məişət texnikası", "/option9"),
//       getItem("Gözəllik və qulluq vasitələri", "/option9"),
//       getItem("Mobil telefon və aksessuarları", "/option9"),
//       getItem("Kiçik məişət texnikası", "/option9"),
//       getItem("TV, audio, oyun", "/option9"),
//     ]
//   ),
//   getItem("Ev təmizləyici vasitələri", "sub8", <ClearOutlined />, [
//     getItem("Toz təmizləyici", "/option9"),
//   ]),
// ];

// // submenu keys of first level
// const rootSubmenuKeys = ["sub1", "sub2", "sub4"];
// const Submenucatalog = () => {
//   const [openKeys, setOpenKeys] = useState(["sub1"]);
//   const onOpenChange = (keys) => {
//     const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
//     if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
//       setOpenKeys(keys);
//     } else {
//       setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
//     }
//   };
//   return (
//     <Menu
//       mode="inline"
//       openKeys={openKeys}
//       onOpenChange={onOpenChange}
//       style={{
//         width: 256,
//       }}
//       items={items}
//     />
//   );
// };
// export default Submenucatalog;
import { Menu } from "antd";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import {
  UploadOutlined,
  FundOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import client from "../../api/api";
import "../../assets/scss/Home.scss";


const { SubMenu } = Menu


const Submenucatalog = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        client.get('category').then((res) => {
          if (res.data.length) {
            setCategories(res.data);
          }
        });
      }, []);
      
  const [openKeys, setOpenKeys] = useState([]);

  const rootSubmenuKeys = ["10", "21", "31", "41", "51", "61"];


  const onOpenChange = (openKeysList) => {
    const latestOpenKey = openKeysList.find(
      (key) => openKeys.indexOf(key) === -1
    );
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(openKeysList);
    } else {
      const opens = latestOpenKey ? [latestOpenKey] : [];
      setOpenKeys(opens);
    }
  };

  return (
    <Menu
                openKeys={openKeys}
                mode="inline"
                theme="dark"
                onOpenChange={onOpenChange}
                className="menu-ul"
                >
                  <SubMenu
  key="10"
  title={
    <span>
      <UserOutlined />
      <span>Categories</span>
    </span>
  }
>
  {categories.map((category, index) => (
    <Menu.Item key={`category-${index}`}>
      <Link to={`/category/${category.id}`}>
        <span>{category.name}</span>
      </Link>
    </Menu.Item>
  ))}
</SubMenu>



                    <SubMenu
                        key="20"
                        title={
                            <span>
                            <FundOutlined />
                            <span>Content</span>
                            </span>
                        }
                    >
                        <Menu.Item key="21">
                            <Link className='text-decoration-none' to={`/productview`}>
                                <span> Products </span>
                            </Link>
                        </Menu.Item>
                       
                       </SubMenu>
                    <SubMenu
                        key="30"
                        title={
                            <span>
                            <FundOutlined />
                            <span>About</span>
                            </span>
                        }
                    >
                          <Menu.Item key="31">
                            <Link className='text-decoration-none' to={`/title`}>
                                <span> Başlıq </span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="32">
                            <Link className='text-decoration-none' to={`/vision`}>
                                <span> Viziyonumuz </span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="33">
                            <Link className='text-decoration-none' to={`/mission`}>
                                <span> Missiyamız </span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="34">
                            <Link className='text-decoration-none' to={`/aboutstore`}>
                                <span> Haqqımızda </span>
                            </Link>
                        </Menu.Item>
                        </SubMenu>
                    <SubMenu
                        key="40"
                        title={
                            <span>
                            <FundOutlined />
                            <span>Slider</span>
                            </span>
                        }
                    >
                          <Menu.Item key="41">
                            <Link className='text-decoration-none' to={`/mainslider`}>
                                <span> Əsas Slider </span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="42">
                            <Link className='text-decoration-none' to={`/seasonaloffers`}>
                                <span>  Sezon Təklifləri Slider </span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="43">
                            <Link className='text-decoration-none' to={`/chooseyouslider`}>
                                <span>  Sizin üçün seçdiklərimiz </span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="44">
                            <Link className='text-decoration-none' to={`/weekoffers`}>
                                <span>Həftənin Təklifləri Slider </span>
                            </Link>
                        </Menu.Item>
                        </SubMenu>
                        <SubMenu
                        key="50"
                        title={
                            <span>
                            <FundOutlined />
                            <span>Blog</span>
                            </span>
                        }
                    >
                        <Menu.Item key="51">
                            <Link className='text-decoration-none' to={`/blog`}>
                                <span>Blog </span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="52">
                            <Link className='text-decoration-none' to={`/blogdetail/id`}>
                                <span>BlogDetail </span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="53">
                            <Link className='text-decoration-none' to={`/discountnews`}>
                                <span>Endirim xeberleri </span>
                            </Link>
                        </Menu.Item>

                        </SubMenu>
            </Menu>
  );
};
export default Submenucatalog;

// import React, { useState, useEffect } from "react";
// import client from "../../api/api";

// function UserPanel() {
//   const [categories, setCategories] = useState([]);

//   useEffect(()=>{
//     getdata()
 
//    }, []);

//    const getdata = async()=>{
//     await client.get('category').then((res)=>{
//       if(res.data.length){
//         setCategories(res.data)
//       }
//     })
//   }

//   return (
//     <div>

//       {categories.length > 0 ? (
//         <ul>
//           {categories.map((category, index) => (
//             <li key={index}>
//               <h2>{category.name}</h2>
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>No categories found.</p>
//       )}
//     </div>
//   );
// }

// export default UserPanel;

