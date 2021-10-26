import React, { useState } from 'react';
import { useTheme } from 'styled-components';
import { RouteComponentProps } from 'react-router';
import { useHistory } from 'react-router-dom';
import { Container, Typography, Flex } from 'ds';
import { ArrowLeft } from 'phosphor-react';
import { useSelector, useDispatch } from 'react-redux';
import { createSelector } from 'reselect';

import Loader from 'components/Loader';
import RequestDetails from 'components/RequestDetails';
import ResponseDetails from 'components/ResponseDetails';

import { Badge, BackButton } from './../styles';

const getJSON = createSelector(
  (state: Record<string, any>) => state.homescreen,
  (homescreen) => homescreen.json,
);

const APIConsole: React.FC<RouteComponentProps> = () => {
  const json = useSelector(getJSON);
  const theme = useTheme();
  const history = useHistory();

  const pathname = history.location.pathname;
  const searchParams = new URLSearchParams(document.location.search);
  const method = searchParams.get('method') ?? '';

  const api = json?.paths?.[pathname]?.[method];
  const apiUrl =
    json && `${json.schemes?.[0]}://${json.host}${json.basePath}${pathname}`;

  const handleBackClick = () => {
    history.goBack();
  };

  if (!api) {
    return <Loader size={40} />;
  }

  return (
    <Container padding={3}>
      <Flex direction={'column'} marginBottom={4}>
        <Flex gap={1} alignItems={'center'}>
          <BackButton onClick={handleBackClick}>
            <ArrowLeft size={20} weight={'bold'} />
          </BackButton>
          <Typography variant={'h3'}>{pathname}</Typography>
        </Flex>
        <Typography
          color={theme.colors.textTertiary}
          marginTop={1}
          variant={'body2'}
        >
          {api.summary}
        </Typography>

        <Flex gap={1} alignItems={'center'} marginTop={1}>
          <Badge padding={[0, 1]}>{method}</Badge>
          <Typography color={theme.colors.textSecondary} variant={'body2'}>
            {apiUrl}
          </Typography>
        </Flex>

        <Flex marginTop={5} direction={'column'}>
          <Typography variant={'h4'}>Request</Typography>
          <RequestDetails api={api ?? {}} />
        </Flex>

        <Flex marginTop={5} direction={'column'}>
          <Typography variant={'h4'}>Response</Typography>
          <ResponseDetails api={api ?? {}} />
        </Flex>
      </Flex>
    </Container>
  );
};

export default APIConsole;
