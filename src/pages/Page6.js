import styled from 'styled-components';
import Grid from '@mui/material/Unstable_Grid2';

import ProgressBar from '../components/Progress_bar'
import Consultation from '../components/Consultation'
import png6 from '../assets/6.png'

const Page6 = () => {
  window.scrollTo(0, 0)
  return (
    <Page6Style>
      <Grid container>
        <Grid xs={12}>
          <ProgressBar bgcolor="green" progress='100' height={10} />
        </Grid>
        <Grid xs={12}>
          <Consultation
            cardImage={png6}
            cardTitle="You’re ready for your free consultation!"
            cardDefinition="In your free consultation, Dr. Clayton answers any other questions you may have about
            hypnotherapy and helps you assess how hypnosis can help you meet your goals. We have
            sessions with our clients both in person and by video!
            Hypnosis is the only tool you need to eliminate anxiety, get fit, and get rid of negative
            influences in your life. Call now to find out what hypnosis can do for you!"
            question="Please Schedule a Consultation"
            next="/Page5"
          />
        </Grid>
      </Grid>
    </Page6Style>
  )
}

export default Page6

const Page6Style = styled.div`
`
