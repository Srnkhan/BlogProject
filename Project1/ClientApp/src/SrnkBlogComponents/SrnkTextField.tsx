import React from 'react';
import {
    TextField
} from "@material-ui/core";
import { SrnkTextFieldPros } from './SrnkComponentDeclerations';



export function SrnkTextField(props: SrnkTextFieldPros) {

    return (
        <>
            <TextField id={props.id} label={props.Label} variant={"standard"} onChange={props.onChange} name={props.name} defaultValue={props.defaultValue} />
        </>
    );
}