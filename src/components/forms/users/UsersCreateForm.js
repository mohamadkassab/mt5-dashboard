import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import generatePassword from "random-password";
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import FormContainer from "../../common/FormContainer";
import {
  VisibilityOff,
  Visibility,
} from "@mui/icons-material/";
import {
  TextField,
  Button,
  Typography,
  Select,
  MenuItem,
  FormControlLabel,
  Switch,
  FormControl,
  InputLabel,
  IconButton,
  InputAdornment,
  OutlinedInput,
} from "@mui/material";
import TypographyContainer from "../../common/TypographyContainer";

// Start relative variables
import { UserDataColumns } from "../../../utils/constants/Constants";
import { CreateUser } from "../../../utils/redux/actions/Users";
import { GetTypes } from "../../../utils/redux/actions/Types";
// End relative variables

const AdminsCreateForm = ({ createFormVisibility, refreshPage }) => {
  const dispatch = useDispatch();
  const success = useSelector((state) => state.success);
  const [showPassword, setShowPassword] = React.useState(false);
    // Start relative variables
  const formTitle = "Create User";
  const types = useSelector((state) => state.types);
  const columns = UserDataColumns;
  const [formData, setFormData] = useState({
    [columns[1].dataField]: "",
    [columns[2].dataField]: "",
    [columns[4].dataField]: true,
    [columns[5].dataField]: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(CreateUser(formData));
    if (success) {
      setFormData({
        [columns[1].dataField]: "",
        [columns[2].dataField]: "",
        [columns[4].dataField]: true,
        [columns[5].dataField]: "",
      });
      refreshPage();
    }
  };
  // End relative variables
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleToggle = (event) => {
    const { name, checked } = event.target;
    console.log(name, checked);
    setFormData({
      ...formData,
      [name]: checked,
    });
  };

  const hideForm = () => {
    createFormVisibility(false);
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

  const fetchInitialData = async () => {
    await dispatch(GetTypes());
  };

  React.useEffect(() => {
    fetchInitialData();
    if (success) {
      setFormData({
        [columns[1].dataField]: "",
        [columns[2].dataField]: "",
        [columns[4].dataField]: true,
        [columns[5].dataField]: "",
      });
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
              type="email"
              variant="outlined"
              required
              name={columns[1].dataField}
              label={columns[1].caption}
              value={formData[columns[1].dataField]}
              onChange={handleChange}
            />

            <FormControl sx={{ width: "full" }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
              {columns[5].caption}
              </InputLabel>
              <OutlinedInput
                required
                name={columns[5].dataField}
                value={formData[columns[5].dataField]}
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
                label={columns[5].caption}
              />
            </FormControl>

            <FormControl sx={{ width: "full" }} variant="outlined">
              <InputLabel id="outlined-select-label">Type</InputLabel>
              <Select
                required
                name={columns[2].dataField}
                label={columns[2].caption}
                value={formData[columns[2].dataField]}
                onChange={handleChange}
              >
                {types.map((type) => (
                  <MenuItem key={type.id} value={type.id}>
                    {type.type_name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <div className="flex justify-center">
              <FormControlLabel
                control={
                  <Switch
                    color="primary"
                    checked={formData[columns[4].dataField]}
                    onChange={handleToggle}
                    name={columns[4].dataField}
                  />
                }
                label={formData.is_active ? "Active" : "Not Active"}
              />
            </div>
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

export default AdminsCreateForm;
