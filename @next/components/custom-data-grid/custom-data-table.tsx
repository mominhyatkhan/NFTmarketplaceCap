import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import { DataGridContainer } from "@next/components";
import { DataGrid } from "@mui/x-data-grid";
// import { CustomPagination } from "../custom-pagination";
import { Box } from "@mui/material";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
export function SortedDescendingIcon() {
  return <ExpandMoreIcon className="icon" />;
}

export function SortedAscendingIcon() {
  return <ExpandLessIcon className="icon" />;
}
export const CustomDataGrid = ({
  id,
  totalRecords = 0,
  columns,
  rows,
  height = 480,
  page = 0,
  handlePageChange = (page) => console.log(page),
  hideFooter = false,
  loader = false,
  rowClickHandler = () => {
    console.log("row click");
  },
  pagination = false,
}: {
  height?: number;
  id: string;
  rows: any[];
  columns: any[];
  totalRecords?: number;
  page?: number;
  hideFooter?: boolean;
  loader?: boolean;
  handlePageChange?: (page: number) => void;
  rowClickHandler?: any;
  pagination?: boolean;
}): JSX.Element => (
  <TableContainer component={Paper} style={{ border: 0, boxShadow: "none" }}>
    <DataGridContainer height={height}>
      <DataGrid
        sx={{
          height,
          mb: 2,
          mt: 3,
          "& .MuiDataGrid-main": {
            // border: "1px solid #CDCDCD",
            // borderRadius: "14px 14px 0px 0px",
          },
          "& .MuiDataGrid-columnHeaders": {
            // background: "#F5F5F5",
            color: "#222531",
            alignItems: "center",

            // textTransform: "uppercase",
          },
          "& .MuiDataGrid-columnHeader": {
            padding: "0px",
          },
          "& .MuiDataGrid-columnHeaderTitle": {
            fontStyle: "normal",
            fontWeight: 700,
            fontSize: "12px",
            lineHeight: "18px",
            textOverflow: "unset",
            whiteSpace: "unset",
          },
          "& .MuiDataGrid-columnHeaderTitleContainer": {
            whiteSpace: "unset",
          },
          "&  .MuiDataGrid-columnSeparator": {
            visibility: "hidden",
          },
          "& .MuiDataGrid-root .MuiDataGrid-cell:focus-within": {
            outline: "none !important",
          },

          "& .MuiDataGrid-columnHeader:focus-within, .MuiDataGrid-cell:focus-within":
            {
              outline: "none !important",
            },

          "& .MuiIconButton-root": {
            padding: "0",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "0px solid rgba(47, 46, 106, 0.29)",
            padding: "0 2px",
          },
          "& .MuiDataGrid-row": {
            borderBottom: "1px solid #CDCDCD",
          },
          "& .MuiDataGrid-cellContent": {
            fontSize: "16px",
            color: "#252121",
            fontWeight: 500,
            display: "flex",
            alignItems: "center",
            textAlign: "center",
            padding: "0",
          },
        }}
        rowHeight={60}
        hideFooter={true}
        disableSelectionOnClick
        loading={loader}
        disableColumnMenu
        getRowId={(val: any) => val[id]}
        columns={columns}
        rows={rows}
        onRowClick={rowClickHandler}
        components={{
          ColumnSortedDescendingIcon: SortedDescendingIcon,
          ColumnSortedAscendingIcon: SortedAscendingIcon,
        }}
      />
    </DataGridContainer>
  </TableContainer>
);
