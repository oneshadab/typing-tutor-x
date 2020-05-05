import React from "react";
import './TypingArea.css'
import SentenceBar from "./SentenceBar/SentenceBar";
import axios from "axios";

class TypingArea extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current_index: 0,
            timer_started: false,
            is_input_disabled: false,
            all_sentences: [
            ],
            typed_sentence: ''
        };
        this.initial_state = this.state;

    }

    componentDidMount() {
        console.log('mounted');
        axios.get('http://localhost:3000/sentences.json').then(
            res => {
                const all_sentences = res.data['all_sentences'];
                console.log(res.data);
                this.setState({all_sentences: all_sentences})
            }
        )
    };


    handleChange = (event) => {
        console.log(event.target);
        this.setState({typed_sentence: event.target.value}, () => this.updateUI());
    };
    updateUI = () => {
        let ci = this.state.current_index;
        let ct = this.state.typed_sentence;

        console.log(ct);
        console.log(this.state.all_sentences[ci]);
        console.log(ci);

        if (ci < this.state.all_sentences.length) {
            if (this.state.all_sentences[ci]===ct && ct.length > 0) {
                // event.target.value = "";
                this.setState({current_index: ci + 1})
                this.setState({typed_sentence: ""})
            }

        } else {
            this.setState({is_input_disabled: true, typed_sentence: ""});
            // event.target.value = "";
        }
    };

    // onEnterPress = (event) => {
    //     console.log("enter pressed");

    //     console.log('**************************');
    //     console.log(ci);
    //     console.log(ct);
    //
    //
    //     if (ci < this.state.all_sentences.length - 1) {
    //         if (this.state.all_sentences[ci].match(ct) && ct.length > 0) {
    //             console.log(this.state.all_sentences[ci]);
    //             this.setState({current_index: ci + 1})
    //             event.target.value = "";
    //
    //         }
    //
    //     } else {
    //         console.log('something went wrong');
    //         this.setState({is_input_disabled: true, typed_sentence: ""});
    //         event.target.value = "";
    //
    //
    //     }
    //
    // };
    //
    // handleKeyUp = (event) => {
    //     if (event.key === 'Enter') {
    //         // console.log(event.key)
    //         this.onEnterPress(event)
    //     }
    //     this.handleChange(event)
    //     console.log("Restart the test");
    //
    // };
    resetPage = (event) => {
        if (window.confirm("Restart the test")) {
            this.setState(this.initial_state)
            this.componentDidMount()
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
                        <SentenceBar sentence={this.state.all_sentences[this.state.current_index] || ""}
                                     written= {this.state.typed_sentence||""}/>
                        <div className={"text-center"}>
                            <input className={"default-sized-text custom-placeholder"}
                                   placeholder={"Click Here And Start To Type"}
                                   disabled={this.state.is_input_disabled}
                                   id={"typing-field"}
                                   value={this.state.typed_sentence}
                                   maxLength={55}
                                   onChange={(event) => this.handleChange(event)}/>

                        </div>
                        <div className={"text-center"}>
                            <button onClick={this.resetPage} id={"btn-reset"} className={"btn"}>RESET</button>

                        </div>


                    </div>
                </div>
            </div>
        </div>;
    }
}

export default TypingArea;