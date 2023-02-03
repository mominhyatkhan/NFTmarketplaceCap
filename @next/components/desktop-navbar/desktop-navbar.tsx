import React from "react";
import {
  CustomDataGrid,
  TableMenu,
  TooltipOnHover,
  Header,
  AutoCompleteSearch,
} from "@next/components";
import {
  GridEventListener,
  GridRenderCellParams,
  GridColumnHeaderParams,
} from "@mui/x-data-grid";
import {
  Box,
  IconButton,
  Typography,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import StarOutlineRoundedIcon from "@mui/icons-material/StarOutlineRounded";
import SearchIcon from "@mui/icons-material/Search";

import Image from "next/image";
import * as S from "./desktop-styles";
import Grid from "@mui/material/Grid";
const menuItems = [
  {
    text: "Cryptocurrency",
    items: [
      {
        text: "Ranking",
        icon: "./next.svg",
        link: "#",
      },
      {
        text: "Ranking",
        icon: "./next.svg",
        link: "#",
      },
    ],
  },
  {
    text: "Exchanges",
    items: [
      {
        text: "Ranking",
        icon: "./next.svg",
        link: "#",
      },
      {
        text: "Ranking",
        icon: "./next.svg",
        link: "#",
      },
    ],
  },
  {
    text: "Community",
    items: [
      {
        text: "Ranking",
        icon: "./next.svg",
        link: "#",
      },
      {
        text: "Ranking",
        icon: "./next.svg",
        link: "#",
      },
    ],
  },
  {
    text: "Product",
    items: [
      {
        text: "Ranking",
        icon: "./next.svg",
        link: "#",
      },
      {
        text: "Ranking",
        icon: "./next.svg",
        link: "#",
      },
    ],
  },
  {
    text: "Learn",
    items: [
      {
        text: "Ranking",
        icon: "./next.svg",
        link: "#",
      },
      {
        text: "Ranking",
        icon: "./next.svg",
        link: "#",
      },
    ],
  },
];
export const DesktopNavbar = (): JSX.Element => {
  const [openSearch, setOpenSearch] = React.useState(false);
  const handleOpenSearch = () => {
    setOpenSearch(!openSearch);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box paddingRight="30px">
        <Image src="./next.svg" width={200} height={30} alt="logo" />
      </Box>
      {menuItems.map(
        ({
          text,
          items,
        }: {
          text: string;
          items: {
            text: string;
            icon: string;
            link: string;
          }[];
        }) => (
          <Box
            key={text}
            sx={{
              paddingRight: "30px",
            }}
          >
            <TooltipOnHover
              title={
                <>
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
                          justifyContent: "space-between",
                          fontSize: "14px",
                          color: "#222531",
                          fontWeight: 600,
                          textTransform: "initial",
                        }}
                        key={text}
                      >
                        <Image src={icon} width={30} height={30} alt="icon" />
                        <span> {text} </span>
                      </Button>
                    )
                  )}
                </>
              }
            >
              <Typography
                fontSize={14}
                fontWeight={600}
                color="#222531"
                sx={{
                  "&:hover": {
                    color: "#3861fb",
                  },
                }}
              >
                {text}
              </Typography>
            </TooltipOnHover>
          </Box>
        )
      )}
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          width: "100%",
        }}
      >
        {openSearch ? (
          <Box
            sx={{
              width: "100%",
            }}
          >
            <AutoCompleteSearch handleOpenSearch={handleOpenSearch} />
          </Box>
        ) : (
          <Button
            onClick={handleOpenSearch}
            sx={{
              display: "flex",
              width: "50%",
              justifyContent: "space-between",
              background: "rgb(239, 242, 245)",
              fontSize: "12px",
              color: "#a6b0c3",
            }}
          >
            <SearchIcon /> <span>Search </span>
          </Button>
        )}
      </Box>{" "}
    </Box>
  );
};
