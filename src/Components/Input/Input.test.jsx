import React from 'react';
import {shallow} from 'enzyme';
import Input from "./Input";


describe('Input test', ()=>{
  describe('Проверяем исходное состояние',()=>{
    const wrapper = shallow(<Input/>);
    test('Создан компонент Input', ()=> {
      expect(wrapper.exists()).toBe(true);
    });
    test('Создан элемент input', ()=> {
      expect(wrapper.find('input').exists()).toBe(true);
    });
    test('Создан элемент button', ()=> {
      expect(wrapper.find('button').exists()).toBe(true);
    });
    test('Поле ввода пустое', ()=> {
      expect(wrapper.find('input').text()).toEqual('');
    });
    test('Сообщения о пустом поле нет', ()=> {
      expect(wrapper.find('form').is('.inputError')).toBeFalsy();
    });
    test('Сообщения о повторе нет', ()=> {
      expect(wrapper.find('form').is('.inputRepeat')).toBeFalsy();
    });
  });

  describe('Добавляем пустое дело',()=>{
    const wrapper = shallow(<Input/>);
    const preventDefault=jest.fn();
    test('Проверяем сообщение о пустом поле', ()=> {
      wrapper.find('form').simulate('submit',{preventDefault});
      expect(wrapper.find('form').is('.inputError')).toBeTruthy();
    });
  });

  describe('Имитируем ввод текста',()=>{
    const inputValue="Написать резюме";
    const preventDefault=jest.fn();
    const onClickAdd=jest.fn();
    const wrapper = shallow(<Input onClickAdd={onClickAdd}/>);
    test('Имитируем ввод текста в поле ввода и проверяем вызов метода onClickAdd', ()=> {
      wrapper.find('input').simulate('change',{target:{value: inputValue}});
      expect(wrapper.state('inputValue')).toEqual(inputValue);
      wrapper.find('form').simulate('submit',{preventDefault});
      expect(onClickAdd).toHaveBeenCalled();
    });
  });

  describe('Имитируем ввод повторяющегося текста',()=>{
    const wrapper = shallow(<Input classNameForInputRepeat={false}/>);
    test('Текст задачи повторяется', ()=> {
      expect(wrapper.find('form').is('.inputRepeat')).toBeFalsy();
      wrapper.setProps({classNameForInputRepeat:true});
      expect(wrapper.find('form').is('.inputRepeat')).toBeTruthy();
    });
  });
});
