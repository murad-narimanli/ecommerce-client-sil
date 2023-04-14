import React from 'react'
import { Card } from "antd";
import "../../assets/scss/Blog.scss";
import Image from "../../assets/image/image";
import {ShareAltOutlined} from '@ant-design/icons'
import { FacebookOutlined, InstagramOutlined, TwitterOutlined,WhatsAppOutlined } from '@ant-design/icons';
import  { useState } from 'react';
import { Button, Modal } from 'antd';
const { Meta } = Card;
function BlogDetail() {
  const image = "";
  const title = "Üzünüzə qulluq edin";
  const date = "01/01/2023";
  // const content =
  //   "";
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  }
  return (
    <div className="container d-flex justify-content-center mb-5 mt-5">
   <Card
        hoverable
        style={{ width: "60%" }}
        cover={<img alt={title} src={Image.Blogimg0} />}
      >
        <Meta title={title} className="pb-3" />
        <p className="blog-date">{date}</p>
        <p className=''>Mövsüm fərqi olmadan özümüzə və üzümüzə qulluq etmək mütləqdir. Yayda günəş şüalarının faydaları olsa da, düzgün saatlarda günəşlənməsək zərərli tərəfləri ilə qarşılaşarıq. Elə bu zərərlərdən biri dərimizdə yaranan günəş ləkələridir. Ancaq üzümüzə düzgün qulluq etsək dərini həmin zərərlərdən qoruyarıq.</p>
        <p>Odur ki sizinlə evdə hazırlaya biləcəyiniz təbii maska reseptləri paylaşırıq. Maskalar üçün evdə olan inqrediyentlər istifada edə və ya supermarketdən çatışmayanları əldə edib elə indi hazırlaya bilərsiniz.</p>
     <p>Günəşdən yaranan ləkələrdən bəhs etmişkən üz dərisini tonlaşdıran, parlaqlıq verən və ləkələri solduran yulaf maskası ilə başlayaq.</p>
     <p>Maska üçün lazım olacaq:</p>
     <ol>
      <li>½ xiyar</li>
      <li>1 x. q. ev qatığı</li>
      <li>1 x. q. yulaf</li>
      <li>1 ç. q. bal</li>
     </ol>
     <p>Hazırlanması:</p>
     <p>Xiyarı sürtgəcdən keçirin və digər bütün inqrediyentlər ilə birlikdə qatı hala gələnə qədər qarışdırın. Qarışımı üzünüzdə günəş şüaları ilə daha çox təmasda olan hissələrə tətbiq edin. 30 dəqiqə sonra maskanı ilıq su ilə yuyun və dərinizin canlı görünüşündən zövq alın.</p>
      <Card>
      <Button type="primary" className='blogdetail_btn' onClick={showModal}>
      <ShareAltOutlined className='blog_icon me-0' />
      </Button>
     
      </Card>
      <Modal title="Sosial media" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} className='w-25'>
        <Card><TwitterOutlined style={{ fontSize: '24px', color: '#1DA1F2' }}  /></Card>
        <Card><WhatsAppOutlined  style={{ fontSize: '24px', color: '#25D366' }}/></Card>
        <Card> 
      <InstagramOutlined style={{ fontSize: '24px', color: '#E1306C' }} />
    </Card>
    <Card> 
    <FacebookOutlined style={{ fontSize: '24px', color: '#1877F2' }} />
    </Card>
      </Modal>
      </Card>
    </div>
  )
}

export default BlogDetail
