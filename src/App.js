import './App.css';
// import Book from './components/Book.js';
import Landing from './components/Landing.js';
import React from 'react';
// import $ from 'jquery';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      details: {
        owned: false,
        info: []
      },
      pages: [
        [
          {
            items: [{
              image: require('./images/8.jpg'),
              id: 1,
              owned: true,
              double: 'v',
              info: [
                {
                  title: 'aaaa',
                  content: 'fdklsfjflkdsj',
                  expand: false
                },
                {
                  title: 'bbfdskof',
                  content: 'ggggg',
                  expand: false
                }
              ]
            }, {
              image: require('./images/4.jpg'),
              id: 2,
              double: 'h',
              info: [
                {
                  title: 'ccccaaaa',
                  content: 'fdkldddddddsfjflkdsj',
                  expand: false
                }
              ]
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

  // This function gets a page and an id and searching for an item with the id in the given page
  // input: number page, number id
  // output: json object item
  getItem(page, id) {
    // search in one content of the page
    const search1 = this.state.pages[page][0].items.find(item => item.id === id);
    // search in second content of the page
    const search2 = this.state.pages[page][1].items.find(item => item.id === id);

    // console.log('getItem', search1, search2);

    // return if first content has the result
    if (search1)
      return search1;

    // otherwise return the second result
    return search2;
  }

  expandInfo(index) {
    const info = [];
    console.log(this.state);
    this.state.details.info.forEach((folder, i) => {
      const dupFolder = folder;
      dupFolder.expand = (i === index);
      info.push(dupFolder);
    });
    this.setState({ details: { info, owned: this.state.details.owned } })
  }

  // componentDidMount() {
  //   const script = document.createElement('script');

  //   script.src = 'js/main.js';
  //   script.async = true;

  //   document.body.appendChild(script);
  //   script.onload = () => {
  //     var wrapperSquareEl = $('.wrapper-square-element');
  //     var book = $('.bk-book');
  //     var bookRightArrow = $('.wrapper-square').find('.arrow-btn');
  //     var bookLeftArrow = $('.wrapper-square').find('.arrow-btn.left');

  //     wrapperSquareEl.on('mouseout', e => {
  //       if (e.relatedTarget &&
  //         (e.relatedTarget.classList.value === 'wrapper-vertical' ||
  //           e.relatedTarget.classList.value === 'wrapper-horizontal' ||
  //           e.relatedTarget.classList.value === 'wrapper-square')
  //         && book.hasClass('bk-viewinside')) {
  //         wrapperSquareEl.removeClass('hover');
  //         bookRightArrow.show();
  //         bookLeftArrow.show();
  //         bookRightArrow.css({
  //           'right': ''
  //         });
  //         bookLeftArrow.css({
  //           'left': ''
  //         });
  //         bookRightArrow.hide();
  //         bookLeftArrow.hide();
  //         $('.sticker').off('click');
  //       }
  //     });

  //     wrapperSquareEl.on('mousemove', () => {
  //       if (!wrapperSquareEl.hasClass('hover')) {
  //         wrapperSquareEl.addClass('hover');
  //         bookRightArrow.show();
  //         bookLeftArrow.show();
  //         requestAnimationFrame(() => {
  //           bookRightArrow.css({
  //             'right': '-50%'
  //           });
  //           bookLeftArrow.css({
  //             'left': '-50%'
  //           });
  //           $('.sticker').off('click');
  //           $('.sticker').on('click', e => {
  //             const getItemResult = this.getItem($('.bk-page .bb-bookblock>.bb-item:visible').prevAll().length, parseInt($(e.currentTarget).attr('data-id')));
  //             console.log('getItemResult', getItemResult);

  //             // Alternative info duplicating technique, change it later
  //             this.setState({
  //               details: {
  //                 owned: $(e.currentTarget).hasClass('valid'),
  //                 // info: [ ...getItemResult.info ]
  //                 info: getItemResult.info.map(data => ({ ...data }) ) 
  //               }
  //             });

  //             eval('bookDefault()');
  //             bookLeftArrow.hide();
  //             bookRightArrow.hide();

  //             const cloneSticker = $(e.currentTarget).clone();
  //             cloneSticker.addClass('valid');
  //             $(e.currentTarget).css({ 'opacity': 0 });

  //             const width = $(e.currentTarget).outerWidth();
  //             const height = $(e.currentTarget).outerHeight();
  //             const top = $(e.currentTarget).offset().top;
  //             const left = $(e.currentTarget).offset().left;
  //             const backButton = $('<span/>');
  //             backButton.addClass('note');
  //             backButton.addClass('top-right');
  //             backButton.text('back');
  //             backButton.css({ 'font-size': '20px', 'cursor': 'pointer' });
  //             backButton.on('click', () => {
  //               cloneSticker.css({
  //                 'top': top + 'px',
  //                 'left': left + 'px',
  //                 'width': width + 'px',
  //                 'height': height + 'px',
  //                 'opacity': 0
  //               });
  //               cloneSticker.on('transitionend', () => {
  //                 cloneSticker.remove();
  //                 $(e.currentTarget).css({ 'opacity': '' });
  //               });
  //               bookLeftArrow.show();
  //               bookRightArrow.show();
  //               eval('bookInside()');
  //             });
  //             cloneSticker.append(backButton);

  //             const buyContainer = $('<div/>');
  //             buyContainer.css({
  //               'position': 'absolute',
  //               'top': '15px',
  //               'left': 0,
  //               'text-align': 'center'
  //             });

  //             cloneSticker.css({
  //               'position': 'absolute',
  //               'top': top + 'px',
  //               'left': left + 'px',
  //               'width': width + 'px',
  //               'height': height + 'px',
  //               'background-position': 'center center',
  //               'background-size': 'contain',
  //               'margin': 0
  //             });

  //             cloneSticker.appendTo('body');
  //             requestAnimationFrame(() => {
  //               cloneSticker.css({
  //                 'top': '3%',
  //                 'left': '3%',
  //                 'height': '94%',
  //                 'width': '44%',
  //                 'transform': 'rotate(1deg)'
  //               });
  //             });
  //           });
  //         });
  //       }
  //     });
  //   }
  // }

  render() {
    // return <Book details={this.state.details} expandFolder={index => this.expandInfo(index)} pages={this.state.pages} />;
    return <Landing />;
  }
}

export default App;