import './App.css';
import Book from './components/Book.js';
import React from 'react';
import $ from 'jquery';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      details: {
        owned: false
      },
      pages: [
        [
          {
            items: [{
              image: require('./images/8.jpg'),
              id: 1,
              owned: true,
              double: 'v'
            }, {
              image: require('./images/4.jpg'),
              id: 2,
              double: 'h'
            }, {
              id: 3
            }, { id: 4 }]
          },
          {
            items: [
              { id: 7 }, { id: 8 }, { id: 9 }, { id: 10 }, { id: 11 }, { id: 12 }
            ]
          }
        ],
        [
          {
            items: [{
              image: require('./images/8.jpg'),
              id: 13
            }, {
              image: require('./images/4.jpg'),
              id: 14
            }, {
              id: 15
            }, { id: 16 }, { id: 17 }, { id: 18 }]
          },
          {
            items: [
              { id: 19 }, { id: 20 }, { id: 21 }, { id: 22 }, { id: 23 }, { id: 24 }
            ]
          }
        ]
      ]
    };
  }
  componentDidMount() {
    const script = document.createElement('script');

    script.src = 'js/main.js';
    script.async = true;

    document.body.appendChild(script);
    script.onload = () => {
      var wrapperSquareEl = $('.wrapper-square-element');
      var book = $('.bk-book');
      var bookRightArrow = $('.wrapper-square').find('.arrow-btn');
      var bookLeftArrow = $('.wrapper-square').find('.arrow-btn.left');

      wrapperSquareEl.on('mouseout', e => {
        if (e.relatedTarget &&
          (e.relatedTarget.classList.value === 'wrapper-vertical' ||
            e.relatedTarget.classList.value === 'wrapper-horizontal' ||
            e.relatedTarget.classList.value === 'wrapper-square')
          && book.hasClass('bk-viewinside')) {
          wrapperSquareEl.removeClass('hover');
          bookRightArrow.show();
          bookLeftArrow.show();
          bookRightArrow.css({
            'right': ''
          });
          bookLeftArrow.css({
            'left': ''
          });
          bookRightArrow.hide();
          bookLeftArrow.hide();
          $('.sticker').off('click');
        }
      });

      wrapperSquareEl.on('mousemove', () => {
        if (!wrapperSquareEl.hasClass('hover')) {
          wrapperSquareEl.addClass('hover');
          bookRightArrow.show();
          bookLeftArrow.show();
          requestAnimationFrame(() => {
            bookRightArrow.css({
              'right': '-50%'
            });
            bookLeftArrow.css({
              'left': '-50%'
            });
            $('.sticker').off('click');
            $('.sticker').on('click', e => {
              this.setState({
                details: {
                  owned: $(e.currentTarget).hasClass('valid')
                }
              });

              eval('bookDefault()');
              bookLeftArrow.hide();
              bookRightArrow.hide();

              const cloneSticker = $(e.currentTarget).clone();
              cloneSticker.addClass('valid');
              $(e.currentTarget).css({ 'opacity': 0 });

              const width = $(e.currentTarget).outerWidth();
              const height = $(e.currentTarget).outerHeight();
              const top = $(e.currentTarget).offset().top;
              const left = $(e.currentTarget).offset().left;
              const backButton = $('<span/>');
              backButton.addClass('note');
              backButton.addClass('top-right');
              backButton.text('back');
              backButton.css({ 'font-size': '20px', 'cursor': 'pointer' });
              backButton.on('click', () => {
                cloneSticker.css({
                  'top': top + 'px',
                  'left': left + 'px',
                  'width': width + 'px',
                  'height': height + 'px',
                  'opacity': 0
                });
                cloneSticker.on('transitionend', () => {
                  cloneSticker.remove();
                  $(e.currentTarget).css({ 'opacity': '' });
                });
                bookLeftArrow.show();
                bookRightArrow.show();
                eval('bookInside()');
              });
              cloneSticker.append(backButton);

              const buyContainer = $('<div/>');
              buyContainer.css({
                'position': 'absolute',
                'top': '15px',
                'left': 0,
                'text-align': 'center'
              });

              cloneSticker.css({
                'position': 'absolute',
                'top': top + 'px',
                'left': left + 'px',
                'width': width + 'px',
                'height': height + 'px',
                'background-position': 'center center',
                'background-size': 'contain',
                'margin': 0
              });

              cloneSticker.appendTo('body');
              requestAnimationFrame(() => {
                cloneSticker.css({
                  'top': '3%',
                  'left': '3%',
                  'height': '94%',
                  'width': '44%',
                  'transform': 'rotate(1deg)'
                });
              });
            });
          });
        }
      });
    }
  }

  render() {
    return <Book owned={this.state.details.owned} pages={this.state.pages} />;
  }
}

export default App;