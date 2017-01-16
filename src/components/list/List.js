import React, { Component } from 'react'
import { Table } from 'semantic-ui-react'

import './List.css'

class PersonalInformationList extends Component {

  renderItems(cprList, formData) {
    const translateGender = (gender) => {
      const lib = {
        male: 'Mand',
        female: 'Kvinde'
      }
      return lib[gender];
    }
    return (
       <Table striped>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell width='four'>Fulde navn</Table.HeaderCell>
            <Table.HeaderCell width='four'>Køn</Table.HeaderCell>
            <Table.HeaderCell width='four'>CPR-nummer</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {cprList.map((cprItem) =>
            <Table.Row key={cprItem}>
              <Table.Cell width='four'>{formData.firstName} {formData.lastName}</Table.Cell>
              <Table.Cell width='four'>{translateGender(formData.gender)}</Table.Cell>
              <Table.Cell width='four'>{formData.dateOfBirth}-{cprItem}</Table.Cell>
            </Table.Row>
          )}
        </Table.Body>
      </Table>
    );
  }

  render() {
    if(this.props.cprList.length > 0) {
      const items = this.renderItems(this.props.cprList, this.props.formData);
      return (
        <div className='List'>
          { items }
        </div>
      )
    } else {
      return null
    }
  }

}

export default PersonalInformationList;
