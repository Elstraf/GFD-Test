//React imports
import React, { useState, useEffect } from "react";

//3rd party libary imports
import {
  DataGrid,
  GridToolbarDensitySelector,
  GridToolbarFilterButton,
  GridToolbar,
} from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import ClearIcon from "@mui/icons-material/Clear";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import { FormGroup, FormLabel, TextField } from "@material-ui/core";

function QuickSearchToolbar(props) {
  return (
    <Box
      sx={{
        p: 0.5,
        pb: 0,
        justifyContent: "space-between",
        display: "flex",
        alignItems: "flex-start",
        flexWrap: "wrap",
      }}
    >
      <div>
        <GridToolbarFilterButton />
        <GridToolbarDensitySelector />
      </div>
      <TextField
        variant="standard"
        value={props.value}
        onChange={props.onChange}
        placeholder="Search…"
        InputProps={{
          startAdornment: <SearchIcon fontSize="small" />,
          endAdornment: (
            <IconButton
              title="Clear"
              aria-label="Clear"
              size="small"
              style={{ visibility: props.value ? "visible" : "hidden" }}
              onClick={props.clearSearch}
            >
              <ClearIcon fontSize="small" />
            </IconButton>
          ),
        }}
        sx={{
          width: {
            xs: 1,
            sm: "auto",
          },
          m: (theme) => theme.spacing(1, 0.5, 1.5),
          "& .MuiSvgIcon-root": {
            mr: 0.5,
          },
          "& .MuiInput-underline:before": {
            borderBottom: 1,
            borderColor: "divider",
          },
        }}
      />
    </Box>
  );
}

/*
 * DataTable using MUI dataGrid
 * @Parma columns - REQURIED the name of the columns
 * @Parma rows - REQURIED the data that will be used in the table
 * @Parma pagination - OPTIONAL if the index will be server side paginated
 * @Parma options - OPTIONAL other options for the table see MUI DataGrid API for help
 */

/* Options Object
 * All are requried if pag is true
 * @Parma pageSize - Int for how many items are on the page
 * @Parma rowCount - Total number of items in the dataSet
 * @Parma rowsPerPageOptions - [15] Number of rows that can be displayed on the page Just set this to the pageSize
 * @Parma handlePageChange - function to change the page takes (page) which is the page number
 */

/// ********* EXAMPLE OPTIONS OBJECT ********** ///

// const options = {
//   pageSize: 15,
//   rowCount: rowsTotal,
//   rowsPerPageOptions: [15],
//   handlePageChange: handlePageChange,
//   autoHeight: false,
//   height: "350",
// };
export default function DataTable({
  columns,
  rows,
  pagination = false,
  options,
  height,
  rowId,
}) {
  const [searchText, setSearchText] = useState("");
  const [rowss, setRows] = useState(rows);

  const escapeRegExp = (value) => {
    return value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
  };

  const requestSearch = (searchValue) => {
    setSearchText(searchValue);
    const searchRegex = new RegExp(escapeRegExp(searchValue), "i");

    const filteredRows = rowss.filter((row) => {
      return Object.keys(row).some((field) => {
        return row[field];
      });
    });
    setRows(filteredRows);
  };

  useEffect(() => {
    setRows(rows);
  }, [rowss]);

  if (pagination) {
    return (
      <>
        <div style={{ width: "100%", height: options.height }}>
          <DataGrid
            autoHeight
            columns={columns}
            rows={rows}
            paginationMode="server"
            pageSize={options.pageSize}
            rowCount={options.rowCount}
            rowsPerPageOptions={options.rowsPerPageOptions}
            onPageChange={(page) => options.handlePageChange(page)}
            components={{ Toolbar: GridToolbar }}
            componentsProps={
              {
                // toolbar: {
                //   value: searchText,
                //   onChange: (event) => requestSearch(event.target.value),
                //   clearSearch: () => requestSearch(""),
                // },
              }
            }
            initialState={{
              pagination: {
                page: 0,
              },
            }}
          />
        </div>
      </>
    );
  } else
    return (
      <>
        <div style={{ width: "100%", height: height, marginTop: "20px" }}>
          <DataGrid
            columns={columns}
            rows={rows}
            //getRowId={(rows) => rows.sales_opp_id}
            components={{ Toolbar: GridToolbar }}
          />
        </div>
      </>
    );
}
