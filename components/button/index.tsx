import React from 'react';
import Button from '@mui/material/Button';

interface ButtonProps {
    text: string;
    className?: string;
    textClassName?: string;
}

const CommonButton: React.FC<ButtonProps> = ({ text, className,textClassName,...props }) => {
    return (
        <Button className={className} {...props}>
            <span className={textClassName}>{text}</span>
        </Button>
    );
};

export default CommonButton;
