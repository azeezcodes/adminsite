import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Layout from "@/components/Layout/Layout";
import SchoolProfile from "@/components/SchoolProfile/SchoolProfile";
import Personalprofile from "@/components/PersonalProfile/Personalprofile";
import Subscription from "@/components/Subscription/Subscription";
import Secruity from "@/components/Secruity/Secruity";
import Notification from "@/components/Notification/Notification";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
interface TabPanelProps {
   children?: React.ReactNode;
   index: number;
   value: number;
}

function TabPanel(props: TabPanelProps) {
   const { children, value, index, ...other } = props;

   return (
      <div
         role="tabpanel"
         hidden={value !== index}
         id={`simple-tabpanel-${index}`}
         aria-labelledby={`simple-tab-${index}`}
         {...other}
      >
         {value === index && (
            <Box sx={{ p: 3 }}>
               <Box>{children}</Box>
            </Box>
         )}
      </div>
   );
}

function a11yProps(index: number) {
   return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
   };
}

export default function Settings() {
   const [value, setValue] = React.useState(0);

   const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
   };

   return (
      <Layout>
         <div className="py-6 px-4 bg-bodyBg min-h-screen">
            <Box
               sx={{
                  width: "100%",
                  backgroundColor: "white",
                  borderRadius: "10px",
               }}
            >
               <Box
                  sx={{
                     borderBottom: 1,
                     borderColor: "divider",
                     width: "100%",
                  }}
               >
                  <Tabs
                     value={value}
                     onChange={handleChange}
                     sx={{ marginLeft: { sm: "0rem", md: "2rem" } }}
                     variant="scrollable"
                     scrollButtons="auto"
                     allowScrollButtonsMobile
                     aria-label="scrollable auto tabs example"
                  >
                     <Tab
                        iconPosition="start"
                        icon={<HomeOutlinedIcon />}
                        label="School Profile"
                        {...a11yProps(0)}
                        className="capitalize font-semibold"
                        sx={{ fontSize: { xs: ".6rem", md: ".9rem" } }}
                     />
                     <Tab
                        iconPosition="start"
                        icon={<PersonOutlineOutlinedIcon />}
                        label="Personal Profile"
                        {...a11yProps(1)}
                        className="capitalize font-semibold"
                     
                        sx={{
                           fontSize: { xs: ".6rem", md: ".9rem" },
                           marginX: { sm: "1rem" },
                        }}
                     />
                     <Tab
                        iconPosition="start"
                        icon={<CreditCardIcon />}
                        label="Subscription "
                        className="capitalize font-semibold"
                        {...a11yProps(2)}
                        sx={{ fontSize: { xs: ".6rem", md: ".9rem" } }}
                     />
                     <Tab
                        iconPosition="start"
                        icon={<LockOutlinedIcon />}
                        label="Security "
                        className="capitalize font-semibold"
                        {...a11yProps(3)}
                        sx={{ fontSize: { xs: ".6rem", md: ".9rem" } }}
                     />
                     <Tab
                        iconPosition="start"
                        icon={<NotificationsOutlinedIcon />}
                        label="Notification "
                        className="capitalize font-semibold"
                        {...a11yProps(4)}
                        sx={{ fontSize: { xs: ".6rem", md: ".9rem" } }}
                     />
                  </Tabs>
               </Box>
               <TabPanel value={value} index={0}>
                  <SchoolProfile />
               </TabPanel>
               <TabPanel value={value} index={1}>
                  <Personalprofile />
               </TabPanel>
               <TabPanel value={value} index={2}>
                  <Subscription />
               </TabPanel>
               <TabPanel value={value} index={3}>
                  <Secruity />
               </TabPanel>
               <TabPanel value={value} index={4}>
                  <Notification />
               </TabPanel>
            </Box>
         </div>
      </Layout>
   );
}
