import { Box, Typography, IconButton } from "@mui/material";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useState, FC } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { useSelector } from "react-redux";
import {
  HomeOutlinedIcon,
  PeopleOutlinedIcon,
  ReceiptOutlinedIcon,
  PeopleOutlineIcon,
  MenuOutlinedIcon,
  MapOutlinedIcon,
  NoteAddOutlinedIcon,
  CastForEducationOutlinedIcon,
  QuestionAnswerIcon,
  CategoryIcon,
  PermMediaIcon,
} from "./Icons";
import avatarIcon from "../../public/assets/avatar.svg";

import Image from "next/image";
type Props = {
  title: string;
  to: string;
  icon: JSX.Element;
  selected: string;
  setSelected: any;
};

const Item: FC<Props> = ({ title, to, icon, selected, setSelected }) => {
  return (
    <Link href={to}>
    <MenuItem
      active={selected === title}
      onClick={() => setSelected(title)}
      icon={icon}>
      <Typography className="!font-Poppins ">{title}</Typography>
    </MenuItem>
    </Link>
  );
};
const AdminSidebar = () => {
  const { user } = useSelector((state: any) => state.auth);
  const [selected, setSelected] = useState("Dashboard");
  const [logout, setLogout] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { theme, setTheme } = useTheme();
  return (
    <Box
      sx={{
        zIndex: 1000,
        minHeight: "100vh",
        height: "100%",
      }}>
      <Sidebar collapsed={isCollapsed} backgroundColor="#1C1E53" width="300px" style={{height:"100%"}}>
        <Menu
        menuItemStyles={{
            button: ({ level, active, disabled }) => {
              if (level === 0)
                return {
                  color: active ? '#1C1E53' : '#fff',
                  backgroundColor: active ? '#FCD980' : undefined,
                  '&:hover': {
                    color: '#1C1E53',
                    backgroundColor: '#FCD980',
                },
                  
                };
            },
            
          }}
        >
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={
              isCollapsed ? (
                <MenuOutlinedIcon style={{ color: "white" }} />
              ) : undefined
            }
            style={{
              margin: "10px 0 20px 0",
              color: "#EEF4FA",
            }}>
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
                
                >
                <Typography variant="h5" color="#EEF4FA">
                 [EDUFREE]
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon style={{ color: "white" }}  />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <Image
                  src={
                    user.avatar 
                      ? user.avatar.url 
                      : avatarIcon
                  }
                  priority
                  alt={user?.name}
                  width={100}
                  height={100}
                  className="rounded-full h-[100px] w-[100px]"
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h5"
                  color="#EEF4FA"
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}>
                  {user?.name}
                </Typography>
                <Typography variant="h5" color="#FCD980">
                  Admin
                </Typography>
              </Box>
            </Box>
          )}

          <Box >
            <Item
              title="Dashboard"
              to="/dashboard"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color="#EEF4FA"
              sx={{ m: "15px 0 5px 20px" }}>
              Data
            </Typography>
            <Item
              title="Manage Team"
              to="/dashboard/team"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Users"
              to="/dashboard/users"
              icon={<PeopleOutlineIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Invoices Balances"
              to="/invoices"
              icon={<ReceiptOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color="#EEF4FA"
              sx={{ m: "15px 0 5px 20px" }}>
              Course
            </Typography>
            <Item
              title="All Courses"
              to="/dashboard/courses"
              icon={<CastForEducationOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Create Course"
              to="/dashboard/create-course"
              icon={<NoteAddOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color="#EEF4FA"
              sx={{ m: "15px 0 5px 20px" }}>
              Customization
            </Typography>
            <Item
              title="Hero"
              to="/dashboard/hero"
              icon={<PermMediaIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="FAQ"
              to="/dashboard/faq"
              icon={<QuestionAnswerIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Categories"
              to="/dashboard/categories"
              icon={<CategoryIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default AdminSidebar;
