import React, {useState, useEffect} from "react";
import './ProgressBar.css';

interface Props {
    statsData: statsDataProps;
}

interface statsDataProps {
    label: string;
    value: number;
}

const ProgressBar:React.FC<Props> = (props) => {
	const [style, setStyle] = useState({});
    const {label, value} = props.statsData || {};

    useEffect(() => {
       setTimeout(() => {
            const newStyle = {
                opacity: 1,
                width: `${value}%`
            }
            
            setStyle(newStyle);
        }, 200);
    }, []);
	
	return (
        <>
            <div className="progress">
                <div>{label}</div>
                <div>{`${value}%`}</div>
            </div>
            <div className="progress-bar">
                <div className="progress-status" style={style}>
                </div>
            </div>
        </>
	)
}

export default ProgressBar;