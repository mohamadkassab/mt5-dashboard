import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../../common/FormContainer";
import {
  TextField,
  Button,
  Typography,
  Autocomplete,
  FormControl,
  InputLabel,
  IconButton,
  InputAdornment,
  OutlinedInput,
} from "@mui/material";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import { VisibilityOff, Visibility } from "@mui/icons-material/";
import generatePassword from "random-password";
import TypographyContainer from "../../common/TypographyContainer";

// Start relative variables
import { CoverageAccountDataColumns } from "../../../utils/constants/Constants";
import { CreateCoverageAccount } from "../../../utils/redux/actions/CoverageAccounts";
import { GetCoverageServers } from "../../../utils/redux/actions/CoverageServers";
// End relative variables

const AdminsCreateForm = ({ createFormVisibility, refreshPage }) => {
  const dispatch = useDispatch();
  const success = useSelector((state) => state.success);
  const [showPassword, setShowPassword] = React.useState(false);
  // Start relative variables
  const formTitle = "Create Coverage Account";
  const columns = CoverageAccountDataColumns;
  const coverageServers = useSelector((state) => state.coverageServers);
  const [formData, setFormData] = useState({
    [columns[1].dataField]: "",
    [columns[2].dataField]: "",
    [columns[3].dataField]: "",
    [columns[4].dataField]: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(CreateCoverageAccount(formData));
  };

  // End relative variables

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const hideForm = () => {
    createFormVisibility(false);
  };

  const fetchInitialData = async () => {
    await dispatch(GetCoverageServers());
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

  return (
    <FormContainer>
      <TypographyContainer>{formTitle}</TypographyContainer>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <FormControl sx={{ width: "100%" }} variant="outlined">
            <Autocomplete
              id="outlined-autocomplete"
              options={coverageServers}
              getOptionLabel={(option) => option.name} // relative variable
              value={
                coverageServers.find(
                  (item) => item.id === formData[columns[1].dataField] // relative variable
                ) || null
              }
              onChange={(event, newValue) => {
                handleChange({
                  target: {
                    name: columns[1].dataField,
                    value: newValue ? newValue.id : "",
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

          <TextField
            type="text"
            variant="outlined"
            required
            name={columns[2].dataField}
            label={columns[2].caption}
            value={formData[columns[2].dataField]}
            onChange={handleChange}
          />

          <TextField
            type="text"
            variant="outlined"
            required
            name={columns[3].dataField}
            label={columns[3].caption}
            value={formData[columns[3].dataField]}
            onChange={handleChange}
          />

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

export default AdminsCreateForm;
