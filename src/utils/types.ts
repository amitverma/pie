export interface Schema {
  properties?: {
    [key: string]: Record<string, any>;
  };
  required?: string[];
  type?: string;
  xml?: {
    name: string;
  };
  items?: Record<string, any>;
}

export interface Parameter {
  description: string;
  in: string;
  name: string;
  required: boolean;
  type?: string;
  schema?: Schema;
}

export interface PathProps {
  consumes?: string[];
  description?: string;
  operationId?: string;
  parameters: Parameter[];
  produces?: string[];
  responses?: {
    [key: number]: {
      description?: string;
      schema?: Record<string, any>;
    };
  };
  security?: any[];
  summary?: string;
  tags?: string[];
}

export interface APIDetailsProps {
  api: PathProps;
}

export interface RendererApiDetail {
  schema: Schema;
  keyname?: string;
}

export interface RendererType {
  parameters: Parameter[];
}
