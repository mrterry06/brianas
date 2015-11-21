import { INITIAL_STATE, usersReducer } from './reducer';


describe('Users reducer', () => {
  it('should return the initial state when action.type is not found', () => {
    expect(usersReducer(undefined, {})).toEqual(INITIAL_STATE);
  });
});
