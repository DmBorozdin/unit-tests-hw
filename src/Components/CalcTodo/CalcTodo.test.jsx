import React from 'react';
import {shallow} from 'enzyme';
import CalcTodo from "./CalcTodo";

describe('CalcTodo тесты', ()=>{
    const props = {
      tasks: [
        {value:"Изучить React", isDone:false, isImportant: true, id:1},
        {value:"Найти работу",isDone:false, isImportant: true,id:2}
      ],
      onClickFilteredTasks:'Все',
      filtered:'Все'
    };
  describe('Проверяем исходное состояние',()=>{
    const wrapper = shallow(<CalcTodo tasks={props.tasks}/>);
    test('Создан компонент CalcTodo', ()=> {
      expect(wrapper.exists()).toBe(true);
    });
    test('Создано 3 кнопки', ()=> {
      expect(wrapper.find('button')).toHaveLength(3);
    });
    test('Кнопка "все" имеет текст = 2', ()=> {
      expect(wrapper.find('button').last().find('span').text()).toEqual('2');
    });
    test('Кнопка "сделано" имеет текст = 0', ()=> {
      expect(wrapper.find('button').first().find('span').text()).toEqual('0');
    });
    test('Кнопка "осталось" имеет текст = 2', ()=> {
      expect(wrapper.find('button').at('1').find('span').text()).toEqual('2');
    });
  })

  describe('Увеличим колличество задач',()=>{
    const nextProps = {
      ...props,
      tasks: [
        {value:"Изучить React", isDone:false, isImportant: true, id:1},
        {value:"Найти работу",isDone:false, isImportant: true,id:2},
        {value:"Написать резюме",isDone:false, isImportant: true,id:3},
        {value:"Сходить на собеседование",isDone:false, isImportant: true,id:4},
      ]
    };

    const wrapper = shallow(<CalcTodo tasks={nextProps.tasks}/>);

    test('Кнопка "все" имеет текст = 4', ()=> {
      expect(wrapper.find('button').last().find('span').text()).toEqual('4');
    });
    test('Кнопка "сделано" имеет текст = 0', ()=> {
      expect(wrapper.find('button').first().find('span').text()).toEqual('0');
    });
    test('Кнопка "осталось" имеет текст = 4', ()=> {
      expect(wrapper.find('button').at('1').find('span').text()).toEqual('4');
    });
  })
});
