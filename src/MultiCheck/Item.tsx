import React, {useState}  from 'react';
import  {Option} from './MultiCheck';


type Props = {
    item: Option,
    updateOption:(value : string, done: boolean)=> void,
    deleteOptionItem: (value : string)=> void,
  }

const Item: React.FunctionComponent<Props> = (props): JSX.Element => {

    const [mouse, setMouse] = useState(false)

    //Mouse - in and mouse - out callbacks
    function handleMouse(flag : boolean) {
        return ()=>{
            setMouse(flag)
        }
    }

    //Check and uncheck callbacks for a particular 
	function handleCheck(value : string){
		return (event : React.ChangeEvent<HTMLInputElement>) => {
			props.updateOption(value ,event.target.checked)
		}
	}

    //Delete a multi-option
	function handleDelete(value : string) : void{
		if(window.confirm('Are you sure to delete it?')){
			props.deleteOptionItem(value)
		}
	}
    
    return <li style={{backgroundColor:mouse ? '#ddd' : 'white'}} onMouseEnter={handleMouse(true)} onMouseLeave={handleMouse(false)}>
            <label>
                <input type="checkbox" value={props.item.value} checked={props.item.done} onChange={handleCheck(props.item.value)}/>
                <span>{props.item.label}</span>
            </label>
            <button onClick={()=> handleDelete(props.item.value) }   className="btn btn-danger" style={{display:mouse?'block':'none'}} >Delete</button>
        </li>
  }
  
export default Item;