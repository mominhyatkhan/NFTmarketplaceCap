import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Typography } from "@mui/material";

export const TableMenu = ({
  menuItemOptions = [],
  id = "",
  h,
}: {
  h?: string;
  menuItemOptions: any;
  id?: string;
}): JSX.Element => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: any) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (event: any) => {
    event.stopPropagation();
    setAnchorEl(null);
  };

  const handleMenuItemClick = (e: any, menuItem: any, id: string) => {
    e.stopPropagation();
    menuItem.onClick(menuItem.text, id);
  };
  return (
    <div>
      <Button
        sx={{ color: "#9EA0A5" }}
        id="basic-button"
        data-testid="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        // onMouseOver={handleClick}
        // onMouseLeave={closeMenu}
      >
        <MoreVertIcon />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        sx={{
          "& li": {
            height: h ? h : undefined,
          },
          "& .MuiPaper-root ": {
            boxShadow: `
            -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.16);
            -moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.16);
            box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.16);`,
          },
        }}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        PaperProps={{
          style: {
            width: "20ch",
          },
        }}
      >
        {menuItemOptions?.length
          ? menuItemOptions?.map((menuItem: any, i: number) => (
              <MenuItem
                key={i}
                onClick={(e) => {
                  handleMenuItemClick(e, menuItem, id);
                }}
              >
                <Typography fontSize="14px" fontWeight={700}>
                  {menuItem.text}
                </Typography>
              </MenuItem>
            ))
          : null}
      </Menu>
    </div>
  );
};
