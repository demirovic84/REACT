import React from 'react';
import { connect } from 'react-redux';



export class MiddleComponent extends React.Component {


    render() {

        const PromoteText = (textName) => {
            if (!this.props.texts) {
                return '';
            }
            const text = this.props.texts.find(function(item) {
                return item.id === textName;
            });

            if (typeof text === 'object') {
                return text.message
            } 
            return '';
        }

        
        return (
        <div className="MiddleWrapper">
        
        <div className="phoneWrapper">
                <div className="phoneImageWrapper">
                <img className="phoneImage" src="https://teliase.smartrefill.se/web/images/iphone.png" alt="promo"/>
                </div>

                <div className="phoneTextWrapper">
                    <div className="phoneText">
                    <h1 className="phoneh1">{PromoteText('titlePromoteMobileApps')}</h1>
                    <p className="phoneP">
                        {PromoteText('infoPromoteMobileApps')}
                    </p>
                    </div>

                    <div className="phoneBtn">
                    <a href="https://play.google.com/store/apps/details?id=com.teliasonera.telia.laddarefill" target="_blank" rel="noopener noreferrer">Android</a>
                    <a href="https://itunes.apple.com/se/app/telia-ladda/id507969085" target="_blank" rel="noopener noreferrer">iPhone</a>
                    </div>
                </div>
        </div>   
        <div className="MiddleWrapperFooter">
            <div className="contentWrapper">
                <div className="kontantkort">OM KONTANKORT
                    <div className="links">
                        <a href="https://www.telia.se/privat/telefoni/abonnemang-kontantkort/product/telia-refill-startpaket">Skaffa kontantkort</a>
                        <a href="https://www.telia.se/privat/ladda/refill/registrera-refill">Registrera kontantkort </a>
                        <a href="https://www.telia.se/privat/telefoni/kontantkort">Läs mer om kontantkort </a>
                    </div>
                </div>
            
                <div className="priser">PRISER & BETALNING
                <div className="links">
                        <a href="https://www.telia.se/privat/telefoni/edr/kontantkortutomlands">Använd kontantkort utomlands </a>
                        <a href="https://www.telia.se/privat/ladda/refill/laddningscheck">Ladda med laddningscheck </a>
                        <a href="https://www.telia.se/privat/utomlands">Se utlandspriser </a>
                    </div>
                </div>
            
                <div className="ovrigt">ÖVRIGT
                <div className="links">
                        <a href="https://www.telia.se/privat/ladda/laddningar-villkor">Vilkor för våra uppladdningar </a>
                        <a href="https://www.telia.se/privat/support/info/kom-igang-med-telia-refill">Kom igång med telia kontantkort </a>
                    </div>
                </div>

            </div>
        </div> 
    </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {        
        texts: state.texts,


    };
};

export default connect(mapStateToProps)(MiddleComponent);

