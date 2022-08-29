import React from "react";

export default function Data(props) {
    const n1 = 10
    const n2 = 20
    return (
        <section>
            <p>Canal: {props.canal()}</p>
            <p>Youtube: {props.youtube}</p>
            <p>Curso: {props.curso}</p>
            <p>Soma: {`a soma de ${n1} e ${n2} é igual a ${props.soma(n1, n2)}`}</p>
        </section>
    )
}