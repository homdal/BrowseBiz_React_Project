import axios from "axios";
import { useParams } from "react-router-dom";
import CardFormCompo from "../../components/CardFormCompo";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { dataActions } from "../../store/dataSlice";
import { Container } from "@mui/material";

const EditCardPage = () => {
  const idObject = useParams();
  const editCardObject = useSelector((store) => store.dataSlice.editCardObject);
  const dispatch = useDispatch();

  const handleSubmitChanges = async (e, inputValue) => {
    e.preventDefault();
    try {
      const { data } = await axios.put("/cards/" + idObject.id, {
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
      const editedCard = {
        ...data,
      };
      editedCard.likes = editCardObject.likes;
      dispatch(dataActions.editCard(editedCard));
      toast.success("Successfully updated your card! ✨");
    } catch (error) {
      console.log(
        "This error occurred in handleSubmitChanges function in EditCardPage.jsx: ",
        error
      );
      toast.error(
        `Failed to update the card.. 🤔 because: ${error.response.data}`
      );
    }
  };

  return (
    <Container
      sx={{ borderLeft: 1, borderRight: 1, borderColor: "border.b2", pb: 10 }}
    >
      <CardFormCompo
        submit={handleSubmitChanges}
        initialValue={editCardObject}
        formTitle={`Edit Card: ${editCardObject.title}`}
      />
    </Container>
  );
};
export default EditCardPage;
