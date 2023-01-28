import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardHeader
} from 'mdb-react-ui-kit';

export default function Credit() {
  return (
    <>
    <MDBCard alignment='left' className='credit'>
      <MDBCardHeader className='credit_title'><MDBCardTitle>Credit</MDBCardTitle></MDBCardHeader>
      <MDBCardBody>
      <MDBCardTitle>Performer</MDBCardTitle>
        <MDBCardText>Tigarist</MDBCardText>
        <MDBCardTitle>Writers</MDBCardTitle>
        <MDBCardText>Zulfan Rahman</MDBCardText>
        <MDBCardTitle>Producers</MDBCardTitle>
        <MDBCardText>-</MDBCardText>
        <MDBCardTitle>Source</MDBCardTitle>
        <MDBCardText>Balconist</MDBCardText>
      </MDBCardBody>
    </MDBCard>
    </>
  );
}