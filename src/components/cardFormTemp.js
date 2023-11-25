const cardDetails = [
  { label: "Card Title:", id: "title", required: true },
  { label: "Card Subtitle:", id: "subtitle", required: true },
  { label: "Card Description:", id: "description", required: true },
  { label: "Card Image URL:", id: "url", required: false },
  { label: "Image Alternative Text:", id: "alt", required: false },
];
const businessDetails = [
  { label: "Business Phone Number:", id: "phone", required: true },
  { label: "Business Email:", id: "email", required: true },
  { label: "Business Website:", id: "web", required: false },
  { label: "State:", id: "state", required: false },
  { label: "Country:", id: "country", required: true },
  { label: "City:", id: "city", required: true },
  { label: "Street:", id: "street", required: true },
  { label: "House Number:", id: "houseNumber", required: true },
  { label: "ZIP Code:", id: "zip", required: false },
];
export { businessDetails, cardDetails };
