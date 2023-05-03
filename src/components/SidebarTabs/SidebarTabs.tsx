import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Research from './Research/Research';
import Comments from './Comments/Comments';
import LanguageIcon from '@mui/icons-material/Language';
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';

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
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function SidebarTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" className = "w-full">
          <Tab icon={<LanguageIcon className='text-main'/>} label="Research"  className = "capitalize font-semibold w-[50%] py-[10px]" {...a11yProps(0)} />
          <Tab icon = {<QuestionAnswerOutlinedIcon className = 'text-main' />} className = "capitalize font-semibold w-[50%] py-[10px]" label="Comments" {...a11yProps(1)} />
          
          {/* <Tab label="Item Three" {...a11yProps(2)} /> */}
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Research />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Comments/>
      </TabPanel>
      
    </Box>
  );
}