/* eslint-disable no-undef */
import React, { Component } from 'react';
import NewsItem from './NewsItem'

export class News extends Component {

    constructor() {
        super();
        console.log('Hello i am constructor from news component');
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }

    async componentDidMount() {

        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=8a12989f1131499ead382e47f6387715&page=1&pagesize=20";
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({ articles: parsedData.articles,totalResults: parsedData.totalResults });
    }

    handlePrevClick = async () => {
        console.log("Previous");
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=8a12989f1131499ead382e47f6387715&page=${this.state.page - 1}&pagesize=20`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState ({
            page: this.state.page - 1,
            articles: parsedData.articles

        })

    }

    handleNextClick = async() => {
        console.log("Next");
        
        if(this.state.page + 1 > Math.ceil(this.state.totalResults/20))
        {

        }
        else{
            
            let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=8a12989f1131499ead382e47f6387715&page=${this.state.page + 1}&pagesize=20`;
            let data = await fetch(url);
            let parsedData = await data.json();
            console.log(parsedData);
            this.setState ({
                page: this.state.page + 1,
                articles: parsedData.articles,
              
                
            })
        }
            
    }
    render() {

        return (
            <div className='container-fluid' style={{backgroundColor:'bisque'}}>
            <div className="container my-3" style={{backgroundColor:'grey'}}>
                <h1>NewsApp - Top Headlines</h1>
                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} />
                        </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between my-3 p-3">
                    <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
                    <button disabled={this.state.page>=2} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                    
                </div>
            </div>
            </div>
        )
    }
}

export default News