import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { VisibilityOff, Visibility } from "@mui/icons-material/";
import {
  Button,
  Typography,
  FormControl,
  InputLabel,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Autocomplete,
  TextField,
} from "@mui/material";
import FormContainer from "../../common/FormContainer";
import TypographyContainer from "../../common/TypographyContainer";

// Start relative variables
import { ManagerDataColumns } from "../../../utils/constants/Constants";
import { CreateManager } from "../../../utils/redux/actions/Managers";
import { GetMT5Managers } from "../../../utils/redux/actions/Managers";
// End relative variables

const ManagersCreateForm = ({ createFormVisibility, refreshPage }) => {
  const dispatch = useDispatch();
  const success = useSelector((state) => state.success);
  const [showPassword, setShowPassword] = React.useState(false);

  // Start relative variables
  const formTitle = "Create Manager";
  const columns = ManagerDataColumns;
  const mt5Managers = useSelector((state) => state.mt5Managers);
  const [managers, setManagers] = React.useState([]);
  const [formData, setFormData] = useState({
    [columns[1].dataField]: "",
    [columns[2].dataField]: "",
    [columns[3].dataField]: "",
    [columns[4].dataField]: "",
  });
  const serverId = formData[columns[3].dataField];
  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(CreateManager(formData));
  };
  // End relative variables

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleChange = (event) => {
    if (event.target.name === columns[2].dataField) {
      const manager = managers.find(
        (manager) => manager.Login === event.target.value
      );

      setFormData({
        ...formData,
        [event.target.name]: event.target.value,
        [columns[1].dataField]: manager.Name,
      });
    } else if (event.target.name === columns[1].dataField) {
      const manager = managers.find(
        (manager) => manager.Name === event.target.value
      );
      setFormData({
        ...formData,
        [event.target.name]: event.target.value,
        [columns[2].dataField]: manager.Login,
      });
    } else {
      setFormData({
        ...formData,
        [event.target.name]: event.target.value,
      });
    }
  };

  const hideForm = () => {
    createFormVisibility(false);
  };

  const fetchInitialData = async () => {
    await dispatch(GetMT5Managers());
  };

  React.useEffect(() => {
    fetchInitialData();

    if (success) {
      setFormData({
        [columns[1].dataField]: "",
        [columns[2].dataField]: "",
        [columns[3].dataField]: "",
        [columns[4].dataField]: "",
      });
      refreshPage();
    }
  }, [success]);

  React.useEffect(() => {
    if (mt5Managers) {
      setFormData({
        ...formData,
        [columns[1].dataField]: "",
        [columns[2].dataField]: "",
        [columns[4].dataField]: "",
      });
      const server = mt5Managers.find((server) => server.server === serverId);
      if (server && server.managers) {
        setManagers(server.managers);
      }
    }
  }, [serverId]);

  return (
    <FormContainer>
     <TypographyContainer>
        {formTitle}
     </TypographyContainer>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          
          <FormControl sx={{ width: "100%" }} variant="outlined">
            <Autocomplete
              id="outlined-autocomplete"
              options={mt5Managers}
              getOptionLabel={(option) => option.server_name}
              value={
                mt5Managers.find(
                  (manager) => manager.server === formData[columns[3].dataField]
                ) || null
              }
              onChange={(event, newValue) => {
                handleChange({
                  target: {
                    name: columns[3].dataField,
                    value: newValue ? newValue.server : "",
                  },
                });
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label={columns[3].caption}
                  variant="outlined"
                  required
                />
              )}
            />
          </FormControl>

          <FormControl sx={{ width: "100%" }} variant="outlined">
            <Autocomplete
              id="outlined-autocomplete"
              options={managers}
              getOptionLabel={(option) => option.Login}
              value={
                managers.find(
                  (manager) => manager.Login === formData[columns[2].dataField]
                ) || null
              }
              onChange={(event, newValue) => {
                handleChange({
                  target: {
                    name: columns[2].dataField,
                    value: newValue ? newValue.Login : "",
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

          <FormControl sx={{ width: "100%" }} variant="outlined">
            <Autocomplete
              id="outlined-autocomplete"
              options={managers}
              getOptionLabel={(option) => option.Name}
              value={
                managers.find(
                  (manager) => manager.Name === formData[columns[1].dataField]
                ) || null
              }
              onChange={(event, newValue) => {
                handleChange({
                  target: {
                    name: columns[1].dataField,
                    value: newValue ? newValue.Name : "",
                  },
                });
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label={columns[1].caption}
                  variant="outlined"
                  required
                />
              )}
            />
          </FormControl>

          <FormControl sx={{ width: "full" }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              {columns[4].caption}
            </InputLabel>
            <OutlinedInput
              required
              name={columns[4].dataField}
              value={formData[columns[4].dataField]}
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

export default ManagersCreateForm;
