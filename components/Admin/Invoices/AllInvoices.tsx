import Loader from "@/components/Loader/Loader";
import DashboardHeader from "../DashboardHeader";
import { useState } from "react";
import { useGetInvoicesQuery } from "@/Redux/Features/Invoices/InvoicesApi";
import { Box } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useTheme } from "next-themes";
import { format } from "timeago.js";

type Props = {};

const AllInvoices = (props: Props) => {
  const { data, isLoading } = useGetInvoicesQuery({});
  const { theme, setTheme } = useTheme();

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", flex: 0.7 },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      editable: false,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
      editable: false,
    },
    {
      field: "courses",
      headerName: "Course name",
      flex: 1,
      editable: false,
    },
    {
      field: "price",
      headerName: "Course price",
      flex: 0.4,
      editable: false,
    },
    {
      field: "createdAt",
      headerName: "Purchase At",
      flex: 0.4,
      editable: false,
    },
  ];
  let rows: any = [];

    if (data) {
        rows = data.order.map((invoice: any) => {
        return {
            id: invoice._id,
            name: invoice.userId.name,
            email: invoice.userId.email,
            courses: invoice.courseId.title,
            price:` ${invoice.courseId.price}$`,
            createdAt: format(invoice.createdAt),
        };
        });
    }
  return (
    <div>
      <DashboardHeader />
      <div className="mt-1 min-h-sidbar relative right-0 py-7 px-7 lg:px-11 w-full  bg-white dark:bg-primary text-primary dark:text-white flex items-center flex-col z-30">
        {isLoading ? (
          <Loader />
        ) : (
          <Box
            sx={{
              height: 600,
              width: "100%",
              "& .MuiDataGrid-root": {
                backgroundColor: theme === "dark" ? "#282938" : "#282938",
                color: theme === "dark" ? "#fff" : "#fff",
                border: "none",
                outline: "none",
              },
              "& css-pqjvzy-MuiSvgIcon-root-MuiSelect-Icon": {
                color: theme === "dark" ? "#fff" : "#000",
              },
              "& .MuiDataGrid-sortIcon": {
                color: theme === "dark" ? "#fff" : "#000",
              },
              "& .MuiDataGrid-row": {
                color: theme === "dark" ? "#fff" : "#fff",
                borderButtom:
                  theme === "dark"
                    ? "1px solid #fff !important"
                    : "1px solid #ccc !important",
              },
              "& .MuiTablePagination-root": {
                color: theme === "dark" ? "#fff" : "#fff",
              },
              "& .MuiDataGrid-cell": {
                borderButtom: "none",
              },
              "& .name-column--cell": {
                color: theme === "dark" ? "#fff" : "#1C1E53",
              },
              "& .MuiDataGrid-columnHeaders": {
                backgroundColor: theme === "dark" ? "#282938" : "#282938",
                borderButtom: "none",
                color: theme === "dark" ? "#fff" : "#fff",
              },
              "& .MuiDataGrid-virualScroller": {
                backgroundColor: theme === "dark" ? "#2405F2" : "#2405F2",
              },
              "& .MuiDataGrid-footerContainer": {
                backgroundColor: theme === "dark" ? "#282938" : "#282938",
                color: theme === "dark" ? "#fff" : "#fff",
                borderTop: "none",
              },
              "& .MuiButtonBase-root":{
                color: theme === "dark" ? "#fff" : "#fff",
              
              },
              "& .MuiCheckbox-root": {
                color: theme === "dark" ? "#fff" : "#fff",
              },
              // class for toolbar container
              "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                color: "#fff !important",
              },
            }}>
            <DataGrid
              rows={rows}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 5,
                  },
                },
              }}
              pageSizeOptions={[5]}
              checkboxSelection
              disableRowSelectionOnClick
            />
          </Box>
        )}
      </div>
    </div>
  );
};

export default AllInvoices;
