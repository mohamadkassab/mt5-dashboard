import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TextField, Button, Typography, Autocomplete, FormControl,  InputLabel,
  IconButton,
  InputAdornment,
  OutlinedInput, } from "@mui/material";
import FormContainer from "../../common/FormContainer";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import { VisibilityOff, Visibility } from "@mui/icons-material/";
import generatePassword from "random-password";
import TypographyContainer from "../../common/TypographyContainer";
// Start relative variables
import { EditCoverageAccount } from "../../../utils/redux/actions/CoverageAccounts";
import { CoverageAccountDataColumns } from "../../../utils/constants/Constants";
import { GetCoverageServers } from "../../../utils/redux/actions/CoverageServers";
// End relative variables

const AdminsEditForm = ({ editFormVisibility, data, refreshPage }) => {
  const dispatch = useDispatch();
  const success = useSelector((state) => state.success);
  const [showPassword, setShowPassword] = React.useState(false);
  // Start relative variables
  const formTitle = "Edit Coverage Account";
  const columns = CoverageAccountDataColumns;
  const coverageServers = useSelector((state) => state.coverageServers);

  const [formData, setFormData] = useState({
    [columns[0].dataField]: data[columns[0].dataField],
    [columns[1].dataField]: data[columns[1].dataField],
    [columns[2].dataField]: data[columns[2].dataField],
    [columns[3].dataField]: data[columns[3].dataField],
    [columns[4].dataField]: data[columns[4].dataField],
    [columns[5].dataField]: data[columns[5].dataField],
  });
  // End relative variables

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const hideForm = () => {
    editFormVisibility(false);
  };
  const handleClickShowPassword = () => setShowPassword((show) => !show);

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
  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(EditCoverageAccount(formData));
  };
  const fetchInitialData = async () => {
    await dispatch(GetCoverageServers());
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
        <FormControl sx={{ width: "100%" }} variant="outlined">
            <Autocomplete
              id="outlined-autocomplete"
              options={coverageServers}
              getOptionLabel={(option) => option.name} // relative variable
              value={
                coverageServers.find(
                  (item) => item.id === formData[columns[1].dataField ]// relative variable
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
          
          <TextField
            type="text"
            variant="outlined"
            required
            name={columns[5].dataField}
            label={columns[5].caption}
            value={formData[columns[5].dataField]}
            onChange={handleChange}
          />
          
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
