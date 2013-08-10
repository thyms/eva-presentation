exports.routes = function (map) {

  map.get('/', 'homepage#show');

  // Partials
  map.get('/partials/:partial', 'partials#show');

  // Admin
  map.get('admin/status', 'status#show');

  // Fixtures
  map.get('admin/fixture/reset', 'fixture#reset');
  map.post('admin/fixture/configs', 'fixture#configsPost');
};
