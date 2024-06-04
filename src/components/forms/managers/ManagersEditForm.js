import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import generatePassword from "random-password";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import { VisibilityOff, Visibility } from "@mui/icons-material/";
import FormContainer from "../../common/FormContainer";
import {
  Button,
  Typography,
  FormControl,
  InputLabel,
  InputAdornment,
  OutlinedInput,
  IconButton,
  TextField,
} from "@mui/material";
import TypographyContainer from "../../common/TypographyContainer";

// Start relative variables
import { EditManager } from "../../../utils/redux/actions/Managers";
import { ManagerDataColumns } from "../../../utils/constants/Constants";
// End relative variables

const ManagersEditForm = ({ editFormVisibility, data, refreshPage }) => {
  const dispatch = useDispatch();
  const success = useSelector((state) => state.success);
  const [showPassword, setShowPassword] = React.useState(false);

  // Start relative variables
  const formTitle = "Edit Manager";
  const columns = ManagerDataColumns;
  const [formData, setFormData] = useState({
    [columns[0].dataField]: data[columns[0].dataField],
    [columns[1].dataField]: data[columns[1].dataField],
    [columns[2].dataField]: data[columns[2].dataField],
    [columns[3].dataField]: data[columns[3].dataField],
    [columns[4].dataField]: data[columns[4].dataField] || "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(EditManager(formData));
  };
  // End relative variables
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value ? event.target.value : "",
    });
  };
  const hideForm = () => {
    editFormVisibility(false);
  };
  const passwordGenerator = async () => {
    const password = await generatePassword({
      length: 12,
      numbers: true,
      uppercase: true,
      lowercase: true,
      symbols: true,
    });
    setFormData({
      ...formData,
      password: password,
    });
  };

  React.useEffect(() => {
    if (success) {
      refreshPage();
    }
  }, [success]);

  return (
    <FormContainer>
      <TypographyContainer>
        {formTitle}
     </TypographyContainer>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <TextField
            type="text"
            variant="outlined"
            required
            disabled
            name={columns[3].dataField}
            label={columns[3].caption}
            value={formData[columns[3].dataField]}
          />

          <TextField
            type="text"
            variant="outlined"
            required
            disabled
            name={columns[2].dataField}
            label={columns[2].caption}
            value={formData[columns[2].dataField]}
          />
              <TextField
            type="text"
            variant="outlined"
            required
            disabled
            name={columns[1].dataField}
            label={columns[1].caption}
            value={formData[columns[1].dataField]}
          />

        

          <FormControl sx={{ width: "full" }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              {columns[4].caption}
            </InputLabel>
            <OutlinedInput
              name={columns[4].dataField}
              value={formData.password}
              onChange={handleChange}
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>

                  <IconButton
                    aria-label="password generator"
                    edge="end"
                    onClick={passwordGenerator}
                  >
                    <AutoAwesomeIcon />
                  </IconButton>
                </InputAdornment>
              }
              label={columns[4].caption}
            />
          </FormControl>
        </div>

        <div className="flex ">
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{
              mt: 2,
              width: "20%",
              "&:hover": {
                filter: "brightness(120%)",
                backgroundColor: "#020817",
              },
            }}
          >
            Save
          </Button>
          <Button
            onClick={hideForm}
            variant="contained"
            color="secondary"
            sx={{
              mt: 2,
              ml: 2,
              width: "20%",
              "&:hover": {
                filter: "brightness(110%)",
                backgroundColor: "#ffffff",
              },
            }}
          >
            Cancel
          </Button>
        </div>
      </form>
    </FormContainer>
  );
};

export default ManagersEditForm;
