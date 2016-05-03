import { createHistory } from 'history';
import { useRouterHistory } from 'react-router';


export const browserHistory = useRouterHistory(createHistory)({basename: '/'});
