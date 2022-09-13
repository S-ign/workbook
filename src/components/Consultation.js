import styled from 'styled-components';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Calendar } from 'grommet'

const Consultation = (props) => {
  const [name, setName] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [phone, setPhone] = React.useState("")
  const [date, setDate] = React.useState("")
  const [msg, setMsg] = React.useState("")

  let newDate = new Date(date)
  let dateString = newDate.toLocaleDateString()
  let displayMsg = false

  const scheduleHandler = () => {
    setMsg(`${name.target.value},
      Thank you for Sheduling a consultation on ${dateString},
      please check your email, ${email.target.value}, for confirmation.`)
  }

  if (name !== "" && email !== "" && phone !== "") {
    displayMsg = true
  }

  return (
    <ConsultationStyle>
      <Grid container sx={{padding: "3rem"}}>
        <Grid xs={12} xm={6} display="flex" justifyContent="center">
          <Card sx={{ maxWidth: 700, borderRadius: "2rem" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                image={props.cardImage}
                alt="consultant taking notes"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {props.cardTitle}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {props.cardDefinition}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid xs={12} display="flex" justifyContent="center" xm={6} sx={{padding: "2rem"}}>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography variant="h4" component="div">
                {props.question}
              </Typography>

              <TextField
                required
                id="outlined-required"
                label="Full Name"
                variant="standard"
                sx={{padding:".5rem"}}
                onChange={setName}
              />
              <TextField
                required
                id="outlined-required"
                label="Email Address"
                variant="standard"
                sx={{padding:".5rem"}}
                onChange={setEmail}
              />
              <TextField
                required
                id="outlined-required"
                label="Phone Number"
                variant="standard"
                sx={{padding:".5rem"}}
                onChange={setPhone}
              />

              <Grid container sx={{paddingTop: "3rem"}}>
                <Grid xs={12} display="flex" justifyContent="center">
                  <Calendar
                    size="medium"
                    date={date}
                    onSelect={(date) => {setDate(date)}}
                    animate={true}
                  />
                </Grid>
                  <Grid xs={12} display="flex" justifyContent="center">
                    {
                      displayMsg &&
                        <Typography variant="h4" component="div" display="flex" justifyContent="center" sx={{width:"1rem", paddingTop: "2rem"}}>
                        {msg}
                      </Typography>
                    }
                  </Grid>
              </Grid>


            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid xs={12} display="flex" justifyContent="center" sx={{paddingBottom: "2rem"}}>
          <Button onClick={scheduleHandler} variant="contained" color="success" size="large">
            Book
          </Button>
      </Grid>
    </ConsultationStyle>
  )
}

export default Consultation

const ConsultationStyle = styled.div`
        `
