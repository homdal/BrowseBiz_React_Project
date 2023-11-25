import axios from "axios";
import CardFormCompo from "../../components/CardFormCompo";
import { toast } from "react-toastify";
import { dataActions } from "../../store/dataSlice";
import { useDispatch } from "react-redux";
import { Container } from "@mui/material";

const CreateCard = () => {
  const dispatch = useDispatch();
  const handleSubmitChanges = async (e, inputValue) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/cards", {
        title: inputValue.title,
        subtitle: inputValue.subtitle,
        description: inputValue.description,
        phone: inputValue.phone,
        email: inputValue.email,
        web: inputValue.web,
        image: { url: inputValue.url, alt: inputValue.alt },
        address: {
          state: inputValue.state,
          country: inputValue.country,
          city: inputValue.city,
          street: inputValue.street,
          houseNumber: inputValue.houseNumber,
          zip: inputValue.zip,
        },
      });
      toast.success("Successfully created a card! ✨");
      data.likes = false;
      dispatch(dataActions.addMyCards(data));
    } catch (error) {
      console.log(
        "This error occurred in handleSubmitChanges function in CreateCard.jsx:",
        error
      );
      toast.error(
        `Failed to create a card.. 🤔 because: ${error.response.data}`
      );
    }
  };

  return (
    <Container
      sx={{
        borderLeft: 1,
        borderRight: 1,
        borderColor: "border.b2",
        pb: 10,
      }}
    >
      <CardFormCompo
        submit={handleSubmitChanges}
        initialValue={""}
        formTitle={"Create A Card:"}
      />
    </Container>
  );
};
export default CreateCard;
