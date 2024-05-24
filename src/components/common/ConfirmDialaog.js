import * as React from "react";
import {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  useMediaQuery,
  Typography,
  useTheme,
  Dialog,
  Button,
} from "@mui/material/";

const ConfirmDialaog = ({ confirmDelete, confirmSentece, data }) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleReject = () => {
    confirmDelete(false);
  };
  const handleConfirm = () => {
    confirmDelete(true);
  };

  return (
   <>
      <Dialog
        fullScreen={fullScreen}
        open={true}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          <div variant="h4" component="h1" >
            {"Confirm action"}
          </div>
        </DialogTitle>
        <DialogContent>
          <div color="primary" style={{ fontWeight: "bold" }}>
            {confirmSentece}
            <div className="text-error" style={{ fontWeight: "bold" }}>
              {data}
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <div className="w-full">
            <div className="flex justify-start px-2">
              <Button
                onClick={handleConfirm}
                variant="contained"
                color="primary"
                sx={{
                  mt: 2,
                  "&:hover": {
                    filter: "brightness(120%)",
                    backgroundColor: "#020817",
                  },
                }}
              >
                Confirm
              </Button>
              <Button
                onClick={handleReject}
                variant="contained"
                color="secondary"
                sx={{
                  mt: 2,
                  ml: 2,
                  "&:hover": {
                    filter: "brightness(110%)",
                    backgroundColor: "#ffffff",
                  },
                }}
              >
                Cancel
              </Button>
            </div>
          </div>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ConfirmDialaog;
