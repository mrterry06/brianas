import { counterSagas } from './counter';


export default function* sagas() {
  yield [
    ...counterSagas
  ];
}
