import React from 'react';
import { PageProps } from '../utils/Types';

const ResumePage:React.FC<PageProps> = ({title}) => {
    return (
        <h1>{title}</h1>
    )
}

export default ResumePage;