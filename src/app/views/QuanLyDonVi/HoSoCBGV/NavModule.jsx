import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import { styled,  Button} from "@mui/material";

import LyLich from './LyLich';
import CTDT from './CTDT';
import CTNCKH from './CTNCKH';
import QuaTrinhCT from './QuaTrinhCT';

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
const StyledButton = styled(Button)(({ theme }) => ({
    margin: theme.spacing(1),
  }));

function NavModule() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  
  return (
    <Box sx={{ width: '100%' }}>
      <Tabs value={value} onChange={handleChange} aria-label="example tabs">
        <Tab label="Lý lịch" />
        <Tab label="Các quá trình" />
        <Tab label="Công tác Đào tạo" />
        <Tab label="Công tác NCKH" />
      
        <Tab></Tab>


      </Tabs>

      <CustomTabPanel value={value} index={0}>
   

        <LyLich/>

      </CustomTabPanel>

      <CustomTabPanel value={value} index={1}>
        <QuaTrinhCT/>
      </CustomTabPanel>

      <CustomTabPanel value={value} index={2}>
        <CTDT/>
      </CustomTabPanel>
      
      <CustomTabPanel value={value} index={3}>
        <CTNCKH/>
      </CustomTabPanel>
    </Box>
  );
}

export default NavModule;
