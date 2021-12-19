import React from 'react';

class Folder extends React.Component {
    render() {
        return (
            <div onClick={() => this.props.onClick()} className={this.props.expand ? 'folder expand': 'folder'}>
                <div className='folder-title'>{this.props.title}</div>
                <div className='folder-content'>{this.props.content}</div>
            </div>
        );
    }
}

export default Folder;