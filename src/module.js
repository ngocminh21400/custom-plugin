import _ from 'lodash';
import {SunburstCtrl} from './sunburst_ctrl';
import {loadPluginCss} from 'app/plugins/sdk';

loadPluginCss({
  dark:  'plugins/custom-plugin/css/sunburst.dark.css',
  light: 'plugins/custom-plugin/css/sunburst.light.css'
});

export {
  SunburstCtrl as PanelCtrl
};

