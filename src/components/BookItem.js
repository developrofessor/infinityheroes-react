import React from 'react';

class BookItem extends React.Component {
    getItemStyle() {
        if (this.props.double === 'v')
            return { gridColumnStart: this.props.index + 1, gridColumnEnd: (this.props.index + 3) };
        if (this.props.double === 'h')
            return { gridRowStart: this.props.index + 1, gridRowEnd: (this.props.index + 3) };
        return undefined;
    }

    render() {
        return (
            <div data-id={this.props.id} className={'sticker' + (this.props.owned ? ' valid' : '')} style={{ backgroundImage: `url(${this.props.image})`, ...this.getItemStyle() }}></div>
        )
    }
}

export default BookItem;