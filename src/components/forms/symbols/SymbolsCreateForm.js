import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  FormControl,
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
  const [symbolSuffixes, setSymbolSuffixes] = useState([]);
  const [formData, setFormData] = useState({
    [columns[1].dataField]: "",
    [columns[4].dataField]: "",
    [columns[2].dataField]: "",
    [columns[3].dataField]: 0,
  });
  const serverId = formData[columns[4].dataField];
  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(CreateSymbolConfiguration(formData, symbolSuffixes));
  };
  // End relative variables

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });

  };

  const handleChangeSuffix = (event) => {
    setSymbolSuffixes((prevSuffixes) => {
      const newSuffixes = prevSuffixes.map((suffixObj, i) => {
        if (i === event.target.name) {
          return { ...suffixObj, suffix: event.target.value };
        }
        return suffixObj;
      });
      return newSuffixes;
    });
  };


  const handleChangeMultiplier = (index, event) => {
    setSymbolSuffixes((prevSuffixes) => {
      const newSuffixes = prevSuffixes.map((suffixObj, i) => {
        if (i === index) {
          return { ...suffixObj, multiplier: event.target.value };
        }
        return suffixObj;
      });
      return newSuffixes;
    });
  
  };

  const hideForm = () => {
    createFormVisibility(false);
  };

  const fetchInitialData = async () => {
    await dispatch(GetMT5Symbols());
  };

  const addSuffix = () => {
    const emptySymbol = { suffix: '', multiplier: 0 };
    setSymbolSuffixes((prevSuffixes) => {
      return [...prevSuffixes, emptySymbol];
    });
  };

  const removeSuffix = (index) => {
    try {
      setSymbolSuffixes((prevSuffixes) => {
        return prevSuffixes.filter((_, i) => i !== index);
      });
    } catch (error) {}
  };

  React.useEffect(() => {
console.log(symbolSuffixes);
  }, [symbolSuffixes]);

  React.useEffect(() => {
    fetchInitialData();

    if (success) {

      setFormData({
        [columns[1].dataField]: "",
        [columns[4].dataField]: "",
        [columns[2].dataField]: "",
        [columns[3].dataField]: 0,
      });
      setSymbolSuffixes([]);
      refreshPage();
    }
  }, [success]);

  React.useEffect(() => {
    if (mt5Symbols) {
      setFormData({
        ...formData,

        [columns[2].dataField]: "",
        [columns[3].dataField]: 0,
      });
      setSymbolSuffixes([]);
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
                  label={columns[5].caption}
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
                    symbol.Symbol === formData[columns[2].dataField]
                ) || null
              }
              onChange={(event, newValue) => {
                handleChange({
                  target: {
                    name: columns[2].dataField,
                    value: newValue ? newValue.Symbol : "",
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
                justifyContent: "initial",
                px: 1,
                maxWidth: 220
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
                display: symbolSuffixes.length > 0 ? "block" : "none",
              }}
            >
              <div className="grid grid-cols-1 mt-1">
                {symbolSuffixes.map((suffix, rowKey) => {
                const index = symbolSuffixes.length - 1 - rowKey;
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
                            !(symbolSuffixes.some(item => item.suffix === symbol.Symbol)) &&
                            symbol.Symbol !== formData[columns[2].dataField]
                          ).sort((a, b) => {
                            try{
                              // const target= symbols.find(symbol => symbol.Symbol_ID === formData[columns[2].dataField])
                              // const firstThreeLetters = formData[columns[2].dataField].substring(0, 3);
                              const aHasUSD = a.Symbol && a.Symbol.includes(formData[columns[2].dataField]);
                              const bHasUSD = b.Symbol && b.Symbol.includes(formData[columns[2].dataField]);
                              if (aHasUSD && !bHasUSD) {
                                  return -1;
                              } else if (!aHasUSD && bHasUSD) {
                                  return 1;
                              } else {
                                  return 0;
                              }
                            }
                            catch(error){
                              return 0;
                            }
                        })}
                         
                          getOptionLabel={(option) => option.Symbol}
                          value={
                            symbols.find(
                              (symbol) => symbol.Symbol === symbolSuffixes[index].suffix
                            ) || null
                          }
                          onChange={(event, newValue) => {
                            handleChangeSuffix({
                              target: {
                                name: index,
                                value: newValue ? newValue.Symbol : "",
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
                          value={symbolSuffixes[index].multiplier}
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
