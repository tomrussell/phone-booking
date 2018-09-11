import React from 'react';
import injectSheet from 'react-jss';
import { Card, Collapse, Button } from '@blueprintjs/core';

import { Availability, User, MetaData } from './components';

class Phone extends React.Component {
  state = { isOpen: false };

  handleClick = () => this.setState(({ isOpen }) => ({ isOpen: !isOpen }));

  render() {
    const {
      classes,
      phone: {
        name,
        available,
        bookedBy,
        bookedAt,
        ...metaData
      } = {},
    } = this.props;
    const { isOpen } = this.state;

    return (
      <Card
        key={name}
        className={classes.card}
        interactive
      >
        <div className={classes.header}>
          <h3>{name}</h3>
          <div className={classes.availability}>
            <Availability available={available} />
            { !available && <User user={bookedBy} /> }
          </div>
        </div>
        <div className={classes.body}>
          <Button
            icon={isOpen ? 'chevron-up' : 'chevron-down'}
            text='Details'
            minimal
            onClick={this.handleClick}
          />
          <Collapse isOpen={isOpen}>
            <MetaData data={metaData} />
          </Collapse>
        </div>
      </Card>
    );
  }
}


export default injectSheet(
  () => ({
    card: {
      marginBottom: '20px',
      display: 'flex',
      flexDirection: 'column',
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    availability: {
      display: 'flex',
      alignItems: 'center',
    },
  }),
)(Phone);
