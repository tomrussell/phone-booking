import React from 'react';
import { Mutation } from 'react-apollo';
import { Classes, Button, FormGroup, InputGroup } from '@blueprintjs/core';

import { BOOK_PHONE, RETURN_PHONE } from '../../../data/queries';

class PhoneDialog extends React.Component {
  state = { user: '' };

  render() {
    const { available, deviceName, closeDialog } = this.props;
    const { user } = this.state;

    return (
      <Mutation
        mutation={available ? BOOK_PHONE : RETURN_PHONE}
        onCompleted={closeDialog}
      >
        {
          (handleBooking, { loading }) => (
            <React.Fragment>
              <div className={Classes.DIALOG_HEADER}>
                <h6>{deviceName}</h6>
              </div>
              <div className={Classes.DIALOG_BODY}>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleBooking({ variables: { deviceName, user } });
                  }}
                >
                  <FormGroup
                    helperText='Who is booking this device?'
                    label='User'
                    labelFor='user-input'
                    labelInfo='(required)'
                  >
                    <InputGroup
                      id='user-input'
                      className={Classes.FILL}
                      autoFocus
                      placeholder='Type your name'
                      leftIcon='person'
                      onChange={e => this.setState({ user: e.target.value })}
                    />
                  </FormGroup>
                  <Button
                    type='submit'
                    disabled={user === ''}
                    loading={loading}
                    text={available ? 'Book Phone' : 'Return Phone'}
                  />
                </form>
              </div>
            </React.Fragment>
          )
        }
      </Mutation>
    );
  }
}

export default PhoneDialog;
