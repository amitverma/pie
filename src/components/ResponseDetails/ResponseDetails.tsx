import React from 'react';
import { Container, Typography, Flex } from 'ds';
import { AttributesContainer, AttributesListItem } from './styles';
import { APIDetailsProps, RendererApiDetail } from 'utils/types';

interface ResponseProps {
  response: Record<string, any>;
  responseCode: string;
}

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

const RenderResponse: React.FC<ResponseProps> = ({
  response,
  responseCode,
}) => {
  const schema = response?.schema;
  const type = schema?.type;
  const RendererComponent = rendererMap[type] ?? null;

  return (
    <Container>
      <Typography marginBottom={1} variant={'h5'}>
        {responseCode}
      </Typography>

      <Typography marginBottom={1} variant={'body3'}>
        {response?.description}
      </Typography>

      {RendererComponent && <RendererComponent schema={schema} />}
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
  return (
    <AttributesContainer padding={2} margin={[2, 0]}>
      <Flex gap={2} direction={'column'}>
        {!!api.responses &&
          Object.keys(api.responses).map((responseKey, i) => {
            const response = api.responses?.[responseKey];

            return (
              <RenderResponse
                key={i}
                response={response}
                responseCode={responseKey}
              />
            );
          })}
      </Flex>
    </AttributesContainer>
  );
};

export default RequestDetails;
