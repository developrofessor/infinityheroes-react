import React from 'react';
import Folder from './Folder.js';

class BookCover extends React.Component {
    render() {
        return (
            <div className="bk-front">
                <div className="bk-cover">
                    <div className="options">
                        {(!this.props.details.owned) ?
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
                                <span style={{color: '#FFF'}}>The NFT is not listed yet</span>
                            </>}
                    </div>
                    <div className="folders">
                        {this.props.details.info && this.props.details.info.map((folder, i) => (
                            <Folder key={'folder' + i} onClick={() => this.props.expandFolder(i)} title={folder.title} content={folder.content} expand={folder.expand} />
                        ))}
                    </div>
                </div>
                <div className="bk-cover-back"></div>
            </div>
        );
    }
}

export default BookCover;