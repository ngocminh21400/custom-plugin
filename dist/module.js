'use strict';

System.register(['lodash', './sunburst_ctrl', 'app/plugins/sdk'], function (_export, _context) {
  "use strict";

  var _, SunburstCtrl, loadPluginCss;

  return {
    setters: [function (_lodash) {
      _ = _lodash.default;
    }, function (_sunburst_ctrl) {
      SunburstCtrl = _sunburst_ctrl.SunburstCtrl;
    }, function (_appPluginsSdk) {
      loadPluginCss = _appPluginsSdk.loadPluginCss;
    }],
    execute: function () {

      loadPluginCss({
        dark: 'plugins/custom-plugin/css/sunburst.dark.css',
        light: 'plugins/custom-plugin/css/sunburst.light.css'
      });

      _export('PanelCtrl', SunburstCtrl);
    }
  };
});
//# sourceMappingURL=module.js.map
