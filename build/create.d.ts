import { NodeOrNull, CreateOptions, CreateOptionsWithCustomChildrenKey, ObjectAnyProperties } from './types';
import Tree from './Tree';
import Node from './Node';
export declare const createTreeArrayFromFlatArray: (data: Array<ObjectAnyProperties>, { idKey, parentIdKey, childrenKey }?: CreateOptionsWithCustomChildrenKey) => Array<ObjectAnyProperties>;
export declare const objectToNode: (obj: object, parent?: NodeOrNull, { idKey, parentIdKey, childrenKey }?: CreateOptionsWithCustomChildrenKey) => Node;
export declare const createNodes: (data: Array<ObjectAnyProperties>, parentNode?: NodeOrNull, opts?: CreateOptionsWithCustomChildrenKey) => void;
export declare const createTreeFromTreeArray: (data: Array<ObjectAnyProperties>, opts?: CreateOptionsWithCustomChildrenKey) => Tree;
export declare const createTreeFromFlatArray: (data: Array<ObjectAnyProperties>, opts?: CreateOptions) => any;
