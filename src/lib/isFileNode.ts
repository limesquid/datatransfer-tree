import type { FileNode, Node } from '../types';

const isFileNode = (entry: Node): entry is FileNode => entry.type === 'file';

export default isFileNode;
