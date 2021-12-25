import Typing from "react-typing-animation";

function Code(){


    return(
        <div className="code-container">
        <Typing speed={150}  className="typing" cursorClassName="cursor" loop={true} >
            <div className="code">
                <p className="code-first-line">
                    <span className="code-keyword">{"int "}</span>
                    <span className="code-function">{"main"}</span>
                    <span className="code-operator">{"(){"}</span>
                </p>
                <p className="code-second-line">
                    <span className="code-atribute">{"person "}</span>
                    <span className="code-operator">{"*"}</span>
                    <span className="code-variable">{"simon "}</span>
                    <span className="code-operator">{"= "}</span>
                    <span className="code-keyword">{"new "}</span>
                    <span className="code-function">{"person"}</span>
                    <span className="code-operator">{";"}</span>
                </p>
                <p className="code-third-line">
                    <span className="code-keyword">{"while"}</span>
                    <span className="code-operator">{"("}</span>
                    <span className="code-variable">{"simon "}</span>
                    <span className="code-operator">{"-> "}</span>
                    <span className="code-function">{"awake"}</span>
                    <span className="code-operator">{"()){"}</span>
                </p>
                <p className="code-fourth-line">
                    <span className="code-variable">{"simon "}</span>
                    <span className="code-operator">{"-> "}</span>
                    <span className="code-function">{"code"}</span>
                    <span className="code-operator">{"();"}</span>
                </p>
                <p className="code-fifth-line code-operator">{"}"}</p>
                <p className="code-sixth-line code-operator">{"}"}</p>
                <Typing.Reset delay={2000}/>
            </div>
        </Typing>
        </div>
    )

}

export default Code;