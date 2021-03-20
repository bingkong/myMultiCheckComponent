import React, {useState}  from 'react';
import  {Option} from './MultiCheck';


type Props = {
    item: Option,
    updateOption:(value : string, done: boolean)=> void,
    deleteOptionItem: (value : string)=> void,
  }

const Item: React.FunctionComponent<Props> = (props): JSX.Element => {

    const [mouse, setMouse] = useState(false)

    //鼠标移入、移出的回调
    function handleMouse(flag : boolean) {
        return ()=>{
            setMouse(flag)
        }
    }

    //勾选、取消勾选某一个todo的回调
	function handleCheck(value : string){
		return (event : React.ChangeEvent<HTMLInputElement>) => {
			props.updateOption(value ,event.target.checked)
		}
	}

    //删除一个多选项
	function handleDelete(value : string) : void{
		if(window.confirm('确定删除吗？')){
			props.deleteOptionItem(value)
		}
	}
    
    return <li style={{backgroundColor:mouse ? '#ddd' : 'white'}} onMouseEnter={handleMouse(true)} onMouseLeave={handleMouse(false)}>
            <label>
                <input type="checkbox" value={props.item.value} checked={props.item.done} onChange={handleCheck(props.item.value)}/>
                <span>{props.item.label}</span>
            </label>
            <button onClick={()=> handleDelete(props.item.value) }   className="btn btn-danger" style={{display:mouse?'block':'none'}} >删除</button>
        </li>
  }
  
export default Item;