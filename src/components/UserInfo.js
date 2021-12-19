import React from 'react';
import Folder from './Folder.js';

class UserInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            library: [
                {
                    title: 'Name',
                    content: this.props.user.name,
                    expand: false
                }, {
                    title: 'Age',
                    content: 22,
                    expand: false
                }
            ]
        }
    }

    expandFolder(index) {
        const library = [];
        this.state.library.forEach((folder, i) => {
            const dupFolder = folder;
            dupFolder.expand = (i === index);
            library.push(dupFolder);
        });
        this.setState({ library })
    }

    render() {
        return (
            <div className='userInfo'>
                {this.state.library.map((folder, i) => (
                    <Folder key={'folder' + i} onClick={() => this.expandFolder(i)} title={folder.title} content={folder.content} expand={folder.expand} />
                ))}
            </div>
        );
    }
}

export default UserInfo;