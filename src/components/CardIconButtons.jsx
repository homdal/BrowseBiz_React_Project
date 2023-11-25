import { Box, IconButton, Tooltip, Button } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import { useSelector } from "react-redux";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import FavoriteIcon from "@mui/icons-material/Favorite";

const CardIconButtons = ({
  likeStatus,
  onDelete,
  onEdit,
  onFavorite,
  user_id,
  cardTitle,
}) => {
  const [openDelete, setOpenDelete] = useState(false);
  const userData = useSelector((store) => store.authSlice.userData);
  const handleOpenDeleteMenu = () => {
    setOpenDelete(true);
  };
  const handleCloseDeleteMenu = () => {
    setOpenDelete(false);
  };
  const handleDeleteCardClick = () => {
    onDelete();
  };
  const handleEditCardClick = () => {
    onEdit();
  };
  const handleFavoriteCardClick = () => {
    onFavorite();
  };
  return (
    <Box
      display="flex"
      justifyContent="space-evenly"
      sx={{
        height: "35px",
        backgroundColor: "rgba(225,225,225,0.7)",
        borderRadius: "20px",
        textShadow: "2px 2px 2px rgba(0,0,0,0.42)",
      }}
    >
      {userData ? (
        <Tooltip title="Favorite" arrow>
          <IconButton onClick={handleFavoriteCardClick}>
            <FavoriteIcon
              sx={{
                color: likeStatus === true ? "favorite.on" : "favorite.off",
              }}
            />
          </IconButton>
        </Tooltip>
      ) : (
        ""
      )}

      {userData?._id === user_id || userData?.isAdmin ? (
        <Tooltip title="Edit" arrow>
          <IconButton onClick={handleEditCardClick}>
            <CreateIcon sx={{ color: "favorite.off" }} />
          </IconButton>
        </Tooltip>
      ) : (
        ""
      )}
      {userData?._id === user_id || userData?.isAdmin ? (
        <Box>
          <Tooltip title="Delete" arrow>
            <IconButton onClick={handleOpenDeleteMenu}>
              <DeleteIcon sx={{ color: "favorite.off" }} />
            </IconButton>
          </Tooltip>
          <Dialog
            open={openDelete}
            onClose={handleCloseDeleteMenu}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {`You are about to delete "${cardTitle}" card`}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Are you sure you want to delete this card?
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button
                variant="outlined"
                color="secondary"
                onClick={handleCloseDeleteMenu}
              >
                No
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                onClick={handleDeleteCardClick}
              >
                Yes
              </Button>
            </DialogActions>
          </Dialog>
        </Box>
      ) : (
        ""
      )}
    </Box>
  );
};
export default CardIconButtons;
