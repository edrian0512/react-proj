import React, { Component } from 'react'


export class ImageCard extends Component {
    constructor(props) {
        super(props)
        this.state = { spans: 0 }
        this.imageRef = React.createRef()
    }
    setSpans = () => {
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height / 10) //ceil round up decimals automatically
        this.setState({ spans })
        // console.log(this.imageRef.current.clientHeight)
    }


    componentDidMount() {
        // console.log(this.imageRef) 
        this.imageRef.current.addEventListener('load', this.setSpans);
    }
    render() {
        const { desciption, urls } = this.props.image
        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}`}}>

                <img src={urls.regular} alt={desciption} ref={this.imageRef} />

            </div>
        )
    }
}

export default ImageCard