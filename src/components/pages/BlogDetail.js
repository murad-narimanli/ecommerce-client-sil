import React from "react";
import { Card } from "antd";
import "../../assets/scss/Blog.scss";
import Image from "../../assets/image/image";
import { ShareAltOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import {
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import { Button, Modal } from "antd";
import { useNavigate } from "react-router-dom";
const { Meta } = Card;
function BlogDetail() {
  let navigate = useNavigate();
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
  };
  return (
    <div className="container d-flex justify-content-center mb-5 mt-5">
      <Card
        hoverable
        style={{ width: "60%" }}
        cover={<img alt={title} src={Image.Blogimg0} />}
      >
        <Meta title={title} className="pb-3" />
        <p className="blog-date">{date}</p>
        <p className="">
          Mövsüm fərqi olmadan özümüzə və üzümüzə qulluq etmək mütləqdir. Yayda
          günəş şüalarının faydaları olsa da, düzgün saatlarda günəşlənməsək
          zərərli tərəfləri ilə qarşılaşarıq. Elə bu zərərlərdən biri dərimizdə
          yaranan günəş ləkələridir. Ancaq üzümüzə düzgün qulluq etsək dərini
          həmin zərərlərdən qoruyarıq.
        </p>
        <p>
          Odur ki sizinlə evdə hazırlaya biləcəyiniz təbii maska reseptləri
          paylaşırıq. Maskalar üçün evdə olan inqrediyentlər istifada edə və ya
          supermarketdən çatışmayanları əldə edib elə indi hazırlaya bilərsiniz.
        </p>
        <p>
          Günəşdən yaranan ləkələrdən bəhs etmişkən üz dərisini tonlaşdıran,
          parlaqlıq verən və ləkələri solduran yulaf maskası ilə başlayaq.
        </p>
        <p>Maska üçün lazım olacaq:</p>
        <ol>
          <li>½ xiyar</li>
          <li>1 x. q. ev qatığı</li>
          <li>1 x. q. yulaf</li>
          <li>1 ç. q. bal</li>
        </ol>
        <p>Hazırlanması:</p>
        <p>
          Xiyarı sürtgəcdən keçirin və digər bütün inqrediyentlər ilə birlikdə
          qatı hala gələnə qədər qarışdırın. Qarışımı üzünüzdə günəş şüaları ilə
          daha çox təmasda olan hissələrə tətbiq edin. 30 dəqiqə sonra maskanı
          ilıq su ilə yuyun və dərinizin canlı görünüşündən zövq alın.
        </p>
        <Card className="detail_footer  p-2">
          <ArrowLeftOutlined
            className=" back_icon"
            onClick={() => {
              navigate("/blog");
            }}
          />

          <Button
            type="primary"
            className="blogdetail_btn "
            onClick={showModal}
          >
            <ShareAltOutlined className="blog_icon  y-auto" />
          </Button>
        </Card>
        <Modal
          title="Sosial media"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          className="w-25"
        >
          {/* <Card>
            <TwitterOutlined style={{ fontSize: "24px", color: "#1DA1F2" }} />
          </Card>
          <Card>
            <WhatsAppOutlined style={{ fontSize: "24px", color: "#25D366" }} />
          </Card>
          <Card>
            <InstagramOutlined style={{ fontSize: "24px", color: "#E1306C" }} />
          </Card>
          <Card>
            <FacebookOutlined style={{ fontSize: "24px", color: "#1877F2" }} />
          </Card> */}
          <Card onClick={() => window.open("https://twitter.com/BravoAZS")}>
            <TwitterOutlined style={{ fontSize: "24px", color: "#1DA1F2" }} />
          </Card>
          <Card
            onClick={() =>
              window.open(
                "https://www.youtube.com/channel/UCUDPswYmu2SCJQCr7qDdtwA"
              )
            }
          >
            <YoutubeOutlined style={{ fontSize: "24px", color: "#25D366" }} />
          </Card>

          <Card
            onClick={() =>
              window.open("https://www.instagram.com/bravosupermarketaz/")
            }
          >
            <InstagramOutlined style={{ fontSize: "24px", color: "#E1306C" }} />
          </Card>
          <Card
            onClick={() =>
              window.open(
                "https://www.facebook.com/BravoSupermarketAz/?locale=ru_RU"
              )
            }
          >
            <FacebookOutlined style={{ fontSize: "24px", color: "#1877F2" }} />
          </Card>
        </Modal>
      </Card>
    </div>
  );
}

export default BlogDetail;
