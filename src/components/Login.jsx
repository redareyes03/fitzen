import { Card, Divider, Input, Text, Link, Button, Grid, Checkbox } from "@nextui-org/react";
import { useState } from "react";
import { app } from "../firebase/firebase";
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

export default function LoginForm() {

    const [user, setUser] = useState('')
    const [pass, setPass] = useState('')
    const auth = getAuth(app)
    const provider = new GoogleAuthProvider();
    return (
        <Card css={{ maxW: "fit-content", px: "$4" }}>
            <Card.Header>
                <Text>Ingresa tu correo y contraseña</Text>
            </Card.Header>
            <Divider />
            <Card.Body>
                <Input
                    label="Correo"
                    css={{ mb: "$6" }}
                    onChange={({ target }) => setUser(target.value)}
                    clearable placeholder="Ingresa tu @ correo" />
                <Input
                    label="Contraseña"
                    css={{ mb: "$8" }}
                    onChange={({ target }) => setPass(target.value)}
                    clearable placeholder="Ingresa tu * contraseña" />

                <Checkbox css={{ mx: "auto" }}><Text size={14}>Recordarme</Text></Checkbox>
            </Card.Body>
            <Divider />
            <Card.Footer>
                <Grid.Container direction="column" alignItems="center">
                    <Grid css={{ mb: "$3" }} >
                        <Link href={"/user/pass_forgot"} css={{ mx: "auto" }}>
                            <Text size={14} color="secondary" >Olvidé mi contraseña</Text>
                        </Link>
                        <Link href={"/user/"} css={{ mx: "auto" }}>
                            <Text size={14} color="primary">Crear cuenta</Text>
                        </Link>
                    </Grid>
                    <Grid css={{ d: "flex", gap: 10 }}>
                        <Button color={"error"}
                            onClick={async () => {
                                const req = await signInWithPopup(auth, provider)
                                console.log(req);
                            }}
                            flat size={"xs"}>Google</Button>
                        <Button size="xs"
                            onPress={async () => {

                                try {
                                    await signInWithEmailAndPassword(auth, user, pass);
                                }
                                catch (error) {
                                    console.log(error)
                                }

                            }}

                        >Iniciar Sesión</Button>
                    </Grid>
                </Grid.Container>
            </Card.Footer>
        </Card >
    )
}