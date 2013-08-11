exports.routes = function (map) {

  map.get('/', 'homepage#show');

  // Partials
  map.get('partials/:partial', 'partials#show');

  // Admin
  map.get('admin', 'admin#index');
  map.get('api/1/status/:section?', 'status#index');

  // Fixtures
  map.get('admin/fixture/reset', 'fixture#reset');
  map.post('admin/fixture/configs', 'fixture#configsPost');
};
