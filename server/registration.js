ServiceConfiguration.configurations.update(
  { "service": "spotify" },
  {
    $set: {
      "clientId": "f3c2e918ab494f1099186c3ac13e4dd7",
      "secret": "3948ef403ebc40769110aa40a2d9ac18"
    }
  },
  { upsert: true }
);
