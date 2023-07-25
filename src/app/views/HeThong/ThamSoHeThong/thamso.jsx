import { AddBoxSharp } from "@mui/icons-material";
import { Box, Icon, styled, Tooltip, Button } from "@mui/material";
import { Breadcrumb, SimpleCard } from "app/components";
import TableParam from "./TableParam";


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



const thamso = () => {
  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb routeSegments={[{ name: "Hệ thống", path: "/dashboard/default" }, { name: "Tham số hệ thống" }]} />
        
      </Box>
      
      <SimpleCard >
      <div style={{textAlign: 'right'}}>
        <StyledButton variant="contained" color="primary">
          Làm mới
        </StyledButton>
        <StyledButton variant="contained" color="primary" >
          Sửa
        </StyledButton>
        <StyledButton variant="contained" color="primary">
          Lọc
        </StyledButton>
        </div>
       <TableParam/>
       </SimpleCard>
    </Container>
  );
};

export default thamso;
