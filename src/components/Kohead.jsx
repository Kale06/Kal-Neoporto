import kohead from '../assets/ko-head.png'
import { motion, useTime, useTransform } from 'framer-motion'

export function Kohead() {
    const time = useTime();
    const peek = useTransform(time, [0, 10000], [0, 10], { clamp: false });
    
    return (
        <div style={{
            position: 'absolute',
            bottom: '0',
            left: '0',
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
        }}>
        <motion.img
         style={{
            minWidth:'350px',
            width:'27%', 
            peek
        }} src={kohead} alt="Kohead"/>
        </div>
    )
}