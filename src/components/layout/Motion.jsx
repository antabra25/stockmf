import {motion, useAnimation} from "framer-motion";
import "../../assets/css/layout.css"
import {useState} from "react";



const Motion = () => {

    const control = useAnimation()

    const [show, setShow] = useState(true)
    const startAnimation = () => {

        const showFigure = {
            x: 300, rotate: 360,scale:0.5
        }
        const hideFigure = {
            x: -500,scale: 0.3
        }
        const startAction = show ? showFigure : hideFigure
        control.start(startAction)
    }

    return (
        <>

            <div className="control">
                <button onClick={(e) => startAnimation(setShow((prevState) => !prevState))}>INICIAR</button>
            </div>
            <motion.div
                initial={{x: -300}}
                animate={control}
                transition={{ease: "easeIn", duration: 0.5}}
                className="layout">

            </motion.div>
        </>
    )
}

export default Motion;
