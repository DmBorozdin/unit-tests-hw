import React from 'react';
import {shallow} from 'enzyme';
import CalcTodo from "./CalcTodo";

test('case', ()=> {
  const props = {
    tasks: [
      {value:"Изучить React", isDone:false, isImportant: true, id:1},
      {value:"Найти работу",isDone:false, isImportant: true,id:2}
    ],
    onClickFilteredTasks:'Все',
    filtered:'Все'
  };

  const wrapper = shallow(<CalcTodo tasks={props.tasks}/>);
  expect(wrapper.exists()).toBe(true);
});
