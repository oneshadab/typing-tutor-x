import React from "react";
import './SentenceBar.css'
class SentenceBar extends React.Component {
    constructor(props) {
        super(props);
    }

    renderCharSpanWise(sentence, written){

        return sentence.split("").map((v,i) => {
            if((i < written.length && v === written[i]) || !written.length)
            {
                return <span className={"correct_letter"}>{v}</span>
            }
            else
            {
                return <span className={"incorrect_letter"}>{v}</span>

            }
        });
    }

    render() {
        return <div>
            <div id={"current-text"} className={"default-sized-text"}>
                {this.renderCharSpanWise(this.props.sentence, this.props.written)}
            </div>

        </div>;
    }
}
export default SentenceBar;

//
// class Child extends React.Component {
//     constructor(props) {
//         super(props);
//     }
//
//     renderVals() {
//         return this.props.vals.map(v => {
//             return <div>{v}</div>
//         });
//     }
//
//     render() {
//         return (
//             <div>
//                 { this.renderVals() }
//             </div>
//         );
//     }
// }