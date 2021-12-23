import React from 'react';
import BookItem from './BookItem.js';

class BookPage extends React.Component {
    render() {
        return (
            <div className='bb-item clearfix'>
                {this.props.contents.map((content, i) => (
                    <div key={'content' + i} className='content'>
                        {content.items.map((item, i) => (
                            <BookItem index={i} double={item.double} key={'item' + item.id} image={item.image ? item.image.default : ''} id={item.id} owned={item.owned} />
                        ))}
                    </div>
                ))}
            </div>
        );
    }
}

export default BookPage;