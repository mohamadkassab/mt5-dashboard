import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import generatePassword from "random-password";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import { VisibilityOff, Visibility } from "@mui/icons-material/";
import FormContainer from "../../common/FormContainer";
import {
  TextField,
  Button,
  FormControlLabel,
  Switch,
  FormControl,
  InputLabel,
  InputAdornment,
  OutlinedInput,
  IconButton,
} from "@mui/material";
import TypographyContainer from "../../common/TypographyContainer";

// Start relative variables
import { EditConfiguration } from "../../../utils/redux/actions/Configurations";
import { ConfigurationDataColumns } from "../../../utils/constants/Constants";
// End relative variables

const ConfigurationsEditForm = ({ editFormVisibility, data, refreshPage }) => {
  const dispatch = useDispatch();
  const success = useSelector((state) => state.success);
  const [showPassword, setShowPassword] = React.useState(false);
  // Start relative variables
  const formTitle = "Edit Configuration";
  const columns = ConfigurationDataColumns;
  const [formData, setFormData] = useState({
    [columns[0].dataField]: data[columns[0].dataField],
    [columns[1].dataField]: data[columns[1].dataField],
    [columns[2].dataField]: data[columns[2].dataField],
    [columns[3].dataField]: data[columns[3].dataField],
    [columns[4].dataField]: data[columns[4].dataField],
    [columns[5].dataField]: data[columns[5].dataField],
    [columns[6].dataField]: data[columns[6].dataField],
    [columns[7].dataField]: data[columns[7].dataField],
    [columns[8].dataField]: data[columns[8].dataField],
    [columns[9].dataField]: data[columns[9].dataField],
    [columns[10].dataField]: data[columns[10].dataField],
    [columns[11].dataField]: data[columns[11].dataField],
    [columns[12].dataField]: data[columns[12].dataField] || 0,
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
    await dispatch(EditConfiguration(formData));
    if (success) {
      refreshPage();
    }
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
              name={columns[1].dataField}
              label={columns[1].caption}
              value={formData[columns[1].dataField]}
              onChange={handleChange}
            />

            <TextField
              type="text"
              variant="outlined"
              required
              name={columns[2].dataField}
              label={columns[2].caption}
              value={formData[columns[2].dataField]}
              onChange={handleChange}
            />

            <FormControl sx={{ width: "full" }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                {columns[3].caption}
              </InputLabel>
              <OutlinedInput
                required
                name={columns[3].dataField}
                value={formData[columns[3].dataField]}
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
                label={columns[3].caption}
              />
            </FormControl>

            <TextField
              type="number"
              variant="outlined"
              required
              name={columns[4].dataField}
              label={columns[4].caption}
              value={formData[columns[4].dataField]}
              onChange={handleChange}
            />

            <TextField
              type="text"
              variant="outlined"
              required
              name={columns[5].dataField}
              label={columns[5].caption}
              value={formData[columns[5].dataField]}
              onChange={handleChange}
            />

            <TextField
              type="text"
              variant="outlined"
              required
              name={columns[6].dataField}
              label={columns[6].caption}
              value={formData[columns[6].dataField]}
              onChange={handleChange}
            />

            <TextField
              type="text"
              variant="outlined"
              required
              name={columns[7].dataField}
              label={columns[7].caption}
              value={formData[columns[7].dataField]}
              onChange={handleChange}
            />

            <TextField
              type="number"
              variant="outlined"
              required
              name={columns[8].dataField}
              label={columns[8].caption}
              value={formData[columns[8].dataField]}
              onChange={handleChange}
            />

            <FormControl sx={{ width: "full" }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                {columns[9].caption}
              </InputLabel>
              <OutlinedInput
                required
                name={columns[9].dataField}
                value={formData[columns[9].dataField]}
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
                label={columns[9].caption}
              />
            </FormControl>

            <TextField
              type="text"
              variant="outlined"
              required
              name={columns[10].dataField}
              label={columns[10].caption}
              value={formData[columns[10].dataField]}
              onChange={handleChange}
            />

            <div className="flex justify-center">
              <FormControlLabel
                control={
                  <Switch
                    color="primary"
                    checked={formData[columns[11].dataField]}
                    onChange={handleToggle}
                    name={columns[11].dataField}
                  />
                }
                label={formData.is_active ? "Active" : "Not Active"}
              />
            </div>

            <TextField
              type="number"
              variant="outlined"
              required
              name={columns[12].dataField}
              label={columns[12].caption}
              value={formData[columns[12].dataField]}
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

export default ConfigurationsEditForm;
