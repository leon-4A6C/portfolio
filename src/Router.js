import React from "react";
import Swipeable from 'react-swipeable'

export default class Router extends React.Component {

    scrollCount = 0;

    myrefs = {}

    constructor(props) {
        super(props);

        this.props.pages.forEach(page => {
            this.myrefs[page.path] = React.createRef();
        });
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(prevProps.location, this.props.location)

        if(this.props.location !== prevProps.location) {
            this.scrollToPath()
        }
    }

    componentDidMount() {
        this.scrollToPath()
    }

    scrollToPath() {
        console.log("scroll!!", this.myrefs[this.props.location.pathname].current.offsetTop)
        window.scrollTo({
            top: this.myrefs[this.props.location.pathname].current.offsetTop,
            behavior: "smooth"
        })
    }

    handleScroll = (e) => {
        if(this.scrollCount < 5) {
            this.scrollCount++;
            return
        }

        if(e.deltaY > 1) {
            this.pageDown()
        } else {
            this.pageUp()
        }

        this.scrollCount = 0;
    };

    pageDown = () => {

        const pages = this.props.pages.map(x => x.path);
        const current = pages.indexOf(this.props.location.pathname);
        if(current === pages.length-1)
            return
        

        this.props.history.push(pages[current+1])
    }

    pageUp = () => {
        const pages = this.props.pages.map(x => x.path);
        const current = pages.indexOf(this.props.location.pathname);
        if(current === 0)
            return

        this.props.history.push(pages[current-1])
    }

    render() {
        return (
            <div onWheel={this.handleScroll}>
                <Swipeable onSwipedUp={this.pageDown} onSwipedDown={this.pageUp}>
                    {
                        this.props.pages.map(p => (<div key={p.path} ref={this.myrefs[p.path]}><p.view /></div>))
                    }
                </Swipeable>
            </div>
        )
    }
}