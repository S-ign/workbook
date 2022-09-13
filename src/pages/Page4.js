import styled from 'styled-components';
import Grid from '@mui/material/Unstable_Grid2';

import ProgressBar from '../components/Progress_bar'
import WorkbookSection from '../components/WorkbookSection'
import png4 from '../assets/4.png'

const Page4 = () => {
  window.scrollTo(0, 0)
  return (
    <Page4Style>
      <Grid container>
        <Grid xs={12}>
          <ProgressBar bgcolor="#02369C" progress='64' height={10} />
        </Grid>
        <Grid xs={12}>
          <WorkbookSection
            textDefault="I would like to eliminate or reduce..."
            cardImage={png4}
            cardTitle="Quit Bad Habits"
            cardDefinition="If your unconscious mind believes that you need the substance, it will create compulsion
            to keep the bad habit in place and no amount of willpower will be able to keep you from
            using the substance for long.
            Hypnosis helps your unconscious to understand that it does not need to create that
            compulsion, making the process of eliminating harmful substances nearly effortless."
            question="What substances would you like to eliminate or reduce in your life?"
            next="/Page5"
          />
        </Grid>
      </Grid>
    </Page4Style>
  )
}

export default Page4

const Page4Style = styled.div`
  background-color: #4E373F;
`
