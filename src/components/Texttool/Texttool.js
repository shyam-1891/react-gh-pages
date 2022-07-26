import React, { components } from 'react';
import H2Heading from '../Heading/H2Heading';

class Texttool extends React.Component {

    constructor(props) {
        super(); /// handle default activities first. This is how you got the props value in the class component.
        // console.log(props.demo);

        this.state = {
            title: ''
        }        
    }

    handleChange(event){
        this.setState({title: event.target.value});        
    }

    uppercase() {        
        this.setState({title: this.state.title.toUpperCase()});
    }

    lowercase() {
        this.setState({title: this.state.title.toLowerCase()});
    }

    camelcase() {
        let sentence = this.state.title.toLowerCase().split(" ");
        for(let i = 0; i< sentence.length; i++){
            sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
        }
        //document.write(sentence.join(" "));
        this.setState({title: sentence.join(" ")});
    }

    copytext() {
        navigator.clipboard.writeText(this.state.title);
    }

    removeExtraspace() {
        this.setState({title: this.state.title.replace(/\s+/g,' ')});        
    }

    wordCount(){
        var string = this.state.title;
        var length = string.split(/[^\s]+/).length - 1;
        document.getElementById('count').innerHTML = length;
    }

    render() {
        return (
            <section className='bg-white pt-120 pb-120'>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <H2Heading heading={"Text Tools"} />
                            <p>Text-Tools is a web tool to assist developers and other people in daily tasks by providing tools for manipulating text data.</p>
                            <hr />
                            <textarea 
                                className="form-control my-2" 
                                id="inputtextbox" 
                                rows="5" 
                                placeholder="Enter a text here..." 
                                value={this.state.title}
                                onChange={this.handleChange.bind(this)}
                            ></textarea>
                            <div className='btngroup'>
                                <button type="submit" className="btn btn-info btn-sm mr-2 my-2" onClick={this.uppercase.bind(this)}><strong>Uppercase</strong></button>

                                <button type="submit" className="btn btn-info btn-sm mr-2 my-2" onClick={this.lowercase.bind(this)}><strong>Lowercase</strong></button>

                                <button type="submit" className="btn btn-info btn-sm mr-2 my-2" onClick={this.camelcase.bind(this)}><strong>Camelcase</strong></button>

                                <button type="submit" className="btn btn-info btn-sm mr-2 my-2" onClick={this.copytext.bind(this)}><strong>Copy clipboard</strong></button>

                                <button type="submit" className="btn btn-info btn-sm mr-2 my-2" onClick={this.removeExtraspace.bind(this)}><strong>Remove extra spaces</strong></button>

                                
                                <button type="submit" className="btn btn-info btn-sm mr-2 my-2" onClick={this.wordCount.bind(this)}><strong>Count word</strong></button>

                            </div>
                            <h5 className="badge badge-secondary">Characters count: {this.state.title.length}</h5>

                            { this.state.title && <div><br /><h3 className='my-3'>Preview: </h3><div className="alert alert-secondary" role="alert" id="count">{this.state.title}</div></div> }

                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Texttool;
