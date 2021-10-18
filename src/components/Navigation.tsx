import React from 'react';
import { NavigationProps } from '../utils/Types';
import '../App.css';

const Navigation:React.FC<NavigationProps> = ({navigationList}) => {
    return(
        <div className="navigation" id="top-level-navigation">
            <ul>
                {
                    navigationList.map((item, i) => (
                        <li key={i} className="navigation-item" onClick={item.onClick}>{item.title}</li>
                    ))
                }
            </ul>
        </div>
    );
}

export default Navigation;