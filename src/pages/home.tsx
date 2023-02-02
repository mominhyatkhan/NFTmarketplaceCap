import React from "react";
import { CustomDataGrid } from "@next/components";
import {
  GridEventListener,
  GridRenderCellParams,
  GridColumnHeaderParams,
} from "@mui/x-data-grid";
import { Box, Typography } from "@mui/material";
import StarOutlineRoundedIcon from "@mui/icons-material/StarOutlineRounded";
import Image from "next/image";
const Home = (): JSX.Element => {
  const columns = [
    {
      field: "rating",
      headerName: "",
      flex: 0.5,
      sortable: true,
      renderCell: ({ row }: GridRenderCellParams<string>) => (
        <StarOutlineRoundedIcon
          sx={{
            height: "17px",
            marginTop: "-7px",
            "&:hover": {
              fill: "#F4EA56",
            },
          }}
        />
      ),
    },
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
          <Image src="./info-icon.svg" width={15} height={15} alt="info" />
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

    {
      field: "lastSEvenDays",
      headerName: "Last Seven Days",
      flex: 2,
      sortable: true,
    },
    {
      field: "action",
      headerName: "",
      flex: 1,
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
          action
        </Box>
      ),
    },
  ];

  const rows = [
    {
      id: 0,
      serialNo: 1,
      status: "done",
    },
  ];
  return (
    <Box padding="20px">
      <CustomDataGrid id="id" columns={columns} rows={rows} />
    </Box>
  );
};

export default Home;
