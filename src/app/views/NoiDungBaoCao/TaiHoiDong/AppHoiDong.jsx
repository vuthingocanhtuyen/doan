import { Box, styled } from "@mui/material";
import { Breadcrumb, SimpleCard } from "app/components";
import DaiHoc from "./DaiHoc";
import SauDaiHoc from "./SauDaiHoc";


const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" },
  },
}));

const AppHoiDong = () => {
  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb routeSegments={[{ name: "Hệ thống", path: "/dashboard/default" }, { name: "Tải hội đồng" }]} />
      </Box>

      <SimpleCard title="Hội đồng đại học/cao đẳng"> 
      
        <DaiHoc />
        
      </SimpleCard>
<br/>
      <SimpleCard title="Hội đồng Sau đại học">
        <SauDaiHoc />
      </SimpleCard>
    </Container>
  );
};

export default AppHoiDong;
