import React, { useEffect, useState } from 'react';
import SwaggerParser from '@apidevtools/swagger-parser';

import { HomeContainer, SplitPane, JSONEditor } from './styles';
import { useDispatch } from 'react-redux';

import JSONInput from 'react-json-editor-ajrm/index';
import locale from 'react-json-editor-ajrm/locale/en';

import RoutesLoader from 'components/RoutesLoader';
import sampledata from './sampledata';
import routes from './routes';

const HomeScreen: React.FC = () => {
  const dispatch = useDispatch();

  const [jsonObject, setJsonObject] = useState({});

  const handleJSON = async (json: Record<string, any>) => {
    if (json.jsObject) {
      try {
        let api = await SwaggerParser.validate(json.jsObject, {
          parse: {
            json: false,
          },
          dereference: {
            circular: false,
          },
          validate: {
            spec: false,
          },
        });

        setJsonObject(api);
      } catch (err) {
        console.error(err);
      }
    } else {
      setJsonObject({});
    }
  };

  useEffect(() => {
    dispatch({
      type: 'hs/setJSON',
      json: jsonObject,
    });
  }, [jsonObject]);

  useEffect(() => {
    handleJSON({
      jsObject: sampledata,
    });
  }, []);

  return (
    <HomeContainer>
      <SplitPane gap={2}>
        <JSONEditor>
          <JSONInput
            // placeholder={{ editor: 'Enter Swagger/OpenAPI JSON here' }}
            placeholder={sampledata}
            theme="dark_vscode_tribute"
            locale={locale}
            height={'100%'}
            width={'100%'}
            confirmGood={false}
            waitAfterKeyPress={2000}
            onChange={handleJSON}
          />
        </JSONEditor>

        <RoutesLoader
          routes={routes.map((route) => ({
            ...route,
            props: {},
          }))}
        />
      </SplitPane>
    </HomeContainer>
  );
};

export default HomeScreen;
