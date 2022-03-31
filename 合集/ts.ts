/*
 * @Author: Mr.try
 * @Date: 2022-03-29 16:00:28
 */

// demo1
function $<T extends HTMLElement>(id: string): T {
  return document.getElementById(id) as T;
}

export const a = () => {
  $<HTMLInputElement>('input').value;
};


// demo2
interface API {
  '/a': {
    req: { name: string };
    res: { data1: any };
  };
  '/b': {
    req: { id: number };
    res: { data2: any };
  };
}

function get<URL extends keyof API>( url: URL, params: API[URL]['req']): Promise<API[URL]['res']> {
  return fetch(url, { body: JSON.stringify(params) }).then(res => res.json());
}

get('/a', { name:'xxx'}).then(res => res.data1);


// demo3
type AnimalType = 'cat' | 'dog' | 'frog';
interface AnimalDescription { name: string, icon: string }
const AnimalMap: Record<AnimalType, AnimalDescription> = {
  cat: { name: '猫', icon: ' '},
  dog: { name: '狗', icon: ' ' },
  frog: { name: '蛙', icon: ' ' }
};

// demo4
interface Opt{
  name:string,
  id:number
}
const mergeOptions = (options:Opt,patch:Partial<Opt>)=>{
  return {...options,...patch}
}

// demo5
const fetchOption = {
  // mode: 'same-origin' as const,
  // credentials: 'include' as const,
  mode: 'same-origin',
  credentials: 'include',
} as const

fetch('/api', fetchOption);


// demo6
type Task = {
  status: 'processing';
  progress: number;
} | {
  status: 'done';
  result: string;
};
const handleTask = (task: Task) => {
  if (task.status === 'processing') { /* Show progress. */ return; }
  if (task.status === 'done') { /* Show result. */ return; }

  //   Defense!
  // @ts-expect-error Expect `task` to be never.
  window.alert(`Wrong task status: ${task.status}! Go ask Bob!`);
};

// demo7
type Base = {
  foo: number;
  bar: number;
};

interface A extends Omit<Base, 'foo'> {
  foo: string;
};
type B = Omit<Base, 'foo'> & {
  foo: string;
};
const b:B={bar:1,foo:'xxx'}

type Simplify<T> = Pick<T, keyof T>;
type C = Simplify<B>;
const c:C={bar:1,foo:'xxx'}


// demo8
let defaultState = {
  foo: 7,
  bar: 'hello'
};

type State = typeof defaultState;

let nextState: State = {
  foo: 1,
  bar: 'world'
};

// demo9
function getState() {
  return {
      foo: 7,
      bar: 'hello'
  };
}

type State2 = ReturnType<typeof getState>;

let nextState2: State2 = {
  foo: 1,
  bar: 'world'
};