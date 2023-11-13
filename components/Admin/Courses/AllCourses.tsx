"use client";
import DashboardHeader from "../DashboardHeader";
import { FC } from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { Button, Box } from "@mui/material";
import { useTheme } from "next-themes";
import { MdOutlineDelete, MdOutlineEdit } from "react-icons/md";
import { useGetAdminCoursesQuery } from "@/Redux/Features/Courses/CoursesApi";
import Loader from "@/components/Loader/Loader";
import {format} from 'timeago.js'
// type Props = {}

const AllCourses = () => {
  const { theme, setTheme } = useTheme();
  const {isLoading,data,error} = useGetAdminCoursesQuery({});
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", flex:0.7},
    {
      field: "coursetitle",
      headerName: "Course title",
    //   width: 450,
    flex:1,
      editable: false,
    },
    {
      field: "rating",
      headerName: "Rating",
      flex:0.4,
    //   width: 200,
      editable: false,
    },
    {
      field: "purchased",
      headerName: "Purshased",
      flex:0.4,
    //   width: 260,
      editable: false,
    },
    {
      field: "createdAt",
      headerName: "created At",
      flex:0.4,
    //   width: 260,
      editable: false,
    },
    {
      field: "edit",
      headerName: "Edit",
      flex:0.2,
    //   width: 160,
    renderCell: (params) => (
        <Button>
            <MdOutlineEdit size={25} className={`text-white`}/>
        </Button>
    )      
    },
    {
      field: "delete",
      headerName: "Delete",
      flex:0.2,
    //   width: 160,
    renderCell: (params) => (
        <Button>
            <MdOutlineDelete size={25} className={`text-white`}/>
        </Button>
    )
      
    },
  ];
  let rows:any = [];
  {
    data && data.courses.forEach((element:any) => {
        rows.push({
            id: element._id,
            coursetitle: element.title,
            rating: element.rating,
            purchased: element.purshased,
            createdAt: format(element.createdAt),
        })
    });
  }
  
  return (
    <div>
      <DashboardHeader />
      <div className="mt-1 relative right-0 py-7 px-7 lg:px-11 w-full  bg-white dark:bg-primary text-primary dark:text-white flex items-center flex-col z-30">
        {
            isLoading ? <Loader/> :(
                <Box sx={{ height: 400, width: "100%","& .MuiDataGrid-root":{
                    backgroundColor: theme === "dark" ? "#1C1E53" : "#fff",
                    color: theme === "dark" ? "#fff" : "#1C1E53",
                    border:"none",
                    outline:"none",
                },
                "& css-pqjvzy-MuiSvgIcon-root-MuiSelect-Icon":{
                    color: theme === "dark" ? "#fff" : "#1C1E53",
                },
                "& .MuiDataGrid-sortIcon":{
                    color: theme === "dark" ? "#fff" : "#1C1E53",
                },
                "& .MuiDataGrid-row":{
                    color: theme === "dark" ? "#fff" : "#1C1E53",
                    borderButtom:theme === "dark" ? "1px solid #fff !important" : "1px solid #ccc !important",  
                },
                "& .MuiTablePagination-root":{
                    color: theme === "dark" ? "#fff" : "#1C1E53",
                },
                "& .MuiDataGrid-cell":{
                    borderButtom :"none"
                },
                "& .name-column--cell":{
                    color: theme === "dark" ? "#fff" : "#1C1E53",
                },
                "& .MuiDataGrid-columnHeaders":{
                    backgroundColor: theme === "dark" ? "#282938" : "#282938",
                    borderButtom:"none",
                    color: theme === "dark" ? "#fff" : "#fff",
                },
                "& .MuiDataGrid-virualScroller":{
                    backgroundColor: theme === "dark" ? "#2405F2" : "#2405F2",   
                },
                "& .MuiDataGrid-footerContainer":{
                    backgroundColor: theme === "dark" ? "#282938" : "#282938",   
                    color: theme === "dark" ? "#fff" : "#fff",
                    borderTop:"none"
                },
                "& .MuiCheckbox-root":{
                    color: theme === "dark" ? "#fff" : "#fff",
                },
                // class for toolbar container
                "& .MuiDataGrid-toolbarContainer .MuiButton-text":{
        
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
            )
        }
      </div>
    </div>
  );
};

export default AllCourses;
