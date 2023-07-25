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
      name: "Bí thư đoàn cơ sở",
      rate:"15% - 20%"
    },
    {
        name: "Chủ nhiệm lớp",
        rate:"10% - 15%"
      },
    {
        name: "GV đang học cao học không tập trung",
        rate:"50%"
      },
      {
        name: "GV đang NCS không tập trung",
        rate:"70%"
      },
  ];
  
  const DMMienGiam = () => {
    return (
      <Box width="100%" overflow="auto">
        <StyledTable>
          <TableHead>
            <TableRow>
              <TableCell align="left">TT</TableCell>
              <TableCell align="center">Đối tượng được miễn giảm</TableCell>
              <TableCell align="center">Tỷ lệ miễn giảm (%)</TableCell>
           
            </TableRow>
          </TableHead>
  
          <TableBody>
            {subscribarList.map((subscriber, index) => (
              <TableRow key={index}>
                <TableCell align="left">{index+1}</TableCell>
                <TableCell align="center">{subscriber.name}</TableCell>
                <TableCell align="center">{subscriber.rate}</TableCell>
                
              </TableRow>
            ))}
          </TableBody>
        </StyledTable>
      </Box>
    );
  };
  
  export default DMMienGiam;
  