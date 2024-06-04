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
  Box,
  Autocomplete,
  TextField,
} from "@mui/material";
import FormContainer from "../../common/FormContainer";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import TypographyContainer from "../../common/TypographyContainer";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

// Start relative variables
import { SymbolDataColumns } from "../../../utils/constants/Constants";
import { CreateSymbolConfiguration } from "../../../utils/redux/actions/Symbols";
import { GetMT5Symbols } from "../../../utils/redux/actions/MT5Symbols";
// End relative variables

const SymbolsCreateForm = ({ createFormVisibility, refreshPage }) => {
  const dispatch = useDispatch();
  const success = useSelector((state) => state.success);

  // Start relative variables
  const formTitle = "Create Symbol Configuration";
  const columns = SymbolDataColumns;
  const mt5Symbols = useSelector((state) => state.mt5Symbols);
  const [symbols, setSymbols] = React.useState([]);
  const [nbrSuffixes, setNbrSuffixes] = useState([]);
  const [suffixes, setSuffixes] = useState({});
  const [multipliers, setMultipliers] = useState({});
  const [formData, setFormData] = useState({
    [columns[1].dataField]: "",
    [columns[4].dataField]: "",
    [columns[2].dataField]: "",
    [columns[3].dataField]: "",
  });
  const serverId = formData[columns[4].dataField];
  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(CreateSymbolConfiguration(formData, suffixes, multipliers));
  };
  // End relative variables

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleChangeSuffix = (event) => {
    setSuffixes({
      ...suffixes,
      [event.target.name]: event.target.value,
    });
  };

  const handleChangeMultiplier = (index, event) => {
    setMultipliers({
      ...multipliers,
      [index]: event.target.value,
    });
  };

  const hideForm = () => {
    createFormVisibility(false);
  };

  const fetchInitialData = async () => {
    await dispatch(GetMT5Symbols());
  };

  const addSuffix = () => {
    setNbrSuffixes(["", ...nbrSuffixes]);
  };

  const removeSuffix = (index) => {
    try {
      const updatedSuffixes = { ...suffixes };
      delete updatedSuffixes[index];
      const reorderedSuffixes = {};
      Object.keys(updatedSuffixes).forEach((key, index) => {
        reorderedSuffixes[index] = updatedSuffixes[key];
      });
      setSuffixes(reorderedSuffixes);

      const updatedMultipliers = { ...multipliers };
      delete updatedMultipliers[index];
      const reorderedMultipliers = {};
      Object.keys(updatedMultipliers).forEach((key, index) => {
        reorderedMultipliers[index] = updatedMultipliers[key];
      });
      setMultipliers(reorderedMultipliers);

      setNbrSuffixes(nbrSuffixes.slice(1));
    } catch (error) {}
  };

  React.useEffect(() => {
    fetchInitialData();

    if (success) {

      setFormData({
        [columns[1].dataField]: "",
        [columns[4].dataField]: "",
        [columns[2].dataField]: "",
        [columns[3].dataField]: "",
      });
      setNbrSuffixes([]);
      setSuffixes({});
      setMultipliers({});
      refreshPage();
    }
  }, [success]);

  React.useEffect(() => {
    if (mt5Symbols) {
      setFormData({
        ...formData,

        [columns[2].dataField]: "",
        [columns[3].dataField]: "",
      });
      setNbrSuffixes([]);
      setSuffixes({});
      setMultipliers({});
      const server = mt5Symbols.find((server) => server.server === serverId);
      if (server && server.symbols) {
        setSymbols(server.symbols);
      }
    }
  }, [serverId]);

  return (
    <FormContainer>
      <TypographyContainer>{formTitle}</TypographyContainer>

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

          <FormControl sx={{ width: "100%" }} variant="outlined">
            <Autocomplete
              id="outlined-autocomplete"
              options={mt5Symbols}
              getOptionLabel={(option) => option.server_name}
              value={
                mt5Symbols.find(
                  (symbol) => symbol.server === formData[columns[4].dataField]
                ) || null
              }
              onChange={(event, newValue) => {
                handleChange({
                  target: {
                    name: columns[4].dataField,
                    value: newValue ? newValue.server : "",
                  },
                });
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label={columns[4].caption}
                  variant="outlined"
                  required
                />
              )}
            />
          </FormControl>

          <FormControl sx={{ width: "100%" }} variant="outlined">
            <Autocomplete
              id="outlined-autocomplete"
              options={symbols}
              getOptionLabel={(option) => option.Symbol}
              value={
                symbols.find(
                  (symbol) =>
                    symbol.Symbol_ID === formData[columns[2].dataField]
                ) || null
              }
              onChange={(event, newValue) => {
                handleChange({
                  target: {
                    name: columns[2].dataField,
                    value: newValue ? newValue.Symbol_ID : "",
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

          <TextField
            type="number"
            variant="outlined"
            required
            name={columns[3].dataField}
            label={columns[3].caption}
            value={formData[columns[3].dataField]}
            onChange={handleChange}
          />

          <div className="col-span-2 gridContainer">
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: "initial",
                px: 1,
              }}
              onClick={addSuffix}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: 3,
                  justifyContent: "initial",
                }}
              >
                <AddCircleOutlineIcon />
              </ListItemIcon>
              <ListItemText primary="Add suffix" sx={{ opacity: 1 }} />
            </ListItemButton>

            <Box
              className="gridContainer"
              sx={{
                overflow: "auto",

                width: "100%",
                display: nbrSuffixes.length > 0 ? "block" : "none",
              }}
            >
              <div className="grid grid-cols-1 mt-1">
                {nbrSuffixes.slice().map((suffix, rowKey) => {
                  const index = nbrSuffixes.length - 1 - rowKey;
                  return (
                    <div className="flex gap-4" key={index}>
                      <FormControl
                        sx={{
                          width: "100%",
                          display: "flex",
                          justifyContent: "center",
                        }}
                        variant="outlined"
                      >
                        <Autocomplete
                          id={`outlined-autocomplete-${index}`}
                          options={symbols.filter(symbol => 
                            !Object.values(suffixes).includes(symbol.Symbol_ID) &&
                            symbol.Symbol_ID !== formData[columns[2].dataField]
                          ).sort((a, b) => {
                            const target= symbols.find(symbol => symbol.Symbol_ID === formData[columns[2].dataField])
                            const firstThreeLetters = target.Symbol.substring(0, 3);
                            const aHasUSD = a.Symbol && a.Symbol.includes(firstThreeLetters);
                            const bHasUSD = b.Symbol && b.Symbol.includes(firstThreeLetters);
                            if (aHasUSD && !bHasUSD) {
                                return -1;
                            } else if (!aHasUSD && bHasUSD) {
                                return 1;
                            } else {
                                return 0;
                            }
                        })}
                         

                          getOptionLabel={(option) => option.Symbol}
                          value={
                            symbols.find(
                              (symbol) => symbol.Symbol_ID === suffixes[index]
                            ) || null
                          }
                          onChange={(event, newValue) => {
                            handleChangeSuffix({
                              target: {
                                name: index,
                                value: newValue ? newValue.Symbol_ID : "",
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
                      <div className="flex w-full">
                        <TextField
                          type="number"
                          required
                          key={`textfield-${index}`}
                          value={multipliers[index] || 0}
                          onChange={(event) =>
                            handleChangeMultiplier(index, event)
                          }
                          sx={{ display: "block", margin: "10px 0" }}
                          label={"Multiplier"}
                        />
                        <ListItemButton
                          key={`listitembutton-${index}`}
                          sx={{
                            margin: "1rem",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                          onClick={(event) => removeSuffix(index)}
                        >
                          <ListItemIcon
                            sx={{
                              minWidth: 0,
                              justifyContent: "initial",
                            }}
                          >
                            <RemoveCircleOutlineIcon />
                          </ListItemIcon>
                        </ListItemButton>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Box>
          </div>
        </div>

        <div className="flex mt-10">
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

export default SymbolsCreateForm;
