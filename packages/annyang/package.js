Package.describe({
  name: 'newswim:annyang',
  version: '1.0.0',
  summary: 'A tiny javascript SpeechRecognition library that lets your users control your site with voice commands.',
  git: 'https://github.com/newswim/meteor-annyang/tree/master/packages/annyang',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');
  api.addFiles('annyang.js');
  api.addFiles('annyang.min.js');
  api.export('annyang', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('newswim:annyang');
  api.addFiles('annyang-tests.js');
});
