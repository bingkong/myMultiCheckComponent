import React from 'react';
import Item from './Item'
import  {Option} from './MultiCheck';

  
type Props = {
    options: Option[],
    updateOption:(value : string, done: boolean)=> void,
    deleteOptionItem: (value : string)=> void,
  }

const List: React.FunctionComponent<Props> = (prop : Props): JSX.Element => {
    const items = prop.options;
    return <ul className="todo-main">
            {
                items.map( option=>{
                    return <Item key ={option.value} item={option} updateOption={prop.updateOption} deleteOptionItem={prop.deleteOptionItem}></Item>
                })
			}
        </ul>
  }
  
export default List;