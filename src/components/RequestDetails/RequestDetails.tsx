import React from 'react';
import { Container, Typography, Flex } from 'ds';
import {
  AttributesContainer,
  AttributesListItem,
} from 'components/ResponseDetails/styles';

import { APIDetailsProps, RendererApiDetail, RendererType } from 'utils/types';

const RenderSchemaObject: React.FC<RendererApiDetail> = ({
  schema,
  keyname,
}) => {
  const properties = schema.properties;

  if (!!properties) {
    return (
      <Flex direction={'column'}>
        {keyname && (
          <Typography
            variant={'body3'}
          >{`${keyname}: [${schema.type}]`}</Typography>
        )}
        {Object.keys(properties).map((propertyName, i) => {
          const property = properties[propertyName];
          const type = property?.type;
          const RendererComponent = rendererMap[type] ?? null;

          if (!!RendererComponent) {
            return (
              <Container key={i} paddingLeft={2}>
                <RendererComponent schema={property} keyname={propertyName} />
              </Container>
            );
          } else return null;
        })}
      </Flex>
    );
  }

  return null;
};

const RenderSchemaArray: React.FC<RendererApiDetail> = ({
  schema,
  keyname,
}) => {
  const items = schema?.items;
  const type = items?.type;

  const RendererComponent = rendererMap[type] ?? null;

  if (!RendererComponent) {
    return null;
  }

  if (!!items) {
    return (
      <Flex direction={'column'}>
        {!!keyname && (
          <Typography variant={'body3'}>{`${keyname}: [array]`}</Typography>
        )}
        <RendererComponent schema={items} />
      </Flex>
    );
  }

  return null;
};

const RenderSchemaString: React.FC<RendererApiDetail> = ({
  schema,
  keyname,
}) => {
  return (
    <AttributesListItem alignItems={'flex-start'}>
      <Typography
        variant={'body3'}
      >{`${keyname}: [${schema.type}]`}</Typography>
    </AttributesListItem>
  );
};

const RenderPath: React.FC<RendererType> = ({ parameters }) => {
  return (
    <Container>
      <Typography marginBottom={1} variant={'h5'}>
        {'Parameters'}
      </Typography>

      {parameters.map((parameter, i) => {
        const type = parameter?.type;
        const RendererComponent = rendererMap[type ?? ''] ?? null;

        if (!!RendererComponent) {
          return (
            <Container key={i} paddingLeft={2}>
              <RendererComponent schema={parameter} keyname={parameter.name} />
            </Container>
          );
        } else return null;
      })}
    </Container>
  );
};

const RenderQuery: React.FC<RendererType> = ({ parameters }) => {
  return (
    <Container>
      <Typography marginBottom={1} variant={'h5'}>
        {'Query parameters'}
      </Typography>

      {parameters.map((parameter, i) => {
        const type = parameter?.type;
        const RendererComponent = rendererMap[type ?? ''] ?? null;

        if (!!RendererComponent) {
          return (
            <Container key={i} paddingLeft={2}>
              <RendererComponent schema={parameter} keyname={parameter.name} />
            </Container>
          );
        } else return null;
      })}
    </Container>
  );
};

const RenderBody: React.FC<RendererType> = ({ parameters }) => {
  return (
    <Container>
      <Typography marginBottom={1} variant={'h5'}>
        {'Body'}
      </Typography>

      {parameters.map((parameter, i) => {
        return <RenderSchemaObject key={i} schema={parameter.schema ?? {}} />;
      })}
    </Container>
  );
};

const RenderFormData: React.FC<RendererType> = ({ parameters }) => {
  return (
    <Container>
      <Typography marginBottom={1} variant={'h5'}>
        {'FormData'}
      </Typography>
      {parameters.map((parameter, i) => {
        const type = parameter?.type;
        const RendererComponent = rendererMap[type ?? ''] ?? null;

        if (!!RendererComponent) {
          return (
            <Container key={i} paddingLeft={2}>
              <RendererComponent schema={parameter} keyname={parameter.name} />
            </Container>
          );
        } else return null;
      })}
    </Container>
  );
};

const rendererMap = {
  object: RenderSchemaObject,
  string: RenderSchemaString,
  integer: RenderSchemaString,
  array: RenderSchemaArray,
};

const RequestDetails: React.FC<APIDetailsProps> = ({ api }) => {
  const parameters = api.parameters?.reduce((acc, val) => {
    acc[val?.in] = [...(acc[val?.in] ?? []), val];
    return acc;
  }, {});

  return (
    <AttributesContainer padding={2} margin={[2, 0]}>
      <Flex gap={2} direction={'column'}>
        {Object.keys(parameters).map((parameterKey, i) => {
          const parameter = parameters[parameterKey];

          if (parameterKey === 'query') {
            return <RenderQuery key={i} parameters={parameter} />;
          } else if (parameterKey === 'path') {
            return <RenderPath key={i} parameters={parameter} />;
          } else if (parameterKey === 'formData') {
            return <RenderFormData key={i} parameters={parameter} />;
          } else if (parameterKey === 'body') {
            return <RenderBody key={i} parameters={parameter} />;
          }

          return null;
        })}
      </Flex>
    </AttributesContainer>
  );
};

export default RequestDetails;
