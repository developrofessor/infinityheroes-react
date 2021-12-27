import React from 'react';

class TypingText extends React.Component {
    componentDidMount() {
        document.querySelectorAll('.typing').forEach(typingEl => {
            const typingText = typingEl.innerText;
            var i = 0;
            var d = Date.now();
            typingEl.innerHTML = '';
            (function type() {
                const now = Date.now();
                if (i < typingText.length) {
                    if (now - d > 75) {
                        typingEl.innerHTML += typingText[i++];
                        d = now;
                    }
                    requestAnimationFrame(type);
                }
            })();
        });
    }
    render() {
        return (
            <div className={this.props.className}>
                <div className='typing'>
                    {this.props.text}
                </div>
            </div>
        );
    }
}

export default TypingText;