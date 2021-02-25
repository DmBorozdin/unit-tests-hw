import React from 'react';
import {shallow} from 'enzyme';
import CalcTodo from "./CalcTodo";

describe('CalcTodo тесты', ()=>{
    const props = {
      tasks: [
        {value:"Изучить React", isDone:false},
        {value:"Найти работу",isDone:false}
      ],
      filtered:'Все'
    };


  describe('Проверяем исходное состояние',()=>{
    const wrapper = shallow(<CalcTodo tasks={props.tasks} filtered={props.filtered}/>);
    test('Создан компонент CalcTodo', ()=> {
      expect(wrapper.exists()).toBe(true);
    });
    test('Создано 3 кнопки', ()=> {
      expect(wrapper.find('button')).toHaveLength(3);
    });
    test('Кнопка "все" имеет текст = 2 и класс "selected"', ()=> {
      expect(wrapper.find('button').last().find('span').text()).toEqual('2');
      expect(wrapper.find('button').last().is('.selected')).toBeTruthy();
    });
    test('Кнопка "сделано" имеет текст = 0 и не имеет класс "selected"', ()=> {
      expect(wrapper.find('button').first().find('span').text()).toEqual('0');
      expect(wrapper.find('button').first().is('.selected')).toBeFalsy();
    });
    test('Кнопка "осталось" имеет текст = 2 и не имеет класс "selected"', ()=> {
      expect(wrapper.find('button').at('1').find('span').text()).toEqual('2');
      expect(wrapper.find('button').at('1').is('.selected')).toBeFalsy();
    });
  })

  describe('Увеличим колличество задач до 4х',()=>{
    const nextProps = {
      ...props,
      tasks: [
        {value:"Изучить React", isDone:false},
        {value:"Найти работу",isDone:false},
        {value:"Написать резюме",isDone:false},
        {value:"Сходить на собеседование",isDone:false},
      ]
    };

    const wrapper = shallow(<CalcTodo tasks={nextProps.tasks} filtered={nextProps.filtered}/>);

    test('Кнопка "все" имеет текст = 4 и класс "selected"', ()=> {
      expect(wrapper.find('button').last().find('span').text()).toEqual('4');
      expect(wrapper.find('button').last().is('.selected')).toBeTruthy();
    });
    test('Кнопка "сделано" имеет текст = 0 и не имеет класс "selected"', ()=> {
      expect(wrapper.find('button').first().find('span').text()).toEqual('0');
      expect(wrapper.find('button').first().is('.selected')).toBeFalsy();
    });
    test('Кнопка "осталось" имеет текст = 4 и не имеет класс "selected"', ()=> {
      expect(wrapper.find('button').at('1').find('span').text()).toEqual('4');
      expect(wrapper.find('button').at('1').is('.selected')).toBeFalsy();
    });
  })

  describe('Выполнено 3 задачи из 4х, фильтрация:"Завершенные"',()=>{
    const nextProps = {
      ...props,
      tasks: [
        {value:"Изучить React", isDone:true},
        {value:"Найти работу",isDone:false},
        {value:"Написать резюме",isDone:true},
        {value:"Сходить на собеседование",isDone:true},
      ],
      filtered:'Завершенные'
    };

    const wrapper = shallow(<CalcTodo tasks={nextProps.tasks} filtered={nextProps.filtered}/>);

    test('Кнопка "все" имеет текст = 4 и не имеет класс "selected"', ()=> {
      expect(wrapper.find('button').last().find('span').text()).toEqual('4');
      expect(wrapper.find('button').last().is('.selected')).toBeFalsy();
    });
    test('Кнопка "сделано" имеет текст = 3 и имеет класс "selected"', ()=> {
      expect(wrapper.find('button').first().find('span').text()).toEqual('3');
      expect(wrapper.find('button').first().is('.selected')).toBeTruthy();
    });
    test('Кнопка "осталось" имеет текст = 1 и не имеет класс "selected"', ()=> {
      expect(wrapper.find('button').at('1').find('span').text()).toEqual('1');
      expect(wrapper.find('button').at('1').is('.selected')).toBeFalsy();
    });
  })
});
