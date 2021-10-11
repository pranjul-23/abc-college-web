import React, { useState, useEffect } from "react";
import ProgressBar from "../ProgressBar/ProgressBar";
import './WidgetInfo.css';

interface Props {
    title: string;
    widgetData: any;
    url: string;
}

const WidgetInfo:React.FC<Props> = (props) => {
    const {title, url} = props;
    const {dataSet, filter, stats} = props.widgetData.data || {};
    const {data, header} = dataSet || {};
    const [tableData, setTableData] = useState(data || []);
    const [selectedOption, setSelectedOption] = useState('Sort by Label');

    useEffect(() => {
        if (data) {
            setTableData(data || []);
        }
    });
    const handleSort = (event: any) => {
        let sortedValue;
        if (event.target.value === 'Sort by Label') {
            sortedValue = tableData.sort((a:any, b:any) => a.label > b.label ? 1 : -1);
        } else {
            sortedValue = tableData.sort((a:any, b:any) => a.value - b.value);
        }
        setSelectedOption(event.target.value);
        setTableData(sortedValue);
    }

    return (
        <div className="widget">
            <div className="widget-header">
                <h3>{title}</h3>
                <div className="widget-select-wrapper">
                    <select value={selectedOption} className="widget-select" onChange={handleSort}>
                        <option value="Sort by Label">Sort by Label</option>
                        <option value="Sort by Value">Sort by Value</option>
                    </select>
                    <div className="widget-zoom-icon">
                        <i className="fa fa-arrows-alt"></i>
                    </div>
                </div>
            </div>
            <div className="widget-wrapper">
                <div className="widget-info">
                    <h4>STATS:</h4>
                    <div className="widget-progress">
                        { stats && Object.keys(stats).map((key, index) => (
                            <ProgressBar key={stats[key] + index} statsData={stats[key]} />
                        ))}
                    </div>
                    <nav>
                        <a href={url} target="_blank">
                            <span>View API</span>
                            <span className="fa fa-arrow-right fa-lg"></span>
                        </a>
                    </nav>
                </div>
                <div className="widget-canvas">
                {filter && (
                    <div className="canvas-header">
                        <div className="canvas-header-title">
                            <a href="#">{filter.label}</a>
                        </div>
                        <div className="canvas-header-perc">{`${filter.value}%`}</div>
                    </div>
                )}
                {dataSet && (
                    <div className="table-container">
                        <table className="table">
                            <thead>
                                <tr>
                                {header.map((item: any) => 
                                    <th>{item}</th>
                                )}
                                </tr>
                            </thead>
                            <tbody>
                                {tableData.map((item: any) => (
                                    <tr style={{color: item.color}}>
                                        <td>{item.label}</td>
                                        <td>{item.value}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
                </div>
            </div>
        </div>
    )
}

export default WidgetInfo;