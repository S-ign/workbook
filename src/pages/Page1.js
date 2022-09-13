import styled from 'styled-components';
import Grid from '@mui/material/Unstable_Grid2';

import ProgressBar from '../components/Progress_bar'
import WorkbookSection from '../components/WorkbookSection'
import png1 from '../assets/1.png'

const Page1 = () => {
  return (
    <Page1Style>
      <Grid container>
        <Grid xs={12}>
          <ProgressBar bgcolor="#A5A3AB" progress='16' height={10}/>
        </Grid>
        <Grid xs={12}>
          <WorkbookSection
            textDefault="I believe..."
            cardImage={png1}
            cardTitle="What is hypnosis?"
            cardDefinition="Hypnosis is a powerful state in which positive suggestions can be placed directly into
            your unconscious mind. It’s also a natural state in which you are in control of how you
            think, feel, and behave.
            Hypnosis is very useful for helping your unconscious mind accept beliefs that you may
            have spent your entire life not believing. Some people believe they cannot become fit and
            strong, or that they cannot eliminate anxiety from their lives, or that they cannot stop
            using a substance that is harming them."
            question="What beliefs about yourself do you have that you would like to change?"
            next="/Page2"
          />
        </Grid>
      </Grid>
    </Page1Style>
  )
}

export default Page1

const Page1Style = styled.div`
  background-color: #D1B190;
`
