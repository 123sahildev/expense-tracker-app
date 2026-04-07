import { useState, useEffect } from "react"

type Props = {
    setDropDown: (value: boolean) => void;
}
export default function homeNav({ setDropDown }: Props) {
    
    const [isSlide, setSlideElement] = useState<boolean>(false);

    useEffect(() => {
        setSlideElement(true)

    }, []);

  return (
    <div className={`w-screen absolute top-0 left-0 h-auto text-center py-5 pl-5 bg-[grey] flex ${isSlide ? "translate-x-0" : "translate-x-96"}`}>
        <button onClick={() => setDropDown(false)}>close</button>
      chal raha hai
    </div>
  )
}
