import { AddBoxSharp } from "@mui/icons-material";
import { Box, Icon, styled, Tooltip, Button, Tabs, Tab, CustomTabPanel  } from "@mui/material";


import {  SimpleCard } from "app/components";

const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" },
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
    margin: theme.spacing(1),
  }));


const ButtonModule = () => {
  return (
   
      
      <div style={{textAlign: 'right'}}>
        <StyledButton variant="contained" color="primary">
          Làm mới
        </StyledButton>
        <StyledButton variant="contained" color="primary">
         Thêm
        </StyledButton>
        <StyledButton variant="contained" color="primary" >
          Sửa
        </StyledButton>
        <StyledButton variant="contained" color="primary" >
          Xoá
        </StyledButton>
        <StyledButton variant="contained" color="primary">
          Lọc
        </StyledButton>
        </div>
        
      


        
  );
};

export default ButtonModule;
