import React from 'react';
import WizardOne from './components/WizardOne/WizardOne';
import WizardTwo from './components/WizardTwo/WizardTwo';
import WizardThree from './components/WizardThree/WizardThree';
import WizardFour from './components/WizardFour/WizardFour';
import WizardFive from './components/WizardFive/WizardFive';
import WizardSix from './components/WizardSix/WizardSix';
import WizardSeven from './components/WizardSeven/WizardSeven';
import WizardEight from './components/WizardEight/WizardEight';
import WizardNine from './components/WizardNine/WizardNine';
import WizardTen from './components/WizardTen/WizardTen';
import WizardEleven from './components/WizardEleven/WizardEleven';
import Finish from './components/Finish/Finish';

import NextBtn from './components/NextBtn/NextBtn';
import { HashRouter, Route } from 'react-router-dom';

export default (
  <HashRouter>
    <div>
      <Route exact path="/" component={NextBtn} />
      <Route path="/wOne" component={WizardOne} />
      <Route path="/wTwo" component={WizardTwo} />
      <Route path="/wThree" component={WizardThree} />
      <Route path="/wFour" component={WizardFour} />
      <Route path="/wFive" component={WizardFive} />
      <Route path="/wSix" component={WizardSix} />
      <Route path="/wSeven" component={WizardSeven} />
      <Route path="/wEight" component={WizardEight} />
      <Route path="/wNine" component={WizardNine} />
      <Route path="/wTen" component={WizardTen} />
      <Route path="/wEleven" component={WizardEleven} />
      <Route path="/finish" component={Finish} />
    </div>
  </HashRouter>
);
