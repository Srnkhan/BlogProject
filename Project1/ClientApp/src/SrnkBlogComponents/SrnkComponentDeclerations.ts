import { ChangeEventHandler } from "react";

export interface SrnkCommonProps {
    id: string,
    name?: string,
}

export interface SrnkTextFieldPros extends SrnkCommonProps {
    Label?: string,    
    onChange: any,    
    defaultValue?:string,
}


export enum SrnkButtonColorProps {
    Primary = 0,
    Secondary = 1,

}
export interface SrnkButtonProps extends SrnkCommonProps {
    Label?: string,
    onClick: any,
    color: string,
}