import { LoadingButton } from '@mui/lab';
import { Card, Checkbox, Grid, TextField, Combobox } from '@mui/material';


import { Box, styled, useTheme } from '@mui/material';
import { green } from '@mui/material/colors';
import { border, borderRadius, height, borderColor } from '@mui/system';
import { Paragraph } from 'app/components/Typography';
import useAuth from 'app/hooks/useAuth';
import { color } from 'echarts';
import { Formik } from 'formik';
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

import {MenuCVDang, MenuNN} from './MenuCVDang';


const FlexBox = styled(Box)(() => ({ display: 'flex', alignItems: 'center' }));

const JustifyBox = styled(FlexBox)(() => ({ justifyContent: 'center' }));

const ContentBox = styled(Box)(() => ({
  textAlign:'center',
  height: '100%',
  padding: '32px',
  position: 'relative',
  background: 'rgba(0, 0, 0, 0.01)'
}));


const Image = styled('img')({
  textAlign:'center',
  border: '1px solid #ddd',
  borderRadius: '4px',
  padding: '10px',
  width: '250px',
  height: '250px'
});
 



const JWTRoot = styled(JustifyBox)(() => ({
  background: '#eff0f6',
  minHeight: '100% !important',
  '& .card': {
    maxWidth: 800,
    // minHeight: 400,
    margin: '1rem',
    display: 'flex',
    borderRadius: 12,
    alignItems: 'center'
  }
}));

// inital login credentials
const initialValues = {
  name: 'Vũ Thị Ngọc Ánh',
  email: 'jason@ui-lib.com',
  password: 'dummyPass',
  remember: true
};

// form field validation schema
const validationSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, 'Password must be 6 character length')
    .required('Password is required!'),
  email: Yup.string().email('Invalid Email address').required('Email is required!')
});



