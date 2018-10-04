'use strict';

const superagent = require('superagent');

const API_URL = 'http://www.dnd5eapi.co/api';

describe('dnd api spike', () => {
  test('can pull spells from database. this uses the query selector.', () => {
   return superagent.get(`${API_URL}/spells/?name=Lightning+Bolt`)
     .then((getRequest) => {
       expect(getRequest.body.results[0].name).toEqual('Lightning Bolt');
     });
  });
  test('')
});
