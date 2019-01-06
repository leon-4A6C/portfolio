import React from "react";

export default class InView extends React.Component {

    state = {
        inView : false,
    }

    view = React.createRef();

    constructor(props) {
        super(props);

        window.addEventListener("scroll", this.scrollHandler);
    }

    componentDidUpdate(x, prevState) {

        if(prevState.inView === this.state.inView)
            return;

        if(this.props.inView) {
            this.props.inView(this.state.inView);
        }

        if(this.state.inView && this.props.onEnter) {
            this.props.onEnter()
        }

        if(!this.state.inView && this.props.onLeave) {
            this.props.onLeave()
        }
    }

    scrollHandler = (e) => {
        const bounding = this.view.current.getBoundingClientRect();

        const inView = (bounding.top >= 0 &&
            bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight));

        if(inView !== this.state.inView) {
            this.setState({
                inView
            });
        }
    }

    render() {
        return (
            <div ref={this.view}>
                {this.props.children}
            </div>
        )
    }

}