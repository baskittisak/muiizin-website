import mock_bag_image from "../../assets/image/mock_bag.png";
import mock_cushions_image from "../../assets/image/mock_cushions.png";
import mock_hat_image from "../../assets/image/mock_hat.png";
import mock_cloth_bag_image from "../../assets/image/mock_cloth_bag.png";

export const productList = [
  {
    id: 1,
    images: [
      mock_bag_image,
      mock_cushions_image,
      mock_cloth_bag_image,
      mock_hat_image,
    ],
    name: {
      en: "กระเป๋ากระจูด จ.ระยอง คนพื้นเมืองทำเพื่อ คนเมือง",
      th: "กระเป๋ากระจูด จ.ระยอง คนพื้นเมืองทำเพื่อ คนเมือง",
    },
    category: {
      en: "Bags",
      th: "กระเป๋า",
    },
    owner: {
      en: "กลุ่มจักสานกระจูดบ้านกวี",
      th: "กลุ่มจักสานกระจูดบ้านกวี",
    },
    size: ["M", "L", "XL"],
    color: ["#DBE7F3", "#2D5782", "#031425"],
    price: "850.00",
    newPrice: "790.00",
  },
  {
    id: 2,
    images: [
      mock_cushions_image,
      mock_cushions_image,
      mock_cushions_image,
      mock_cushions_image,
    ],
    name: {
      en: "หมอนอิง จ.กาญจนบุรี อิงของเก่าให้เข้ายุคใหม่",
      th: "หมอนอิง จ.กาญจนบุรี อิงของเก่าให้เข้ายุคใหม่",
    },
    category: {
      en: "Accessory Gifts",
      th: "ของขวัญ",
    },
    owner: {
      en: "สุภัชชาผ้าฝ้าย",
      th: "สุภัชชาผ้าฝ้าย",
    },
    size: ["M", "L", "XL"],
    price: "650.00",
  },
  {
    id: 3,
    images: [mock_hat_image, mock_hat_image, mock_hat_image, mock_hat_image],
    name: {
      en: "OTOP SELECT หมวกแก๊ปผ้าไหมแท้​ ทอมือ",
      th: "OTOP SELECT หมวกแก๊ปผ้าไหมแท้​ ทอมือ",
    },
    category: {
      en: "Hats",
      th: "หมวก",
    },
    owner: {
      en: "สุภาณีไหมไทย",
      th: "สุภาณีไหมไทย",
    },
    color: ["#DBE7F3", "#2D5782", "#031425"],
    price: "1500.00",
  },
  {
    id: 4,
    images: [
      mock_cloth_bag_image,
      mock_cloth_bag_image,
      mock_cloth_bag_image,
      mock_cloth_bag_image,
    ],
    name: {
      en: "กระเป๋าถือผ้าฝ้าย ย้อมครามแบบล้านนา",
      th: "กระเป๋าถือผ้าฝ้าย ย้อมครามแบบล้านนา",
    },
    category: {
      en: "Bags",
      th: "กระเป๋า",
    },
    owner: {
      en: "ศูนย์โอทอปเชียงใหม่",
      th: "ศูนย์โอทอปเชียงใหม่",
    },
    price: "500",
  },
  {
    id: 5,
    images: [mock_bag_image, mock_bag_image, mock_bag_image, mock_bag_image],
    name: {
      en: "กระเป๋ากระจูด จ.ระยอง คนพื้นเมืองทำเพื่อ คนเมือง",
      th: "กระเป๋ากระจูด จ.ระยอง คนพื้นเมืองทำเพื่อ คนเมือง",
    },
    category: {
      en: "Bags",
      th: "กระเป๋า",
    },
    owner: {
      en: "กลุ่มจักสานกระจูดบ้านกวี",
      th: "กลุ่มจักสานกระจูดบ้านกวี",
    },
    price: "850.00",
    newPrice: "790.00",
  },
  {
    id: 6,
    images: [
      mock_cushions_image,
      mock_cushions_image,
      mock_cushions_image,
      mock_cushions_image,
    ],
    name: {
      en: "หมอนอิง จ.กาญจนบุรี อิงของเก่าให้เข้ายุคใหม่",
      th: "หมอนอิง จ.กาญจนบุรี อิงของเก่าให้เข้ายุคใหม่",
    },
    category: {
      en: "Accessory Gifts",
      th: "ของขวัญ",
    },
    owner: {
      en: "สุภัชชาผ้าฝ้าย",
      th: "สุภัชชาผ้าฝ้าย",
    },
    price: "650.00",
  },
  {
    id: 7,
    images: [mock_hat_image, mock_hat_image, mock_hat_image, mock_hat_image],
    name: {
      en: "OTOP SELECT หมวกแก๊ปผ้าไหมแท้​ ทอมือ",
      th: "OTOP SELECT หมวกแก๊ปผ้าไหมแท้​ ทอมือ",
    },
    category: {
      en: "Hats",
      th: "หมวก",
    },
    owner: {
      en: "สุภาณีไหมไทย",
      th: "สุภาณีไหมไทย",
    },
    price: "1500.00",
  },
  {
    id: 8,
    images: [
      mock_cloth_bag_image,
      mock_cloth_bag_image,
      mock_cloth_bag_image,
      mock_cloth_bag_image,
    ],
    name: {
      en: "กระเป๋าถือผ้าฝ้าย ย้อมครามแบบล้านนา",
      th: "กระเป๋าถือผ้าฝ้าย ย้อมครามแบบล้านนา",
    },
    category: {
      en: "Bags",
      th: "กระเป๋า",
    },
    owner: {
      en: "ศูนย์โอทอปเชียงใหม่",
      th: "ศูนย์โอทอปเชียงใหม่",
    },
    price: "500",
  },
  {
    id: 9,
    images: [mock_bag_image, mock_bag_image, mock_bag_image, mock_bag_image],
    name: {
      en: "กระเป๋ากระจูด จ.ระยอง คนพื้นเมืองทำเพื่อ คนเมือง",
      th: "กระเป๋ากระจูด จ.ระยอง คนพื้นเมืองทำเพื่อ คนเมือง",
    },
    category: {
      en: "Bags",
      th: "กระเป๋า",
    },
    owner: {
      en: "กลุ่มจักสานกระจูดบ้านกวี",
      th: "กลุ่มจักสานกระจูดบ้านกวี",
    },
    price: "850.00",
    newPrice: "790.00",
  },
  {
    id: 10,
    images: [
      mock_cushions_image,
      mock_cushions_image,
      mock_cushions_image,
      mock_cushions_image,
    ],
    name: {
      en: "หมอนอิง จ.กาญจนบุรี อิงของเก่าให้เข้ายุคใหม่",
      th: "หมอนอิง จ.กาญจนบุรี อิงของเก่าให้เข้ายุคใหม่",
    },
    category: {
      en: "Accessory Gifts",
      th: "ของขวัญ",
    },
    owner: {
      en: "สุภัชชาผ้าฝ้าย",
      th: "สุภัชชาผ้าฝ้าย",
    },
    price: "650.00",
  },
  {
    id: 11,
    images: [mock_hat_image, mock_hat_image, mock_hat_image, mock_hat_image],
    name: {
      en: "OTOP SELECT หมวกแก๊ปผ้าไหมแท้​ ทอมือ",
      th: "OTOP SELECT หมวกแก๊ปผ้าไหมแท้​ ทอมือ",
    },
    category: {
      en: "Hats",
      th: "หมวก",
    },
    owner: {
      en: "สุภาณีไหมไทย",
      th: "สุภาณีไหมไทย",
    },
    price: "1500.00",
  },
  {
    id: 12,
    images: [
      mock_cloth_bag_image,
      mock_cloth_bag_image,
      mock_cloth_bag_image,
      mock_cloth_bag_image,
    ],
    name: {
      en: "กระเป๋าถือผ้าฝ้าย ย้อมครามแบบล้านนา",
      th: "กระเป๋าถือผ้าฝ้าย ย้อมครามแบบล้านนา",
    },
    category: {
      en: "Bags",
      th: "กระเป๋า",
    },
    owner: {
      en: "ศูนย์โอทอปเชียงใหม่",
      th: "ศูนย์โอทอปเชียงใหม่",
    },
    price: "500",
  },
];
