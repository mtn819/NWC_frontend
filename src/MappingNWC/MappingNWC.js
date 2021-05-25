import React from 'react'
import { Container } from 'react-bootstrap'
import Contribute from './Contribute'
import Involve from './Involve'
import Submissions from './Submissions'

function MappingNWC() {
  return (
    <Container>
      <Contribute/><hr/>
      <Involve/><hr/>
      <Submissions/>
    </Container>
  )
}

export default MappingNWC
