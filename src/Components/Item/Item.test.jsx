import React from 'react';
import {shallow} from 'enzyme';
import Item from "./Item";
import Checkbox from '@material-ui/core/Checkbox';
import StarRoundedIcon from '@material-ui/icons/StarRounded';
import DeleteIcon from "@material-ui/icons/Delete";

describe('Item test',()=>{
  const item = {
      value:"Изучить React",
      isDone:false,
      isImportant:false,
      id:1
  };
  const onClickDone = jest.fn();
  const onClickDelete = jest.fn();
  const onClickImportant = jest.fn();

  describe('Проверяем исходное сотояние',()=>{
    const wrapper = shallow(<Item value={item.value} isDone={item.isDone} isImportant={item.isImportant} id={item.id}/>);
    test('Создан компонент Item',()=>{
      expect(wrapper.exists()).toBe(true);
    });
    test('У div обёртки нет класса ".isImportant"',()=>{
      expect(wrapper.find('.wrapper').is('.isImportant')).toBeFalsy();
    });
    test('Создан компонент Checkbox',()=>{
      expect(wrapper.find(Checkbox).exists()).toBe(true);
    });
    test('Атрибут Checkbox "isDone" = false',()=>{
      expect(wrapper.find(Checkbox).prop('checked')).toEqual(false);
    });
    test('Создан элемент span',()=>{
      expect(wrapper.find('span').exists()).toBe(true);
    });
    test('Проверка значения value у span',()=>{
      expect(wrapper.find('span').text()).toEqual(item.value);
    });
    test('У span нет класса ".done"',()=>{
      expect(wrapper.find('span').is('.done')).toBeFalsy();
    });
    test('Создан компонент StarRoundedIcon',()=>{
      expect(wrapper.find(StarRoundedIcon).exists()).toBe(true);
    });
    test('У StarRoundedIcon нет класса ".isImportant"',()=>{
      expect(wrapper.find(StarRoundedIcon).is('.isImportant')).toBeFalsy();
    });
    test('Создан компонент DeleteIcon',()=>{
      expect(wrapper.find(DeleteIcon).exists()).toBe(true);
    });
  });

  describe('Изменим isImportant и isDone на true',()=>{
    const newItem = {
      ...item,
      isImportant:true,
      isDone:true
    };
    const wrapper = shallow(<Item value={newItem.value} isDone={newItem.isDone} isImportant={newItem.isImportant} id={newItem.id}/>);
    test('У div обёртки появился класс ".isImportant"',()=>{
      expect(wrapper.find('.wrapper').is('.isImportant')).toBeTruthy();
    });
    test('У StarRoundedIcon появился класс ".isImportant"',()=>{
      expect(wrapper.find(StarRoundedIcon).is('.isImportant')).toBeTruthy();
    });
    test('Атрибут Checkbox "isDone" = true',()=>{
      expect(wrapper.find(Checkbox).prop('checked')).toEqual(true);
    });
    test('У span появился класс ".done"',()=>{
      expect(wrapper.find('span').is('.done')).toBeTruthy();
    });
  });

  describe('Симулируем нажатия кнопок',()=>{
    const wrapper = shallow(<Item value={item.value} isDone={item.isDone} isImportant={item.isImportant} id={item.id} onClickDone={onClickDone} onClickDelete={onClickDelete} onClickImportant={onClickImportant}/>);
    test('Симулируем нажатие на компонент Checkbox, вызывается функция onClickDone с аргументом id',()=>{
      wrapper.find(Checkbox).simulate('click');
      expect(onClickDone).toHaveBeenCalled();
      expect(onClickDone).toHaveBeenCalledWith(item.id);
    });
    test('Симулируем нажатие на компонент StarRoundedIcon, вызывается функция onClickImportant с аргументом id',()=>{
      wrapper.find(StarRoundedIcon).simulate('click');
      expect(onClickImportant).toHaveBeenCalled();
      expect(onClickImportant).toHaveBeenCalledWith(item.id);
    });
    test('Симулируем нажатие на компонент DeleteIcon, вызывается функция onClickDelete с аргументом id',()=>{
      wrapper.find(DeleteIcon).simulate('click');
      expect(onClickDelete).toHaveBeenCalled();
      expect(onClickDelete).toHaveBeenCalledWith(item.id);
    });
  });
});
