import { Box, Typography, IconButton } from "@mui/material";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useState, FC } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { useSelector } from "react-redux";
import {
  HomeOutlinedIcon,
  PeopleOutlinedIcon,
  ContactsOutlinedIcon,
  ReceiptOutlinedIcon,
  PersonOutlinedIcon,
  CalendarTodayOutlinedIcon,
  HelpOutlineOutlinedIcon,
  BarChartOutlinedIcon,
  PieChartOutlineOutlinedIcon,
  TimelineOutlinedIcon,
  MenuOutlinedIcon,
  MapOutlinedIcon,
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
    <MenuItem
      active={selected === title}
      
      onClick={() => setSelected(title)}
      icon={icon}>
      <Typography className="!font-Poppins ">{title}</Typography>
      <Link href={to} />
    </MenuItem>
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
        
      }}>
      <Sidebar collapsed={isCollapsed} backgroundColor="#1C1E53" width="300px">
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
              to="/"
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
              to="/team"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Contacts Information"
              to="/contacts"
              icon={<ContactsOutlinedIcon />}
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
              Pages
            </Typography>
            <Item
              title="Profile Form"
              to="/form"
              icon={<PersonOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Calendar"
              to="/calendar"
              icon={<CalendarTodayOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="FAQ Page"
              to="/faq"
              icon={<HelpOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color="#EEF4FA"
              sx={{ m: "15px 0 5px 20px" }}>
              Charts
            </Typography>
            <Item
              title="Bar Chart"
              to="/bar"
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Pie Chart"
              to="/pie"
              icon={<PieChartOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Line Chart"
              to="/line"
              icon={<TimelineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Geography Chart"
              to="/geography"
              icon={<MapOutlinedIcon />}
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
