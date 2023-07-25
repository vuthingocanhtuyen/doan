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
        DMTG: 700,
        DMGC: 280,
        
        
      },
      {
          name: "PGS và GV chính",
          DMTG: 600,
            DMGC: 210,
        },
        {
          name: "Giảng viên",
          DMTG: 500,
        DMGC: 150,
          
        },
  ];
  
  const DMNCKH = () => {
    return (
      <Box width="100%" overflow="auto">
        <StyledTable>
          <TableHead>
            <TableRow>
              <TableCell align="left">Chức danh giảng dạy / Nhiệm vụ</TableCell>
              <TableCell align="center">Định mức thời gian (giờ)</TableCell>
              <TableCell align="center">Định mức giờ chuẩn (giờ)</TableCell>
              
            </TableRow>
          </TableHead>
  
          <TableBody>
            {subscribarList.map((subscriber, index) => (
              <TableRow key={index}>
                <TableCell align="left">{subscriber.name}</TableCell>
                <TableCell align="center">{subscriber.DMTG}</TableCell>
                <TableCell align="center">{subscriber.DMGC}</TableCell>
               
                
              </TableRow>
            ))}
          </TableBody>
        </StyledTable>
      </Box>
    );
  };
  
  export default DMNCKH;
  