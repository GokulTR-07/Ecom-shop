import { RiMotorbikeFill } from "react-icons/ri";
import { MdEngineering, MdVerifiedUser } from "react-icons/md";
import { PiEngineFill } from "react-icons/pi";

// data:image/png;base64,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

// navigation Data
export const navItems = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About",
    url: "/aboutus",
  },
  {
    title: "Services",
    url: "/products",
  },
  {
    title: "Offers",
    url: "/events",
  },
  {
    title: "FAQ",
    url: "/faq",
  },
];

// branding data
export const brandingData = [
  {
    id: 1,
    title: "Free Pickup & Drop",
    Description: "over 2km to 10km",
    icon: (
      <RiMotorbikeFill size={40} className="text-red-600"/>
      // <svg
      //   width="36"
      //   height="36"
      //   viewBox="0 0 36 36"
      //   fill="none"
      //   xmlns="http://www.w3.org/2000/svg"
      // >
      //   <path
      //     d="M1 1H5.63636V24.1818H35"
      //     stroke="#FFBB38"
      //     strokeWidth="2"
      //     strokeMiterlimit="10"
      //     strokeLinecap="square"
      //   ></path>
      //   <path
      //     d="M8.72763 35.0002C10.4347 35.0002 11.8185 33.6163 11.8185 31.9093C11.8185 30.2022 10.4347 28.8184 8.72763 28.8184C7.02057 28.8184 5.63672 30.2022 5.63672 31.9093C5.63672 33.6163 7.02057 35.0002 8.72763 35.0002Z"
      //     stroke="#FFBB38"
      //     strokeWidth="2"
      //     strokeMiterlimit="10"
      //     strokeLinecap="square"
      //   ></path>
      //   <path
      //     d="M31.9073 35.0002C33.6144 35.0002 34.9982 33.6163 34.9982 31.9093C34.9982 30.2022 33.6144 28.8184 31.9073 28.8184C30.2003 28.8184 28.8164 30.2022 28.8164 31.9093C28.8164 33.6163 30.2003 35.0002 31.9073 35.0002Z"
      //     stroke="#FFBB38"
      //     strokeWidth="2"
      //     strokeMiterlimit="10"
      //     strokeLinecap="square"
      //   ></path>
      //   <path
      //     d="M34.9982 1H11.8164V18H34.9982V1Z"
      //     stroke="#FFBB38"
      //     strokeWidth="2"
      //     strokeMiterlimit="10"
      //     strokeLinecap="square"
      //   ></path>
      //   <path
      //     d="M11.8164 7.18164H34.9982"
      //     stroke="#FFBB38"
      //     strokeWidth="2"
      //     strokeMiterlimit="10"
      //     strokeLinecap="square"
      //   ></path>
      // </svg>
    ),
  },
  {
    id: 2,
    title: "Warranty",
    Description: "upto 10 days",
    icon: (
      <MdVerifiedUser size={40} className="text-red-600"/>
      // <svg
      //   width="32"
      //   height="34"
      //   viewBox="0 0 32 34"
      //   fill="none"
      //   xmlns="http://www.w3.org/2000/svg"
      // >
      //   <path
      //     d="M31 17.4502C31 25.7002 24.25 32.4502 16 32.4502C7.75 32.4502 1 25.7002 1 17.4502C1 9.2002 7.75 2.4502 16 2.4502C21.85 2.4502 26.95 5.7502 29.35 10.7002"
      //     stroke="#FFBB38"
      //     strokeWidth="2"
      //     strokeMiterlimit="10"
      //   ></path>
      //   <path
      //     d="M30.7 2L29.5 10.85L20.5 9.65"
      //     stroke="#FFBB38"
      //     strokeWidth="2"
      //     strokeMiterlimit="10"
      //     strokeLinecap="square"
      //   ></path>
      // </svg>
    ),
  },
  {
    id: 4,
    title: "Trained Mechanics",
    Description: "professional workers",
    icon: (
      <MdEngineering size={40} className="text-red-600"/>
      // <svg
      //   width="32"
      //   height="35"
      //   viewBox="0 0 32 35"
      //   fill="none"
      //   xmlns="http://www.w3.org/2000/svg"
      // >
      //   <path
      //     d="M7 13H5.5C2.95 13 1 11.05 1 8.5V1H7"
      //     stroke="#FFBB38"
      //     strokeWidth="2"
      //     strokeMiterlimit="10"
      //   ></path>
      //   <path
      //     d="M25 13H26.5C29.05 13 31 11.05 31 8.5V1H25"
      //     stroke="#FFBB38"
      //     strokeWidth="2"
      //     strokeMiterlimit="10"
      //   ></path>
      //   <path
      //     d="M16 28V22"
      //     stroke="#FFBB38"
      //     strokeWidth="2"
      //     strokeMiterlimit="10"
      //   ></path>
      //   <path
      //     d="M16 22C11.05 22 7 17.95 7 13V1H25V13C25 17.95 20.95 22 16 22Z"
      //     stroke="#FFBB38"
      //     strokeWidth="2"
      //     strokeMiterlimit="10"
      //     strokeLinecap="square"
      //   ></path>
      //   <path
      //     d="M25 34H7C7 30.7 9.7 28 13 28H19C22.3 28 25 30.7 25 34Z"
      //     stroke="#FFBB38"
      //     strokeWidth="2"
      //     strokeMiterlimit="10"
      //     strokeLinecap="square"
      //   ></path>
      // </svg>
    ),
  },
  {
    id: 5,
    title: "Genuine Spare Parts",
    Description: "Buying from the brand itself",
    icon: (
      <PiEngineFill size={40} className="text-red-600"/>
      // <svg
      //   width="32"
      //   height="38"
      //   viewBox="0 0 32 38"
      //   fill="none"
      //   xmlns="http://www.w3.org/2000/svg"
      // >
      //   <path
      //     d="M22.6654 18.667H9.33203V27.0003H22.6654V18.667Z"
      //     stroke="#FFBB38"
      //     strokeWidth="2"
      //     strokeMiterlimit="10"
      //     strokeLinecap="square"
      //   ></path>
      //   <path
      //     d="M12.668 18.6663V13.6663C12.668 11.833 14.168 10.333 16.0013 10.333C17.8346 10.333 19.3346 11.833 19.3346 13.6663V18.6663"
      //     stroke="#FFBB38"
      //     strokeWidth="2"
      //     strokeMiterlimit="10"
      //     strokeLinecap="square"
      //   ></path>
      //   <path
      //     d="M31 22C31 30.3333 24.3333 37 16 37C7.66667 37 1 30.3333 1 22V5.33333L16 2L31 5.33333V22Z"
      //     stroke="#FFBB38"
      //     strokeWidth="2"
      //     strokeMiterlimit="10"
      //     strokeLinecap="square"
      //   ></path>
      // </svg>
    ),
  },
];

