import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import generatePassword from "random-password";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import { VisibilityOff, Visibility } from "@mui/icons-material/";
import {
  TextField,
  Button,
  Autocomplete,
  FormControlLabel,
  Switch,
  FormControl,
  InputLabel,
  InputAdornment,
  OutlinedInput,
  IconButton,
} from "@mui/material";
import FormContainer from "../../common/FormContainer";
import TypographyContainer from "../../common/TypographyContainer";

// Start relative variables
import { EditAdmin } from "../../../utils/redux/actions/Admins";
import { GetRoles } from "../../../utils/redux/actions/Roles";
import { AdminDataColumns } from "../../../utils/constants/Constants";
// End relative variables

const AdminsEditForm = ({ editFormVisibility, data, refreshPage }) => {
  const dispatch = useDispatch();
  const success = useSelector((state) => state.success);
  const [showPassword, setShowPassword] = React.useState(false);
  // Start relative variables
  const formTitle = "Edit Admin";
  const columns = AdminDataColumns;
  const roles = useSelector((state) => state.roles);
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
    await dispatch(EditAdmin(formData));
  };
  const fetchInitialData = async () => {
    await dispatch(GetRoles());
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
    <FormContainer>
        <TypographyContainer>
     {formTitle}
     </TypographyContainer>
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
              label={columns[5].caption}
            />
          </FormControl>
          <FormControl sx={{ width: "100%" }} variant="outlined">
            <Autocomplete
              id="outlined-autocomplete"
              options={roles}
              getOptionLabel={(option) => option.role_name}
              value={
                roles.find(
                  (role) => role.id === formData[columns[2].dataField]
                ) || null
              }
              onChange={(event, newValue) => {
                handleChange({
                  target: {
                    name: columns[2].dataField,
                    value: newValue ? newValue.id : "",
                  },
                });
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label={columns[2].caption}
                  variant="outlined"
                  required
                />
              )}
            />
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
    </FormContainer>
  );
};

export default AdminsEditForm;
