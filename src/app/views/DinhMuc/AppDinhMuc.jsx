import { Box, styled } from "@mui/material";
import { Breadcrumb, SimpleCard } from "app/components";
import DMGD from "./DMGD";
import DMMienGiam from "./DMMienGiam";
import DMNCKH from "./DMNCKH";

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

      <SimpleCard title="Định mức giảng dạy dành cho giáo viên tương ứng với chức vụ chuyên môn kỹ thuật (giảng viên, giảng viên chính) và học hàm (phó giáo sư, giáo sư)">
        <DMGD />
      </SimpleCard>
<br/>
      <SimpleCard title="Định mức nghiên cứu với chức danh chuyên môn nghiệp vụ và học hàm">
        <DMNCKH />
      </SimpleCard>
      <br/>
      <SimpleCard title="Định mức miễn giảm với các chức vụ Đảng và chính quyền">
        <DMMienGiam />
      </SimpleCard>
    </Container>
  );
};

export default AppDinhMuc;
