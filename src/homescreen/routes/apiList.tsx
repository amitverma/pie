import React from 'react';
import { useTheme } from 'styled-components';
import { useHistory } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';
import { Container, Typography, Flex } from 'ds';
import { CaretRight } from 'phosphor-react';
import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';

import { ListWrapper, Badge } from './../styles';

import Loader from 'components/Loader';

const getJSON = createSelector(
  (state: Record<string, any>) => state.homescreen,
  (homescreen) => homescreen.json,
);

const APIList: React.FC<RouteComponentProps> = () => {
  const json = useSelector(getJSON);

  const theme = useTheme();
  const history = useHistory();
  const paths = json?.paths && Object.keys(json?.paths);

  const handleListItemClick = (
    e: React.MouseEvent,
    apiPath: string,
    apiMethod: string,
  ) => {
    history.push({
      pathname: `${apiPath}`,
      search: `?method=${apiMethod}`,
    });
  };

  if (!json) {
    return <Loader size={40} />;
  }

  return (
    <Container padding={3}>
      <Flex direction={'column'} marginBottom={4}>
        <Typography variant={'h3'}>{json?.info?.title}</Typography>
        <Typography
          color={theme.colors.textTertiary}
          marginTop={1}
          variant={'body2'}
        >
          {json?.info?.description}
        </Typography>
      </Flex>

      {paths?.map?.((url, i) => {
        const path = json?.paths?.[url];
        const pathMethods = Object.keys(path);

        return (
          <Flex direction={'column'} margin={[0, 0]} key={`${url}_${i}`}>
            {pathMethods.map((pathMethod, i) => {
              const pathObject = path[pathMethod];

              return (
                <ListWrapper
                  key={`${url}_${i}_${pathMethod}_${i}`}
                  onClick={(e) => handleListItemClick(e, url, pathMethod)}
                  alignItems={'center'}
                  padding={[2, 1]}
                >
                  <Flex gap={0.25} direction={'column'}>
                    <Flex gap={1} alignItems={'center'}>
                      <CaretRight size={12} color={theme.colors.textPrimary} />
                      <Typography
                        style={{ textTransform: 'capitalize' }}
                        variant={'body2'}
                      >
                        {pathObject?.summary}
                      </Typography>
                    </Flex>

                    <Flex marginLeft={2.5} alignItems={'center'} gap={1}>
                      <Badge padding={[0, 0.5]}>{pathMethod}</Badge>
                      <Typography
                        color={theme.colors.textSecondary}
                        variant={'body3'}
                      >
                        {url}
                      </Typography>
                    </Flex>
                  </Flex>
                </ListWrapper>
              );
            })}
          </Flex>
        );
      })}
    </Container>
  );
};

export default APIList;
