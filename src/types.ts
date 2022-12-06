import { Node } from './index';

export type NodeOrNull = Node | null;

export interface CreateOptions {
  idKey?: string;
  parentIdKey?: string;
}

export interface CreateOptionsWithCustomChildrenKey extends CreateOptions {
  childrenKey?: string;
}

export type SerializedLeaf = {
  data: any;
  id: string;
  value: string;
  label: string;
  parentId: string | null;
};


export type SerializedNode = {
  data: any;
  children: SerializedNode[] | Node[] | SerializedLeaf[];
  id: string;
  value: string;
  label: string;
  parentId: string | null;
};

export type ObjectAnyProperties = {
  [key: string]: any;
};
