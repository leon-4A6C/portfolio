import React from "react";
import Swipeable from 'react-swipeable'

export default class Router extends React.Component {

    scrollForce = 0;
    lastScoll = new Date();

    myRefs = {}

    constructor(props) {
        super(props);

        this.props.pages.forEach(page => {
            this.myRefs[page.slug] = React.createRef();
        });
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.props.match.params !== prevProps.match.params) {
            this.scrollToPath()
        }
    }

    componentDidMount() {
        this.scrollToPath()
    }

    scrollToPath() {
        window.scrollTo({
            top: this.myRefs[this.props.match.params.slug].current.offsetTop,
            behavior: "smooth"
        })
    }

    handleScroll = (e) => {
        const forceThreshold = 12;
        const timeThreshold = 250;

        this.scrollForce += e.deltaY;
        const now = new Date();

        if((this.scrollForce < forceThreshold && this.scrollForce > -forceThreshold) || ((now - this.lastScoll) < timeThreshold)) {
            return
        }
        this.lastScoll = now;
        if(this.scrollForce > 0) {
            this.pageDown()
        } else {
            this.pageUp()
        }

        this.scrollForce = 0;
    };

    pageDown = () => {
        const pages = this.props.pages.map(x => x.slug);
        const current = pages.indexOf(this.props.match.params.slug);
        if(current === pages.length-1)
            return
        

        this.props.history.push(pages[current+1])
    }

    pageUp = () => {
        const pages = this.props.pages.map(x => x.slug);
        const current = pages.indexOf(this.props.match.params.slug);
        if(current === 0)
            return

        this.props.history.push(pages[current-1])
    }

    render() {
        return (
            <div onWheel={this.handleScroll}>
                <Swipeable onSwipedUp={this.pageDown} onSwipedDown={this.pageUp}>
                    {
                        this.props.pages.map(p => (<div key={p.slug} ref={this.myRefs[p.slug]}><p.view /></div>))
                    }
                </Swipeable>
            </div>
        )
    }
}