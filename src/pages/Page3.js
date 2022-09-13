import styled from 'styled-components';
import Grid from '@mui/material/Unstable_Grid2';

import ProgressBar from '../components/Progress_bar'
import WorkbookSection from '../components/WorkbookSection'
import png3 from '../assets/3.png'

const Page3 = () => {
  window.scrollTo(0, 0)
  return (
    <Page3Style>
      <Grid container>
        <Grid xs={12}>
          <ProgressBar bgcolor="#4E373F" progress='48' height={10} />
        </Grid>
        <Grid xs={12}>
          <WorkbookSection
            textDefault="I would like to..."
            cardImage={png3}
            cardTitle="Get Fit and Strong"
            cardDefinition="Have you ever wondered why many societies have relatively little problem with
            overeating and related health problems and ours has so much? Our social conditioning
            plays a huge role in our health habits.
            Hypnosis is the only way to bypass that programming and give your unconscious mind
            direct instructions to live in a healthy, happy, and energetic way."
            question="In what ways would you like to become physically healthier and stronger?"
            next="/Page4"
          />
        </Grid>
      </Grid>
    </Page3Style>
  )
}

export default Page3

const Page3Style = styled.div`
  background-color: #E4B6B5;
`
