import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';

import GroupList from "./GroupList";
import FunctionGroup from "./FunctionGroup";
import FunctionData from "./FunctionData";
import ScopeGroup from "./ScopeGroup";
import ListButton from './ButtonModule';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function NavTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs value={value} onChange={handleChange} aria-label="example tabs">
        <Tab label="Danh sách nhóm" />
        <Tab label="Phạm vi của nhóm" />
        <Tab label="Chức năng của nhóm" />
        <Tab label="Phạm vi dữ liệu của chức năng" />
        <Tab></Tab>

        <ListButton style={{textAlign: 'right'}}/>
         
      </Tabs>

      <CustomTabPanel value={value} index={0}>
        <GroupList/>
      </CustomTabPanel>

      <CustomTabPanel value={value} index={1}>
        <ScopeGroup/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <FunctionGroup/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <FunctionData/>
      </CustomTabPanel>
    </Box>
  );
}

export default NavTabs;
