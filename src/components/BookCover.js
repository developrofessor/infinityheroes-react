import React from 'react';
import Folder from './Folder.js';

class BookCover extends React.Component {
    render() {
        return (
            <div className="bk-front">
                <div className="bk-cover">
                    <div className="options">
                        {(!this.props.owned) ?
                            <>
                                <button className="btn">
                                    <div className="metamask-icon"></div>
                                    <div>Buy</div>
                                </button>
                                <button className="btn">
                                    <div>Bid</div>
                                </button>
                            </> :
                            <>
                                <button className="btn">
                                    <div>Sell</div>
                                </button>
                            </>}
                    </div>
                    <div className="folders">
                        {this.props.details && this.props.details.map((folder, i) => (
                            <Folder key={'folder' + i} onClick={() => this.expandFolder(i)} title={folder.title} content={folder.content} expand={folder.expand} />
                        ))}
                    </div>
                </div>
                <div className="bk-cover-back"></div>
            </div>
        );
    }
}

export default BookCover;