import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Divider,
  Paper,
  Typography,
} from "@mui/material";
import ROUTES from "../routes/ROUTES";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { dataActions } from "../store/dataSlice";
import CardIconButtons from "./CardIconButtons";

const CardCompo = ({
  _id,
  title,
  subtitle,
  description,
  url,
  alt,
  like,
  email,
  phone,
  web,
  address,
  user_id,
  onDeleteCard,
  onEditCard,
  onFavoriteCard,
  isPreview,
}) => {
  const [isLiked, setIsLiked] = useState(false);
  const userData = useSelector((store) => store.authSlice.userData);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let thisCard = {
    _id,
    title,
    subtitle,
    description,
    image: {
      url,
      alt,
    },
    email,
    phone,
    web,
    address,
    likes: isLiked,
    user_id,
  };

  useEffect(() => {
    setIsLiked(like);
  }, [like]);

  const handleDeleteCardClick = () => {
    onDeleteCard(_id);
  };
  const handleEditCardClick = () => {
    dispatch(dataActions.setEditCardObject(thisCard));
    onEditCard(_id);
  };
  const handleFavoriteCardClick = () => {
    if (!isLiked) {
      setIsLiked(true);
      thisCard.likes = true;
      dispatch(dataActions.addFavorites(thisCard));
    } else {
      setIsLiked(false);
      thisCard.likes = false;
      dispatch(dataActions.removeFavorites(_id));
    }
    onFavoriteCard(_id);
  };
  const handleGoToBusinessPage = () => {
    navigate(`${ROUTES.BUSINESS}/${_id}`);
  };

  return (
    <Card
      component={Paper}
      elevation={6}
      sx={{
        height: "400px",
        width: "280px",
        border: 1,
        borderColor: "border.b2",
        borderRadius: "10px",
        backgroundImage: `url(${url})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
          pt: 3,
        }}
      >
        <Box sx={{ height: "90px", overflow: "auto" }}>
          <CardActionArea
            onClick={handleGoToBusinessPage}
            sx={{ height: "70px", borderRadius: "20px" }}
          >
            <Box
              display="flex"
              flexDirection="column"
              sx={{
                p: 1,
                pl: 2,
                backgroundColor: "rgba(225,225,225,0.7)",
                borderRadius: "20px",
                textShadow: "1px 1px 2px rgba(0,0,0,0.8)",
                textAlign: "left",
                mb: 1,
              }}
            >
              <Typography variant="h6" sx={{ color: "cardText.main" }}>
                {title}
              </Typography>
              <Typography variant="body2" sx={{ color: "cardText.main" }}>
                {subtitle}
              </Typography>
            </Box>

            <Divider />
          </CardActionArea>
        </Box>
        <Box sx={{ mt: 1, mb: 1, height: "160px", overflow: "auto" }}>
          <Typography
            variant="body1"
            sx={{
              p: 1,
              backgroundColor: "rgba(225,225,225,0.7)",
              borderRadius: "20px",
              textShadow: "1px 1px 2px rgba(0,0,0,0.8)",
              textAlign: "center",
              color: "cardText.main",
            }}
          >
            {description}
          </Typography>
        </Box>
        <Divider />
        {userData && !isPreview && (
          <CardIconButtons
            likeStatus={isLiked}
            onDelete={handleDeleteCardClick}
            onEdit={handleEditCardClick}
            onFavorite={handleFavoriteCardClick}
            user_id={user_id}
            cardTitle={title}
          />
        )}
      </CardContent>
    </Card>
  );
};

export default CardCompo;
