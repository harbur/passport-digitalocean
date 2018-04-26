/**
 * Parse profile.
 *
 * @param {Object|String} json
 * @return {Object}
 * @api private
 */
exports.parse = function(json) {
  if ('string' == typeof json) {
    json = JSON.parse(json);
  }


  var profile = {};
  profile.id = String(json.account.uuid);
  profile.email = String(json.account.email);

  return profile;
};
