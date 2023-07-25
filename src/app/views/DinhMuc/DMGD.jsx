import {
    Box,
    Icon,
    IconButton,
    styled,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
  } from "@mui/material";
  
  const StyledTable = styled(Table)(({ theme }) => ({
    whiteSpace: "pre",
    "& thead": {
      "& tr": { "& th": { paddingLeft: 0, paddingRight: 0 } },
    },
    "& tbody": {
      "& tr": { "& td": { paddingLeft: 0, textTransform: "capitalize" } },
    },
  }));
  
  const subscribarList = [
    {
      name: "GS và GV cao cấp",
      mon: 360,
      monGDQP: 500,
      note: "",
      
    },
    {
        name: "PGS và GV chính",
        mon: 320,
        monGDQP: 460,
        note: "",
        
      },
      {
        name: "Giảng viên",
        mon: 280,
        monGDQP: 420,
        note: "",
        
      },
  ];
  
  const DMGD = () => {
    return (
      <Box width="100%" overflow="auto">
        <StyledTable>
          <TableHead>
            <TableRow>
              <TableCell align="left">Chức danh giảng dạy/ DM giờ chuẩn GD</TableCell>
              <TableCell align="center">Quy định chung cho các môn</TableCell>
              <TableCell align="center">Môn giáo dục thể chất, giáo dục quốc phòng</TableCell>
              <TableCell align="center">Ghi chú</TableCell>
              
              {/* <TableCell align="right">Action</TableCell> */}
            </TableRow>
          </TableHead>
  
          <TableBody>
            {subscribarList.map((subscriber, index) => (
              <TableRow key={index}>
                <TableCell align="left">{subscriber.name}</TableCell>
                <TableCell align="center">{subscriber.mon}</TableCell>
                <TableCell align="center">{subscriber.monGDQP}</TableCell>
                <TableCell align="center">{subscriber.note}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </StyledTable>
      </Box>
    );
  };
  
  export default DMGD;
  