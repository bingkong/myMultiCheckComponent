import './MultiCheck.css';
import Header from './Header'
import List from'./List'
import Footer from'./Footer'

import React from 'react';

export type Option = {
  label: string,
  value: string,
  done: boolean,
}

/**
 * Notice:
 * 1. There should be a special `Select All` option with checkbox to control all passing options
 * 2. If columns > 1, the options should be placed from top to bottom in each column
 *
 * @param {string} label - the label text of this component
 * @param {Option[]} options - options
 * @param {string[]} values - default checked option values
 * @param {number} columns - default value is 1
 */
type Props = {
  label?: string,
  options: Option[],
  columns: number,
  values?: string[],
  addOption:(option: Option)=> void,
  updateOption:(value : string, done: boolean)=> void,
  deleteOptionItem: (item : string)=> void,
  checkAllOptions: (isSelected : boolean)=> void,
  clearAllSelected:()=> void,
}

const MultiCheck: React.FunctionComponent<Props> = (props): JSX.Element => {
  const {options,addOption,updateOption,deleteOptionItem} = props;
  return <div className="todo-container">
    <div className="todo-wrap">
      <Header addOption ={addOption}></Header>
      <List options = {options} updateOption={updateOption} deleteOptionItem={deleteOptionItem}></List>
      <Footer columns={props.columns} checkAllOptions={props.checkAllOptions} total={options.length} clearAllSelected={props.clearAllSelected}></Footer>
    </div>
  </div>
}

export default MultiCheck;
