const personalDetails = [
  { id: "first", label: "First Name", required: true },
  { id: "middle", label: "Middle Name", required: false },
  { id: "last", label: "Last Name", required: true },
  { id: "phone", label: "Phone", required: true },
  { id: "email", label: "Email Address", required: true },
  { id: "password", label: "Password", required: true },
];

const profilePicture = [
  { id: "url", label: "Profile Picture", required: false },
  { id: "alt", label: "Alt", required: false },
];

const address = [
  { id: "state", label: "State", required: false },
  { id: "country", label: "Country", required: true },
  { id: "city", label: "City", required: true },
  { id: "street", label: "Street", required: true },
  { id: "houseNumber", label: "House Number", required: true },
  { id: "zip", label: "Zip Code", required: true },
];
export { personalDetails, profilePicture, address };
