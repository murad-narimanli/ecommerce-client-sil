import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
const { Search } = Input;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: 'rgb(108, 195, 46)',
    }}
  />
);
const onSearch = (value) => console.log(value);
const Searchnav = () => (
  <Space direction="vertical">
<Search
      placeholder="İstədiyiniz məhsulu axtarın"
      enterButton="Search"
      size="900px"
      suffix={suffix}
      onSearch={onSearch}
      style={{ backgroundColor: 'rgb(108, 195, 46)', borderColor: 'rgb(108, 195, 46)' }}
    />
  </Space>
);
export default Searchnav;
