import HigherThanFive from "./HigherThanFive"
import FiveOrLower from "./FiveOrLower"

export default function ConditionalRender(){
  const myNum = 3
  
  if(myNum >= 5 && myNum <= 10){
    return <HigherThanFive />
  }else if(myNum < 5 && myNum >= 0)
    return <FiveOrLower/>
}