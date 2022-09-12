import { Button, Navbar, Text } from "@nextui-org/react";
import { useEffect, useState } from "react";

export default function Nav() {

    const links = [
        { name: "Inicio", href: '/', active: false },
        { name: "Entrenamientos", href: '/workouts', active: false },
        { name: "Ejercicios", href: '/excercises', active: false },
        { name: "Progreso", href: '/progress', active: false },
    ]

    const [navLinks, setNavLinks] = useState(links)

    useEffect(() => {
        setNavLinks(
            navLinks.map((link) => {
                return { ...link, active: link.href === window.location.pathname }
            })
        )
    }, []);


    return (
        <Navbar isCompact>
            <Navbar.Brand><Text size={24} weight="bold">Fitzen</Text></Navbar.Brand>
            <Navbar.Content>
                {navLinks.map((link) => (
                    <Navbar.Link isActive={link.active} activeColor={"secondary"} href={link.href}>{link.name}</Navbar.Link>
                ))}
            </Navbar.Content>
            <Navbar.Content>
                <Button flat color="primary" as="a" href="/login" size={"sm"} >Login</Button>
                <Button color="secondary" size="sm" >Sign up</Button>
            </Navbar.Content>
        </Navbar>
    )
}
