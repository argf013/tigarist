/* eslint-disable react/prop-types */
import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardHeader,
} from 'mdb-react-ui-kit';

export default function Credit(props) {
  const {
    performer,
    writers,
    source,
    producers,
  } = props;
  return (
    <MDBCard alignment="left" className="credit">
      <MDBCardHeader className="credit_title"><MDBCardTitle>Credit</MDBCardTitle></MDBCardHeader>
      <MDBCardBody>
        <MDBCardTitle>Performer</MDBCardTitle>
        <MDBCardText>{performer}</MDBCardText>
        <MDBCardTitle>Writers</MDBCardTitle>
        <MDBCardText>{writers}</MDBCardText>
        <MDBCardTitle>Producers</MDBCardTitle>
        <MDBCardText>{producers}</MDBCardText>
        <MDBCardTitle>Source</MDBCardTitle>
        <MDBCardText>{source}</MDBCardText>
      </MDBCardBody>
    </MDBCard>
  );
}
