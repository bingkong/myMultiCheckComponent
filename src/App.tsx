import React, {useState} from 'react';
import MultiCheck, {Option} from './MultiCheck/MultiCheck';

const defaultOptions: Option[] = [
  {label: 'aaa', value: '111',done:false},
  {label: 'bbb', value: '222',done:false},
  {label: 'ccc', value: '333',done:false},
  {label: 'ddd', value: '444',done:false},
  {label: 'eee', value: '555',done:false},
  {label: 'fff', value: '666',done:false},
  {label: 'ggg', value: '777',done:false},
  {label: 'hhh', value: '888',done:false},
  {label: 'iii', value: '999',done:false},
]

const defaultValues: string[] = [
  '333',
  '555'
]

const App: React.FunctionComponent = (): JSX.Element => {

  /** 初始化默认已经选中的 */
  defaultOptions.forEach(optionItem =>{
    if (-1 != defaultValues.indexOf(optionItem.value)){
      optionItem.done = true;
    }
  })

  //已经勾选数据的状态
  const [selectedValues, setSelectedValues] = useState<string[]>(defaultValues);
  //待选项数据 的状态
  const [optionItems, setOptionItems] = useState<Option[]>(defaultOptions);
  //已经选中数量的 状态
  const [columns, setColumns] = useState<number>(defaultValues.length);

  function onSelectedOptionsChange(options: Option[]): void {
    defaultValues.length = 0;
    options.forEach(optionItem =>{
      if (optionItem.done) {
        defaultValues.push(optionItem.value);
      }
    });
    setSelectedValues(defaultValues);
    setColumns(defaultValues.length);
  }

  /** 添加多选项 */
  function addOptionItem(item: Option) : void {
    const newOptions = [item,...optionItems];
    setOptionItems(newOptions);
  }

  /** 更新多选项的勾选状态 */
  function updateOption(value : string, done: boolean) : void{
    const newOptions = optionItems.map(item => {
      if (item.value == value) {
        return {...item,done}
      } else {
        return item;
      }
    })
    
    setOptionItems(newOptions);
    onSelectedOptionsChange(newOptions);
  }

  /** 删除待选项 */
  function deleteOptionItem(value : string) : void{
    const newOptions = optionItems.filter((optiomItem)=>{
			return optiomItem.value !== value
    })
    setOptionItems(newOptions);
    onSelectedOptionsChange(newOptions);
  }

  /** 全选或者全不选*/
  function checkAllOptions(done: boolean): void{
    const newOptions = optionItems.map((optiomItem)=>{
			return {...optiomItem,done}
		})
    //更新状态
    setOptionItems(newOptions);
    onSelectedOptionsChange(newOptions);
  }

  /** 清空已经选择的 选项*/
  function clearAllSelected(): void{
    const newOptions = optionItems.map((optiomItem)=>{
			if (optiomItem.done){
        optiomItem.done = false;
      }
      return optiomItem;
    })
    setOptionItems(newOptions);
    onSelectedOptionsChange(newOptions);
  }

  return <div>
    <h1>Multi Check Component</h1>
    <MultiCheck label='my-multi-check' options={optionItems}
                onChange={onSelectedOptionsChange}
                values={selectedValues}
                columns={columns}
                addOption={addOptionItem}
                updateOption = {updateOption}
                deleteOptionItem={deleteOptionItem}
                checkAllOptions={checkAllOptions}
                clearAllSelected={clearAllSelected}
                />
    <div>
      <h2>Current selected values:</h2>
      <div>{selectedValues.join(',')}</div>
    </div>
  </div>
}

export default App;