const LyLich = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();

  const handleFormSubmit = async (values) => {
    setLoading(true);
    try {
      await login(values.email, values.password);
      navigate('/dashboard/default');
    } catch (e) {
      setLoading(false);
    }
  };

  return (
  <>
   <Grid container>
          <Grid item sm={4} xs={12}>
            <ContentBox>
              <Image src="/assets/images/illustrations/dreamer.svg" />
              </ContentBox>
          </Grid>

          <Grid item sm={8} xs={12}>
            <ContentBox>
              <h2 >HỒ SƠ CÁ NHÂN VỀ CÁN BỘ, SỸ QUAN </h2>
              <Formik
                onSubmit={handleFormSubmit}
                initialValues={initialValues}
                validationSchema={validationSchema}
              >
                {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
                  <form onSubmit={handleSubmit}>
                    <TextField
                      fullWidth
                      size="small"
                      type="email"
                      name="email"
                      label="Số hiệu sĩ quan"
                      variant="outlined"
                      onBlur={handleBlur}
                      value={""}
                       onChange={handleChange}
                      // helperText={touched.email && errors.email}
                      // error={Boolean(errors.email && touched.email)}
                       sx={{ mb: 3 }}
                    />

<TextField
                      fullWidth
                      size="small"
                      type="email"
                      name="email"
                      label="Trạng thái"
                      variant="outlined"
                      onBlur={handleBlur}
                      value={""}
                      onChange={handleChange}
                  
                      sx={{ mb: 3 }}
                    />

                    <TextField
                      fullWidth
                      size="small"
                      type="email"
                      name="email"
                      label="Họ và Tên"
                      variant="outlined"
                      onBlur={handleBlur}
                      value={""}
                      onChange={handleChange}
                      
                      sx={{ mb: 3 }}
                    />
                    <TextField
                      fullWidth
                      size="small"
                      type="email"
                      name="email"
                      label="Ngày sinh "
                      variant="outlined"
                      onBlur={handleBlur}
                      value={""}
                      onChange={handleChange}
                    
                      sx={{ mb: 3 }}
                    />

                    <FlexBox justifyContent="space-between">
                      
                      <FlexBox gap={1}>
                        <Checkbox
                          size="small"
                          name="remember"
                          label="Giới tính"
                          onChange={handleChange}
                          checked={values.remember}
                          sx={{ padding: 0 }}
                        />

                        <Paragraph>(Nữ -> Chọn / Nam -> Không chọn)</Paragraph>
                        <br></br>
                      </FlexBox>  
                      </FlexBox>
                      <br></br>

                      <TextField
                      fullWidth
                      size="small"
                      type="email"
                      name="email"
                      label="Dân tộc"
                      variant="outlined"
                      onBlur={handleBlur}
                      value={""}
                      onChange={handleChange}
                 
                      sx={{ mb: 3 }}
                    />



                    <TextField
                      fullWidth
                      size="small"
                      type="email"
                      name="email"
                      label="Tôn giáo "
                      variant="outlined"
                      onBlur={handleBlur}
                      value={""}
                      onChange={handleChange}
                     
                      sx={{ mb: 3 }}
                    />
                    <TextField
                      fullWidth
                      size="small"
                      type="email"
                      name="email"
                      label="Quê quán"
                      variant="outlined"
                      onBlur={handleBlur}
                      value={""}
                      onChange={handleChange}
                 
                      sx={{ mb: 3 }}
                    />

                    <TextField
                      fullWidth
                      size="small"
                      type="email"
                      name="email"
                      label="Trú quán"
                      variant="outlined"
                      onBlur={handleBlur}
                      value={""}
                      onChange={handleChange}
                
                      sx={{ mb: 3 }}
                    />
                    <TextField
                      fullWidth
                      size="small"
                      type="email"
                      name="email"
                      label="Địa chỉ liên lạc"
                      variant="outlined"
                      onBlur={handleBlur}
                      value={""}
                      onChange={handleChange}
                    
                      sx={{ mb: 3 }}
                    />
                    <TextField
                      fullWidth
                      size="small"
                      type="email"
                      name="email"
                      label="Số điện thoại"
                      variant="outlined"
                      onBlur={handleBlur}
                      value={""}
                      onChange={handleChange}
              
                      sx={{ mb: 3 }}
                    />

                    <TextField
                      fullWidth
                      size="small"
                      type="email"
                      name="email"
                      label="Email"
                      variant="outlined"
                      onBlur={handleBlur}
                      value={""}
                      onChange={handleChange}
                     
                      sx={{ mb: 3 }}
                    />

<TextField
                      fullWidth
                      size="small"
                      type="email"
                      name="email"
                      label="Ngày nhập ngũ"
                      variant="outlined"
                      onBlur={handleBlur}
                      value={""}
                      onChange={handleChange}
                     
                      sx={{ mb: 3 }}
                    />


                <MenuCVDang sx={{ mb: 3 }}/>
                <br/>
               



<TextField
                      fullWidth
                      size="small"
                      type="email"
                      name="email"
                      label="Ngày vào Đảng (Đoàn)"
                      variant="outlined"
                      onBlur={handleBlur}
                      value={""}
                      onChange={handleChange}
                      
                      sx={{ mb: 3 }}
                    />

<TextField
                      fullWidth
                      size="small"
                      type="email"
                      name="email"
                      label="Loại cán bộ"
                      variant="outlined"
                      onBlur={handleBlur}
                      value={""}
                      onChange={handleChange}
                      
                      sx={{ mb: 3 }}
                    />


<TextField
                      fullWidth
                      size="small"
                      type="email"
                      name="email"
                      label="Cấp bậc"
                      variant="outlined"
                      onBlur={handleBlur}
                      value={""}
                      onChange={handleChange}
                      
                      sx={{ mb: 3 }}
                    />

<TextField
                      fullWidth
                      size="small"
                      type="email"
                      name="email"
                      label="Chức vụ"
                      variant="outlined"
                      onBlur={handleBlur}
                      value={""}
                      onChange={handleChange}
                      
                      sx={{ mb: 3 }}
                    />


<TextField
                      fullWidth
                      size="small"
                      type="email"
                      name="email"
                      label="Đơn vị"
                      variant="outlined"
                      onBlur={handleBlur}
                      value={""}
                      onChange={handleChange}
                      
                      sx={{ mb: 3 }}
                    />


<TextField
                      fullWidth
                      size="small"
                      type="email"
                      name="email"
                      label="Qua chiến đấu"
                      variant="outlined"
                      onBlur={handleBlur}
                      value={""}
                      onChange={handleChange}
                      
                      sx={{ mb: 3 }}
                    />

<TextField
                      fullWidth
                      size="small"
                      type="email"
                      name="email"
                      label="Chiến trường"
                      variant="outlined"
                      onBlur={handleBlur}
                      value={""}
                      onChange={handleChange}
                     
                      sx={{ mb: 3 }}
                    />

<TextField
                      fullWidth
                      size="small"
                      type="email"
                      name="email"
                      label="Qua đào tạo ở nước ngoài"
                      variant="outlined"
                      onBlur={handleBlur}
                      value={""}
                      onChange={handleChange}
                      
                      sx={{ mb: 3 }}
                    />

<TextField
                      fullWidth
                      size="small"
                      type="email"
                      name="email"
                      label="Nguồn nhân sự"
                      variant="outlined"
                      onBlur={handleBlur}
                      value={""}
                      onChange={handleChange}
                      
                      sx={{ mb: 3 }}
                    />

<TextField
                      fullWidth
                      size="small"
                      type="email"
                      name="email"
                      label="Sức khoẻ"
                      variant="outlined"
                      onBlur={handleBlur}
                      value={""}
                      onChange={handleChange}
                     
                      sx={{ mb: 3 }}
                    />
<TextField
                      fullWidth
                      size="small"
                      type="email"
                      name="email"
                      label="Thương binh"
                      variant="outlined"
                      onBlur={handleBlur}
                      value={""}
                      onChange={handleChange}
                     
                      sx={{ mb: 3 }}
                    />

<TextField
                      fullWidth
                      size="small"
                      type="email"
                      name="email"
                      label="Bệnh binh"
                      variant="outlined"
                      onBlur={handleBlur}
                      value={""}
                      onChange={handleChange}
                      
                      sx={{ mb: 3 }}
                    />

<TextField
                      fullWidth
                      size="small"
                      type="email"
                      name="email"
                      label="Văn hoá phổ thông"
                      variant="outlined"
                      onBlur={handleBlur}
                      value={""}
                      onChange={handleChange}
                      
                      sx={{ mb: 3 }}
                    />
<TextField
                      fullWidth
                      size="small"
                      type="email"
                      name="email"
                      label="Năm tốt nghiệp"
                      variant="outlined"
                      onBlur={handleBlur}
                      value={""}
                      onChange={handleChange}
                      
                      sx={{ mb: 3 }}
                    />


<TextField
                      fullWidth
                      size="small"
                      type="email"
                      name="email"
                      label="Nơi học"
                      variant="outlined"
                      onBlur={handleBlur}
                      value={""}
                      onChange={handleChange}
                     
                      sx={{ mb: 3 }}
                    />
<TextField
                      fullWidth
                      size="small"
                      type="email"
                      name="email"
                      label="Trình độ học vấn <Học vị>"
                      variant="outlined"
                      onBlur={handleBlur}
                      value={""}
                      onChange={handleChange}
                      
                      sx={{ mb: 3 }}
                    />
<TextField
                      fullWidth
                      size="small"
                      type="email"
                      name="email"
                      label="Chức danh"
                      variant="outlined"
                      onBlur={handleBlur}
                      value={""}
                      onChange={handleChange}
                      
                      sx={{ mb: 3 }}
                    />
<TextField
                      fullWidth
                      size="small"
                      type="email"
                      name="email"
                      label="Chuyên ngành"
                      variant="outlined"
                      onBlur={handleBlur}
                      value={""}
                      onChange={handleChange}
                     
                      sx={{ mb: 3 }}
                    />
<TextField
                      fullWidth
                      size="small"
                      type="email"
                      name="email"
                      label="Năng lực sở trường"
                      variant="outlined"
                      onBlur={handleBlur}
                      value={""}
                      onChange={handleChange}
                     
                      sx={{ mb: 3 }}
                    />
<TextField
                      fullWidth
                      size="small"
                      type="email"
                      name="email"
                      label="Qua ĐT< BD theo chức vụ"
                      variant="outlined"
                      onBlur={handleBlur}
                      value={""}
                      onChange={handleChange}
                      
                      sx={{ mb: 3 }}
                    />
<TextField
                      fullWidth
                      size="small"
                      type="email"
                      name="email"
                      label="Kinh nghiệm thực tế LĐ chỉ huy"
                      variant="outlined"
                      onBlur={handleBlur}
                      value={""}
                      onChange={handleChange}
                      
                      sx={{ mb: 3 }}
                    />
<TextField
                      fullWidth
                      size="small"
                      type="email"
                      name="email"
                      label="Qua đào tạo, bồi dưỡng giáo viên"
                      variant="outlined"
                      onBlur={handleBlur}
                      value={""}
                      onChange={handleChange}
                      
                      sx={{ mb: 3 }}
                    />

<TextField
                      fullWidth
                      size="small"
                      type="email"
                      name="email"
                      label="Danh hiệu"
                      variant="outlined"
                      onBlur={handleBlur}
                      value={""}
                      onChange={handleChange}
                     
                      sx={{ mb: 3 }}
                    />
<TextField
                      fullWidth
                      size="small"
                      type="email"
                      name="email"
                      label="Văn bằng chứng chỉ"
                      variant="outlined"
                      onBlur={handleBlur}
                      value={""}
                      onChange={handleChange}
                      
                      sx={{ mb: 3 }}
                    />

<TextField
                      fullWidth
                      size="small"
                      type="email"
                      name="email"
                      label="Trình độ tin học"
                      variant="outlined"
                      onBlur={handleBlur}
                      value={""}
                      onChange={handleChange}
                     
                      sx={{ mb: 3 }}
                    />
<TextField
                      fullWidth
                      size="small"
                      type="email"
                      name="email"
                      label="Trình độ ngoại ngữ"
                      variant="outlined"
                      onBlur={handleBlur}
                      value={""}
                      onChange={handleChange}
                      
                      sx={{ mb: 3 }}
                    />
<MenuNN sx={{ mb: 3 }}/>
                <br/>
               

<TextField
                      fullWidth
                      size="small"
                      type="email"
                      name="email"
                      label="Cấp giảng dạy"
                      variant="outlined"
                      onBlur={handleBlur}
                      value={""}
                      onChange={handleChange}
                     
                      sx={{ mb: 3 }}
                    />
<TextField
                      fullWidth
                      size="small"
                      type="email"
                      name="email"
                      label="Thâm niên giảng dạy"
                      variant="outlined"
                      onBlur={handleBlur}
                      value={""}
                      onChange={handleChange}
                      
                      sx={{ mb: 3 }}
                    />

                      
                  </form>
                )}
              </Formik>
            </ContentBox>
          </Grid>
        </Grid>
   
   </>
      
     
   
  );
};

export default LyLich;
