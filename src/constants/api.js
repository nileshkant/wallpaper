export default {
  // The URL we're connecting to
  hostname: 'https://api.unsplash.com',
  // Map shortnames to the actual endpoints, so that we can use them in the middleware
  endpoints: {
    'users': '/users',
    'deleteUser': '/users',
    'getUser': '/users',
    'homeCollection':'/collections/1224242/photos/?client_id=2f328febe9907d693afb2cd4ac6b6419cb072ce6168076dbe9d3bf231ae86984'
  }
};
