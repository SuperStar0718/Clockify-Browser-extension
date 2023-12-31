import * as React from "react";
import locales from "../helpers/locales";

class WorkspaceChangeConfirmation extends React.Component {

    constructor(props) {
        super(props);

        this.state = {};
    }

    confirm() {
        this.props.confirmed();
    }

    cancel() {
        this.props.canceled();
    }

    render() {
        let txt;
        let cancelMsg = "Cancel"
        if (this.props.isChrome) {
            txt = `To access ${this.props.workspaceName} workspace, you will have to log in again ?`
        } else {
            txt = 'Workspaces on SubDomain are supported only in the Chrome extension.';
            cancelMsg = locales.OK_BTN;
        }

        return (
            <div className="workspace-change-confirmation-dialog-open">
                <div className="workspace-change-confirmation-dialog">
                    <span className="workspace-change-confirmation-dialog__question">
                        {txt}
                    </span>
                    {this.props.isChrome && <span onClick={this.confirm.bind(this)}
                            className="workspace-change-confirmation-dialog__confirmation_button">Log out</span>
                    }
                    <span onClick={this.cancel.bind(this)}
                            className="workspace-change-confirmation-dialog__cancel">{cancelMsg}</span>
                </div>
            </div>
        );
    }
}

export default WorkspaceChangeConfirmation;