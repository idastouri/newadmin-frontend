const Config = Object.freeze({
  envs: {
    dev: {
      name: 'Dev',
      apiUrl: 'http://apidev.namoncraze.com',
      adminIds: ["31057"],
      superadminIds: [],
      titleColor: '#339933',
    },
    stage: {
      name: 'Stage',
      apiUrl: 'https://api.oncraze.com',
      adminIds: [],
      superadminIds: [],
      titleColor: '#6699ff',
    },
    prod: {
      name: 'Prod',
      apiUrl: 'https://api.oncraze.com',
      adminIds: [],
      superadminIds: [],
      titleColor: '#ff3333',
    }
  },

  get defaultEnv() {
    // Set Dev as default environment
    return this.envs['dev'];
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
