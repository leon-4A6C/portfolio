import React from "react";
import scrollTo from "./scrollTo";

export default class Router extends React.Component {

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
        const prev = this.props.pages.find(x => x.slug === prevProps.match.params.slug);
        const current = this.props.pages.find(x => x.slug === this.props.match.params.slug);

        if(prev.theme !== current.theme && this.props.themeChange) {
            this.props.themeChange(current.theme);
        }
    }

    componentDidMount() {
        this.scrollToPath()
    }

    addListener() {
        window.addEventListener("scroll", this.handleScroll)
    }

    removeListener() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    scrollToPath() {
        this.removeListener()
        scrollTo(
            this.myRefs[this.props.match.params.slug].current.offsetTop,
            () => {
                setTimeout(() => {
                    this.addListener()
                }, 50)
            },
            500
        )
    }

    handleScroll = (e) => {
        const currentPage = this.myRefs[this.props.match.params.slug];
        const rect = currentPage.current.getBoundingClientRect();

        if(rect.top > 0) {
            this.pageUp();
        } else if((rect.bottom - window.innerHeight) < 0) {
            this.pageDown();
        }

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
            <div>
                {
                    this.props.pages.map(p => (<div key={p.slug} ref={this.myRefs[p.slug]}><p.view active={p.slug === this.props.match.params.slug} /></div>))
                }
            </div>
        )
    }
}