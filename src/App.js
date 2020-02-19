import React, { useState } from 'react';
import { faUniversity, faTrain, faHashtag, faToolbox } from '@fortawesome/free-solid-svg-icons'

import './App.css'
import Section from './Section';

const App = () => {

  const [sections, setSections] = useState([
    { headline: 'university', text: 'Im studying computer science as TU Berlin in 3rd semester. I think there\'s not much more to say.', icon: faUniversity },
    { headline: 'work', text: 'wip', icon: faTrain },
    {
      headline: 'media',
      text:
        'instagram: @paulderfischer\ntwitter: @paulderfischer\ngithub: @paulderfischer', 
    icon: faHashtag
    },
    { headline: 'toolbox', text: 'Every developer does things repetitively. Setting up a tiny express server, configuring a local proxy, ...\nI want to collect such things to make my life (and maybe yours) easyer. wip', icon: faToolbox }
  ])
  return (
    <div className="app" >
      <div className="header">
        <h1>Hi. I'm Paul.</h1>
      </div>
      {sections.map(({ headline, text, icon }) => (
        <Section
          headline={headline}
          text={text}
          icon={icon}
        ></Section>
      ))}
    </div >
  )
}

export default App;
