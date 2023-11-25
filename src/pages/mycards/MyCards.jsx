import CardCompo from "../../components/CardCompo";
import nextKey from "generate-my-key";
import { Container, Grid, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/ROUTES";
import { toast } from "react-toastify";
import { dataActions } from "../../store/dataSlice";

const MyCards = () => {
  const myCards = useSelector((store) => store.dataSlice.mycards);
  const [display, setDisplay] = useState(myCards);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    setDisplay(myCards);
  }, [myCards]);

  const handleEditCard = (_id) => {
    navigate(`${ROUTES.EDITCARD}/${_id}`);
  };

  const handleFavoriteCard = (_id) => {
    axios
      .patch(`/cards/${_id}`)
      .then(() => {})
      .catch((error) => {
        console.log(
          "This error occurred in handleFavoriteCard function in MyCards.jsx: ",
          error
        );
        toast.error(
          `Failed to favorite/unfavorite card.. 🤔 because: ${error.response.data}`
        );
      });
  };

  const handleClickDelete = (_id) => {
    axios
      .delete(`/cards/${_id}`)
      .then(() => {
        dispatch(dataActions.deleteCard(_id));
        setDisplay((displayedCardsCopy) =>
          displayedCardsCopy.filter((card) => card._id !== _id)
        );
        toast.success("Successfully deleted the card 👍");
      })

      .catch((error) => {
        console.log(
          "This error occurred in the handleClickDelete function in MyCards.jsx: ",
          error
        );
        toast.error(
          `Failed to delete the card.. 🤔 because: ${error.response.data}`
        );
      });
  };
  const cards = useMemo(() => {
    return (
      <Grid container spacing={2} sx={{ mt: 2 }}>
        {display.map((card) => (
          <Grid
            item
            key={nextKey()}
            xs={12}
            sm={6}
            md={4}
            lg={3}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <CardCompo
              _id={card._id}
              title={card.title}
              subtitle={card.subtitle}
              description={card.description}
              url={card.image.url}
              alt={card.image.alt}
              like={card.likes}
              email={card.email}
              phone={card.phone}
              web={card.web}
              address={card.address}
              user_id={card.user_id}
              onFavoriteCard={handleFavoriteCard}
              onDeleteCard={handleClickDelete}
              onEditCard={handleEditCard}
              isPreview={false}
            />
          </Grid>
        ))}
      </Grid>
    );
  }, [display]);

  return (
    <Container
      sx={{
        pt: 10,
        pb: 10,
        backgroundColor: "background.paper2",
        border: 1,
        borderColor: "border.b2",
      }}
    >
      {display[0] ? (
        cards
      ) : (
        <Typography variant="h4" sx={{ textAlign: "center" }}>
          Oh, looks like you didn't create any cards yet!
        </Typography>
      )}
    </Container>
  );
};

export default MyCards;
