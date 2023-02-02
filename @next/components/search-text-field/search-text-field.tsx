import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import CancelIcon from "@mui/icons-material/Cancel";
export const SearchTextField = ({
  handleOpenSearch,
}: {
  handleOpenSearch: () => void;
}): JSX.Element => {
  return (
    <TextField
      id="input-with-icon-textfield"
      sx={{
        backgroundColor: "rgb(255, 255, 255)",
        boxShadow:
          "rgba(128, 138, 157, 0.08) 0px 1px 2px, rgba(128, 138, 157, 0.12) 0px 4px 12px",
        "& input": {
          height: "30px !important",
        },
        // "& .MuiInputBase-root::after": {
        //   border: "none",
        // },
        // "&  .MuiInputBase-root::before": {
        //   border: "none",
        // },
      }}
      fullWidth
      placeholder="Search coin, pair, contract address or exchange"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              onClick={handleOpenSearch}
              sx={{
                height: "43px ",
              }}
            >
              <CancelIcon
                sx={{
                  height: "30px",
                }}
              />
            </IconButton>
          </InputAdornment>
        ),
        disableUnderline: true,
      }}
      variant="standard"
    />
  );
};
