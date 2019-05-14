import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Container, ListGroup, ListGroupItem } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';
import { faPlus } from '@fortawesome/pro-regular-svg-icons';
import { faTimes } from '@fortawesome/pro-regular-svg-icons/faTimes';

class ShoppingList extends Component {
  state = {
    items: [
      { id: uuid(), label: 'Water' },
      { id: uuid(), label: 'Milk' },
      { id: uuid(), label: 'Ketchup' },
      { id: uuid(), label: 'Eggs' }
    ]
  };

  render() {
    const { items } = this.state;

    return (
      <Container>
        <Button
          color="dark"
          style={{ marginBottom: '2rem' }}
          onClick={() => {
            const label = prompt('Enter item label');
            if (label) {
              this.setState(state => ({
                items: [...state.items, { id: uuid(), label }]
              }));
            }
          }}
        >
          <FontAwesomeIcon icon={faPlus} />
        </Button>
        <ListGroup>
          <TransitionGroup className="shopping-list">
            {items.map(({ id, label }) => (
              <CSSTransition key={id} timeout={500} classNames="fade">
                <ListGroupItem>
                  <Button
                    className="remove-btn"
                    color="danger"
                    size="sm"
                    onClick={() => {
                      this.setState(state => ({
                        items: state.items.filter(item => item.id !== id)
                      }));
                    }}
                  >
                    <FontAwesomeIcon icon={faTimes} />
                  </Button>
                  {label}
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    );
  }
}

export default ShoppingList;