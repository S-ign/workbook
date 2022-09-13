import styled from 'styled-components';
import Grid from '@mui/material/Unstable_Grid2';

import ProgressBar from '../components/Progress_bar'
import WorkbookSection from '../components/WorkbookSection'
import png2 from '../assets/2.png'

const Page2 = () => {
  window.scrollTo(0, 0)
  return (
    <Page2Style>
      <Grid container>
        <Grid xs={12}>
          <ProgressBar bgcolor="#E4B6B5" progress='32' height={10} />
        </Grid>
        <Grid xs={12}>
          <WorkbookSection
            textDefault="I would like to..."
            cardImage={png2}
            cardTitle="Eliminate Anxieties and Phobias"
            cardDefinition="Anxieties and phobias prevent us from living life to its fullest. How many things have you
            thought about doing but been too afraid to do? How many things do you HAVE to do but
            are unpleasant activities because of anxiety?
            Hypnosis is the only way to directly bypass your social conditioning and give you new
            ways to perceive the world."
            question="What would you like to do with your life that currently creates anxiety or fear?"
            next="/Page3"
          />
        </Grid>
      </Grid>
    </Page2Style>
  )
}

export default Page2

const Page2Style = styled.div`
  background-color: #A5A3AB;
`
