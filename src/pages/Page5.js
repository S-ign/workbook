import styled from 'styled-components';
import Grid from '@mui/material/Unstable_Grid2';

import ProgressBar from '../components/Progress_bar'
import WorkbookSection from '../components/WorkbookSection'
import png5 from '../assets/5.png'

const Page5 = () => {
  window.scrollTo(0, 0)
  return (
    <Page5Style>
      <Grid container>
        <Grid xs={12}>
          <ProgressBar bgcolor="yellow" progress='85' height={10} />
        </Grid>
        <Grid xs={12}>
          <WorkbookSection
            textDefault=""
            cardImage={png5}
            cardTitle="Optimize Performance"
            cardDefinition="Everyone has the ability to go into “the zone” for any activity. In the zone state you
            automatically have your very best performance and you feel confident and motivated.
            Hypnosis can allow you to go into a zone state automatically for any activity. Studying
            and testing, cold calls and selling, athletic activities, public speaking, and musical
            performances can all be optimized through hypnosis."
            question="What activities do you practice that would benefit from going into the zone?"
            next="/Page6"
          />
        </Grid>
      </Grid>
    </Page5Style>
  )
}

export default Page5

const Page5Style = styled.div`
  background-color: #02369C;
`
