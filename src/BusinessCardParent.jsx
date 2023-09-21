// component destructure syntax
import {Component} from "react";

import BusinessCardDisplay from "./BusinessCardDisplay";


class BusinessCardParent extends Component {
    constructor(){
        super();
    }

    render(){
        return(
            <div>
                <BusinessCardDisplay></BusinessCardDisplay>
            </div>
        )
    }
}









// import react from "react";
// class BlahBlah extends react.Component {
//     constructor(){
//         super();
//     }
// }