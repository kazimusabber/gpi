import React from "react";
import axios from 'axios';
import {
    Box, 
    Button,
    Container,
    TextField,
    CssBaseline,
    Typography
} from "@mui/material";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useNavigate } from "react-router-dom";

function Registration({history, location}) {
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault()
        const formData = new FormData(event.currentTarget);
        const RegistrationCredentials = {
            name: formData.get('name'),
            email: formData.get('email'),
            password: formData.get('password')
        }

        axios.post('/api/registration', RegistrationCredentials).then(function(response){
            toast("Registration Successful");
            sessionStorage.clear();
            sessionStorage.setItem("authenticated", true);
            navigate("/app/dashboard");
            
        }).catch(function (error) {
            console.log(error);
        });
    }


    return (
        <Container maxWidth={"xs"}>
            <CssBaseline/>
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                }}>
                <Card>
                    <CardContent>
                        <Typography component={"h1"} variant={"h5"} align="center">
                            Registration
                        </Typography>
                        <Box component={"form"} onSubmit={handleSubmit}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="name"
                                label="Name"
                                name="name"
                                autoComplete="name"
                                autoFocus
                            />

                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="E-mail"
                                name="email"
                                autoComplete="email"
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />

                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="confirmed"
                                label="Confirm Password"
                                type="password"
                                id="confirmpassword"
                                autoComplete="confirm-password"
                            />
                            <Button
                                fullWidth
                                variant={"outlined"}
                                type={"submit"}
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Login
                            </Button>
                        </Box>
                    </CardContent>
                </Card>
            </Box>
        </Container>
    )
}

export default Registration