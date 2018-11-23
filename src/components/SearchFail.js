import React, { Component } from 'react';
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';

export default class SearchFail extends Component {
  render() {
    return (
      <div>
        <Popover placement="bottom" isOpen={this.props.searchFail} target="searchBar" className="popover">
          <PopoverHeader>Search Failed!</PopoverHeader>
          <PopoverBody>Please make sure you are entering a valid city or zipcode.</PopoverBody>
          <Button size="sm" className="popoverButton" onClick={() => this.props.closePopover()}>
            got it!
          </Button>
        </Popover>
      </div>
    );
  }
}
