import { useState } from "react";
import { Box, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import CancelIcon from "@mui/icons-material/Cancel";
import { SearchTextField } from "../search-text-field/search-text-field";
import CountrySelect from "../country-selector/country-selector";
export const Header = () => {
  const [openSearch, setOpenSearch] = useState(false);
  const handleOpenSearch = (): void => {
    setOpenSearch(!openSearch);
  };
  return (
    <>
      <Box height="43px">
        <Box display="flex" justifyContent="flex-end">
          {!openSearch && (
            <IconButton onClick={handleOpenSearch}>
              <SearchIcon />
            </IconButton>
          )}
        </Box>
        {openSearch && <SearchTextField handleOpenSearch={handleOpenSearch} />}
      </Box>

      <Box mt={10}>
        <CountrySelect />
      </Box>
    </>
  );
};
