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
  test('can pull classes from database', () => {
    return superagent.get(`${API_URL}/classes/9`)
      .then((getRequest) => {
        expect(getRequest.body.name).toEqual('Rogue');
      });
  });
  test('can pull damage-type from database', () => {
    return superagent.get(`${API_URL}/damage-types/1`)
      .then((getRequest) => {
        expect(getRequest.body.desc[0]).toEqual('The corrosive spray of a black dragon’s breath and the dissolving enzymes secreted by a black pudding deal acid damage.');
      });
  });
  test('can pull equipment/equipment properties from database', () => {
    return superagent.get(`${API_URL}/equipment/78`)
      .then((getRequest) => {
        expect(getRequest.body.weight).toEqual(1);
      });
  });
  test('can pull subraces from database', () => {
    return superagent.get(`${API_URL}/subraces/6`)
      .then((getRequest) => {
        expect(getRequest.body.name).toEqual('Dark Elf (Drow)');
      });
  });
});
