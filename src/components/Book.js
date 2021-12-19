import React from 'react';
import BookCover from './BookCover.js';
import BookPage from './BookPage.js';

class Book extends React.Component {
    render() {
        return (
            <div className="portfolio wrapper-table">
                <div className="wrapper-vertical">
                    <div className="wrapper-horizontal">
                        <div className="wrapper-square">
                            <div className="wrapper-square-dummy"></div>
                            <div className="wrapper-square-element">
                                <div className="bk-book bk-viewinside book">
                                    <BookCover owned={!!this.props.owned} />
                                    <div className='bk-page'>
                                        <div className='bb-bookblock'>
                                            {this.props.pages.map((page, i) => (
                                                <BookPage key={'page' + i} page={i} contents={page} />
                                            ))}
                                        </div>
                                    </div>
                                    <div className="bk-right"></div>
                                    <div className="bk-left"></div>
                                    <div className="bk-top"></div>
                                    <div className="bk-bottom"></div>
                                </div>
                                <div className="arrow-btn" style={{ right: 0, top: 0, bottom: 0, display: 'none' }}></div>
						        <div className="arrow-btn left" style={{ left: 0, top: 0, bottom: 0, display: 'none' }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Book;