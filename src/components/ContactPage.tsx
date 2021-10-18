import React from 'react';
import { PageProps } from '../utils/Types';

const ContactPage:React.FC<PageProps> = ({title}) => {
    return (
        <h1>{title}</h1>
    )
}

export default ContactPage;