const Config = Object.freeze({
  envs: [
    {
      name: 'Dev',
      apiUrl: 'http://apidev.namoncraze.com',
      adminIds: ["31057"],
      superadminIds: []
    },
    {
      name: 'Stage',
      apiUrl: 'https://api.oncraze.com',
      adminIds: [],
      superadminIds: []
    },
    {
      name: 'Prod',
      apiUrl: 'https://api.oncraze.com',
      adminIds: [],
      superadminIds: []
    }
  ],

  get defaultEnv() {
    // Set Dev as default environment
    return this.envs.find(env => env.name === 'Dev');
  },

  brands: ['Events', 'Fitness', 'Food', 'Travel', 'Fashion', 'Style', 'Home', 'Beauty'],

  defaultBrand: 'Events',

  messages: {
    errors: {
      accessRightsError: 'User is not authenticated for this Environment'
    }
  }
});

export default Config;
