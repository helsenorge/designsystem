import React from 'react';
import styled, { css } from 'styled-components';

interface ComponentPropsProps {
  propData: any;
}

const ComponentProps = (props: ComponentPropsProps) => {
  const data = props.propData.propData.default.props;
  return (
    <StyledTableContainer>
      <StyledTable>
        <StyledTableHead>
          <StyledTableRow>
            <StyledTableHeadColumn>Name</StyledTableHeadColumn>
            <StyledTableHeadColumn>Type</StyledTableHeadColumn>
            <StyledTableHeadColumn>Required</StyledTableHeadColumn>
            <StyledTableHeadColumn>Default value(s)</StyledTableHeadColumn>
            <StyledTableHeadColumn>Valid value(s)</StyledTableHeadColumn>
            <StyledTableHeadColumn>Description</StyledTableHeadColumn>
          </StyledTableRow>
        </StyledTableHead>
        <StyledTableBody>
          {data &&
            data.map((prop: any, index: number) => {
              return (
                <StyledTableRow key={index}>
                  <StyledTableColumn>{prop.name}</StyledTableColumn>
                  <StyledTableColumn>{prop.type}</StyledTableColumn>
                  <StyledTableColumn>{prop.require}</StyledTableColumn>
                  <StyledTableColumn>{prop.default}</StyledTableColumn>
                  <StyledTableColumn>{prop.valid.join(', ')}</StyledTableColumn>
                  <StyledTableColumn>{prop.description}</StyledTableColumn>
                </StyledTableRow>
              );
            })}
        </StyledTableBody>
      </StyledTable>
    </StyledTableContainer>
  );
};

export default ComponentProps;

const StyledTableContainer = styled('div')`
  overflow-x: auto;
`;

const StyledTable = styled('table')`
  max-width: 200rem;
  min-width: 75rem;
  text-align: left;
  border-collapse: collapse;
`;

const StyledTableHead = styled('thead')``;

const StyledTableBody = styled('tbody')``;

const StyledTableRow = styled('tr')``;

const StyledTableHeadColumn = styled('th')`
  white-space: pre-line;
  background-color: lightgray;
  padding: 0.5rem 0.75rem;
`;

const StyledTableColumn = styled('td')`
  padding: 0.5rem 0.75rem;
  white-space: pre-line;
  max-width: 40rem;
`;