// categories data
export const categoriesData = [
  {
    id: 1,
    title: "General Service",
    subTitle: "",
    image_Url: 
    "https://us.123rf.com/450wm/yupiramos/yupiramos2307/yupiramos230700447/209408863-man-repairing-his-motorcycle.jpg?ver=6",
  },
  {
    id: 2,
    title: "periodic Service",
    subTitle: "",
    image_Url:
      "https://www.apnamechanic.com/wp-content/uploads/2023/01/AP-Mechanic-Spare-Parts.jpg",
  },
  {
    id: 3,
    title: "Full Service",
    subTitle: "",
    image_Url:
      "https://bromech.devakya.com/wp-content/uploads/2023/04/bike.gif",
  },
  {
    id: 4,
    title: "Engine Repair",
    subTitle: "",
    image_Url:
      "https://png.pngtree.com/png-clipart/20230217/original/pngtree-cool-motorcycle-engine-illustration-image-png-image_8957342.png",
  },
  {
    id: 5,
    title: "Accidental Repair",
    subTitle: "",
    image_Url:
      "https://media.istockphoto.com/id/1216086843/vector/vector-character-mechanic-repairs-motorcycle.jpg?s=612x612&w=0&k=20&c=xNFFXUT5pmfYJ21_j13VmQQSpca-8RTBsAUfPk6QTq4=",
  },
  {
    id: 6,
    title: "Spare Parts",
    subTitle: "",
    image_Url:
      "https://media.istockphoto.com/id/497859268/vector/vector-motorcycle-spares-concept.jpg?s=612x612&w=0&k=20&c=lVbDgX4KY195IXNMIGqA9UYsLJAsYJ6EAzQKE7Hoc9c=",
  },
  {
    id: 7,
    title: "Bike Batteries",
    subTitle: "",
    image_Url: "https://cdn-icons-png.flaticon.com/512/5752/5752366.png",
  },
  {
    id: 8,
    title: "Tyres",
    subTitle: "",
    image_Url:
      "https://thumbs.dreamstime.com/b/bike-wheel-icon-cartoon-vector-motorcycle-equipment-part-241395763.jpg",
  },
  {
    id: 9,
    title: "Vehicle Washing / Polishing",
    subTitle: "",
    image_Url:
      "https://t3.ftcdn.net/jpg/00/50/66/26/360_F_50662663_JulJGTrK8hOfSfW5RdNbOEekz57iKGmT.jpg",
  },
  {
    id: 10,
    title: "Others",
    subTitle: "",
    image_Url:
      "https://media.istockphoto.com/id/859605162/vector/a-classic-garage-for-motorcycle-repairs-old-biker-master-at-the-front.jpg?s=612x612&w=0&k=20&c=3B8lvGQHcrnfQxkmFxa9osMn_Kp-Mcqo1XylmGV1pIU=",
  },
];

