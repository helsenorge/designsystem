import {H1, H2, H3, H4} from './Heading';
import Image from './Image';
import {Table, TableHeader, TableRow, TableCell} from './Table';

const MDXOverride = () => <></>;

MDXOverride.H1 = H1;
MDXOverride.H2 = H2;
MDXOverride.H3 = H3;
MDXOverride.H4 = H4;
MDXOverride.Image = Image;
MDXOverride.Table = Table;
MDXOverride.TableHeader = TableHeader;
MDXOverride.TableRow = TableRow;
MDXOverride.TableCell = TableCell;

export default MDXOverride;
