import { useState } from "react";
import { Box, IconButton, Button, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Tabs } from "@next/components";

export const NftCollectionSection = () => {
  return (
    <Box
      padding="30px 0px"
      mt="10px"
      sx={{
        background: "#F9FBFE",
        borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
        borderTop: "1px solid rgba(0, 0, 0, 0.1)",
      }}
    >
      <Typography
        fontSize="24px"
        lineHeight="34px"
        fontWeight="700"
        paddingBottom="10px"
      >
        NFT Collections Listed By Sales Volume
      </Typography>
      <Typography
        fontSize="14px"
        lineHeight="21px"
        fontWeight="400"
        color="#58667e"
        paddingBottom="15px"
      >
        This page lists the top NFT collections. They are listed by sales volume
        with the most valuable first and then in descending order
      </Typography>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Typography fontSize="18px" lineHeight="24px" fontWeight="700">
          Top NFT Collection
        </Typography>
        <Tabs />
      </Box>
    </Box>
  );
};
