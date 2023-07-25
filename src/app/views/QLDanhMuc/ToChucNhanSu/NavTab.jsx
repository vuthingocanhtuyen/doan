import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';

import GroupList from "./GroupList";
import FunctionGroup from "./FunctionGroup";
import FunctionData from "./FunctionData";
import ScopeGroup from "./ScopeGroup";
import ListButton from './Button';

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
        <Tab label="Danh mục cấp bậc" />
        <Tab label="Danh mục chức danh" />
        <Tab label="Danh mục học hàm" />
        <Tab label="Danh mục C.Danh CMKT" />
        <Tab label="Danh mục Loại đơn vị" />
        <Tab label="Danh mục Khen thưởng" />
        <Tab label="Danh mục Kỷ luật" />
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

      <CustomTabPanel value={value} index={4}>
        <FunctionData/>
      </CustomTabPanel>

      <CustomTabPanel value={value} index={5}>
        <FunctionData/>
      </CustomTabPanel>

      <CustomTabPanel value={value} index={6}>
        <FunctionData/>
      </CustomTabPanel>

      
      
    </Box>
  );
}

export default NavTabs;
