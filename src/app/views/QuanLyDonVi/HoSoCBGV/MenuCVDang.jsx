import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';

export function MenuCVDang () {
    return (
<FormControl fullWidth sx={{minWidth: 120}} variant="standard">
  <InputLabel>Chức vụ Đảng</InputLabel>
  <Select name="date">
    <MenuItem value="item1">Bí thư</MenuItem>
    <MenuItem value="item2">Phó bí thư</MenuItem>
    <MenuItem value="item3">Đảng viên</MenuItem>
  </Select>
  <br/>
</FormControl>)
}



export function MenuNN () {
    return (
<FormControl fullWidth sx={{minWidth: 120}} variant="standard">
  <InputLabel>Ngoại ngữ</InputLabel>
  <Select name="date">
    <MenuItem value="item1">Tiếng Anh</MenuItem>
    <MenuItem value="item2">Tiếng Nga</MenuItem>
    <MenuItem value="item3">Tiếng Nhật</MenuItem>
  </Select>
  <br/>
</FormControl>)}
;