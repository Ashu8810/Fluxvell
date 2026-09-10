import { createElement } from 'react';
import { renderToString } from 'react-dom/server';
import { FileSearch } from 'lucide-react';

console.log(renderToString(createElement(FileSearch)));
