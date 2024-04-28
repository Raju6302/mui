import {Button, styled} from '@mui/material'
import HourglassFullIcon from '@mui/icons-material/HourglassFull';
import AddIcon from '@mui/icons-material/Add';


function app() {

  const BlueButton = styled(Button) ({
      backgroundColor:"skyblue",
      color:"#888",
      margin:5,
      "&:hover" : {
        backgroundColor:"violet",
        color:"#fff"
      },
      "&:disabled" : {
        backgroundColor:"grey",
        color:"#fff"
      }
  })
  return (
    <div>
      <Button variant="text" size='small'>Text</Button>
      <Button variant="contained" color="secondary" size='medium' endIcon={<HourglassFullIcon/>}>Contained</Button>
      <Button variant="outlined" color="error" size='large'> Outlined</Button>
      <Button color='success' variant='contained' startIcon={<AddIcon/>}>
        Add New Post
      </Button>
      <Button variant='contained' disabled sx={{
        backgroundColor:"skyblue",
        color:"#888",
        margin:5,
        "&:hover" : {
          backgroundColor:"violet",
          color:"#fff"
        },
        "&:disabled" : {
          backgroundColor:"grey",
          color:"#fff"
        }
      }}>
        My Unique Button
      </Button>
        <BlueButton>My Button</BlueButton>
        <BlueButton>Another Blue Button</BlueButton>
    </div>
  );
}

