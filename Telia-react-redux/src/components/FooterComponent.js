import React from 'react';
import { connect } from 'react-redux';
import guldmobil_Logo from '../img/guldmobil_2017.png';
import nojdastetvkunder_Logo from '../img/nojdastetvkunder2017.png';
import trygg_kundkontakt_2018_Logo from '../img/trygg_kundkontakt_2018.png';
import mobilsurf_snabbt_Logo from '../img/mobilsurf_snabbt.png';
import twitter from '../img/twitter.svg';
import facebook from '../img/facebook-logo-button.svg';
import youtube from '../img/youtube-symbol.svg';
import blog from '../img/blogger.svg';
import TeliaLogo from '../img/teliaLogo.svg';



export class FooterComponent extends React.Component {
    constructor() {
        super();

        this.state = {
            item: ''
        };
}

    render() {
        return (
        <div className="FooterWrapper">
            <div className="contentWrapperFooter">
                <div className="omTelia">
                    <div>OM TELIA</div>
                    <div className="links">
                        <a href="http://press.telia.se/">Press & nyheter</a>
                        <a href="https://www.telia.se/privat/om/framtidensnat">Framtidens nät </a>
                        <a href="https://www.telia.se/privat/om/integritetspolicy">Din integritet hos telia </a>
                        <a href="http://www.teliacompany.com/sv/karriar/lediga-jobb/">Jobba hos oss</a>
                        <a href="https://www.telia.se/privat/om/hallbarhet">Hållbarhet </a>
                        <a href="https://www.telia.se/privat/om/ledningen">Ledningsgrupp </a>
                        <a href="https://www.telia.se/privat/om/tekniska-krav">Om webbplatsen </a>
                    </div>
                </div>
            
                <div className="support">
                    <div>SUPPORT</div>
                    <div className="links">
                        <a href="https://www.telia.se/privat/driftinformation">Driftinformation </a>
                        <a href="https://www.telia.se/privat/support/tackningskartor">Täckningskartor </a>
                        <a href="https://www.telia.se/privat/om/surfa-sakert">Surfa säkert </a>
                        <a href="https://www.telia.se/privat/om/anmalan-overtradelser">Anmälan & överträdelser </a>
                        <a href="https://www.telia.se/privat/support/faktura">Fakturahjälp </a>
                    </div>
                </div>
            
                <div className="leverans">
                    <div>LEVERANS & KÖP</div>
                    <div className="links">
                        <a href="https://www.telia.se/privat/mitt-telia/fakturor#Betalningssatt">Ansök om autogiro/e-faktura </a>
                        <a href="https://www.telia.se/privat/mitt-telia/arenden">Följ din beställning på Mitt Telia </a>
                        <a href="https://www.telia.se/privat/support/overlatelse">Överlåtelse </a>
                        <a href="https://www.telia.se/privat/om/villkor">Villkor </a>
                        <a href="https://www.telia.se/privat/om/priser">Priser </a>
                    </div>
                </div>

                <div className="kontakt">
                    <div>KONTAKTA OSS</div>
                    <div className="links">
                        <a href="https://www.telia.se/privat/kontakt/butikerochaterforsaljare">Butiker och återförsäljare</a>
                        <a href="https://www.telia.se/foretag/kontakt">Kontakt för fastighetsägare</a>
                        <a href="https://www.telia.se/privat/kontakt/kabelskador-skanova">Kontakt vid kabelskador </a>
                        <a href="https://forum.telia.se/">Forum </a>
                    </div>
                </div>

            </div>
                <div className="logosWrapper">
                    <ul className="logosFooter">
                        <li>< a href={'//blogg.telia.se/battreaffarer/2017/03/20/arets-operator/'}><img src={guldmobil_Logo} alt="Guldmobilen" className="logo"/></a></li>
                        <li>< a href={'//www.telia.se/privat/aktuellt/2017/Oktober/telias-tv-kunder-fortfarande-nojdast'}><img src={nojdastetvkunder_Logo} alt="Sveriges Nöjdaste Privatkunder" className="logo"/></a></li>
                        <li>< a href={'//www.telia.se/privat/aktuellt/2018/Februari/telia-trygg-kundkontakt'}><img src={trygg_kundkontakt_2018_Logo} alt="Trygg kundkontakt 2018" className="logo"/></a></li>
                        <li>< a href={'//www.telia.se/privat/aktuellt/2017/Maj/telia-fortsatt-snabbast'}><img src={mobilsurf_snabbt_Logo} alt="Telia snabbast på mobilsurf i hela landet" className="logo"/></a></li>
                    </ul>
                </div>

                <div className="socialWrapper">
                    <ul className="socialFooter">
                        <li>< a href={'https://twitter.com/TeliaSverige'}><img src={twitter} alt="Följ oss_twitter" className="socialIcons"/></a></li>
                        <li>< a href={'https://facebook.com/telia'}><img src={facebook} alt="Följ oss_facebook" className="socialIcons"/></a></li>
                        <li>< a href={'http://youtube.com/teliasverige'}><img src={youtube} alt="Följ oss_youtube" className="socialIcons"/></a></li>
                        <li>< a href={'https://blogg.telia.se/smartarevardag'}><img src={blog} alt="Följ oss_blog" className="socialIcons"/></a></li> 
                    </ul>
                    <div className="teliaLogoWrapper">
                        < a href={'https://www.telia.se/privat'}><img src={TeliaLogo} alt="Hem_Logo_privat" className="teliaLogo"/></a>
                    </div>
                    <div className="footer-address"> © Telia Sverige AB 556430-0142<br/> Box 50077, 973 22 Luleå<br/> E-post: telia-info@telia.se<br/> Säte: Stockholm</div>
                </div>
        
        </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {

    };
};

const mapDispatchToProps = (dispatch) => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FooterComponent);

