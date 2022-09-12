import { Grid, Row } from "@nextui-org/react"
import LoginForm from "../src/components/Login"
import Nav from "../src/components/Navbar"

export default function LoginPage() {
    return (
        <>
            <Nav />
            <Row css={{ h: "calc(100vh - 4rem)" }} align="center" justify="center">
                <LoginForm />
            </Row>
        </>
    )
}