import React, { Component } from 'react';

export class NewsItem extends Component {
    

    render() {
        // eslint-disable-next-line no-unused-vars
        let {title, description, imageUrl, newsUrl} = this.props;
        return (
            <div className="my-3">
                <div className="card" style={{width: '18rem'}}>
                    <img src={!imageUrl?"http://cdn.wionews.com/sites/default/files/2022/07/28/282756-arctic-sea-ice.png":imageUrl} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark" rel="noreferrer">Read More</a>
                        </div>
                </div>
            </div>
        )
    }
}

export default NewsItem