import React from 'react';
import {
    Button
} from "@material-ui/core";
import { SrnkButtonColorProps, SrnkButtonProps, SrnkTextFieldPros } from './SrnkComponentDeclerations';



export function SrnkButton(props: SrnkButtonProps) {
    const buttonColor = 'primary'
    //switch (props.color) {
    //    case SrnkButtonColorProps.Primary:
    //        buttonColor = 'primary'
    //        break;
    //}

    return (
        <>
            <Button
                color={buttonColor}
            />
        </>
    );
}