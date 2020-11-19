/// <reference types="react" />
import { Share } from './types';
import { useMethods } from './methods';
declare const Toolbar: ({ valCheck, list, flatMetas, methods, props, toolbar, }: Share & {
    methods: ReturnType<typeof useMethods>;
}) => JSX.Element;
export default Toolbar;