import { Stack, Title } from "@mantine/core";
import { ReactNode } from "react";
import classes from "./BetterTitle.module.css";

interface CustomTitleProps {
    align: 'stretch' | 'center' | 'flex-start' | 'flex-end';
    mb: number;
    pb? : number;
    order: 1 | 2 | 3 | 4 | 5 | 6;
    size: string;
    children?: ReactNode;
}

export function BetterTitle({align,mb,pb,order,size,children}:CustomTitleProps) {
    return(
        <Stack align={align} className={classes.title} pb={pb ? pb : 10} mb={mb}>
            <Title ta={align==="center" ? align : undefined} order={order} size={size}>{children}</Title>
        </Stack>
    );
}