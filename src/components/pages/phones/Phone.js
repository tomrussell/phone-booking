import React from 'react';
import { Dialog } from '@blueprintjs/core';

import PhoneDetail from './PhoneDetail';
import PhoneDialog from './PhoneDialog';

class Phone extends React.Component {
  state = { isOpen: false };

  toggleDialog = () => this.setState(({ isOpen }) => ({ isOpen: !isOpen }));

  render() {
    const { phone } = this.props;
    const { isOpen } = this.state;

    return (
      <React.Fragment>
        <PhoneDetail onClick={this.toggleDialog} phone={phone} />
        <Dialog
          icon='open'
          title={phone.available ? 'Book Phone' : 'Return Phone'}
          onClose={this.toggleDialog}
          isOpen={isOpen}
        >
          <PhoneDialog
            available={phone.available}
            deviceName={phone.name}
            closeDialog={this.toggleDialog}
          />
        </Dialog>
      </React.Fragment>
    );
  }
}

export default Phone;
