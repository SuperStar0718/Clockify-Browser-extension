import * as React from 'react';
import Menu from './menu.component';
import {getEnv} from '../environment';
import {getAppTypes} from "../enums/applications-types.enum";
import {LocalStorageService} from "../services/localStorage-service";
import * as ReactDOM from "react-dom";
import Login from './login.component';

const environment = getEnv();
const localStorageService = new LocalStorageService();

class Header extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            menuOpen: false,
            mode: localStorage.getItem('mode') ? localStorage.getItem('mode') : 'timer',
            selfHosted: JSON.parse(localStorageService.get('selfHosted', false))
        };

        this.closeMenu = this.closeMenu.bind(this);
    }

    componentDidMount() {
        this.setState({
            mode: this.props.mode
        })
    }

    openMenu() {
        this.setState({
            menuOpen: true
        })
    }

    closeMenu() {
        this.setState({
            menuOpen: false
        })
    }

    changeToManualMode() {
        localStorage.setItem('mode', 'manual');
        this.setState({
            mode: 'manual'
        }, () => {
           this.closeMenu();
           this.props.changeMode('manual');
        });
    }

    changeToTimerMode() {
        localStorage.setItem('mode', 'timer');
        this.setState({
            mode: 'timer'
        }, () => {
           this.closeMenu();
           this.props.changeMode('timer');
        });
    }

    goToClockify() {
        if (localStorage.getItem('appType') === getAppTypes().DESKTOP) {
            openExternal(`${environment.home}/tracker`);
        } else {
            window.open(`${environment.home}/tracker`, '_blank');
        }
    }

    dismiss() {
        ReactDOM.unmountComponentAtNode(document.getElementById('mount'));
        ReactDOM.render(<Login/>, document.getElementById('mount'));
    }

    handleRefresh() {
        this.props.handleRefresh();
    }

    render() {
        return (
            <div>
                <div className={JSON.parse(localStorage.getItem('offline')) ? "header-offline" : "disabled"}>
                    Offline
                </div>
                <div className="header">
                    <div className="self-hosted-url__logo">
                        <a onClick={this.goToClockify.bind(this)}>
                            <span className={this.state.selfHosted ? "logo-selfhosted" : "disabled"}>
                            </span>
                            <span className={!this.state.selfHosted ? "logo" : "disabled"}>
                            </span>
                        </a>
                    </div>
                    {
                        this.props.showLogin ?
                            <div className="header__login-url">
                                <a onClick={this.dismiss.bind(this)}>Log in</a>
                            </div> :
                            <div>
                                <div onClick={this.handleRefresh.bind(this)}
                                     className={localStorage.getItem('appType') !== getAppTypes().MOBILE && this.props.showSync ?
                                         "header-sync" : "disabled"}>
                                </div>
                                <div className={this.state.menuOpen ? "invisible" : "disabled"}
                                     onClick={this.closeMenu.bind(this)}>
                                </div>
                                <div className={this.props.showActions ? "actions" : "disabled"}
                                     onClick={this.openMenu.bind(this)}>
                                    <div className="action"></div>
                                    <div className="action"></div>
                                    <div className="action"></div>
                                    <Menu
                                        isOpen={this.state.menuOpen}
                                        mode={this.state.mode}
                                        changeModeToManual={this.changeToManualMode.bind(this)}
                                        changeModeToTimer={this.changeToTimerMode.bind(this)}
                                        disableManual={this.props.disableManual}
                                        workspaceSettings={this.props.workspaceSettings}
                                    />
                                </div>
                            </div>
                    }
                </div>
                <hr/>
            </div>
        )
    }
}

export default Header;