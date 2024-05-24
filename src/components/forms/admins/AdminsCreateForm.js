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
  IconButton,
  InputAdornment,
  OutlinedInput,
} from "@mui/material";

// Start relative variables
import { AdminDataColumns } from "../../../utils/constants/Constants";
import { CreateAdmin } from "../../../utils/redux/actions/Admins";
import { GetRoles } from "../../../utils/redux/actions/Roles";
// End relative variables

const AdminsCreateForm = ({ createFormVisibility, refreshPage }) => {
  const dispatch = useDispatch();
  const success = useSelector((state) => state.success);
  const [showPassword, setShowPassword] = React.useState(false);
  // Start relative variables
  const formTitle = "Create Admin";
  const columns = AdminDataColumns;
  const roles = useSelector((state) => state.roles);
  const [formData, setFormData] = useState({
    [columns[1].dataField]: "",
    [columns[2].dataField]: "",
    [columns[4].dataField]: true,
    [columns[5].dataField]: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(CreateAdmin(formData));

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
    await dispatch(GetRoles());
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
              <InputLabel id="outlined-select-label">Role</InputLabel>
              <Select
                required
                name={columns[2].dataField}
                label={columns[2].caption}
                value={formData[columns[2].dataField]}
                onChange={handleChange}
              >
                {roles.map((role) => (
                  <MenuItem key={role.id} value={role.id}>
                    {role.role_name}
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
      </Box>
    </Container>
  );
};

export default AdminsCreateForm;