// product Data
export const productData = [
  {
    id: 1,
    category:"Computers and Laptops",
    name: "MacBook pro M2 chipset 256gb ssd 8gb ram space-gray color with apple 1 year warranty",
    description:
      "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
    image_Url: [
      {
        public_id: "test",
        url: "https://www.istorebangladesh.com/images/thumbs/0000286_macbook-pro-m1_550.png",
      },
      {
        public_id: "test",
        url: "https://www.istorebangladesh.com/images/thumbs/0000286_macbook-pro-m1_550.png",
      },
    ],
    shop: {
      name: "Apple inc.",
      shop_avatar: {
        public_id: "test",
        url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
      },
      ratings: 4.2,
    },
    price: 1099,
    discount_price: 1049,
    rating: 4,
    total_sell: 35,
    stock: 10,
  },
  {
    id: 2,
    category:"Mobile and Tablets",
    name: "Iphone 14 pro max 256 gb ssd and 8 gb ram silver colour",
    description:
      "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
    image_Url: [
      {
        public_id: "test",
        url: "https://m.media-amazon.com/images/I/31Vle5fVdaL.jpg",
      },
      {
        public_id: "test",
        url: "https://m.media-amazon.com/images/I/31Vle5fVdaL.jpg",
      },
    ],
    shop: {
      name: "Amazon Ltd",
      shop_avatar: {
        public_id: "test",
        url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
      },
      ratings: 4.2,
    },
    discount_price: 1099,
    rating: 5,
    total_sell: 80,
    stock: 10,
    category:"Mobile & Tablets"
  },
  {
    id: 1,
    category:"Computers and Laptop",
    name: "MacBook pro M2 chipset 256gb ssd 8gb ram space gray color with apple 1 year warranty",
    description:
      "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
    image_Url: [
      {
        public_id: "test",
        url: "https://www.istorebangladesh.com/images/thumbs/0000286_macbook-pro-m1_550.png",
      },
      {
        public_id: "test",
        url: "https://www.istorebangladesh.com/images/thumbs/0000286_macbook-pro-m1_550.png",
      },
    ],
    shop: {
      name: "Apple inc.",
      shop_avatar: {
        public_id: "test",
        url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
      },
      ratings: 4.2,
    },
    price: 1099,
    discount_price: 1049,
    rating: 4,
    total_sell: 75,
    stock: 10,
    category:"Computers & Laptop"
  },
  {
    id: 4,
    category:"Others",
    name: "New Fashionable Watch for men 2023 with multiple colors",
    description:
      "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
    image_Url: [
      {
        public_id: "test",
        url: "https://i0.wp.com/eccocibd.com/wp-content/uploads/2022/01/1802NL02_1.png?fit=550%2C550&ssl=1",
      },
      {
        public_id: "test",
        url: "https://i0.wp.com/eccocibd.com/wp-content/uploads/2022/01/1802NL02_1.png?fit=550%2C550&ssl=1",
      },
    ],
    shop: {
      name: "Shahriar Watch House",
      shop_avatar: {
        public_id: "test",
        url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
      },
      ratings: 4.2,
    category:"Others"
    },
    price: 100,
    discount_price: 79,
    rating: 4,
    total_sell: 12,
    stock: 10,
  },
  {
    id: 5,
    category:"Shoes",
    name: "New Trend shoes for gents with all sizes",
    description:
      "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
    image_Url: [
      {
        public_id: "test",
        url: "https://mirzacdns3.s3.ap-south-1.amazonaws.com/cache/catalog/RLV0015/2-800x800.jpg",
      },
      {
        public_id: "test",
        url: "https://mirzacdns3.s3.ap-south-1.amazonaws.com/cache/catalog/RLV0015/2-800x800.jpg",
      },
    ],
    shop: {
      name: "Alisha Shoes Mart",
      shop_avatar: {
        public_id: "test",
        url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
      },
      ratings: 4.2,
    },
    price: 120,
    discount_price: 89,
    rating: 5,
    total_sell: 49,
    stock: 10,
    category:"Shoes"
  },
  {
    id: 1,
    name: "Gaming Headphone Asus with mutiple color and free delivery",
    description:
      "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
    image_Url: [
      {
        public_id: "test",
        url: "https://www.startech.com.bd/image/cache/catalog/headphone/havit/h763d/h763d-02-500x500.jpg",
      },
      {
        public_id: "test",
        url: "https://eratablet.com/wp-content/uploads/2022/08/H51ba6537405f4948972e293927673546u.jpg",
      },
    ],
    shop: {
      name: "Asus Ltd",
      shop_avatar: {
        public_id: "test",
        url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
      },
      ratings: 4.2,
    },
    price: 300,
    discount_price: 239,
    rating: 4.5,
    reviews: [
      {
        user: {
          // user object will be here
        },
        comment: "IT's so cool!",
        rating: 5,
      },
    ],
    total_sell: 20,
    stock: 10,
    category:"Music and Gaming"
  },
  {
    id: 4,
    name: "New Fashionable Watch for men 2023 with multiple colors",
    description:
      "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
    image_Url: [
      {
        public_id: "test",
        url: "https://i0.wp.com/eccocibd.com/wp-content/uploads/2022/01/1802NL02_1.png?fit=550%2C550&ssl=1",
      },
      {
        public_id: "test",
        url: "https://i0.wp.com/eccocibd.com/wp-content/uploads/2022/01/1802NL02_1.png?fit=550%2C550&ssl=1",
      },
    ],
    shop: {
      name: "Shahriar Watch House",
      shop_avatar: {
        public_id: "test",
        url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
      },
      ratings: 4.2,
    },
    price: 100,
    discount_price: 79,
    rating: 4,
    total_sell: 62,
    stock: 10,
  },
  {
    id: 1,
    name: "Gaming Headphone Asus with mutiple color and free delivery",
    description:
      "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
    image_Url: [
      {
        public_id: "test",
        url: "https://www.startech.com.bd/image/cache/catalog/headphone/havit/h763d/h763d-02-500x500.jpg",
      },
      {
        public_id: "test",
        url: "https://eratablet.com/wp-content/uploads/2022/08/H51ba6537405f4948972e293927673546u.jpg",
      },
    ],
    shop: {
      name: "Asus Ltd",
      shop_avatar: {
        public_id: "test",
        url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
      },
      ratings: 4.2,
    },
    price: 300,
    discount_price: 239,
    rating: 4.5,
    reviews: [
      {
        user: {
          // user object will be here
        },
        comment: "IT's so cool!",
        rating: 5,
      },
    ],
    total_sell: 20,
    stock: 10,
  },
  {
    id: 2,
    category:"Mobile and Tablets",
    name: "Iphone 14 pro max 256 gb ssd and 8 gb ram silver colour",
    description:
      "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
    image_Url: [
      {
        public_id: "test",
        url: "https://m.media-amazon.com/images/I/31Vle5fVdaL.jpg",
      },
      {
        public_id: "test",
        url: "https://m.media-amazon.com/images/I/31Vle5fVdaL.jpg",
      },
    ],
    shop: {
      name: "Amazon Ltd",
      shop_avatar: {
        public_id: "test",
        url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
      },
      ratings: 4.2,
    },
    discount_price: 1099,
    rating: 5,
    total_sell: 20,
    stock: 10,
  },
  {
    id: 1,
    category:"Music and Gaming",
    name: "Gaming Headphone Asus with mutiple color and free delivery",
    description:
      "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
    image_Url: [
      {
        public_id: "test",
        url: "https://www.startech.com.bd/image/cache/catalog/headphone/havit/h763d/h763d-02-500x500.jpg",
      },
      {
        public_id: "test",
        url: "https://eratablet.com/wp-content/uploads/2022/08/H51ba6537405f4948972e293927673546u.jpg",
      },
    ],
    shop: {
      name: "Asus Ltd",
      shop_avatar: {
        public_id: "test",
        url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
      },
      ratings: 4.2,
    },
    price: 300,
    discount_price: 239,
    rating: 4.5,
    reviews: [
      {
        user: {
          // user object will be here
        },
        comment: "IT's so cool!",
        rating: 5,
      },
    ],
    total_sell: 20,
    stock: 10,
  },
];

export const footerProductLinks = [
  {
    name: "About us",
    link: "/about"
  },
  {
    name: "Careers",
    link: "/carrers"
  },
  {
    name: "Store Locations",
  },
  {
    name: "Our Blog",
  },
  {
    name: "Reviews",
  },
];

export const footercompanyLinks = [
  {
    name: "General Service",
  },
  {
    name: "Periodic Service",
  },
  {
    name: "Full Service",
  },
  {
    name: "Engine Repair",
  },
  {
    name: "Spare Parts",
  },
];

export const footerSupportLinks = [
  {
    name: "FAQ",
  },
  {
    name: "Reviews",
  },
  {
    name: "Contact Us",
  },
  {
    name: "Shipping",
  },
  {
    name: "Live chat",
  },
];
