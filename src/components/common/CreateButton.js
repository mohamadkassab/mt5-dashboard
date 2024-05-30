import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
 const CreateButton = ({onClick})=>{
    return(
        <Button
        variant="contained"
        startIcon={
          <AddIcon
            sx={{
              color: "white",
            }}
          />
        }
        onClick={onClick}
      >
        Create
      </Button>
    )
}

export default CreateButton