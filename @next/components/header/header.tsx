import { useState } from "react";
import { Box, IconButton, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import { AutoCompleteSearch } from "@next/components";
import * as React from "react";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import Image from "next/image";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface HeaderProps {
  menuItems: {
    text: string;
    items: {
      text: string;
      icon: string;
      link: string;
    }[];
  }[];
}
export const Header: React.FC<HeaderProps> = ({ menuItems }) => {
  const [openSearch, setOpenSearch] = useState(false);
  const [state, setState] = React.useState(false);
  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState(open);
    };
  const handleOpenSearch = (): void => {
    setOpenSearch(!openSearch);
  };
  return (
    <>
      <Box height="43px" display="flex" alignItems="center">
        <Image src="./next.svg" height={30} width={50} alt="logo" />
        <Box display="flex" justifyContent="flex-end" width="100%">
          {!openSearch && (
            <>
              <IconButton onClick={handleOpenSearch}>
                <SearchIcon />
              </IconButton>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
            </>
          )}
        </Box>
        {openSearch && (
          <Box width="100%">
            <AutoCompleteSearch handleOpenSearch={handleOpenSearch} />
          </Box>
        )}
      </Box>
      <Drawer
        anchor="left"
        open={state}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: { width: "100%" },
        }}
      >
        <>
          <Box display="flex" justifyContent="space-between" mt={2}>
            <Image src="./next.svg" width={60} height={40} alt="logo" />
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(false)}
            >
              <CloseIcon />
            </IconButton>
          </Box>
          {menuItems.map(
            ({
              items,
              text,
            }: {
              text: string;
              items: {
                text: string;
                icon: string;
                link: string;
              }[];
            }) => (
              <Accordion disableGutters key={text}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography
                    color="#222531"
                    fontSize={16}
                    fontWeight={600}
                    lineHeight={"24px"}
                  >
                    {text}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  {items?.map(
                    ({
                      text,
                      icon,
                      link,
                    }: {
                      text: string;
                      icon: string;
                      link: string;
                    }) => (
                      <Button
                        sx={{
                          width: "100%",
                          display: "flex",
                          justifyContent: "flex-start",
                        }}
                        key={text}
                      >
                        <Image src={icon} width={40} height={40} alt="icon" />
                        <Typography
                          paddingLeft="20px"
                          sx={{
                            fontSize: "16px",
                            color: "#222531",
                            fontWeight: 600,
                            textTransform: "initial",
                            lineHeight: "24px",
                          }}
                        >
                          {" "}
                          {text}{" "}
                        </Typography>
                      </Button>
                    )
                  )}
                </AccordionDetails>
              </Accordion>
            )
          )}

          {/* <Accordion disableGutters>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Accordion 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion disableGutters>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Accordion 2</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion> */}
        </>
      </Drawer>
    </>
  );
};
