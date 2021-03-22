import React from 'react';

type Props = {
    columns: number,
    total: number,
    checkAllOptions: (isSelected: boolean)=> void,
    clearAllSelected:()=> void,
}

const Footer: React.FunctionComponent<Props> = (props): JSX.Element => {
    //check all checkbox The callback
	function handleCheckAll(event : React.ChangeEvent<HTMLInputElement>) : void{
		props.checkAllOptions(event.target.checked)
    }

    //Clear selected
    function handleClearAllDone(e: React.MouseEvent) : void {
        props.clearAllSelected();
    }
    
    return <div className="todo-footer">
            <label>
                <input type="checkbox" onChange={handleCheckAll} checked={props.columns === props.total && props.total !== 0 ? true : false}/>
            </label>
            <span>
                <span>selected({props.columns})</span> / all
            </span>
            <button onClick={handleClearAllDone} className="btn btn-danger">Clear selected</button>
        </div>
  }
  
export default Footer;