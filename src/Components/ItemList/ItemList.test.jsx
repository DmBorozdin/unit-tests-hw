import React from 'react';
import {shallow} from 'enzyme';
import ItemList from "./ItemList";
import List from '@material-ui/core/List';

describe('ItemList test',()=>{
  const filteredTasks = [
    {value:"Изучить React", isDone:false, isImportant: false, id:1},
    {value:"Найти работу",isDone:false, isImportant: false, id:2}
  ];
  const onClickDone = jest.fn();
  const onClickDelete = jest.fn();
  const onClickImportant = jest.fn();

  describe('Проверяем исходное сотояние',()=>{
    const wrapper = shallow(<ItemList filtered={filteredTasks} onClickDone={onClickDone} onClickDelete={onClickDelete} onClickImportant={onClickImportant}/>);
    test('Создан компонент Item',()=>{
      expect(wrapper.exists()).toBe(true);
    });
    test('Создан компонент List',()=>{
      expect(wrapper.find(List).exists()).toBe(true);
    });
    test('Создано 2 элемента списка',()=>{
      expect(wrapper.find('li')).toHaveLength(2);
    });
  });

  describe('Увеличим колличество задач до 4',()=>{
    const newFilteredTasks = [
      {value:"Изучить React", isDone:false, isImportant: false, id:1},
      {value:"Найти работу",isDone:false, isImportant: false, id:2},
      {value:"Написать резюме",isDone:false, isImportant: false, id:3},
      {value:"Сходить на собеседование",isDone:false, isImportant: false, id:4}
    ];
    const wrapper = shallow(<ItemList filtered={newFilteredTasks} onClickDone={onClickDone} onClickDelete={onClickDelete} onClickImportant={onClickImportant}/>);
    test('Создано 4 элемента списка',()=>{
      expect(wrapper.find('li')).toHaveLength(4);
    });
  });

  describe('Колличество задач = 0',()=>{
    const newFilteredTasks = [];
    const wrapper = shallow(<ItemList filtered={newFilteredTasks} onClickDone={onClickDone} onClickDelete={onClickDelete} onClickImportant={onClickImportant}/>);
    test('Вместо списка создана div обёртка',()=>{
      expect(wrapper.find('.ItemListWrapEmpty').exists()).toBe(true);
    });
    test('Компонент List не создан',()=>{
      expect(wrapper.find(List).exists()).toBe(false);
    });
  });
});
