import React from 'react';
import injectSheet from 'react-jss';
import { Card, Collapse, Button } from '@blueprintjs/core';

import { Availability, User, MetaData } from './components';

class PhoneDetail extends React.Component {
  state = { isOpen: false };

  handleClick = () => this.setState(({ isOpen }) => ({ isOpen: !isOpen }));

  render() {
    const {
      classes,
      onClick,
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
        onClick={onClick}
      >
        <div className={classes.header}>
          <h3>{name}</h3>
          <div className={classes.availability}>
            <Availability available={available} />
            { !available && <User user={bookedBy} /> }
          </div>
        </div>
        <section>
          <Button
            icon={isOpen ? 'chevron-up' : 'chevron-down'}
            text='Details'
            minimal
            onClick={(e) => {
              e.stopPropagation();
              this.handleClick();
            }}
          />
          <Collapse isOpen={isOpen}>
            <MetaData data={metaData} />
          </Collapse>
        </section>
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
)(PhoneDetail);
