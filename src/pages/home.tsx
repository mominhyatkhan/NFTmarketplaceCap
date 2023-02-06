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
import { ethers, utils } from "ethers";
import Web3 from "web3";
import erc721ABI from "src/utils/erc721-abi.json";
import openseaABI from "src/utils/open-sea-abi.json";

const Home = (): JSX.Element => {
  const provider = new ethers.providers.InfuraProvider(
    "mainnet",
    "a2b8f256dc2c4886b6eab8b8459b53ba"
  );
  const contractAddress = "0xBd3531dA5CF5857e7CfAA92426877b022e612cf8"; //contract address for Token RFOX VALT CitiXens
  const abi = erc721ABI;
  const contract = new ethers.Contract(contractAddress, abi, provider);

  const connectMetamask = () => {
    console.log(contract);
  };

  const balanceOf = async () => {
    const totalSupply = await contract.totalSupply();
    console.log("TOTAL SUPPLY", totalSupply.toString());
    const owner = await contract.ownerOf("781");
    console.log("OWNER", owner);

    //   // Get the contract's balance in wei
    // const balance = await provider.getBalance(contractAddress);

    // // Convert the balance from wei to ether
    // const balanceInEther = utils.formatEther(balance);
    // console.log(`The contract's balance is: ${balanceInEther} ETH`);
  };

  async function getNFTOwners(startId: number, endId: number) {
    // Set to store unique owners
    const owners = new Set();

    for (let i = startId; i <= endId; i++) {
      // Call the `ownerOf` function to get the owner of the token
      const owner = await contract.ownerOf(i);
      // console.log(owner);

      // Add the owner to the set of unique owners
      owners.add(owner);
    }
    const arrayWithoutDuplicates = Array.from(new Set(owners));
    console.log("WithoutduplicateARRAY", arrayWithoutDuplicates.length);

    console.log(`There are ${owners.size} unique owners of the NFTs`);
  }

  async function getFloorPrice(contractAddress: string) {
    // Connect to the Ethereum network
    const provider = new ethers.providers.InfuraProvider(
      "mainnet",
      "a2b8f256dc2c4886b6eab8b8459b53ba"
    );

    // The ABI (Application Binary Interface) of the contract
    const abi = erc721ABI;

    // Create a contract object
    const contract = new ethers.Contract(contractAddress, abi, provider);

    // Call the 'totalSupply' function of the contract
    const totalSupply = await contract.totalSupply();
    console.log(totalSupply.toString());
    

    // Create an array to store all the sales prices
    const salesPrices = [];

    // Loop through all the tokens
    for (let i = 0; i < totalSupply; i++) {
      // Call the 'tokenOfOwnerByIndex' function of the contract to get the token ID
      // const tokenId = await contract.tokenOfOwnerByIndex(i);

      // Call the 'ownerOf' function of the contract to get the owner of the token
      const owner = await contract.ownerOf(i);

      // Define the filter criteria
      const filter = {
        address: contractAddress,
        topics: [
          ethers.utils.id("Transfer(address,address,uint256)"),
          // ethers.utils.hexZeroPad(owner, 32),
          // null,
          // ethers.utils.hexZeroPad(ethers.BigNumber.from(i).toHexString(), 32),
        ],
      };

      // Get the transaction history for the token
      const logs = await provider.getLogs(filter);
      console.log(logs);
      
      if (logs.length > 0) {
        // Get the latest transaction for the token
        const latestLog = logs[logs.length - 1];

        // Get the sales price for the latest transaction
        const salesPrice = latestLog.data;
        console.log(salesPrice);
        
        // Add the sales price to the array of sales prices
        salesPrices.push(+salesPrice);
      }
    }

    // Get the minimum sales price in the array
    const floorPrice = Math.min(...salesPrices);
    console.log("floorPrice", floorPrice);
    

    // Return the floor price
    return floorPrice;
  }

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
      <button onClick={connectMetamask}>connect metamask</button>;
      <button onClick={balanceOf}>balance</button>;
      <button
        onClick={() =>
          getFloorPrice("0x2505F3FCb671381642b10af30965a546aF2b2Cc6")
        }
      >
        Floor Price
      </button>
      ;
      <button onClick={() => getNFTOwners(2001, 3000)}>Number of Owners</button>
      <CustomDataGrid id="id" columns={columns} rows={rows} />
    </Box>
  );
};

export default Home;
