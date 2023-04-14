import {AliwangwangOutlined, ClearOutlined} from '@ant-design/icons';
import { Menu } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEgg, faAppleWhole, faSprayCanSparkles, faMobileAndroid  }from '@fortawesome/free-solid-svg-icons';
import { FaBreadSlice, FaBaby, FaShoppingBag, FaCandyCane} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../../assets/scss/Home.scss'

function getItem(label, key, icon, children, type, path) {
  return {
    key,
    icon,
    children,
    label: <Link to={path}>{label}</Link>,
    type,
  };
}

const items = [
  getItem('Un və Qənnadı məhsulları', 'sub1', <FaBreadSlice />, [
    getItem('Çörək və Lavaş məhsulları', '/bread'),
    getItem('Unlu şirniyyat məhsulları', '/pastry'),
    getItem('Qənnadı məhsulları','/dairy'),
  ]),
  getItem('Süd məhsulları və Yumurtalar', 'sub2', <FontAwesomeIcon icon={faEgg} />, [
    getItem('Yağ', '/butter'),
    getItem('Qaymaq', '/cream'),
    getItem('Şor və Kəsmik məhsulları','/cheese'),
    getItem('İçməli süd məhsulları','/beverages'),
    getItem('Yumurta','/eggs'),
    getItem('Yoqurt', '/yogurt'),
    getItem('Mayonez', '/mayonnaise'),
    getItem('Süd',  '/milk'),
    getItem('Qatıq','/curd'),
    getItem('Xama', '/whey'),
    getItem('Sarı Pendir', '/yellow-cheese'),
  ]),
  getItem('Meyvə və Tərəvəz', 'sub3', <FontAwesomeIcon icon={faAppleWhole} /> , [
    getItem('Quru meyvə', '/olive'),
    getItem('Təzə meyvə', '/sausage'),
    getItem('Meyvə', '/sausage'),
    getItem('Tərəvəz', '/sausage'),
    ]),
    getItem('Körpə və Uşaqlar', 'sub4', <FaBaby />, [
      getItem('Uşaq Qidası',  '/option9'),
      getItem('Uşaq yiyəcək və içəcəkləri','/option10'),
      getItem('Uşaq üçün hamam süngəri', '/olive'),
    getItem('Uşaq qabları üçün qabyuyan gel', '/sausage'),
    getItem('Uşaq kosmetikası', '/sausage'),
    getItem('Uşaqlar üçün bez və nəm salfet', '/sausage'),
    getItem('Uşaq paltarı üçün yuyucu və təmizləyici vasitələr', '/olive'),
    getItem('Uşaq ağız baxım', '/sausage'),
    getItem('Uşaqlar üçün şampun və qulluq vasitələri', '/sausage'),
    getItem('Uşaq üçün sabun', '/sausage'),
    getItem('Oyuncaqlar', '/sausage'),

      ]),
      getItem('Baqqaliyə', 'sub5', <FaShoppingBag />, [
        getItem('Səhər yeməkləri',  '/option9'),
        getItem('Tərəvəz konservası','/option10'),
        getItem('Ət və balıq konservası', '/olive'),
      getItem('Süd və Krem konservası ', '/sausage'),
      getItem('Diabetik', '/sausage'),
      getItem('Un və evdə bişirmə', '/sausage'),
      getItem('Cem, bal və pastalar', '/olive'),
      getItem('Yağlar və sirkələr', '/sausage'),
      getItem('Düyü,makaron və paxlalar', '/sausage'),
      getItem('Ədviyyatlar', '/sausage'),
      getItem('Dad əlavələri və qarnirlər', '/sausage'),
      getItem('Şəkər', '/sausage'),
]),
getItem('Şirniyyat', 'sub6', <FaCandyCane />, [
  getItem('Peçenye və krekerlər',  '/option9'),
  getItem('Plitka və baton şokolad','/option10'),
  getItem('Çips, çərəz və qoz-fındıq', '/olive'),
getItem('Biskvit, vafli, kekslər', '/sausage'),
getItem('Şirniyyat', '/sausage'),
getItem('Çəkili şirniyyat', '/sausage'),
]),
getItem('Ev heyvanları üçün qida', 'sub7', <AliwangwangOutlined />, [
  getItem('Pişik',  '/option9'),
  getItem('İt','/option10'),
]),
getItem('Şəxsi baxım', 'sub7', <FontAwesomeIcon icon={faSprayCanSparkles} />, [
  getItem('Aseton',  '/option9'),
  getItem('Hamam və duş','/option10'),
  getItem('Bədən baxımı',  '/option9'),
  getItem('Qadın baxımı','/option10'),
  getItem('Saç baxımı',  '/option9'),
  getItem('Sağlamlıq və tibb','/option10'),
  getItem('Ağız baxımı',  '/option9'),
  getItem('Qadın gigiyenası','/option10'),

]),
getItem('Ev təmizləyici vasitələri', 'sub8',<ClearOutlined />, [
  getItem('Toz təmizləyici',  '/option9'),
  ]),
  getItem('Məişət texnikası', 'sub9', <FontAwesomeIcon icon={faMobileAndroid} />, [
    getItem('İri məişət texnikası',  '/option9'),
    getItem('Gözəllik və qulluq vasitələri',  '/option9'),
    getItem('Mobil telefon və aksessuarları',  '/option9'),
    getItem('Kiçik məişət texnikası',  '/option9'),
    getItem('TV, audio, oyun',  '/option9'),



    ]),
];
const onClick = (e) => {
  console.log('click', e);
};
const Submenucatalog = () => (
  <Menu
    onClick={onClick}
    style={{
      width: 280,
     
    }}
    mode="vertical"
    items={items}
  />
);
export default Submenucatalog;

