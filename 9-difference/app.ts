interface IA {
  a: number;
  b: string;
}

interface IB {
  a: number;
  c: boolean;
}

let a: IA = { a: 5, b: '' };
let b: IB = { a: 10, c: true };

interface IDifference {
  b: string;
}



type UnicalKeys = Exclude<keyof IA, keyof IB>;
type Result = Pick<IA, UnicalKeys>
interface IDifference extends Result {}

function difference(a: IA , b: IB): Result {
	const result = {} as Result;
	for (const key in a) {
		if (Object.prototype.hasOwnProperty.call(a, key)) {
		// Если ключа нет в b — забираем его из a
			if (!(key in b)) {
				result[key as UnicalKeys] = a[key as UnicalKeys];
			}
		}
	}

	return result;
}

let v0: IDifference = difference(a, b);