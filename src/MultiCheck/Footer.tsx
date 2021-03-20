import React from 'react';

type Props = {
    columns: number,
    total: number,
    checkAllOptions: (isSelected: boolean)=> void,
    clearAllSelected:()=> void,
}

const Footer: React.FunctionComponent<Props> = (props): JSX.Element => {
    //全选checkbox的回调
	function handleCheckAll(event : React.ChangeEvent<HTMLInputElement>) : void{
		props.checkAllOptions(event.target.checked)
    }

    //清除已选项
    function handleClearAllDone(e: React.MouseEvent) : void {
        props.clearAllSelected();
    }
    
    return <div className="todo-footer">
            <label>
                <input type="checkbox" onChange={handleCheckAll} checked={props.columns === props.total && props.total !== 0 ? true : false}/>
            </label>
            <span>
                <span>已选择({props.columns})</span> / 全部
            </span>
            <button onClick={handleClearAllDone} className="btn btn-danger">清除已选项</button>
        </div>
  }
  
export default Footer;