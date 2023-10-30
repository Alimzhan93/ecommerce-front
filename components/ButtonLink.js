import Link from "next/link";
import styled from "styled-components";
import { ButtonStyle } from "@/components/Button";


const StyleLink = styled(Link)`
${ButtonStyle}
`


export default function ButtonLink(props){
    return(
        <StyleLink {...props}/>    
    )
}