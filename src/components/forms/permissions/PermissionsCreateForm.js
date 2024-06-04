import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../../common/FormContainer";
import {
  TextField,
  Button,
  Typography,
} from "@mui/material";
import TypographyContainer from "../../common/TypographyContainer";

// Start relative variables
import { PermissionDataColumns } from "../../../utils/constants/Constants";
import { CreatePermission } from "../../../utils/redux/actions/Permissions";
// End relative variables

const PermissionsCreateForm = ({ createFormVisibility, refreshPage }) => {
  const dispatch = useDispatch();
  const success = useSelector((state) => state.success);
  // Start relative variables
  const formTitle = "Create Permission";
  const columns = PermissionDataColumns;
  const [formData, setFormData] = useState({
    [columns[1].dataField]: "",
    [columns[2].dataField]: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(CreatePermission(formData));
    if (success) {
      setFormData({
        [columns[1].dataField]: "",
        [columns[2].dataField]: "",
      });
      refreshPage();
    }
  };
    // End relative variables

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const hideForm = () => {
    createFormVisibility(false);
  };

  React.useEffect(() => {
    if (success) {
      setFormData({
        [columns[1].dataField]: "",
        [columns[2].dataField]: "",
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

export default PermissionsCreateForm;
