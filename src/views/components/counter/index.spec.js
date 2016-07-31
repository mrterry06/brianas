import React from 'react';
import { shallow } from 'enzyme';
import Counter from './index';


describe('components', () => {
  describe('Counter', () => {
    let props;

    beforeEach(() => {
      props = jasmine.createSpyObj('props', [
        'decrement',
        'increment',
        'incrementAsync',
        'incrementIfOdd'
      ]);
    });


    function getWrapper() {
      return shallow(
        <Counter {...props} />
      );
    }


    it('should have a `decrement` button', () => {
      let button = getWrapper().find('Button').at(0);
      expect(button.prop('onClick')).toBe(props.decrement);
      expect(button.shallow().text()).toBe('-');
    });

    it('should have a `increment` button', () => {
      let button = getWrapper().find('Button').at(1);
      expect(button.prop('onClick')).toBe(props.increment);
      expect(button.shallow().text()).toBe('+');
    });

    it('should have a `increment async` button', () => {
      let button = getWrapper().find('Button').at(2);
      expect(button.prop('onClick')).toBe(props.incrementAsync);
      expect(button.shallow().text()).toBe('Increment async');
    });

    it('should have a `increment if odd` button', () => {
      let button = getWrapper().find('Button').at(3);
      expect(button.prop('onClick')).toBe(props.incrementIfOdd);
      expect(button.shallow().text()).toBe('Increment if odd');
    });
  });
});
