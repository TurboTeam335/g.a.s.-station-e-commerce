// Pedals.js

// Placeholder imports - replace these with your actual image imports
import pedal1 from './img/TS808.webp';
import pedal2 from './img/DD-7.jpg';
import pedal3 from './img/m5.jpeg';

const fakePedals = [
  {
    user_id: "pedalUser1",
    type: "Pedal",
    subcategory: "Overdrive",
    Brand: "Ibanez",
    Model: "Tube Screamer TS808",
    ListingTitle: "Ibanez Tube Screamer TS808",
    description: "Classic overdrive pedal known for its warm tone.",
    price: 150,
    Photo: {
      url: pedal1,
      fileSize: 1100,
      fileType: "image/jpeg",
    },
    Condition: "Very Good",
    SKU: "IP01"
  },
  {
    user_id: "pedalUser2",
    type: "Pedal",
    subcategory: "Delay",
    Brand: "Boss",
    Model: "DD-7 Digital Delay",
    ListingTitle: "Boss DD-7 Digital Delay",
    description: "Versatile delay pedal with different modes and settings.",
    price: 130,
    Photo: {
      url: pedal2,
      fileSize: 1200,
      fileType: "image/jpeg",
    },
    Condition: "Mint",
    SKU: "BP01"
  },
  {
    user_id: "pedalUser3",
    type: "Pedal",
    subcategory: "Multi-Effect",
    Brand: "Line 6",
    Model: "M5 Stompbox Modeler",
    ListingTitle: "Line 6 M5 Stompbox Modeler",
    description: "All-in-one pedal with multiple effects to choose from.",
    price: 130,
    Photo: {
      url: pedal3,
      fileSize: 1000,
      fileType: "image/jpeg",
    },
    Condition: "Excellent",
    SKU: "LP01"
  }
];

export default fakePedals;
