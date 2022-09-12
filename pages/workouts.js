import { Badge, Button, Col, Row, Table, Text, Tooltip } from "@nextui-org/react";
import Nav from "../src/components/Navbar";
import { BiEditAlt, BiTrashAlt } from 'react-icons/bi'
import Link from "next/link";
export default function Workout() {

    const columns = [
        { name: "Nombre", uuid: "nombre" },
        { name: "Tag", uuid: "tag" },
        { name: "Dias", uuid: "dias" },
        { name: "Frecuencia", uuid: "frecuencia" },
        { name: "Ejercicios", uuid: "ejercicios" },
        { name: "Acciones", uuid: "acciones" },
    ]

    const data = [
        {
            id: 1,
            nombre: "Espalda",
            tag: "espalda",
            dias: "Lunes, Miercoles",
            frecuencia: 2,

        },
        {
            id: 2,
            nombre: "Espalda",
            tag: "espalda",
            dias: "Lunes, Miercoles",
            frecuencia: 2,

        },
    ]


    const renderCell = (item, cellType) => {
        const colValue = item[cellType];

        switch (cellType) {
            case 'tag':
                return <Row justify="center">
                    <Badge color={"error"} >{colValue}</Badge>
                </Row>
            case 'acciones':
                return <>
                    <Row align="center" css={{ mx: "auto", width: "fit-content" }} >
                        <Col css={{ mr: "$4" }}>
                            <Tooltip placement="top" content="Editar">
                                <BiEditAlt size={20} />
                            </Tooltip>
                        </Col>
                        <Col>
                            <Tooltip content="Eliminar">
                                <BiTrashAlt color="red" size={20} />
                            </Tooltip>
                        </Col>
                    </Row>
                </>
            case 'ejercicios':
                return <Row css={{ mx: "auto", width: "fit-content" }}>
                    <Button size={"xs"} as="a" href="/">Ejercicios</Button>
                </Row>
            default:
                return <Text css={{ textAlign: "center" }}>{colValue}</Text>
        }
    }

    return (
        <>
            <Nav />
            <Row justify="center" css={{ mt: "$10" }}>
                <Table>
                    <Table.Header columns={columns} >
                        {(column) => (
                            <Table.Column align="center"
                                key={column.uuid}
                                hideHeader={column.uuid.includes('acciones') || column.uuid.includes('ejercicios')}
                            >{column.name}</Table.Column>
                        )}
                    </Table.Header>
                    <Table.Body items={data}>
                        {(item) => (
                            <Table.Row key={item.id}>
                                {(columnKey) => (
                                    <Table.Cell css={{ px: "$10" }}>{renderCell(item, columnKey)}</Table.Cell>
                                )}
                            </Table.Row>
                        )}
                    </Table.Body>
                </Table>
            </Row>
        </>
    )
}
