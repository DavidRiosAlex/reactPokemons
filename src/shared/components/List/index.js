import { useMemo } from 'react';
import {Collection, List, Grid, Table, Masonry} from 'react-virtualized';

const virtualizedType = (type) => {
    if (type === 'collection') return Collection;
    if (type === 'list') return List;
    if (type === 'grid') return Grid;
    if (type === 'table') return Table;
    if (type === 'masonry') return Masonry;
}

const VirtualList = ({ data=[], type='list' }) => {
    const Component = useMemo(() => virtualizedType(type), [type]);
    return <Component></Component>
};

export default List;