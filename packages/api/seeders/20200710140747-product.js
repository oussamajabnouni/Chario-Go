"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Products",
      [
        {
          id: 8,
          title: "lime",
          slug: "lime",
          unit: "12 pc(s)",
          price: 1.5,
          salePrice: 0,
          discountInPercent: 0,
          description:
            "The lemon/lime, Citrus limon Osbeck, is a species of small evergreen tree in the flowering plant family Rutaceae, native to South Asia, primarily North eastern India.",
          type: "grocery",
          image:
            "https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614568/pickbazar/grocery/GreenLimes_jrodle.jpg",

          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          id: 9,
          title: "Lemon",
          slug: "lemon",
          unit: "12 pc(s)",
          price: 1.5,
          salePrice: 0,
          discountInPercent: 0,
          description:
            "The lemon/lime, Citrus limon Osbeck, is a species of small evergreen tree in the flowering plant family Rutaceae, native to South Asia.",
          type: "grocery",
          image:
            "https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614568/pickbazar/grocery/Yellow_Limes_y0lbyo.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          id: 10,
          title: "Cherry",
          slug: "cherry",
          unit: "0.5 lb",
          price: 2,
          salePrice: 0,
          discountInPercent: 0,
          description:
            "A cherry is the fruit of many plants of the genus Prunus, and is a fleshy drupe. Commercial cherries are obtained from cultivars of several species",
          type: "grocery",
          image:
            "https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614569/pickbazar/grocery/RedCherries_zylnoo.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          id: 11,
          title: "Celery Stick",
          slug: "celerystick",
          unit: "1 lb",
          price: 0.7,
          salePrice: 0,
          discountInPercent: 0,
          description: "celery stick - celery stalks cut into small sticks.",
          type: "grocery",
          image:
            "https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614568/pickbazar/grocery/CelerySticks_ulljfz.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          id: 12,
          title: "Baby Spinach",
          slug: "babyspinach",
          unit: "0.2 lb",
          price: 0.6,
          salePrice: 0,
          discountInPercent: 0,
          description:
            "Spinach (Spinacia oleracea) is a leafy green flowering plant native to central and western Asia. It is of the order Caryophyllales, family Amaranthaceae, subfamily Chenopodioideae.",
          type: "grocery",
          image:
            "https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614568/pickbazar/grocery/BabySpinach_xronqz.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          id: 13,
          title: "Mix Vegetable Platter",
          slug: "mixveggieplatter",
          unit: "0.4 lb",
          price: 1.6,
          salePrice: 0,
          discountInPercent: 0,
          description:
            "Spinach (Spinacia oleracea) is a leafy green flowering plant native to central and western Asia. It is of the order Caryophyllales, family Amaranthaceae, subfamily Chenopodioideae.",
          type: "grocery",
          image:
            "https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614568/pickbazar/grocery/VeggiePlatter_ztcg0m.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          id: 14,
          title: "French Green Beans",
          slug: "frenchgreenbeans",
          unit: ".6 lb",
          price: 2,
          salePrice: 1.8,
          discountInPercent: 10,
          description:
            "Green beans are the unripe, young fruit and protective pods of various cultivars of the common bean. Immature or young pods of the runner bean, yardlong bean, and hyacinth bean are used in a similar way.",
          type: "grocery",
          image:
            "https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614568/pickbazar/grocery/FrenchGreenBeans_azivow.jpg",

          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          id: 15,
          title: "Sweet Corn",
          slug: "sweetcorn",
          unit: "2.5 lb",
          price: 3,
          salePrice: 0,
          discountInPercent: 0,
          description:
            "Maize, also known as corn, is a cereal grain first domesticated by indigenous peoples in southern Mexico about 10,000 years ago.",
          type: "grocery",
          image:
            "https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614568/pickbazar/grocery/Corn_dlrtbv.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          id: 16,
          title: "Cucumber",
          slug: "cucumber",
          unit: "4 lb",
          price: 2.2,
          salePrice: 0,
          discountInPercent: 0,
          description:
            "Cucumber is a widely cultivated plant in the gourd family, Cucurbitaceae. It is a creeping vine that bears cucumiform fruits that are used as vegetables. ",
          type: "grocery",
          image:
            "https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614568/pickbazar/grocery/Cucumber_w6hlxr.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          id: 17,
          title: "Pepper",
          slug: "pepper",
          unit: "1.5 lb",
          price: 10,
          salePrice: 8,
          discountInPercent: 20,
          description:
            "Black pepper is a flowering vine in the family Piperaceae, cultivated for its fruit, known as a peppercorn, which is usually dried and used as a spice and seasoning. ",
          type: "grocery",
          image:
            "https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614568/pickbazar/grocery/MiniPeppers_iydh8m.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          id: 18,
          title: " Green Beans",
          slug: "greenbeans",
          unit: ".6 lb",
          price: 1.5,
          salePrice: 1.2,
          discountInPercent: 20,
          description:
            "Green beans are the unripe, young fruit and protective pods of various cultivars of the common bean. Immature or young pods of the runner bean, yardlong bean, and hyacinth bean are used in a similar way.",
          type: "grocery",
          image:
            "https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614568/pickbazar/grocery/GreenBeans_fwddsr.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          id: 19,
          title: " Brussels Sprout",
          slug: "brusselssprouts",
          unit: "1 lb",
          price: 4,
          salePrice: 0,
          discountInPercent: 0,
          description:
            "The Brussels sprout is a member of the Gemmifera Group of cabbages, grown for its edible buds. The leaf vegetables are typically 1.5–4.0 cm in diameter and look like miniature cabbages. ",
          type: "grocery",
          image:
            "https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614568/pickbazar/grocery/BrusselsSprouts_adwhet.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          id: 20,
          title: "Peeled Baby Carrot",
          slug: "babycarrot",
          unit: "2 lb",
          price: 3,
          salePrice: 0,
          discountInPercent: 0,
          description:
            "The carrot is a root vegetable, usually orange in colour, though purple, black, red, white, and yellow cultivars exist. They are a domesticated form of the wild carrot, Daucus carota, native to Europe and Southwestern Asia.",
          type: "grocery",
          image:
            "https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614568/pickbazar/grocery/Peeled_Carrots_xx7mjo.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 1,
          title: "Strawberry",
          slug: "strawbery",
          unit: "1 lb",
          price: 5,
          salePrice: 2.5,
          discountInPercent: 50,
          description:
            "The garden strawberry is a widely grown hybrid species of the genus Fragaria, collectively known as the strawberries, which are cultivated worldwide for their fruit.",
          type: "grocery",
          image:
            "https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614569/pickbazar/grocery/strawberry_d4lzfz.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          id: 2,
          title: "Blueberries",
          slug: "blueberry",
          unit: "1 lb",
          price: 8,
          salePrice: 7.2,
          discountInPercent: 10,
          description:
            "Blueberries are perennial flowering plants with blue or purple berries. They are classified in the section Cyanococcus within the genus Vaccinium. ",
          type: "grocery",
          image:
            "https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614570/pickbazar/grocery/blueberries_relyfn.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          id: 3,
          title: "Clementines",
          slug: "clementines",
          unit: "2 lb",
          price: 3,
          salePrice: 0,
          discountInPercent: 0,
          description:
            " clementine is a tangor, a citrus fruit hybrid between a willowleaf mandarin orange and a sweet orange, named for its late 19th-century discoverer.  ",
          type: "grocery",
          image:
            "https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614568/pickbazar/grocery/clementines_h74qrp.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 4,
          title: "Apples",
          slug: "apples",
          unit: "2 lb",
          price: 2,
          salePrice: 1.6,
          discountInPercent: 20,
          description:
            "An apple is a sweet, edible fruit produced by an apple tree (Malus domestica). Apple trees are ... The skin of ripe apples is generally red, yellow, green, pink ",
          type: "grocery",
          image:
            "https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614569/pickbazar/grocery/Apples_dmwvrq.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 5,
          title: "Pears",
          slug: "pear",
          unit: "1 lb",
          price: 2,
          salePrice: 0,
          discountInPercent: 0,
          description:
            "The pear tree and shrub are a species of genus Pyrus, in the family Rosaceae, bearing the pomaceous fruit of the same name. ",
          type: "grocery",
          image:
            "https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614569/pickbazar/grocery/pears_ukyxdh.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          id: 6,
          title: "Mango",
          slug: "mango",
          unit: "2 lb",
          price: 2.5,
          salePrice: 0,
          discountInPercent: 0,
          description:
            "A mango is a juicy stone fruit produced from numerous species of tropical trees belonging to the flowering plant genus Mangifera, cultivated mostly for their edible fruit. ",
          type: "grocery",
          image:
            "https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614569/pickbazar/grocery/Mangoes_ruaapa.jpg",

          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          id: 7,
          title: "Dates",
          slug: "dates",
          unit: "2 lb",
          price: 15,
          salePrice: 12,
          discountInPercent: 20,
          description:
            "Phoenix dactylifera, commonly known as date or date palm, is a flowering plant species in the palm family, Arecaceae, cultivated for its edible sweet fruit.",
          type: "grocery",
          image:
            "https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614569/pickbazar/grocery/Dates_pq4oad.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 21,
          title: "Signature Salmon",
          slug: "signaturesalmon",
          unit: "1 lb",
          price: 4.95,
          salePrice: 0,
          discountInPercent: 0,
          description:
            "Salmon is a common food classified as an oily fish with a rich content of protein and omega-3 fatty acids",
          type: "grocery",
          image:
            "https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589736058/pickbazar/grocery/SignatureSalmon_fstp4m.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Products", [{}]);
  },
};
