import React, { useState } from "react";
import { Card, CardContent, CardHeader } from "@mui/material";
import { Button, PageContainer } from '../globalStyle';

export const CardMain = () => {
    const [hover, setHover] = useState(false);
    return (
        <PageContainer>
            <Card style={{
                border: '1px solid #ccc',
                boxShadow: hover ? '0px 4px 10px rgba(0,0,0,0.2)' : '0px 2px 5px rgba(0,0,0,0.1)',
                borderRadius: "15px",
                transition: 'box-shadow 0.3s ease',

            }}>
                <CardHeader>
                    oii

                </CardHeader>
                <CardContent>
                    <Button
                        onClick={() =>
                            setHover(true)}>
                        Comprar
                    </Button>

                </CardContent>

            </Card>
            <h2>oi</h2>
        </PageContainer>
    )
}