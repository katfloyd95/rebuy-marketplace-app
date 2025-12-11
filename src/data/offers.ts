export interface Offer {
    id: number;
    title: string;
    description: string;
    price: number;
    votes: number;
    imageSrc: string;
    imageAlt: string;
    purchaseUrl: string;
  }
  
  export const offersData: Offer[] = [
    {
      id: 1,
      title: "Apple iPhone 13",
      description:
        "Apple iPhone 13 with 128GB storage in Midnight finish. Carefully used, still in very good condition, perfect for daily use and capturing high-quality photos and videos.",
      price: 529,
      votes: 42,
      imageSrc: "https://m.media-amazon.com/images/I/61ZThdgtSKL._AC_SX679_.jpg",
      imageAlt: "iPhone 13",
      purchaseUrl: "https://rebuy.example/purchase/iphone13",
    },
    {
      id: 2,
      title: "Samsung Galaxy S22",
      description:
        "Samsung Galaxy S22 in Phantom Black with 256GB of storage. Sleek design, excellent performance, and fully functional, ideal for work and entertainment.",
      price: 479,
      votes: 33,
      imageSrc:
        "https://techmarkit.co.za/cdn/shop/files/SAMS22-BLK_2090057d-91b9-4742-bd17-b99e00a3993a_5000x.jpg?v=1698755841",
      imageAlt: "Samsung Galaxy S22",
      purchaseUrl: "https://rebuy.example/purchase/galaxys22",
    },
    {
      id: 3,
      title: "Sony PlayStation 5",
      description:
        "Sony PlayStation 5 Disc Edition in very good condition. Includes all original accessories and delivers next-gen gaming experiences with ultra-fast load times and stunning graphics.",
      price: 449,
      votes: 67,
      imageSrc: "https://m.media-amazon.com/images/I/61CELS-zAZL._SL1500_.jpg",
      imageAlt: "PlayStation 5 console",
      purchaseUrl: "https://rebuy.example/purchase/ps5",
    },
    {
      id: 4,
      title: "Nintendo Switch OLED",
      description:
        "Nintendo Switch OLED model with white Joy-Con controllers. Excellent condition, vibrant OLED display, perfect for portable gaming and shared multiplayer fun.",
      price: 289,
      votes: 21,
      imageSrc:
        "https://www.worldshop.eu/medias/img/8947739361310_w1500_z_6830532/nintendo-switch-oled-model-console-white.jpeg",
      imageAlt: "Nintendo Switch OLED",
      purchaseUrl: "https://rebuy.example/purchase/switch-oled",
    },
    {
      id: 5,
      title: "Apple MacBook Pro 14”",
      description:
        "Apple MacBook Pro 14-inch with M1 Pro chip and 512GB SSD in Space Gray. Excellent performance for creative work, coding, or multimedia, with a stunning Retina display and long battery life.",
      price: 1549,
      votes: 55,
      imageSrc:
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800",
      imageAlt: "MacBook Pro 14",
      purchaseUrl: "https://rebuy.example/purchase/macbookpro14",
    },
    {
      id: 6,
      title: "Dell XPS 13",
      description:
        "Dell XPS 13 laptop with Intel i7 processor, 16GB RAM, and 512GB SSD in sleek Silver. Compact, lightweight, and perfect for productivity, professional work, and multimedia use.",
      price: 899,
      votes: 18,
      imageSrc:
        "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/xps-13-9350/spi/platinum/oled/notebook-xps-13-9350-oled-silver-campaign-hero-504x350-ng.psd?fmt=jpg&wid=570&hei=400",
      imageAlt: "Dell XPS 13",
      purchaseUrl: "https://rebuy.example/purchase/dellxps13",
    },
    {
      id: 7,
      title: "Apple iPad Air (5th Gen)",
      description:
        "Apple iPad Air 5th Generation in Starlight finish with 64GB storage and Wi-Fi. Lightweight, versatile, and excellent for streaming, drawing, reading, and everyday tasks.",
      price: 389,
      votes: 25,
      imageSrc:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/refurb-ipad-air-5th-gen-wifi-starlight-202409?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=ejFkbU9MZ3c3VG10WjJvMnd0Uit3cmxwTlk5a08rTHpOcitrVHdQK3JuZDR2d0hIZm1tK1hTTVFPVnVUTnZsdjNhaXdpb1FXMGlmWkVJNGRaVDhWK3RlVUN5anBMYXArdTZxQXVZNFlaRkZZbkR0NldQQVZyZHlDRDBscjN1bGtmbW94YnYxc1YvNXZ4emJGL0IxNFp3",
      imageAlt: "iPad Air 5th generation",
      purchaseUrl: "https://rebuy.example/purchase/ipadair5",
    },
    {
      id: 8,
      title: "Sony WH-1000XM5 Headphones",
      description:
        "Sony WH-1000XM5 over-ear headphones in black. Industry-leading noise cancellation, rich sound quality, and long battery life, ideal for travel, work, or immersive music experiences.",
      price: 249,
      votes: 12,
      imageSrc:
        "https://d2e6ccujb3mkqf.cloudfront.net/dc2a8076-0e77-41a9-8487-a82889be8cc4-1_5572a0ee-bfa6-42e0-9b4f-c841b24499a4.jpg",
      imageAlt: "Sony WH-1000XM5 Headphones",
      purchaseUrl: "https://rebuy.example/purchase/sonyxm5",
    },
    {
      id: 9,
      title: "Oculus Quest 2 VR Headset",
      description:
        "Oculus Quest 2 VR headset with 128GB storage in White. Excellent condition, fully immersive virtual reality experience with intuitive controls and a wide selection of VR games.",
      price: 269,
      votes: 30,
      imageSrc:
        "https://i0.wp.com/puredeadgaming.com/wp-content/uploads/2020/11/Quest2-FI.jpg?resize=860%2C430&ssl=1",
      imageAlt: "Oculus Quest 2 VR Headset",
      purchaseUrl: "https://rebuy.example/purchase/quest2",
    },
    {
      id: 10,
      title: "Google Pixel 7",
      description:
        "Google Pixel 7 smartphone with 128GB storage in Lemongrass. Excellent camera capabilities, clean Android experience, and smooth performance for everyday use.",
      price: 379,
      votes: 16,
      imageSrc:
        "https://cdn.expert.de/cdn-cgi/image/w=400,h=350,q=80,f=webp,fit=contain/28/67/ba/74ca5e52a64e7ecf5f5dcfb2936dca05a3/Abbildung_1681318.jpeg",
      imageAlt: "Google Pixel 7",
      purchaseUrl: "https://rebuy.example/purchase/pixel7",
    },
  ];