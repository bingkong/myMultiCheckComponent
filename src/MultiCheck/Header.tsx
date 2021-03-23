import React from 'react';
import  {Option} from './MultiCheck';

type Props = {
    addOption:(option: Option)=> void,
}

const Header: React.FunctionComponent<Props> = (props): JSX.Element => {

    function handleKeyUp(event :React.KeyboardEvent<HTMLInputElement>) : void {
		const {keyCode, currentTarget} = event
		if(keyCode !== 13) return
		if(currentTarget.value.trim() === ''){
			alert('Input cannot be empty')
			return
		}
		//Have one read option object
		const optionItem = {label:currentTarget.value,value: GetRandomNum(100,500),done:false}
        //Passed to the App
        props.addOption(optionItem);
		currentTarget.value = ''

    }
    /** * Generates a range random numbe * @Min least value * @Max maximum value */
    function GetRandomNum(Min :any, Max : any): string {
        var Range = Max - Min;
        var Rand = Math.random();
        return (Min + Math.round(Rand * Range))+'';
    }


    return <div className="multi-header">
            <input type="text" onKeyUp={handleKeyUp}  placeholder="Please enter the name of your new option and press Enter to confirm"/>
        </div>
  }
  
export default Header;