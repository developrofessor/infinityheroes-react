import '../Landing.css';
import React from 'react';
import TypingText from './TypingText.js';
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

class Landing extends React.Component {
    constructor() {
        super();
        this.listeners = {};
        this.state = {
            showContract: false
        }
    }
    componentDidMount() {
        const documents = document.querySelector('.documents');
        const documentsContent = documents.querySelector('.content');
        documentsContent.querySelectorAll('p').forEach((p, i) => {
            p.style.transitionDelay = (0.75 + 0.25 * i) + 's';
        });

        const documentsButton = document.querySelector('#documentsButton');
        const documentsDiv = document.querySelector('.documents');

        this.listeners.documentsButtonHandler = {
            element: documentsButton,
            method: 'click',
            handler: () => {
                documentsDiv.style.display = 'block';
                requestAnimationFrame(() => {
                    documentsDiv.querySelectorAll('.content p').forEach((p, i) => {
                        p.style.transitionDelay = (0.1 + 0.25 * i) + 's';
                    });
                    documentsDiv.classList.add('show');
                });
            }
        };

        documentsButton.addEventListener('click', this.listeners.documentsButtonHandler.handler);

        const documentsBackButton = documentsDiv.querySelector('.back-button');

        this.listeners.documentsBackButtonHandler = {
            element: documentsBackButton,
            method: 'click',
            handler: () => {
                documentsDiv.querySelectorAll('.content p').forEach((p, i) => {
                    p.removeAttribute('style');
                });
                documentsDiv.classList.remove('show');
            }
        };

        documentsBackButton.addEventListener('click', this.listeners.documentsBackButtonHandler.handler);

        const swapButton = document.querySelector('#swapButton');
        this.listeners.swapButtonHandler = {
            element: swapButton,
            method: 'click',
            handler: () => {
                window.open('https://traderjoexyz.com/#/trade?inputCurrency=0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7&outputCurrency=0xdb4f2785b30143e4aee78a6c59276af1ee971044', '_blank');
            }
        };
        swapButton.addEventListener('click', this.listeners.swapButtonHandler.handler);

        eval("initializeGallery(document.querySelector('.images'))");
    }

    componentWillUnmount() {
        Object.keys(this.listeners).forEach(key => {
            const listener = this.listeners[key];
            listener.element.removeEventListener(listener.method, listener.handler);
            delete this.listeners[key];
        });
    }

