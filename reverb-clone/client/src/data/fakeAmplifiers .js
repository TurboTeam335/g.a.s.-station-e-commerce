// Amplifiers.js

// Placeholder imports - replace these with your actual image imports
import amp1 from './img/JCM800.jpg';
import amp2 from './img/Frontman.jpeg';
import amp3 from './img/spider.jpg';

const fakeAmplifiers = [
  {
    user_id: "ampUser1",
    type: "Amplifier",
    subcategory: "Tube Amp",
    Brand: "Marshall",
    Model: "JCM800",
    ListingTitle: "Marshall JCM800 Lead Series",
    description: "Iconic British sound with a rich and powerful tone.",
    price: 1500,
    Photo: {
      url: amp1,
      fileSize: 2300,
      fileType: "image/jpeg",
    },
    Condition: "Excellent",
    SKU: "MA01"
  },
  {
    user_id: "ampUser2",
    type: "Amplifier",
    subcategory: "Solid State",
    Brand: "Fender",
    Model: "Frontman 10G",
    ListingTitle: "Fender Frontman 10G",
    description: "Compact practice amplifier with a clean sound.",
    price: 60,
    Photo: {
      url: amp2,
      fileSize: 2000,
      fileType: "image/jpeg",
    },
    Condition: "Good",
    SKU: "FA01"
  },
  {
    user_id: "ampUser3",
    type: "Amplifier",
    subcategory: "Modeling Amp",
    Brand: "Line 6",
    Model: "Spider V 60",
    ListingTitle: "Line 6 Spider V 60 Modeling Amp",
    description: "Versatile amp with multiple built-in effects and sounds.",
    price: 300,
    Photo: {
      url: amp3,
      fileSize: 2100,
      fileType: "image/jpeg",
    },
    Condition: "Mint",
    SKU: "LA01"
  }
];

export default fakeAmplifiers;
