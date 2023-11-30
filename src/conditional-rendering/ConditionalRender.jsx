import HigherThanFive from "./HigherThanFive"
import FiveOrLower from "./FiveOrLower"

export default function ConditionalRender(){
  // The number condition is hard-coded here, change this number
  // to a number from 0-10 to change what page is loaded when the
  // "conditional render" link is clicked
  const myNum = 3
  
  if(myNum >= 5 && myNum <= 10){
    return <HigherThanFive />
  }else if(myNum < 5 && myNum >= 0)
    return <FiveOrLower/>
}