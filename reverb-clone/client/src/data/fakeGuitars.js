import stratCard from './img/stratCard.png';
import d28Card from './img/d28Card.png';
import es335 from './img/es335Card.jpeg';
import gretsch from './img/gretschCard.png';
import prs from './img/prsCard.jpeg';
import ibanez from './img/RG550Card.jpeg';
import taylor from './img/taylorCard.png';

const fakeGuitars = [
  {
    user_id: "user123",
    type: "Electric Guitar",
    subcategory: "Solid Body",
    Brand: "Fender",
    Model: "Stratocaster",
    ListingTitle: "Fender American Deluxe Stratocaster",
    description: "A classic sunburst finish Fender Stratocaster with a smooth tone.",
    price: 1200,
    Photo: {
      url: stratCard,
      fileSize: 2000,
      fileType: "image/jpeg",
    },
    Condition: "Mint",
    SKU: "FS01"
  },
  {
    user_id: "user124",
    type: "Acoustic Guitar",
    subcategory: "Dreadnought",
    Brand: "Martin",
    Model: "D-28",
    ListingTitle: "Martin D-28 Natural",
    description: "The legendary Martin D-28 delivers a deep and rich tone.",
    price: 2500,
    Photo: {
      url: d28Card,
      fileSize: 2500,
      fileType: "image/jpeg",
    },
    Condition: "Excellent",
    SKU: "MD01"
  },
  {
    user_id: "user125",
    type: "Electric Guitar",
    subcategory: "Hollow Body",
    Brand: "Gibson",
    Model: "ES-335",
    ListingTitle: "Gibson ES-335 Cherry Red",
    description: "Iconic cherry red finish with a mellow, vintage tone.",
    price: 2800,
    Photo: {
      url: es335,
      fileSize: 2100,
      fileType: "image/jpeg",
    },
    Condition: "Very Good",
    SKU: "GE01"
},
{
    user_id: "user126",
    type: "Electric Guitar",
    subcategory: "Solid Body",
    Brand: "PRS",
    Model: "Custom 24",
    ListingTitle: "PRS Custom 24 Flame Maple Top",
    description: "Beautiful flame maple top with versatile tonal options.",
    price: 3200,
    Photo: {
      url: prs,
      fileSize: 2300,
      fileType: "image/jpeg",
    },
    Condition: "Mint",
    SKU: "PC01"
},
{
    user_id: "user127",
    type: "Acoustic Guitar",
    subcategory: "OM",
    Brand: "Taylor",
    Model: "714ce",
    ListingTitle: "Taylor 714ce Western Sunburst",
    description: "Expressive tonal clarity with a comfortable body shape.",
    price: 2900,
    Photo: {
      url: taylor,
      fileSize: 2400,
      fileType: "image/jpeg",
    },
    Condition: "Excellent",
    SKU: "TD01"
},
{
    user_id: "user128",
    type: "Electric Guitar",
    subcategory: "Solid Body",
    Brand: "Ibanez",
    Model: "RG550",
    ListingTitle: "Ibanez RG550 Neon Yellow",
    description: "Bright neon finish with a fast neck for shredding.",
    price: 1100,
    Photo: {
      url: ibanez,
      fileSize: 2200,
      fileType: "image/jpeg",
    },
    Condition: "Good",
    SKU: "IR01"
},
{
    user_id: "user129",
    type: "Acoustic Guitar",
    subcategory: "Parlor",
    Brand: "Gretsch",
    Model: "G9500",
    ListingTitle: "Gretsch G9500 Jim Dandy Flat Top",
    description: "Vintage style and sound in a compact parlor size.",
    price: 400,
    Photo: {
      url: gretsch,
      fileSize: 2000,
      fileType: "image/jpeg",
    },
    Condition: "Very Good",
    SKU: "GG01"
}

];

export default fakeGuitars;
