import Typing from "react-typing-animation";

function Code(){


    return(
        <Typing speed={150}  cursorClassName="cursor" loop={true} >
            <p className="home-first-line">
                <span className="code-keyword">{"int "}</span>
                <span className="code-function">{"main"}</span>
                <span className="code-operator">{"(){"}</span>
            </p>
            <p className="home-second-line">
                <span className="code-atribute">{"person "}</span>
                <span className="code-operator">{"*"}</span>
                <span className="code-variable">{"simon "}</span>
                <span className="code-operator">{"= "}</span>
                <span className="code-keyword">{"new "}</span>
                <span className="code-function">{"person"}</span>
                <span className="code-operator">{";"}</span>
            </p>
            <p className="home-third-line">
                <span className="code-keyword">{"while"}</span>
                <span className="code-operator">{"("}</span>
                <span className="code-variable">{"simon "}</span>
                <span className="code-operator">{"-> "}</span>
                <span className="code-function">{"awake"}</span>
                <span className="code-operator">{"()){"}</span>
            </p>
            <p className="home-fourth-line">
                <span className="code-variable">{"simon "}</span>
                <span className="code-operator">{"-> "}</span>
                <span className="code-function">{"code"}</span>
                <span className="code-operator">{"();"}</span>
            </p>
            <p className="home-fifth-line code-operator">{"}"}</p>
            <p className="home-sixth-line code-operator">{"}"}</p>
            <Typing.Reset delay={2000}/>
        </Typing>
    )

}

export default Code;