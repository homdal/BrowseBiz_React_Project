import { Container, Grid, Box, Typography, Pagination } from "@mui/material";
import nextKey from "generate-my-key";
import CardCompo from "../../components/CardCompo";
import { useState, useEffect, useMemo, useRef } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import ROUTES from "../../routes/ROUTES";
import { useDispatch } from "react-redux";
import { dataActions } from "../../store/dataSlice";
import axios from "axios";
import { CircularProgress } from "@mui/material";

const HomePage = () => {
  const [displayedCards, setDisplayedCards] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(10);
  const dataFromServer = useSelector((store) => store.dataSlice.dataFromServer);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const previousSearchRef = useRef();
  const search = useSelector((store) => store.searchSlice.search);

  useEffect(() => {
    setDisplayedCards(dataFromServer);
    let pages = Math.ceil(dataFromServer.length / 12);
    setTotalPages(pages);
    setLoaded(true);
  }, [dataFromServer]);

  const handleEditCard = (_id) => {
    navigate(`${ROUTES.EDITCARD}/${_id}`);
  };

  const handleFavoriteCard = (_id) => {
    axios
      .patch(`/cards/${_id}`)
      .then(() => {})
      .catch((error) => {
        console.log(
          "This error occurred in handleFavoriteCard function in HomePage.jsx: ",
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
        setDisplayedCards((displayedCardsCopy) =>
          displayedCardsCopy.filter((card) => card._id !== _id)
        );
      })
      .catch((error) => {
        console.log(
          "This error occurred in the handleClickDelete function in HomePage.jsx: ",
          error
        );
        toast.error(
          `Failed to delete the card.. 🤔 because: ${error.response.data}`
        );
      });
  };

  const handleChange = (event, value) => {
    setPage(value);
  };

  const previousSearch = previousSearchRef.current;
  useEffect(() => {
    previousSearchRef.current = search;
    if (search) {
      setDisplayedCards(() =>
        dataFromServer.filter((card) => card.title.startsWith(search))
      );
    } else if (previousSearch) {
      setDisplayedCards(dataFromServer);
    }
  }, [search, dataFromServer]);

  const cards = useMemo(() => {
    return (
      <Box>
        <Grid container spacing={2} sx={{ mt: 2, mb: 2 }}>
          {displayedCards.slice(12 * (page - 1), page * 12).map((card) => (
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
        <Box display="flex" justifyContent="center" sx={{ width: "100%" }}>
          <Pagination count={totalPages} page={page} onChange={handleChange} />
        </Box>
      </Box>
    );
  }, [displayedCards, page]);

  return (
    <Container
      sx={{
        pt: 10,
        pb: 10,
        border: 1,
        borderColor: "border.b2",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: 700 }}>
        Home Page
      </Typography>
      <Typography variant="h5" sx={{ fontWeight: 700, textAlign: "center" }}>
        Our Digital Business Cards:
      </Typography>
      {loaded ? (
        cards
      ) : (
        <Box textAlign="center">
          <CircularProgress color="info" sx={{ mt: 20 }} size={90} />
        </Box>
      )}
    </Container>
  );
};

export default HomePage;
