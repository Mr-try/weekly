/*
 * @Author: try try418@163.com
 * @Date: 2023-08-26 22:32:29
 * @Description: 
 */

// demo1
const props: any = {}
const raise = (err: string): never => { throw new Error(err) }
const id = props?.params?.id ?? raise("No id provided")

// demo2
interface IUser {
  age: number,
  name: string
}

type ReadOnlyUser = Readonly<IUser>
type PartialUser = Partial<IUser>
type UserRecord = Record<string, IUser>
type Nullable<T> = { [P in keyof T]: T[P] | null };
let tom: ReadOnlyUser
let tony: PartialUser
tom.age
tony.age

// demo3

