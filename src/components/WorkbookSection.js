import styled from 'styled-components';
import * as React from 'react';
import { Link } from 'react-router-dom'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const WorkbookSection = (props) => {
  return (
    <WorkbookSectionStyle>
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
        <Grid xs={12} xm={6} sx={{padding: "2rem"}}>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography variant="h4" component="div">
                {props.question}
              </Typography>

              <TextField
                sx={{padding: "2rem", width: "90%"}}
                id="outlined-multiline-static"
                multiline
                rows={4}
                defaultValue={props.textDefault}
              />
              <TextField
                sx={{padding: "2rem", width: "90%"}}
                id="outlined-multiline-static"
                multiline
                rows={4}
                defaultValue={props.textDefault}
              />
              <TextField
                sx={{padding: "2rem", width: "90%"}}
                id="outlined-multiline-static"
                multiline
                rows={4}
                defaultValue={props.textDefault}
              />

            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid xs={12} display="flex" justifyContent="center" sx={{paddingBottom: "2rem"}}>
        <Link to={props.next}>
          <Button variant="contained" color="success" size="large">
            Next
          </Button>
        </Link>
      </Grid>
    </WorkbookSectionStyle>
  )
}

export default WorkbookSection

const WorkbookSectionStyle = styled.div`
  WorkbookSection
`
