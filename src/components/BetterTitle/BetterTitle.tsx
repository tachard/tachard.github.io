import { Stack, Title } from "@mantine/core";
import { ReactNode } from "react";
import classes from "./BetterTitle.module.css";

interface CustomTitleProps {
    align: 'stretch' | 'center' | 'flex-start' | 'flex-end';
    mb: number;
    order: 1 | 2 | 3 | 4 | 5 | 6;
    size: string;
    children: ReactNode;
}

export function BetterTitle({align,mb,order,size,children}:CustomTitleProps) {
    return(
        <Stack align={align} className={classes.title} pb={20} mb={mb}>
            <Title order={order} size={size}>{children}</Title>
        </Stack>
    );
}