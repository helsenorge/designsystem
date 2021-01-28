import { useEffect, useState } from 'react';
import { globalHistory } from '@reach/router';

const anchorIds = [];

function getAllIdOccurrences(toc) {
  toc.map(item => {
    if (item.items) {
      getAllIdOccurrences(item.items);
    }
    anchorIds.push(item.url.replace('#', ''));
  });
  return anchorIds;
}

export default function useTableOfContents(queryData: any): any {
  const [tableOfContents, setTableOfContents] = useState([]);
  const [anchorIds, setAnchorIds] = useState([]);
  useEffect(() => {
    const tableOfContents = queryData.allMdx.nodes.find(node => node.frontmatter.path === globalHistory.location.pathname).tableOfContents
      .items[0].items;
    if (tableOfContents) {
      setTableOfContents(tableOfContents);
      setAnchorIds(getAllIdOccurrences(tableOfContents));
    }
  }, [queryData]);
  return [tableOfContents, anchorIds];
}
