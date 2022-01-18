import React from 'react';

class BookItem extends React.Component {
    getItemStyle() {
        const addition = this.props.index > 0 ? 0 : 1;
        if (this.props.double === 'v')
            return { gridColumnStart: this.props.index + addition, gridColumnEnd: (this.props.index + 2 + addition) };
        if (this.props.double === 'h')
            return { gridRowStart: this.props.index + addition, gridRowEnd: (this.props.index + 2 + addition) };
        return undefined;
    }

    render() {
        return (
            <div data-id={this.props.id} className={'sticker' + (this.props.owned ? ' valid' : '')} style={{ backgroundImage: `url(${this.props.image})`, ...this.getItemStyle() }}></div>
        )
    }
}

export default BookItem;