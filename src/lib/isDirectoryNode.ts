import type { DirectoryNode, Node } from '../types';

const isDirectoryNode = (entry: Node): entry is DirectoryNode => entry.type === 'directory';

export default isDirectoryNode;
