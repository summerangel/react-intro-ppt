import React, { Component } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

import FirstSlide from './containers/FirstSlide/FirstSlide'
import SecondSlide from './containers/SecondSlide/SecondSlide'
import ThirdSlide from './containers/ThirdSlide/ThirdSlide'
import FourSlide from './containers/FourSlide/FourSlide'
import FiveSlide from './containers/FiveSlide/FiveSlide'
import SixSlide from './containers/SixSlide/SixSlide'
import SevenSlide from './containers/SevenSlide/SevenSlide'
import EightSlide from './containers/EightSlide/EightSlide'
import LastSlide from './containers/LastSlide/LastSlide'

class App extends Component {
  render() {
    return (
        <ReactFullpage
            onLeave={(origin, destination, direction) => {
              // console.log('onLeave event', { origin, destination, direction })
            }}
            render={({ state, fullpageApi }) => {
              // console.log('', state, fullpageApi) // eslint-disable-line no-console
                return (
                    <div className="App App-header App-link">
                      <FirstSlide />
                      <SecondSlide />
                      <ThirdSlide />
                      <FourSlide />
                      <FiveSlide />
                      <SixSlide />
                      <EightSlide />
                      <SevenSlide />
                      <LastSlide />
                    </div>
                )
            }}
        />
    );
  }
}

export default App;
