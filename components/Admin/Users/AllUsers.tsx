"use client";
import DashboardHeader from "../DashboardHeader";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Button, Box } from "@mui/material";
import { useTheme } from "next-themes";
import { MdOutlineDelete, MdOutlineEdit } from "react-icons/md";
import Loader from "@/components/Loader/Loader";
import { format } from "timeago.js";
import { useGetAdminAllUsersQuery } from "@/Redux/Features/User/userApi";
import { FC } from "react";
import { HiUserAdd } from "react-icons/hi";
type Props = {
  isTeam: boolean;
};

const AllUsers: FC<Props> = ({ isTeam }) => {
  const { theme, setTheme } = useTheme();
  const { isLoading, data, error } = useGetAdminAllUsersQuery({});
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", flex: 0.7 },
    {
      field: "name",
      headerName: "Name",
      //   width: 450,
      flex: 1,
      editable: false,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
      //   width: 200,
      editable: false,
    },
    {
      field: "role",
      headerName: "Role",
      flex: 0.4,
      //   width: 260,
      editable: false,
    },
    {
      field: "courses",
      headerName: "Purchase Courses",
      flex: 0.4,
      //   width: 260,
      editable: false,
    },
    {
      field: "createdAt",
      headerName: "Joined At",
      flex: 0.4,
      //   width: 260,
      editable: false,
    },
    {
      field: "delete",
      headerName: "Delete",
      flex: 0.2,
      //   width: 160,
      renderCell: (params) => (
        <Button>
          <MdOutlineDelete size={25} className={`text-white`} />
        </Button>
      ),
    },
  ];
  let rows: any = [];

  if (isTeam) {
    const newData = data?.users.filter((user: any) => user.role === "admin");
    newData &&
      newData.forEach((element: any) => {
        rows.push({
          id: element._id,
          name: element.name,
          email: element.email,
          role: element.role,
          courses: element.courses.length,
          createdAt: format(element.createdAt),
        });
      });
  } else {
    data &&
      data.users.forEach((element: any) => {
        rows.push({
          id: element._id,
          name: element.name,
          email: element.email,
          role: element.role,
          courses: element.courses.length,
          createdAt: format(element.createdAt),
        });
      });
  }
  return (
    <div>
      <DashboardHeader />
      <div className="mt-1 relative right-0 py-7 px-7 lg:px-11 w-full  bg-white dark:bg-primary text-primary dark:text-white flex items-center flex-col z-30">
        {isLoading ? (
          <Loader />
        ) : (
          // button for add new user
          <>
            <div className="flex justify-end w-full my-4">
              <button
                className="flex items-center  justify-center bg-yellow text-primary w-48 py-2 rounded-lg font-Poppins font-bold text-lg hover:border hover:border-yellow hover:bg-primary hover:text-yellow duration-300"
                >
                <span>Add new user</span>
                <span><HiUserAdd size={30}/></span>
              </button>
            </div>
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
                  color: theme === "dark" ? "#fff" : "#1C1E53",
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
          </>
        )}
      </div>
    </div>
  );
};

export default AllUsers;
