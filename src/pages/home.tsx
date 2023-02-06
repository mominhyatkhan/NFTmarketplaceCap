import React from "react";
import {
  CustomDataGrid,
  TableMenu,
  TooltipOnHover,
  Header,
  DesktopNavbar,
  NftCollectionSection,
} from "@next/components";
import {
  GridEventListener,
  GridRenderCellParams,
  GridColumnHeaderParams,
} from "@mui/x-data-grid";
import { Box, IconButton, Typography, Button } from "@mui/material";
import StarOutlineRoundedIcon from "@mui/icons-material/StarOutlineRounded";
import Image from "next/image";
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
const Home = (): JSX.Element => {
  const columns = [
    {
      field: "serialNo",
      headerName: "#",
      flex: 1,
      sortable: true,
    },

    {
      field: "name",
      headerName: "Name",
      flex: 2,
      sortable: true,
      renderCell: ({ row }: GridRenderCellParams<string>) => (
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <Image src="./vercel.svg" width={20} height={20} alt="nft" />
          <div>
            <Typography fontWeight={600} fontSize="16px">
              {row?.name}
            </Typography>
            <Typography fontWeight={500} fontSize="14px">
              Etherum
            </Typography>
          </div>
        </Box>
      ),
    },

    {
      field: "price",
      headerName: "Price",
      flex: 1.1,
      sortable: true,
    },

    {
      field: "oneHour",
      headerName: "1h %",
      flex: 1.1,
      sortable: true,
    },
    {
      field: "twentyFourHour",
      headerName: "24h %",
      flex: 1.1,
      sortable: true,
    },
    {
      field: "sevenDay",
      headerName: "7d %",
      flex: 1.1,
      sortable: true,
    },

    {
      field: "marketCap",
      headerName: "Market Cap",
      flex: 2,
      sortable: true,
      renderHeader: (params: GridColumnHeaderParams) => (
        <Box display="flex" alignItems="center">
          <Typography fontSize="12px" fontWeight={700} pr="4px">
            Market Cap
          </Typography>
          <Image src="./info-icon.svg" width={15} height={15} alt="info" />
        </Box>
      ),
    },

    {
      field: "volume",
      headerName: "Volume(24h)",
      flex: 2,
      sortable: true,
      renderHeader: (params: GridColumnHeaderParams) => (
        <Box display="flex" alignItems="center">
          <Typography fontSize="12px" fontWeight={700} pr="4px">
            Volume(24h)
          </Typography>
          <TooltipOnHover
            title={
              <React.Fragment>
                <Typography
                  color="#58667e"
                  fontSize="14px"
                  paddingBottom="10px"
                  fontWeight={700}
                >
                  A measure of how much of a cryptocurrency was traded in the
                  last 24 hours.
                </Typography>
                <Button
                  sx={{
                    color: "rgb(56, 97, 251)",
                    fontSize: "12px",
                    padding: "0px",
                    fontWeight: "700",
                  }}
                >
                  Read More
                </Button>
              </React.Fragment>
            }
          >
            <Image src="./info-icon.svg" width={15} height={15} alt="info" />
          </TooltipOnHover>
        </Box>
      ),

      renderCell: ({ row }: GridRenderCellParams<string>) => (
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
          }}
        >
          <Typography fontSize="16px">{row?.volumnUSD}</Typography>
          <Typography fontSize="12px" color="#58667e">
            {row?.volumnCrypto}
          </Typography>
        </Box>
      ),
    },

    {
      field: "circulatingSupply",
      headerName: "Circulating Supply",
      flex: 2,
      sortable: true,
      renderHeader: (params: GridColumnHeaderParams) => (
        <Box display="flex" alignItems="center">
          <Typography fontSize="12px" fontWeight={700} pr="4px">
            Circulating Supply
          </Typography>
          <Image src="./info-icon.svg" width={15} height={15} alt="info" />
        </Box>
      ),
    },

    // {
    //   field: "lastSEvenDays",
    //   headerName: "Last Seven Days",
    //   flex: 2,
    //   sortable: true,
    // },
  ];

  const rows = [
    {
      id: 0,
      serialNo: 1,
      name: "Tezos",
      price: "$11.23",
      oneHour: "0.35%",
      twentyFourHour: "9.78%",
      sevenDay: "0.79%",
      marketCap: "$1.19B",
      volumnUSD: "$79,951,907",
      volumnCrypto: "69,902,619 Flow",
      circulatingSupply: "1,0236,200,00 Flow",
    },
    {
      id: 1,
      serialNo: 2,
      name: "Bezos",
      price: "$11.23",
      oneHour: "0.35%",
      twentyFourHour: "9.78%",
      sevenDay: "0.79%",
      marketCap: "$1.19B",
      volumnUSD: "$79,951,907",
      volumnCrypto: "69,902,619 Flow",
      circulatingSupply: "1,0236,200,00 Flow",
    },
    {
      id: 2,
      serialNo: 3,
      name: "Zeses",
      price: "$11.23",
      oneHour: "0.35%",
      twentyFourHour: "9.78%",
      sevenDay: "0.79%",
      marketCap: "$1.19B",
      volumnUSD: "$79,951,907",
      volumnCrypto: "69,902,619 Flow",
      circulatingSupply: "1,0236,200,00 Flow",
    },
    {
      id: 3,
      serialNo: 4,
      name: "Adis",
      price: "$11.23",
      oneHour: "0.35%",
      twentyFourHour: "9.78%",
      sevenDay: "0.79%",
      marketCap: "$1.19B",
      volumnUSD: "$79,951,907",
      volumnCrypto: "69,902,619 Flow",
      circulatingSupply: "1,0236,200,00 Flow",
    },
  ];
  return (
    <Box padding="20px">
      <Box
        sx={{
          display: {
            xl: "block",
            lg: "block",
            md: "none",
            sm: "none",
            xs: "none",
          },
        }}
      >
        <DesktopNavbar menuItems={menuItems} />
      </Box>

      <Box
        sx={{
          display: {
            xl: "none",
            lg: "none",
            md: "block",
            sm: "block",
            xs: "block",
          },
        }}
      >
        <Header menuItems={menuItems} />
      </Box>
      <NftCollectionSection />
      <CustomDataGrid id="id" columns={columns} rows={rows} />
    </Box>
  );
};

export default Home;
