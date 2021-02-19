import React from 'react';
import {shallow} from 'enzyme';
import CalcTodo from "./CalcTodo";

test('case', ()=> {
  const wrapper = shallow(<CalcTodo/>);

  expect(wrapper.exists()).toBe(true);
});
