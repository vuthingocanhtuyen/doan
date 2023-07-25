import { Box, styled } from "@mui/material";
import { Breadcrumb, SimpleCard } from "app/components";

const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" },
  },
}));

const AppDinhMuc = () => {
  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb routeSegments={[{ name: "Hệ thống", path: "/dashboard/default" }, { name: "Định mức" }]} />
      </Box>

      <SimpleCard title="Công tác giảng dạy">
        
      </SimpleCard>
<br/>
      <SimpleCard title="">
        
      </SimpleCard>
      <br/>
      <SimpleCard title="">
        
      </SimpleCard>
    </Container>
  );
};

export default AppDinhMuc;
