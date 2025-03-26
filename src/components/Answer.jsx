import { useEffect,useState } from "react";
import { checkHeading,replaceHeadingStars } from "../Helper";

const Answer = ({ans,totalResult,index,type}) => {
  const [heading,setHeading] = useState(false);
  const [answers,setAnswers] = useState(ans);

  useEffect(() => {
    if(checkHeading(ans)){
      setHeading(true);
      setAnswers(replaceHeadingStars(ans))
    }
  }, [])

  return (
    <>
       {
        index===0 && totalResult>1 ? <span className="pt-2 text-3xl block text-zinc-200">{answers}</span>:
        heading?<span className="pt-2 text-lg block text-white">{answers}</span>:
        <span className={type==='q' ? 'pl-1' : 'pl-5'}>{answers}</span>
       }
    </>
  )
}

export default Answer;