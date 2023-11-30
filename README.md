# datatransfer-tree

Library for parsing DataTransfer entries into a structured directory tree objects.

### Installation

```bash
npm i datatransfer-tree
```

### Usage

```tsx title="Usage example"
import getEntriesTree from 'datatransfer-tree';

element.addEventListener('drop', (event) => {
  event.preventDefault();

  const { dataTransfer } = event;

  if (!dataTransfer) {
    return;
  }

  const entries = Array.from(dataTransfer.items, (item) => item.webkitGetAsEntry());

  console.log(await getEntriesTree(entries));
});
```
