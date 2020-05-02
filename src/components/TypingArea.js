import React from "react";
import './TypingArea.css'

class TypingArea extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current_index: 0,
            timer_started: false,
            is_input_disabled: false,
            all_sentences: [
                "why did a red clever fox jump over a lazy dog ?",
                "sentence 1",
                "sentence 2"
            ],
            typed_sentence: ''
        };
        this.initial_state = this.state;

    }


    handleChange = (event) => {
        this.setState({typed_sentence: event.target.value});
        if(!this.state.timer_started){
            this.setState({timer_started: true})

        }
    };

    onEnterPress = (event) => {
        console.log("enter pressed");
        let ci = this.state.current_index;
        let ct = this.state.typed_sentence;
        if (ci < this.state.all_sentences.length - 1) {
            if (this.state.all_sentences[ci].match(ct)) {
                console.log(event.target.value)
                this.setState({current_index: ci + 1})
                event.target.value = "";

            }

        } else {
            this.setState({is_input_disabled: true, typed_sentence: ""});
            event.target.value = "";


        }

    };

    handleKeyUp = (event) => {
        if (event.key === 'Enter') {
            // console.log(event.key)
            this.onEnterPress(event)
        }
        this.handleChange(event)
        console.log("Restart the test");

    };
    resetPage = (event) => {
        if (window.confirm("Restart the test")) {
            this.setState(this.initial_state)
        }


    };


    render() {
        return <div className={"container-fluid"}>
            <div className={"row"}>
                <div className={"col-12"} id={"something"}>
                    <div className={""}>
                        <div style={{
                        minHeight: '60px'
                    }} className={"default-sized-text"}>
                    </div>
                        <div id={"current-text"} className={"default-sized-text"}>
                            {this.state.all_sentences[this.state.current_index]}
                        </div>
                        <div className={"text-center"}>
                            <input className={"default-sized-text"}
                                   disabled={this.state.is_input_disabled}
                                   id={"typing-field"}
                                   value={this.state.typed_sentence}
                                   maxLength={55}
                                   onChange={(event) => this.handleChange(event)}
                                   onKeyDown={(event) => this.handleKeyUp(event)}/>
                            <button onClick={this.resetPage} id={"btn-reset"} className={"btn"}>RESET</button>

                        </div>



                    </div>
                </div>
            </div>
        </div>;
    }
}

export default TypingArea;