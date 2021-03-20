import React from 'react';
import  {Option} from './MultiCheck';

type Props = {
    addOption:(option: Option)=> void,
}

const Header: React.FunctionComponent<Props> = (props): JSX.Element => {

    function handleKeyUp(event :React.KeyboardEvent<HTMLInputElement>) : void {
		//解构赋值获取keyCode,target
		const {keyCode, currentTarget} = event
		//判断是否是回车按键
		if(keyCode !== 13) return
        //添加的todo名字不能为空
		if(currentTarget.value.trim() === ''){
			alert('输入不能为空')
			return
		}
		//准备好一个optionItem对象
		const optionItem = {label:currentTarget.value,value: GetRandomNum(100,500),done:false}
        //将optionItem传递给App
        props.addOption(optionItem);
		//清空输入
		currentTarget.value = ''

    }
    /** * 生成范围随机数 * @Min 最小值 * @Max 最大值 */
    function GetRandomNum(Min :any, Max : any): string {
        var Range = Max - Min;
        var Rand = Math.random();
        return (Min + Math.round(Rand * Range))+'';
    }


    return <div className="todo-header">
            <input type="text" onKeyUp={handleKeyUp}  placeholder="请输入你的新增选项名称，按回车键确认"/>
        </div>
  }
  
export default Header;