    render() {
        return (
            <>
                <div className="landing">
                    <TypingText className="title" text="Infinity heroes" />
                    <div className="social-icons">
                        <div className="icon">
                            <a
                                href="https://discord.gg/5egkHVvzMg"
                                rel="noreferrer"
                                target="_blank"
                            >
                                <i className="fab fa-discord"></i>
                            </a>
                        </div>
                        <div className="icon">
                            <a
                                href="https://t.me/versetokenpresale"
                                rel="noreferrer"
                                target="_blank"
                            >
                                <i className="fab fa-telegram"></i>
                            </a>
                        </div>
                        <div
                            className="icon"
                            onClick={() => this.setState({ showContract: true })}
                        >
                            <a href="javascript:void(0)">
                                <i className="fas fa-file-contract"></i>
                            </a>
                        </div>
                    </div>
                    <div className="content">
                        <button className="btn" id="documentsButton">Documents</button>
                        <button className="btn success" id="swapButton">Swap</button>
                        <div className="images">
                            <div className="image">
                                <div style={{ backgroundImage: 'url(' + require('../images/characters/1.png').default + ')' }}></div>
                            </div>
                            <div className="image">
                                <div style={{ backgroundImage: 'url(' + require('../images/characters/2.png').default + ')' }}></div>
                            </div>
                            <div className="image">
                                <div style={{ backgroundImage: 'url(' + require('../images/characters/3.png').default + ')' }}></div>
                            </div>
                            <div className="image">
                                <div style={{ backgroundImage: 'url(' + require('../images/characters/4.png').default + ')' }}></div>
                            </div>
                            <div className="image">
                                <div style={{ backgroundImage: 'url(' + require('../images/characters/5.png').default + ')' }}></div>
                            </div>
                            <div className="image">
                                <div style={{ backgroundImage: 'url(' + require('../images/characters/6.png').default + ')' }}></div>
                            </div>
                            <div className="image">
                                <div style={{ backgroundImage: 'url(' + require('../images/characters/7.png').default + ')' }}></div>
                            </div>
                            <div className="image">
                                <div style={{ backgroundImage: 'url(' + require('../images/characters/8.png').default + ')' }}></div>
                            </div>
                            <div className="image">
                                <div style={{ backgroundImage: 'url(' + require('../images/characters/9.png').default + ')' }}></div>
                            </div>
                            <div className="image">
                                <div style={{ backgroundImage: 'url(' + require('../images/characters/10.png').default + ')' }}></div>
                            </div>
                            <div className="image">
                                <div style={{ backgroundImage: 'url(' + require('../images/characters/11.png').default + ')' }}></div>
                            </div>
                            <div className="image">
                                <div style={{ backgroundImage: 'url(' + require('../images/characters/12.png').default + ')' }}></div>
                            </div>
                            <div className="image">
                                <div style={{ backgroundImage: 'url(' + require('../images/characters/13.png').default + ')' }}></div>
                            </div>
                            <div className="image">
                                <div style={{ backgroundImage: 'url(' + require('../images/characters/14.png').default + ')' }}></div>
                            </div>
                            <div className="image">
                                <div style={{ backgroundImage: 'url(' + require('../images/characters/15.png').default + ')' }}></div>
                            </div>
                            <div className="image">
                                <div style={{ backgroundImage: 'url(' + require('../images/characters/16.png').default + ')' }}></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="documents">
                    <div>
                        <div className="title">Documents</div>
                        <div className="content">
                            <p>Infinity Heroes are here! the 8 Heroes are coming to AVAX.</p>
                            <p>If you are able to gather a full page in the Infinity Hero comic you are able to have the physical artwork sent directly to you!</p>
                            <p>as well as be the holder of the full page in the NFT.</p>
                            <p>we will also offer Infinuty Hero merchandise in our physical shop!</p>
                            <br />
                            <p>Every new mint will be 8 NFTS at the time og each MINT</p>

                            <p><b>THE INFINITY HEROES MARKETPLACE</b> is a ecosystem created to elevate the community.</p>
                            <p>This ecosystem's core purpose and objective is to offer everyone involved a opportunity to join us in this unique journey.</p>
                            <p>This journey includes a U.I system that is originally made from us.</p>
                            <br />
                            <p><u>U.I Functionalities</u></p>
                            <p>- Original comic book NFTs.<br />
                                - Physical shop that consist handmade art canvases, T-shirts, hats, socks, sweaters, figurine heroes, mugs and more to come.<br />
                                - Verse token.<br />
                                - Farm.</p>
                            <br />
                            <p><u>Alliances</u></p>
                            <p>- Infinity Citizens<br />
                                - Infinity Stoners</p>
                            <br />
                            <p><u>Verse Token</u></p>
                            <p>- Total Supply = 5 million<br />
                                - 100K verse TOKEN'S IN PRESALE WILL BE A RATIO of 1:1. PRESALE PRICE = $1 PER VERSE TOKEN. Presale Holders will gain early access to the farm and the physical shop.<br />
                                - 10% locked supply for 4 months totaling 500k verse tokens. Once the 4 months has passed from the initial launch, 50k verse tokens will be burned and 50k verse tokens will be airdropped. 5,000 verse tokens will be given to OG holders of the Infinity Stoners collection. 5,000 verse tokens will be given to OG holders of the Infinity Citizens collection. 20,000 verse tokens will be airdropped to the whole community. 4,000 verse tokens will be airdropped to the first 8 holders of the comic book NFTs. 16,000 verse tokens will be given overtime in portions to participents in the community chats.<br />
                                - Fee free/tax free token<br />
                                - 0% farm<br />
                                - A portion of the proceedings from the physical shop will be used as a buy back mechanism.</p>
                            <br />
                            <p><u>Marketplace features</u></p>
                            <p>- Farm<br />
                                - NFTs<br />
                                - Physical Item Shop</p>
                            <br />
                            <p><b>Platform launch date: 12/20/2021</b></p>
                            <p><b>NFT launch date: 12/20/2021</b></p>
                            <p><b>Farm launch date: 12/20/2021</b></p>
                            <br />
                            <p>The VERSE TOKEN can be used on the INFINITY VERSE platform.</p>
                            <br />
                            <p>FUTURE DEVELOPING –DEX 3D VERSE AND BRIDGE</p>
                        </div>
                    </div>
                    <div className="back-button">
                        Back
                        <div className="back-icon"></div>
                    </div>
                    <div className="credit">
                        Made by <a href="https://www.instagram.com/professor.dev/" target="_blank">Professor</a>
                    </div>
                </div>
                <Modal
                    open={this.state.showContract}
                    onClose={() => this.setState({ showContract: false })}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box className="popup">
                        <h2>Contracts</h2>
                        <a href="https://snowtrace.io/token/0xdb4f2785b30143e4aee78a6c59276af1ee971044" target="_blank">
                            <i class="fas fa-file-contract"></i> Verse Token
                            Contract
                        </a>
                    </Box>
                </Modal>
            </>
        );
    }
}

export default Landing;