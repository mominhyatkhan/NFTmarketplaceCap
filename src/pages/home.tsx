import React, { useEffect, useState } from "react";
import {
  CustomDataGrid,
  TableMenu,
  TooltipOnHover,
  Header,
  DesktopNavbar,
} from "@next/components";
import {
  GridEventListener,
  GridRenderCellParams,
  GridColumnHeaderParams,
} from "@mui/x-data-grid";
import { Box, IconButton, Typography, Button } from "@mui/material";
import { Hero } from "src/components/Hero";
import StarOutlineRoundedIcon from "@mui/icons-material/StarOutlineRounded";
import Image from "next/image";
import { ethers, utils } from "ethers";
import Web3 from "web3";
import erc721ABI from "src/utils/erc721-abi.json";
import boredApeAbi from "src/utils/boredAPE-abi.json";
import openseaABI from "src/utils/open-sea-abi.json";
import conduitAbi from "src/utils/conduit-abi.json";
import PenguinABI from "src/utils/penguin-abi.json";
import axios from "axios";
import Moralis from "moralis";
import { EvmChain } from "@moralisweb3/common-evm-utils";

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
  const [name, setName] = useState("");
  const provider = new ethers.providers.InfuraProvider(
    "mainnet",
    "a2b8f256dc2c4886b6eab8b8459b53ba"
  );
  const contractAddress = "0x1E0049783F008A0085193E00003D00cd54003c71"; //opensea's conduit
  const abi = openseaABI;
  const contract = new ethers.Contract(contractAddress, abi, provider);

  async function getNFTOwners() {
    //SEAPORT 1.1 CONTRACT ADDRESS "0x00000000006c3852cbEf3e08E8dF289169EdE581"

    //BORED APEY SPACE GREY MY ID [3579] ADDRESS "0x8f4850b4C485E461bF3Bb9F425999F93562f1348" from "0xAF90059410e9fc1Da54afEB9faeC5aE795714aa2"
    let address = "0x00000000006c3852cbEf3e08E8dF289169EdE581";
    // "0xBd3531dA5CF5857e7CfAA92426877b022e612cf8" "0xe9dA256a28630EFDc637BfD4c65F0887bE1AEDa8"; //PUDGY PENGUIN DEPLOYED CONTRACT ADDRESS
    let etherscanProvider = new ethers.providers.EtherscanProvider();
    const contract = new ethers.Contract(address, PenguinABI, provider);

    // let ts = 0;
    // await contract
    //   .totalSupply()
    //   .then((res: any) => {
    //     console.log(res.toString());
    //     ts = res.toString();
    //   })
    //   .catch((e: any) => {
    //     console.log(e);
    //   });
    // console.log(totalSupply);
    // let holders: any = [];
    // for (let i = 0; i < ts; i++) {
    //   const tokenHolder = await contract.ownerOf(i);
    //   // console.log(tokenHolder);
    //   holders.push(tokenHolder);
    // }
    // console.log("HOLDERS", holders.length);

    // let uniqueChars = holders.filter((c: any, index: number) => {
    //   return holders.indexOf(c) === index;
    // });
    // console.log("UNIQUE HOLDERS:", uniqueChars.length);
    // console.log(holders);

    const sig =
      "fulfillBasicOrder(address,uint256,uint256,address,address,address,uint256,uint256,uint8,uint256,uint256,bytes32,uint256,bytes32,bytes32,uint256,tuple[],bytes)";
    const bytes = ethers.utils.toUtf8Bytes(sig);

    const transferEventSignature = ethers.utils.keccak256(bytes);
    console.log(transferEventSignature.slice(0, 10));
    // 0xfb0f3ee1 original
    // 0xaf84e809 mine 0xf16aa6ed

    const transferHistory = [];
    const history: any = await etherscanProvider.getHistory(address);
    console.log("FULL HISTORY OF TRANSACTIONS", history);

    for (const transaction of history) {
      // console.log("run");

      if (transaction.data) {
        const input = transaction.data.slice(0, 10);
        if (input === "0xfb0f3ee1") {
          transferHistory.push(transaction);
        }
      }
    }
    console.log("TRANSFER RECORDS FROM HISTORY", transferHistory);

    let web3 = new Web3("https://polygon.llamarpc.com");

    console.log(
      await web3.eth.getTransactionReceipt(
        "0x6282c5597dfc098a944ed9b5f6dfa95aaa216a196001de70b0d6659417b2235e"
      )
    );
    // etherscanProvider.getHistory(address).then((history) => {
    //   history.forEach((tx) => {
    //     console.log(tx);
    //   });
    // });

    //   const contractAddress = "0xBd3531dA5CF5857e7CfAA92426877b022e612cf8";
    //   const contract = new ethers.Contract(contractAddress, PenguinABI, provider);

    //   const totalSupply = await contract.totalSupply();

    //   let holders: any = [];
    //   for (let i = 0; i < totalSupply; i++) {
    //     const tokenId = i + 1;
    //     const tokenHolder = await contract.ownerOf(tokenId);
    //     console.log(tokenHolder);
    //     holders.push(tokenHolder);
    //   }
    //   let uniqueChars = holders.filter((c: any, index: number) => {
    //     return holders.indexOf(c) === index;
    //   });
    //   console.log("Holders:", uniqueChars.length);
    //   console.log(holders);
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
      name: name,
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
      <button
        onClick={() =>
          getFloorPrice("0x2505F3FCb671381642b10af30965a546aF2b2Cc6")
        }
      >
        Floor Price
      </button>
      <button onClick={() => getNFTOwners()}>Number of Owners</button>

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
      <Hero />
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
      <CustomDataGrid id="id" columns={columns} rows={rows} />
    </Box>
  );
};

export default Home;
