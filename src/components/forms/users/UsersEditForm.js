import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import generatePassword from "random-password";
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import {
  VisibilityOff,
  Visibility,
} from "@mui/icons-material/";
import {
  TextField,
  Button,
  Container,
  Typography,
  Box,
  Paper,
  Select,
  MenuItem,
  FormControlLabel,
  Switch,
  FormControl,
  InputLabel,
  InputAdornment,
  OutlinedInput,
  IconButton,
} from "@mui/material";

// Start relative variables
import { EditUser } from "../../../utils/redux/actions/Users";
import { GetTypes } from "../../../utils/redux/actions/Types";
import { UserDataColumns } from "../../../utils/constants/Constants";
// End relative variables

const UsersEditForm = ({ editFormVisibility, data, refreshPage }) => {
  const dispatch = useDispatch();
  const success = useSelector((state) => state.success);
  const [showPassword, setShowPassword] = React.useState(false);
   // Start relative variables
   const formTitle = "Edit User";
  const columns = UserDataColumns;
  const types = useSelector((state) => state.types);
  const [formData, setFormData] = useState({
    [columns[0].dataField]: data[columns[0].dataField],
    [columns[1].dataField]: data[columns[1].dataField],
    [columns[2].dataField]: data[columns[2].dataField],
    [columns[4].dataField]: data[columns[4].dataField],
    [columns[5].dataField]: data[columns[5].dataField] || "",
  });
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
    editFormVisibility(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(EditUser(formData));
    if (success) {
      refreshPage();
    }
  };
  const fetchInitialData = async () => {
    await dispatch(GetTypes());
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
    fetchInitialData();
    if (success) {
      refreshPage();
    }
  }, [success]);

  return (
    <Container
      maxWidth="sm"
      sx={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        bgcolor: "rgba(255, 255, 255, 1)",
        p: 3,
        borderRadius: 1,
        boxShadow: 3,
        zIndex: 10,
      }}
      component={Paper}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          {formTitle}
        </Typography>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        

            <TextField
              type="email"
              variant="outlined"
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
                id="outlined-select"
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
                    onChange={handleToggle}
                    checked={formData[columns[4].dataField]}
                    name={columns[4].dataField}
                    color="primary"
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
      </Box>
    </Container>
  );
};

export default UsersEditForm;
