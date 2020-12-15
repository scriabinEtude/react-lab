import React from 'react'
import './intersectionObserver.css'
import { useInView } from 'react-intersection-observer'

function IntersectionObserver() {

    const THRESHOLD = [0.25, 0.5, 0.75]
    // const count = 100
    // for (var i = 0; i <= count; i++) {
    //     THRESHOLD.push(i / count)
    // }

    const [ref, inView, entry] = useInView({ threshold: THRESHOLD })

    return (
        <div ref={ref} className="inter-box">
            {entry && entry.intersectionRatio}
            <div className="inter-box-in" style={{ left: "2px", top: "2px" }}>{0}%</div>
            <div className="inter-box-in" style={{ right: "2px", top: "2px" }}>{0}%</div>
            <div className="inter-box-in" style={{ left: "2px", bottom: "2px" }}>{0}%</div>
            <div className="inter-box-in" style={{ right: "2px", bottom: "2px" }}>{0}%</div>
        </div>
    )
}

export default IntersectionObserver
