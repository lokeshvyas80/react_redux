import './App.css';
import { Box, Stack, TextField, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import styled from '@emotion/styled';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useSelector, useDispatch } from "react-redux";
import { decNumber, incNumber } from "./actions/index";

const CustomDiv = styled(Box)(({theme})=>({
  margin: "0 auto",
  textAlign: "center",
  width: "400px",
}))

function App() {
  const myState = useSelector((state) => state.incDcrReducer);
  const dispatch = useDispatch()
  // console.log("myState", myState);
  return (
    <>
      <CustomDiv>
        <Typography variant='h4'>Inc and Dcr by redux</Typography>
        <Stack spacing={2} direction="row" sx={{marginTop: "20px"}}>
          <Button variant="contained" onClick={() => dispatch(decNumber())}><RemoveIcon /></Button>
          <TextField variant="outlined" value={myState} />
          <Button variant="contained" onClick={() => dispatch(incNumber(5))}><AddIcon /></Button>
        </Stack> 
      </CustomDiv>
    </>
  );
}

export default App;
