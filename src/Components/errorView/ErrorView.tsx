import { FC } from "react";
import { TbFaceIdError } from "react-icons/tb"

import "./ErrorView.styles.css"


type Props = {
    error: string;
}

type errorType = {
    apiFail: string
    unknownBook: string
}

export const error: errorType = {
    apiFail: "apiFail",
    unknownBook: "unknownBook"

}




const ErrorView: FC<Props> = ({error}) => {

    

    return (
        <section className="errorView_mainContainer">
            <TbFaceIdError />
            <h1>{error}</h1>
            {(error === "apiFail") && <>
             <h1> Sorry, cant load our books</h1>
             <h3>Please wait a moment and reload</h3>
             </>}
             {(error === "unknownBook") && <>
             <h1> This book isn't in our shop</h1>
             <h3>can you search another one? </h3>
             </>}
        </section>
    )
}

export default ErrorView