import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

const Buttons = ({ onCheck, onSend, disabledButton }) => {
  const handleCheckFields = (e) => {
    onCheck(e);
  };
  const handleSendRequest = (e) => {
    onSend(e);
  };
  return (
    <Grid item xs={12} sm={12} md={12} lg={12} textAlign="center">
      <Button
        color="secondary"
        variant="outlined"
        sx={{ mt: 3, width: "70%", fontWeight: "700" }}
        onClick={handleCheckFields}
      >
        Check
      </Button>
      <Button
        color="secondary"
        type="submit"
        variant="contained"
        disabled={disabledButton}
        onClick={handleSendRequest}
        sx={{ mt: 3, mb: 2, width: "70%", fontWeight: "700" }}
      >
        Send
      </Button>
    </Grid>
  );
};
export default Buttons;
